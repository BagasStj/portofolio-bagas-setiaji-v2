import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)
// raw hex in, raw hex out: keeps the painted palette exactly as written
THREE.ColorManagement.enabled = false

// rolling meadow height, shared by ground, grass, flowers and camera
const hill = (x, z) => Math.sin(x * 0.15) * 1.2 + Math.cos(z * 0.12 + x * 0.05) * 1.5 + Math.sin((x + z) * 0.3) * 0.3 - 1

// time of day keyframes: summer noon -> golden hour -> dusk
const SKY = [
  { top: '#1f7fb8', bottom: '#bfe5f0', base: '#2e7d2a', tip: '#b9e34d', ground: '#5aa832', cloud: '#ffffff', flower: '#ffffff', sun: [0.3, 0.6, -1], glow: 0.35 },
  { top: '#4f8fc4', bottom: '#f9d49a', base: '#3c6e28', tip: '#e2d45a', ground: '#7a9a38', cloud: '#ffe0bc', flower: '#f2d8b0', sun: [0.35, 0.12, -1], glow: 0.6 },
  { top: '#2b3566', bottom: '#ef9a72', base: '#243a25', tip: '#b88d5c', ground: '#4a5c34', cloud: '#e8a0a0', flower: '#a88a8a', sun: [0.4, -0.03, -1], glow: 1 },
]
const FLOWER_COLORS = ['#f6e85a', '#fffbe8', '#8fd3c7', '#f3c6b5', '#e9f27a', '#f6e85a']

const grassVert = /* glsl */ `
  uniform float uTime;
  varying float vH;
  varying float vDist;
  void main() {
    vH = uv.y;
    vec4 world = modelMatrix * instanceMatrix * vec4(position, 1.0);
    float wind = sin(uTime * 1.6 + world.x * 0.35 + world.z * 0.25) * 0.5 + sin(uTime * 2.7 + world.x * 1.3) * 0.15;
    world.x += wind * vH * vH * 0.35;
    world.z += wind * vH * vH * 0.15;
    vec4 mv = viewMatrix * world;
    vDist = -mv.z;
    gl_Position = projectionMatrix * mv;
  }
`
const grassFrag = /* glsl */ `
  uniform vec3 uBase, uTip, uFog;
  uniform float uNear, uFar;
  varying float vH;
  varying float vDist;
  void main() {
    vec3 c = mix(uBase, uTip, vH);
    gl_FragColor = vec4(mix(c, uFog, smoothstep(uNear, uFar, vDist)), 1.0);
  }
`
const skyVert = /* glsl */ `
  varying vec3 vDir;
  void main() {
    vDir = normalize(position);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`
const skyFrag = /* glsl */ `
  uniform vec3 uTop, uBottom, uSun;
  varying vec3 vDir;
  void main() {
    vec3 c = mix(uBottom, uTop, smoothstep(-0.02, 0.45, vDir.y));
    float d = max(dot(vDir, normalize(uSun)), 0.0);
    c += vec3(1.0, 0.93, 0.75) * (smoothstep(0.9985, 0.999, d) + pow(d, 60.0) * 0.35);
    gl_FragColor = vec4(c, 1.0);
  }
`
// sparkles by day, fireflies by dusk
const flyVert = /* glsl */ `
  uniform float uTime;
  attribute float aRand;
  varying float vA;
  void main() {
    vec3 p = position;
    p.x += sin(uTime * 0.5 + aRand * 20.0) * 0.6;
    p.y += sin(uTime * 0.8 + aRand * 10.0) * 0.4;
    vec4 mv = modelViewMatrix * vec4(p, 1.0);
    gl_Position = projectionMatrix * mv;
    gl_PointSize = (4.0 + aRand * 6.0) * (12.0 / -mv.z);
    vA = 0.5 + 0.5 * sin(uTime * 2.0 + aRand * 30.0);
  }
`
const flyFrag = /* glsl */ `
  uniform float uGlow;
  varying float vA;
  void main() {
    float d = length(gl_PointCoord - 0.5);
    gl_FragColor = vec4(1.0, 0.97, 0.8, smoothstep(0.5, 0.0, d) * vA * uGlow);
  }
`
// orange petals carried by the wind
const petalVert = /* glsl */ `
  uniform float uTime;
  attribute float aRand;
  varying float vRot;
  void main() {
    vec3 p = position;
    p.x = mod(p.x + uTime * (1.2 + aRand * 1.5) + 20.0, 40.0) - 20.0;
    p.y += sin(uTime * 1.3 + aRand * 12.0) * 0.6;
    p.z += cos(uTime * 0.7 + aRand * 8.0) * 0.5;
    vRot = uTime * (1.0 + aRand * 2.0) + aRand * 6.28;
    vec4 mv = modelViewMatrix * vec4(p, 1.0);
    gl_Position = projectionMatrix * mv;
    gl_PointSize = (10.0 + aRand * 10.0) * (6.0 / -mv.z);
  }
`
const petalFrag = /* glsl */ `
  varying float vRot;
  void main() {
    vec2 q = gl_PointCoord - 0.5;
    float s = sin(vRot), c = cos(vRot);
    q = mat2(c, -s, s, c) * q;
    float d = length(q * vec2(1.0, 2.6));
    if (d > 0.45) discard;
    gl_FragColor = vec4(mix(vec3(0.98, 0.62, 0.4), vec3(0.93, 0.45, 0.3), q.x + 0.5), 0.9);
  }
`

// painterly cumulus: bluish shadow silhouette, white light from the top-left, fuzzy fringe
function cloudTexture() {
  const cv = document.createElement('canvas')
  cv.width = 512
  cv.height = 320
  const g = cv.getContext('2d')
  const puffs = []
  for (let i = 0; i < 30; i++) {
    const x = 70 + Math.random() * 372
    const r = 24 + Math.random() * 46
    const top = 290 - Math.sin(((x - 70) / 372) * Math.PI) * (150 + Math.random() * 70)
    puffs.push([x, Math.min(top + r * 0.7, 290 - r * 0.4), r])
  }
  const blob = (color, dx, dy, k) => {
    g.fillStyle = color
    puffs.forEach(([x, y, r]) => { g.beginPath(); g.arc(x + dx, y + dy, r * k, 0, 7); g.fill() })
  }
  g.filter = 'blur(1.2px)'
  blob('#aebfd2', 0, 6, 1)
  blob('#d5dee8', -4, -4, 0.92)
  blob('#ffffff', -9, -13, 0.78)
  g.fillStyle = '#ffffff'
  for (let i = 0; i < 260; i++) {
    const [x, y, r] = puffs[i % puffs.length]
    const a = Math.PI + Math.random() * Math.PI
    g.beginPath()
    g.arc(x - 9 + Math.cos(a) * r * 0.8, y - 13 + Math.sin(a) * r * 0.8, 1 + Math.random() * 3, 0, 7)
    g.fill()
  }
  g.clearRect(0, 292, 512, 28)
  const tex = new THREE.CanvasTexture(cv)
  tex.anisotropy = 4
  return tex
}

export default function Scene() {
  const mount = useRef(null)

  useEffect(() => {
    const el = mount.current
    const small = innerWidth < 768
    const renderer = new THREE.WebGLRenderer({ antialias: true })
    renderer.outputColorSpace = THREE.LinearSRGBColorSpace
    renderer.setPixelRatio(Math.min(devicePixelRatio, 1.75))
    renderer.setSize(innerWidth, innerHeight)
    el.appendChild(renderer.domElement)

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(55, innerWidth / innerHeight, 0.1, 250)

    const c = (hex) => new THREE.Color(hex)
    const s = SKY[0]
    const col = Object.fromEntries(['top', 'bottom', 'base', 'tip', 'ground', 'cloud', 'flower'].map((k) => [k, c(s[k])]))
    const sun = new THREE.Vector3(...s.sun)
    scene.fog = new THREE.Fog(col.bottom, 18, 80)

    const skyMat = new THREE.ShaderMaterial({
      vertexShader: skyVert, fragmentShader: skyFrag, side: THREE.BackSide, depthWrite: false, fog: false,
      uniforms: { uTop: { value: col.top }, uBottom: { value: col.bottom }, uSun: { value: sun } },
    })
    const sky = new THREE.Mesh(new THREE.SphereGeometry(200, 32, 16), skyMat)
    scene.add(sky)

    const hemi = new THREE.HemisphereLight('#fff6e0', '#5a7a3e', 1.2)
    const dir = new THREE.DirectionalLight('#fff1d0', 1.6)
    dir.position.set(10, 20, -10)
    scene.add(hemi, dir)

    const groundGeo = new THREE.PlaneGeometry(220, 220, 160, 160).rotateX(-Math.PI / 2)
    const gp = groundGeo.attributes.position
    for (let i = 0; i < gp.count; i++) gp.setY(i, hill(gp.getX(i), gp.getZ(i) - 20))
    groundGeo.translate(0, 0, -20)
    groundGeo.computeVertexNormals()
    scene.add(new THREE.Mesh(groundGeo, new THREE.MeshToonMaterial({ color: col.ground })))

    const scatter = (mesh, count, place) => {
      const m = new THREE.Object3D()
      for (let i = 0; i < count; i++) {
        place(m, i)
        m.updateMatrix()
        mesh.setMatrixAt(i, m.matrix)
      }
      mesh.frustumCulled = false
      scene.add(mesh)
    }
    const spot = () => {
      const x = (Math.random() - 0.5) * 50
      const z = 14 - Math.random() * 62
      return [x, hill(x, z), z]
    }

    // grass: one tapered blade, instanced
    const blade = new THREE.PlaneGeometry(0.09, 1, 1, 4)
    const bp = blade.attributes.position
    for (let i = 0; i < bp.count; i++) bp.setX(i, bp.getX(i) * (0.5 - bp.getY(i)) * 2)
    blade.translate(0, 0.5, 0)
    const grassUniforms = {
      uTime: { value: 0 }, uBase: { value: col.base }, uTip: { value: col.tip },
      uFog: { value: col.bottom }, uNear: { value: 18 }, uFar: { value: 80 },
    }
    const grassMat = new THREE.ShaderMaterial({ vertexShader: grassVert, fragmentShader: grassFrag, uniforms: grassUniforms, side: THREE.DoubleSide })
    scatter(new THREE.InstancedMesh(blade, grassMat, small ? 18000 : 45000), small ? 18000 : 45000, (m) => {
      const [x, y, z] = spot()
      m.position.set(x, y - 0.05, z)
      m.rotation.set(0, Math.random() * Math.PI, (Math.random() - 0.5) * 0.3)
      m.scale.set(1, 0.4 + Math.random() * 0.8, 1)
    })

    // flower heads sitting on top of the grass
    const FLOWERS = small ? 2500 : 6000
    const flowerMat = new THREE.MeshBasicMaterial({ color: col.flower, side: THREE.DoubleSide })
    const flowers = new THREE.InstancedMesh(new THREE.CircleGeometry(0.08, 7), flowerMat, FLOWERS)
    scatter(flowers, FLOWERS, (m, i) => {
      const [x, y, z] = spot()
      m.position.set(x, y + 0.25 + Math.random() * 0.45, z)
      m.rotation.set(-Math.PI / 2 + (Math.random() - 0.5) * 0.8, 0, Math.random() * 6)
      m.scale.setScalar(0.6 + Math.random() * 0.9)
      flowers.setColorAt(i, c(FLOWER_COLORS[i % FLOWER_COLORS.length]))
    })

    // big painted cumulus billboards
    const textures = [cloudTexture(), cloudTexture(), cloudTexture()]
    const clouds = []
    for (let i = 0; i < 11; i++) {
      const mat = new THREE.SpriteMaterial({ map: textures[i % 3], color: col.cloud, depthWrite: false, fog: false })
      const sp = new THREE.Sprite(mat)
      const w = i === 0 ? 120 : 40 + Math.random() * 45
      sp.scale.set(w, w * 0.625, 1)
      sp.position.set(i === 0 ? 15 : (Math.random() - 0.5) * 200, i === 0 ? 22 : 14 + Math.random() * 26, -110 - Math.random() * 50)
      clouds.push(sp)
      scene.add(sp)
    }

    const points = (count, make, vert, frag, uniforms, extra) => {
      const pos = new Float32Array(count * 3)
      const rand = new Float32Array(count)
      for (let i = 0; i < count; i++) { pos.set(make(), i * 3); rand[i] = Math.random() }
      const geo = new THREE.BufferGeometry()
      geo.setAttribute('position', new THREE.BufferAttribute(pos, 3))
      geo.setAttribute('aRand', new THREE.BufferAttribute(rand, 1))
      const p = new THREE.Points(geo, new THREE.ShaderMaterial({ vertexShader: vert, fragmentShader: frag, uniforms, transparent: true, depthWrite: false, ...extra }))
      p.frustumCulled = false
      scene.add(p)
    }
    const flyUniforms = { uTime: { value: 0 }, uGlow: { value: s.glow } }
    points(350, () => { const [x, y, z] = spot(); return [x * 0.6, y + 0.3 + Math.random() * 4, z] },
      flyVert, flyFrag, flyUniforms, { blending: THREE.AdditiveBlending })
    const petalUniforms = { uTime: { value: 0 } }
    points(small ? 120 : 260, () => { const [x, y, z] = spot(); return [x * 0.8, y + 0.5 + Math.random() * 3.5, z] },
      petalVert, petalFrag, petalUniforms)

    // scroll: walk through the meadow while the day passes
    const state = { p: 0 }
    const rgb = (hex) => { const t = c(hex); return { r: t.r, g: t.g, b: t.b, ease: 'none', duration: 1 } }
    const tl = gsap.timeline({
      scrollTrigger: { trigger: document.body, start: 'top top', end: 'bottom bottom', scrub: 1.5 },
    })
    tl.to(state, { p: 1, ease: 'none', duration: 2 }, 0)
    SKY.slice(1).forEach((k, i) => {
      for (const key of Object.keys(col)) tl.to(col[key], rgb(k[key]), i)
      tl.to(sun, { x: k.sun[0], y: k.sun[1], ease: 'none', duration: 1 }, i)
        .to(flyUniforms.uGlow, { value: k.glow, ease: 'none', duration: 1 }, i)
        .to(dir, { intensity: 1.6 - (i + 1) * 0.55, ease: 'none', duration: 1 }, i)
        .to(hemi, { intensity: 1.2 - (i + 1) * 0.35, ease: 'none', duration: 1 }, i)
    })
    const intro = { y: -1.6 }
    gsap.to(intro, { y: 0, duration: 3, ease: 'power3.out', delay: 1.4 })

    const mouse = new THREE.Vector2()
    const look = new THREE.Vector2()
    const onMove = (e) => mouse.set((e.clientX / innerWidth) * 2 - 1, -(e.clientY / innerHeight) * 2 + 1)
    const onResize = () => {
      camera.aspect = innerWidth / innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(innerWidth, innerHeight)
    }
    addEventListener('pointermove', onMove)
    addEventListener('resize', onResize)

    const clock = new THREE.Clock()
    let raf
    const loop = () => {
      const dt = clock.getDelta()
      const t = clock.elapsedTime
      grassUniforms.uTime.value = t
      flyUniforms.uTime.value = t
      petalUniforms.uTime.value = t
      look.lerp(mouse, 0.04)

      const z = 12 - state.p * 34
      camera.position.set(look.x * 0.6, hill(0, z) + 1.6 + intro.y + look.y * 0.3, z)
      camera.lookAt(look.x * 2, hill(0, z - 10) + 2.4 + look.y, z - 10)
      sky.position.copy(camera.position)

      clouds.forEach((cl) => { cl.position.x += dt * 0.8; if (cl.position.x > 130) cl.position.x = -130 })
      renderer.render(scene, camera)
      raf = requestAnimationFrame(loop)
    }
    loop()

    return () => {
      cancelAnimationFrame(raf)
      removeEventListener('pointermove', onMove)
      removeEventListener('resize', onResize)
      tl.scrollTrigger.kill()
      tl.kill()
      scene.traverse((o) => { o.geometry?.dispose(); o.material?.dispose() })
      textures.forEach((t) => t.dispose())
      renderer.dispose()
      el.removeChild(renderer.domElement)
    }
  }, [])

  return <div ref={mount} className="scene" aria-hidden="true" />
}

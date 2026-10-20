import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from 'lenis'
import Scene from './Scene.jsx'

gsap.registerPlugin(ScrollTrigger)

// content from CV-BAGAS_SETIAJI
const experience = [
  {
    role: 'Software Engineer', company: 'PT. Decom Feno Mahaka', place: 'Indonesia', date: 'Dec 2025 — Present',
    points: [
      'Golf scoring platform for web, mobile & tablet with real-time score tracking and player statistics.',
      'Tournament management system: registration, scheduling, scoring, and live leaderboard sync.',
      'Golf course management for daily operations and tee-time scheduling.',
    ],
    tech: ['SolidJS', 'Go', 'React', 'React Native', 'Convex', 'PostgreSQL', 'Docker'],
  },
  {
    role: 'Fullstack Software Engineer', company: 'PT. Smartelco Solusi Teknologi', place: 'Purwokerto', date: 'Dec 2024 — Present',
    points: [
      'Native Workspace Management app built with Kotlin & Jetpack Compose.',
      'Real-time enterprise communication platform with React and Go.',
      'AI-powered document processing combining OCR with Large Language Models.',
      'Telegram & WhatsApp automation bots in Python.',
    ],
    tech: ['React', 'SolidJS', 'Go', 'Kotlin', 'Python', 'PostgreSQL', 'Docker'],
  },
  {
    role: 'Fullstack Software Engineer (Freelance)', company: 'Abisatya Bangun Iman', place: 'Remote', date: 'Feb 2026 — Mar 2026',
    points: [
      'End-to-end Hajj & Umrah management app built with Flutter.',
      'Scalable NestJS backend and a CMS for packages, schedules, and announcements.',
      'Third-party API integrations for real-time notifications.',
    ],
    tech: ['Flutter', 'Dart', 'NestJS', 'TypeScript', 'Supabase', 'PostgreSQL'],
  },
  {
    role: 'Frontend Developer', company: 'PT. Braincode Solutions', place: 'Jakarta / Cilacap', date: 'Jul 2022 — Nov 2024',
    points: [
      'Enterprise dashboards with Angular & Angular Material.',
      'Interactive data visualisation: AG Grid, AmCharts, Highcharts, DevExtreme, Google Maps.',
      'Modern interfaces with SolidJS, Tailwind CSS, and DaisyUI.',
    ],
    tech: ['Angular', 'SolidJS', 'TypeScript', 'Tailwind CSS', 'Highcharts'],
  },
]

const projects = [
  {
    title: 'GolfScore ID', img: '/projects/golfscoreid-pangkalanjati.png',
    desc: 'Professional golf scoring system for tablets on the course — start rounds, call a marshal, and sync scores live.',
    tech: ['SolidJS', 'Go', 'Convex'],
  },
  {
    title: 'Kartini Fun Tournament', img: '/projects/kartini-leaderboard.jpeg',
    desc: 'Branded tournament app for Jatinangor National Golf with scorecards and a live leaderboard.',
    tech: ['React', 'Go', 'Real-time'],
  },
  {
    title: 'Atlas Hutan Kalimantan', url: 'https://project-atlas-hutan.vercel.app/#kehidupan',
    desc: 'Interactive atlas for exploring the life and biodiversity of the Borneo rainforest.',
    tech: ['React', 'Three.js', 'GSAP'],
  },
  {
    title: 'Kinetiq Energy Dashboard', url: 'https://dashboard-energy-iota.vercel.app/',
    desc: 'Plant operations dashboard with a 3D solar array, generation charts, system health, and weather forecast.',
    tech: ['React', 'Three.js', 'Charts'],
  },
  {
    title: 'SmartGuard', img: '/projects/smartguard-mobile-home.png',
    desc: 'Security patrol management: checkpoint routes, live monitoring, incident and patrol reports on web and mobile.',
    tech: ['React', 'Kotlin', 'Go'],
  },
  {
    title: 'Smart WFM', img: '/projects/smartwfm-dashboard.png',
    desc: 'Workforce management for fiber-optic (OSP) projects — vendor performance, daily progress, and a KML editor.',
    tech: ['React', 'Go', 'PostgreSQL'],
  },
  {
    title: 'WMS Resto', img: '/projects/wms-dashboard.png',
    desc: 'Warehouse management for restaurants: raw materials, recipes, stock opname, transfers, and waste tracking.',
    tech: ['React', 'Go', 'PostgreSQL'],
  },
]

const skills = {
  Languages: ['JavaScript', 'TypeScript', 'Go', 'Python', 'Kotlin', 'Java', 'C++', 'Dart'],
  Frontend: ['React', 'SolidJS', 'Angular', 'Next.js', 'Tailwind CSS'],
  'Backend & Data': ['Go', 'NestJS', 'REST API', 'PostgreSQL', 'Supabase', 'SurrealDB', 'MySQL'],
  'Mobile & Tools': ['Flutter', 'Jetpack Compose', 'Docker', 'Git', 'Linux', 'Nginx'],
  'AI & Network': ['LLM Integration', 'OCR', 'Wireshark'],
}

const education = [
  { school: 'Telkom University', short: 'TU', detail: 'B.Sc. Informatics Engineering', city: 'Bandung', date: '2024 — Present' },
  { school: 'SMK Telkom Purwokerto', short: 'SMK', detail: 'Network Access Engineering · Teaching Factory at WITEL Purwokerto', city: 'Purwokerto', date: '2019 — 2022' },
]

const about =
  "I'm a fullstack engineer with 3+ years of building scalable web and mobile apps — from React, SolidJS and Angular interfaces to Go backend services. I care about software that is clean, easy to maintain, and genuinely pleasant to use."

// hand-placed tilt so nothing sits perfectly straight, like a scrapbook
const TILT = ['-1.4deg', '1.1deg', '-0.6deg', '1.6deg', '-1deg', '0.8deg', '-1.8deg']
const tilt = (i) => ({ '--r': TILT[i % TILT.length] })

const split = (text) => text.split('').map((ch, i) => <span key={i} className="char">{ch === ' ' ? ' ' : ch}</span>)

export default function App() {
  const root = useRef(null)

  useEffect(() => {
    const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches
    const lenis = new Lenis({ lerp: 0.08 })
    lenis.on('scroll', ScrollTrigger.update)
    const tick = (t) => lenis.raf(t * 1000)
    gsap.ticker.add(tick)
    gsap.ticker.lagSmoothing(0)

    const ctx = gsap.context(() => {
      const count = { v: 0 }
      gsap.timeline()
        .to(count, {
          v: 100, duration: reduce ? 0 : 1.4, ease: 'power2.inOut',
          onUpdate: () => (document.querySelector('.loader-num').textContent = Math.round(count.v)),
        })
        .to('.loader', { clipPath: 'circle(0% at 50% 50%)', duration: 1.3, ease: 'expo.inOut' })
        .from('.hero .char', { yPercent: 110, rotate: 6, duration: 1.3, stagger: 0.03, ease: 'expo.out' }, '-=0.5')
        .from('.hero-jp, .hero-meta > *', { y: 20, opacity: 0, stagger: 0.1, duration: 0.9, ease: 'power3.out' }, '-=1')

      // paper gets "placed" on the page: drops in with a little extra spin
      const place = (targets, trigger, extra = {}) =>
        gsap.from(targets, {
          y: 90, rotate: () => gsap.utils.random(-8, 8), opacity: 0, duration: 1.2, ease: 'expo.out',
          scrollTrigger: { trigger, start: 'top 80%' }, ...extra,
        })

      place('.letter', '.about')
      gsap.from('.letter .stamp', {
        scale: 1.8, opacity: 0, rotate: -25, duration: 0.6, ease: 'back.out(2)',
        scrollTrigger: { trigger: '.letter', start: 'top 60%' },
      })
      gsap.fromTo('.about .word', { opacity: 0.15 }, {
        opacity: 1, stagger: 0.1, ease: 'none',
        scrollTrigger: { trigger: '.about-text', start: 'top 75%', end: 'bottom 55%', scrub: true },
      })

      gsap.fromTo('.timeline-line', { scaleY: 0 }, {
        scaleY: 1, ease: 'none',
        scrollTrigger: { trigger: '.timeline', start: 'top 70%', end: 'bottom 70%', scrub: true },
      })
      gsap.utils.toArray('.exp').forEach((el) => {
        place(el.querySelector('.ticket'), el)
        gsap.from(el.querySelector('.postmark'), {
          scale: 2, opacity: 0, duration: 0.5, ease: 'power4.in', delay: 0.5,
          scrollTrigger: { trigger: el, start: 'top 80%' },
        })
        gsap.from(el.querySelector('.dot'), {
          scale: 0, duration: 0.8, ease: 'back.out(3)',
          scrollTrigger: { trigger: el, start: 'top 75%' },
        })
      })

      gsap.utils.toArray('.polaroid').forEach((el) => place(el, el))

      place('.sheet', '.skills')
      gsap.from('.sticker', {
        scale: 0, opacity: 0, stagger: 0.02, duration: 0.6, ease: 'back.out(2.5)',
        scrollTrigger: { trigger: '.sheet', start: 'top 65%' },
      })
      place('.postcard', '.edu', { stagger: 0.15 })
      place('.note', '.contact')
      gsap.from('.contact .char', {
        yPercent: 110, stagger: 0.03, duration: 1, ease: 'expo.out',
        scrollTrigger: { trigger: '.contact', start: 'top 65%' },
      })

      const xTo = gsap.quickTo('.cursor', 'x', { duration: 0.5, ease: 'power3' })
      const yTo = gsap.quickTo('.cursor', 'y', { duration: 0.5, ease: 'power3' })
      const move = (e) => { xTo(e.clientX); yTo(e.clientY) }
      addEventListener('pointermove', move)
      document.querySelectorAll('a, .sticker, .polaroid').forEach((el) => {
        el.addEventListener('pointerenter', () => gsap.to('.cursor', { scale: 3, duration: 0.3 }))
        el.addEventListener('pointerleave', () => gsap.to('.cursor', { scale: 1, duration: 0.3 }))
      })
      return () => removeEventListener('pointermove', move)
    }, root)

    return () => {
      ctx.revert()
      gsap.ticker.remove(tick)
      lenis.destroy()
    }
  }, [])

  return (
    <div ref={root}>
      <div className="loader">
        <p className="loader-name">バガス・セティアジ</p>
        <p><span className="loader-num">0</span>%</p>
      </div>
      <div className="cursor" />
      <Scene />

      <header className="nav">
        <a href="#top" className="logo">Bagas<span>.</span></a>
        <nav>
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section className="hero" id="top">
          <p className="hero-jp">バガス・セティアジ</p>
          <h1>
            <span className="line">{split('Bagas')}</span>
            <span className="line">{split('Setiaji')}</span>
          </h1>
          <div className="hero-meta">
            <p>Fullstack Software Engineer from Cilacap — building web & mobile apps with React, SolidJS, and Go.</p>
            <p className="hand">scroll slowly, enjoy the breeze ↓</p>
          </div>
        </section>

        <section className="about" id="about">
          <div className="letter">
            <span className="tape tape-l" />
            <span className="tape tape-r" />
            <div className="stamp"><b>ID</b><small>2026</small></div>
            <p className="jp">自己紹介</p>
            <p className="hand greet">Hello, nice to meet you!</p>
            <p className="about-text">
              {about.split(' ').map((w, i) => <span key={i} className="word">{w} </span>)}
            </p>
            <p className="hand sign">— Bagas</p>
          </div>
        </section>

        <section className="experience" id="experience">
          <h2 className="section-title"><span className="jp">経歴</span>Experience</h2>
          <div className="timeline">
            <div className="timeline-line" />
            {experience.map((e, i) => (
              <article key={e.company} className="exp" style={tilt(i)}>
                <span className="dot" />
                <div className="ticket">
                  <span className={`tape tape-${i % 3}`} />
                  <div className="stub">
                    <span className="stub-no">No.{String(experience.length - i).padStart(2, '0')}</span>
                    <span className="stub-date">{e.date}</span>
                  </div>
                  <div className="ticket-body">
                    <span className="postmark">{e.place}<b>{e.date.split(' ')[1]}</b></span>
                    <h3>{e.role}</h3>
                    <p className="company">{e.company}</p>
                    <ul>{e.points.map((p) => <li key={p}>{p}</li>)}</ul>
                    <div className="tags">{e.tech.map((t) => <span key={t}>{t}</span>)}</div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="projects" id="projects">
          <h2 className="section-title"><span className="jp">作品</span>Projects</h2>
          <div className="board">
            {projects.map((p, i) => {
              const Tag = p.url ? 'a' : 'div'
              return (
                <Tag key={p.title} className="polaroid" style={tilt(i + 2)} {...(p.url && { href: p.url, target: '_blank', rel: 'noreferrer' })}>
                  <span className={`tape tape-${i % 3}`} />
                  <div className="photo">
                    {p.img
                      ? <img src={p.img} alt={`${p.title} screenshot`} loading="lazy" />
                      // live sites have no screenshot: show the real page, scaled down
                      : <iframe src={p.url} title={p.title} loading="lazy" tabIndex={-1} />}
                    {p.url && <span className="live">live ↗</span>}
                  </div>
                  <h3 className="hand">{p.title}</h3>
                  <p>{p.desc}</p>
                  <div className="tags">{p.tech.map((t) => <span key={t}>{t}</span>)}</div>
                </Tag>
              )
            })}
          </div>
        </section>

        <section className="skills" id="skills">
          <h2 className="section-title"><span className="jp">技術</span>Skills</h2>
          <div className="sheet">
            <span className="tape tape-1" />
            {Object.entries(skills).map(([group, list], g) => (
              <div key={group} className="skill-row">
                <p className="hand">{group}</p>
                <div className="stickers">
                  {list.map((sk, i) => <span key={sk} className={`sticker c${(i + g) % 5}`} style={tilt(i + g)}>{sk}</span>)}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="edu">
          <h2 className="section-title"><span className="jp">学歴</span>Education</h2>
          <div className="edu-grid">
            {education.map((e, i) => (
              <div key={e.school} className="postcard" style={tilt(i + 1)}>
                <div className="pc-msg">
                  <p className="label">{e.date}</p>
                  <h3>{e.school}</h3>
                  <p>{e.detail}</p>
                </div>
                <div className="pc-addr">
                  <div className="stamp small"><b>{e.short}</b></div>
                  <span className="hand">{e.city}</span>
                  <i /><i /><i />
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="contact" id="contact">
          <h2 className="section-title"><span className="jp">連絡</span>Contact</h2>
          <h2 className="contact-big"><span className="line">{split("Let's talk")}</span><span className="line">{split('at sunset.')}</span></h2>
          <div className="note" style={tilt(0)}>
            <span className="tape tape-2" />
            <p className="hand">See you again!</p>
            <p className="jp-note">またね ✿</p>
            <div className="contact-links">
              <a href="mailto:stjbagas28@gmail.com">stjbagas28@gmail.com</a>
              <a href="tel:+6287729723438">+62 877 2972 3438</a>
            </div>
          </div>
          <footer className="label">
            <span>© 2026 Bagas Setiaji</span>
            <span>Indonesia · ID / EN</span>
          </footer>
        </section>
      </main>
    </div>
  )
}

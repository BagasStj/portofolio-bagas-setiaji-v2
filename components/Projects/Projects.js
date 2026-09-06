import { useEffect, useRef } from "react";
import { MENULINKS, PROJECTS } from "../../constants";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import ProjectTile, { FeaturedProjectTile } from "./ProjectTile/ProjectTile";

const Projects = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap
        .timeline({ defaults: { ease: "none" } })
        .from(
          sectionRef.current.querySelectorAll(".staggered-reveal"),
          { opacity: 0, duration: 0.5, stagger: 0.3 },
          "<"
        );

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top bottom",
        end: "center center",
        scrub: 0,
        animation: tl,
      });
    });

    return () => ctx.revert();
  }, []);

  const [featured, ...rest] = PROJECTS;

  return (
    <section
      ref={sectionRef}
      id={MENULINKS[2].ref}
      aria-label="Projects"
      className="w-full relative select-none section-container py-16"
    >
      <div className="flex flex-col">
        <p className="uppercase tracking-widest text-gray-light-1 staggered-reveal">
          PROJECTS
        </p>
        <h2 className="text-6xl mt-2 font-medium text-gradient w-fit staggered-reveal">
          My Projects
        </h2>
        <p className="text-[1.65rem] font-medium md:max-w-lg max-w-sm mt-2 staggered-reveal">
          Some things I&apos;ve built with love, expertise and a pinch of
          magical ingredients.{" "}
        </p>
      </div>

      <div className="mt-12 flex flex-col gap-6 staggered-reveal">
        <FeaturedProjectTile project={featured} index={1} />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {rest.map((project, i) => (
            <ProjectTile project={project} index={i + 2} key={project.name} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

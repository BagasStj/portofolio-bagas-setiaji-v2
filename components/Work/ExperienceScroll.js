import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useSfx } from "utils/use-sfx";

const shortName = (company) => company.replace(/^PT\.\s*/, "");

const TechTag = ({ tag }) => (
  <span className="text-xs px-2.5 py-1 rounded-full font-mono border border-white/10 text-gray-light-3">
    {tag}
  </span>
);

const ExperienceDetail = ({ work }) => (
  <div className="rounded-2xl border border-white/10 bg-gray-dark-3 p-6 md:p-8">
    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
      <div>
        <span className="text-xs uppercase tracking-widest font-mono text-gray-light-3">
          {work.period}
        </span>
        <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight mt-1">
          {work.company}
        </h3>
        <p className="text-base mt-1 font-medium text-indigo-light">{work.role}</p>
        <p className="text-sm text-gray-light-4 mt-1">{work.location}</p>
      </div>
      <div className="flex flex-wrap gap-2 md:max-w-xs md:justify-end">
        {work.tags.map((tag) => (
          <TechTag tag={tag} key={tag} />
        ))}
      </div>
    </div>

    <div className="w-full h-px mb-6 bg-white/10" />

    <div className="grid md:grid-cols-3 gap-5">
      {work.highlights.map((highlight) => (
        <div key={highlight.title} className="flex flex-col gap-1.5">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-indigo-light flex-shrink-0" />
            <h4 className="text-sm font-semibold text-white">{highlight.title}</h4>
          </div>
          <p className="text-sm text-gray-light-3 leading-relaxed pl-3.5">
            {highlight.description}
          </p>
        </div>
      ))}
    </div>
  </div>
);

const ExperienceScroll = ({ experiences }) => {
  const [active, setActive] = useState(0);
  const sfx = useSfx();

  const selectTab = (index) => {
    if (index === active) return;
    setActive(index);
    sfx.play("tab-switch");
  };

  return (
    <div className="mt-10 w-full">
      <div
        role="tablist"
        aria-label="Work experience"
        className="flex gap-2 overflow-x-auto no-scrollbar pb-1"
      >
        {experiences.map((work, index) => (
          <button
            key={work.company}
            role="tab"
            aria-selected={active === index}
            onClick={() => selectTab(index)}
            className={`flex-shrink-0 rounded-full border px-4 py-2 text-sm font-medium whitespace-nowrap transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-light/50 ${
              active === index
                ? "border-indigo-light/40 bg-gray-dark-2 text-white"
                : "border-white/10 text-gray-light-3 hover:text-white hover:border-white/20"
            }`}
          >
            {shortName(work.company)}
          </button>
        ))}
      </div>

      <div className="mt-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={experiences[active].company}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
          >
            <ExperienceDetail work={experiences[active]} />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ExperienceScroll;

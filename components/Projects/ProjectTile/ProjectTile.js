import Image from "next/image";
import { PROJECT_IMAGES } from "../images";

const TechTag = ({ tag }) => (
  <span className="text-xs px-2.5 py-1 rounded-full font-mono border border-white/10 text-gray-light-3">
    {tag}
  </span>
);

const cardClasses =
  "group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-gray-dark-3 transition-colors duration-300 hover:border-indigo-light/50 focus-visible:outline-none focus-visible:border-indigo-light/50 focus-visible:ring-2 focus-visible:ring-indigo-light/50";

const Thumbnail = ({ imageKey, alt, className = "" }) => (
  <div className={`relative w-full overflow-hidden ${className}`}>
    <Image
      src={PROJECT_IMAGES[imageKey]}
      alt={alt}
      placeholder="blur"
      fill
      sizes="(min-width: 1024px) 60vw, 100vw"
      className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
    />
  </div>
);

export const FeaturedProjectTile = ({ project, index }) => {
  const { name, imageKey, proof, description, url, tech } = project;

  return (
    <a
      href={url || undefined}
      target={url ? "_blank" : undefined}
      rel={url ? "noreferrer" : undefined}
      className={`${cardClasses} md:flex-row`}
    >
      <span className="absolute top-4 left-4 z-10 font-mono text-xs text-white/70 bg-black/50 backdrop-blur-sm rounded-full px-2 py-1">
        {String(index).padStart(2, "0")}
      </span>
      <Thumbnail imageKey={imageKey} alt={`${name} dashboard screenshot`} className="aspect-video md:aspect-auto md:w-3/5" />
      <div className="flex flex-col justify-center gap-4 p-6 md:p-8 md:w-2/5">
        <div>
          <h3 className="text-2xl sm:text-3xl font-medium text-white">{name}</h3>
          <p className="mt-2 text-base text-gray-light-3">{description}</p>
        </div>
        {proof && proof.length > 0 && (
          <div className="flex flex-col gap-2">
            <p className="text-xs uppercase tracking-widest text-gray-light-4">
              Running live at
            </p>
            {proof.map(({ imageKey: proofImageKey, label }) => (
              <div
                key={label}
                className="flex items-center gap-3 rounded-xl border border-white/10 bg-black/20 p-2.5"
              >
                <div className="relative h-12 w-8 flex-shrink-0 overflow-hidden rounded-md">
                  <Image src={PROJECT_IMAGES[proofImageKey]} alt="" fill className="object-cover" />
                </div>
                <p className="text-xs text-gray-light-4">{label}</p>
              </div>
            ))}
          </div>
        )}
        <div className="flex flex-wrap gap-2">
          {tech.map((tag) => (
            <TechTag tag={tag} key={tag} />
          ))}
        </div>
      </div>
    </a>
  );
};

const ProjectTile = ({ project, index }) => {
  const { name, imageKey, description, url, tech } = project;

  return (
    <a
      href={url || undefined}
      target={url ? "_blank" : undefined}
      rel={url ? "noreferrer" : undefined}
      className={cardClasses}
    >
      <span className="absolute top-3 left-3 z-10 font-mono text-xs text-white/70 bg-black/50 backdrop-blur-sm rounded-full px-2 py-1">
        {String(index).padStart(2, "0")}
      </span>
      <Thumbnail imageKey={imageKey} alt={`${name} screenshot`} className="aspect-video" />
      <div className="flex flex-col gap-3 p-5">
        <h3 className="text-xl font-medium text-white">{name}</h3>
        <p className="text-sm text-gray-light-3">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tech.map((tag) => (
            <TechTag tag={tag} key={tag} />
          ))}
        </div>
      </div>
    </a>
  );
};

export default ProjectTile;

import Image from "next/image";
import type { ProjectSpotlight as ProjectSpotlightData } from "@/data/projects";

interface ProjectSpotlightProps {
  spotlight?: ProjectSpotlightData;
}

export function ProjectSpotlight({ spotlight }: ProjectSpotlightProps) {
  if (!spotlight) {
    return null;
  }

  return (
    <section className="grid items-center gap-8 overflow-hidden rounded-3xl bg-[#20262d] p-5 text-surface shadow-soft sm:p-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(26rem,1.2fr)]">
      <div>
        <p className="text-xs font-medium uppercase tracking-[0.28em] text-[#8edcff]">
          {spotlight.eyebrow}
        </p>
        <h2 className="mt-4 text-balance font-serif text-3xl leading-tight tracking-tight sm:text-4xl">
          {spotlight.heading}
        </h2>
        <p className="mt-5 text-base leading-relaxed text-white/70">
          {spotlight.body}
        </p>
        <ul className="mt-6 space-y-3 text-sm text-white/80">
          {spotlight.points.map((point) => (
            <li key={point} className="flex items-start gap-3">
              <span
                aria-hidden
                className="mt-2 h-1.5 w-5 shrink-0 rounded-full bg-[#62c7f2]"
              />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="overflow-hidden rounded-2xl border border-white/10 bg-white shadow-2xl">
        <Image
          src={spotlight.media.src}
          alt={spotlight.media.alt}
          width={spotlight.media.width}
          height={spotlight.media.height}
          loading="lazy"
          unoptimized
          className="h-auto w-full"
        />
      </div>
    </section>
  );
}

import Image from "next/image";
import { PlatformButtons } from "@/components/PlatformButtons";
import type { Project } from "@/data/projects";

interface LandingHeroProps {
  project: Project;
}

export function LandingHero({ project }: LandingHeroProps) {
  return (
    <header className="rounded-3xl border border-hairline bg-[var(--pa-soft)] p-5 shadow-sm sm:p-12">
      <div
        className={
          project.heroMedia
            ? "grid items-center gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(24rem,1.1fr)]"
            : undefined
        }
      >
        <div>
          <div className="flex items-center gap-5">
            <Image
              src={project.hero}
              alt={`${project.name} app icon`}
              width={80}
              height={80}
              unoptimized
              className="h-16 w-16 rounded-2xl border border-hairline bg-surface object-cover shadow-sm sm:h-20 sm:w-20 sm:rounded-3xl"
            />
            <div className="space-y-1">
              <p className="text-base font-semibold tracking-tight text-ink">
                {project.name}
              </p>
              <p className="text-xs uppercase tracking-[0.2em] text-[var(--pa-ink)] sm:text-sm">
                {project.category}
              </p>
            </div>
          </div>
          <h1 className="mt-8 max-w-3xl text-balance font-serif text-4xl leading-tight tracking-tight text-ink sm:text-5xl">
            {project.oneLiner}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
            {project.description}
          </p>
          {project.platforms.length > 0 ? (
            <div className="mt-8">
              <PlatformButtons
                platforms={project.platforms}
                projectSlug={project.slug}
              />
            </div>
          ) : null}
        </div>

        {project.heroMedia ? (
          <div className="overflow-hidden rounded-2xl border border-hairline bg-surface shadow-sm">
            <Image
              src={project.heroMedia.src}
              alt={project.heroMedia.alt}
              width={project.heroMedia.width}
              height={project.heroMedia.height}
              priority
              unoptimized
              className="h-auto w-full"
            />
          </div>
        ) : null}
      </div>

      {project.proofPoints && project.proofPoints.length > 0 ? (
        <dl className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-hairline bg-[var(--pa)] sm:grid-cols-3">
          {project.proofPoints.map((point) => (
            <div key={point.title} className="bg-surface px-5 py-4">
              <dt className="text-sm font-semibold tracking-tight text-ink">
                {point.title}
              </dt>
              <dd className="mt-1 text-sm leading-snug text-muted">
                {point.body}
              </dd>
            </div>
          ))}
        </dl>
      ) : null}
    </header>
  );
}

import { PlatformButtons } from "@/components/PlatformButtons";
import type { Project } from "@/data/projects";

interface LandingHeroProps {
  project: Project;
}

export function LandingHero({ project }: LandingHeroProps) {
  return (
    <header className="rounded-3xl border border-hairline bg-[var(--pa-soft)] p-8 shadow-sm sm:p-12">
      <div className="flex items-center gap-5">
        <img
          src={project.hero}
          alt={`${project.name} app icon`}
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
      <h1 className="mt-8 max-w-3xl font-serif text-4xl leading-tight tracking-tight text-ink sm:text-5xl">
        {project.oneLiner}
      </h1>
      <p className="mt-6 max-w-2xl text-lg text-muted">{project.description}</p>
      {project.platforms.length > 0 ? (
        <div className="mt-8">
          <PlatformButtons platforms={project.platforms} />
        </div>
      ) : null}
    </header>
  );
}

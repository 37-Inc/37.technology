import type { CSSProperties } from "react";
import Image from "next/image";
import { TrackedLink } from "@/components/analytics/TrackedLink";
import type { Project } from "@/data/projects";
import { cn } from "@/lib/utils";

interface HomeProjectCardProps {
  className?: string;
  index: number;
  prominent?: boolean;
  project: Project;
}

type ProjectStyle = CSSProperties & {
  "--project-accent": string;
  "--project-ink": string;
  "--project-soft": string;
};

export function HomeProjectCard({
  className,
  index,
  prominent = false,
  project,
}: HomeProjectCardProps) {
  const style = {
    "--project-accent": project.theme.accent,
    "--project-ink": project.theme.accentInk,
    "--project-soft": project.theme.accentSoft,
  } as ProjectStyle;

  return (
    <li className={className}>
      <TrackedLink
        href={`/${project.slug}`}
        eventName="project_open"
        eventProperties={{ project: project.slug, placement: "homepage_grid" }}
        style={style}
        className={cn(
          "home-project-card group relative flex h-full min-h-60 flex-col overflow-hidden rounded-[1.75rem] border border-black/[0.06] p-5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-4 sm:p-6",
          prominent && "min-h-72 sm:min-h-80"
        )}
      >
        <span className="home-project-glow" aria-hidden="true" />
        <div className="relative flex items-start justify-between gap-5">
          <span
            className={cn(
              "relative overflow-hidden rounded-[22%] bg-white shadow-md ring-1 ring-black/10",
              prominent ? "size-16 sm:size-[4.5rem]" : "size-14"
            )}
          >
            <Image
              src={project.hero}
              alt=""
              fill
              sizes={prominent ? "72px" : "56px"}
              className="object-cover"
            />
          </span>
          <span className="font-serif text-2xl leading-none text-[var(--project-ink)]/45">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        <div className="relative mt-auto pt-10">
          <p className="text-[0.66rem] font-semibold uppercase tracking-[0.22em] text-[var(--project-ink)]/70">
            {project.category}
          </p>
          <div className="mt-3 flex items-end justify-between gap-4">
            <div>
              <h3
                className={cn(
                  "font-serif leading-tight tracking-[-0.025em] text-ink",
                  prominent ? "text-3xl sm:text-4xl" : "text-2xl"
                )}
              >
                {project.name}
              </h3>
              <p
                className={cn(
                  "mt-2 max-w-md leading-relaxed text-muted",
                  prominent ? "text-sm sm:text-base" : "text-sm"
                )}
              >
                {project.oneLiner}
              </p>
            </div>
            <span
              aria-hidden="true"
              className="home-project-arrow inline-flex size-10 shrink-0 items-center justify-center rounded-full bg-white/75 text-xl text-[var(--project-ink)] shadow-sm ring-1 ring-black/[0.06]"
            >
              &rarr;
            </span>
          </div>
        </div>
      </TrackedLink>
    </li>
  );
}

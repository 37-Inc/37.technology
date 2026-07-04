import Link from "next/link";
import { PlatformButtons } from "@/components/PlatformButtons";
import type { Project } from "@/data/projects";

interface FinalCtaProps {
  project: Project;
}

export function FinalCta({ project }: FinalCtaProps) {
  const heading = project.cta?.heading ?? `Get ${project.name}`;
  const body = project.cta?.body;

  return (
    <section
      aria-labelledby="cta-heading"
      className="rounded-3xl border border-hairline bg-[var(--pa-soft)] p-8 text-center shadow-sm sm:p-12"
    >
      <h2
        id="cta-heading"
        className="font-serif text-3xl tracking-tight text-ink sm:text-4xl"
      >
        {heading}
      </h2>
      {body ? (
        <p className="mx-auto mt-4 max-w-xl text-base text-muted">{body}</p>
      ) : null}
      {project.platforms.length > 0 ? (
        <div className="mt-8 flex justify-center">
          <PlatformButtons platforms={project.platforms} />
        </div>
      ) : null}
      <p className="mt-8">
        <Link
          href="/"
          className="rounded-sm text-sm font-medium text-muted underline decoration-[var(--pa)] underline-offset-4 transition-colors duration-150 ease-out hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#d1b59a]"
        >
          Back to all projects
        </Link>
      </p>
    </section>
  );
}

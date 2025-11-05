import Link from "next/link";
import type { Project } from "@/data/projects";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
  priority?: boolean;
}

export function ProjectCard({ project, priority }: ProjectCardProps) {
  return (
    <li>
      <Link
        href={`/${project.slug}`}
        className={cn(
          "group block h-full rounded-3xl border border-transparent bg-surface",
          "p-6 shadow-sm transition duration-150 ease-out",
          "hover:-translate-y-1 hover:border-accent/40 hover:shadow-md",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-4 focus-visible:ring-[#d1b59a] focus-visible:ring-offset-[#ffffff]"
        )}
      >
        <div className="flex items-start gap-4">
          <div className="relative h-12 w-12 flex-none overflow-hidden rounded-2xl border border-hairline bg-background">
            <img
              src={project.hero}
              alt={`${project.name} icon`}
              loading={priority ? "eager" : "lazy"}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex flex-1 flex-col gap-2">
            <div>
              <h3 className="font-serif text-lg tracking-tight text-ink">
                {project.name}
              </h3>
              <p className="text-sm text-muted">{project.oneLiner}</p>
            </div>
            <ul className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <li
                  key={tag}
                  className="rounded-full border border-hairline bg-surface/70 px-3 py-1 text-xs font-medium uppercase tracking-wide text-muted"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Link>
    </li>
  );
}

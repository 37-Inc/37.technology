import Link from "next/link";
import { ProjectCard } from "@/components/ProjectCard";
import { orderedProjects } from "@/data/projects";

export const revalidate = false;

export default function HomePage() {
  return (
    <div className="space-y-16">
      <section className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
        <div className="space-y-6">
          <p className="text-sm uppercase tracking-[0.3em] text-muted">
            Thirty Seven, Inc.
          </p>
          <h1 className="font-serif text-5xl leading-tight tracking-tight text-ink">
            Intentional products for mobile-first audiences.
          </h1>
          <p className="max-w-xl text-lg text-muted">
            We build confident, considered experiences that feel effortless—
            from rapid-fire creative tools to enterprise-ready operations
            stacks. Explore the portfolio and discover how Thirty Seven, Inc.
            delivers clarity across every platform.
          </p>
          <div className="flex gap-4 text-sm font-medium">
            <Link
              href="/about"
              className="inline-flex items-center gap-2 rounded-full border border-hairline bg-surface px-4 py-2 transition duration-150 ease-out hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#d1b59a]"
            >
              About Thirty Seven, Inc.
            </Link>
            <a
              href="mailto:hello@37.technology"
              className="inline-flex items-center gap-2 rounded-full bg-ink px-4 py-2 text-surface transition duration-150 ease-out hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#d1b59a]"
            >
              Start a conversation
            </a>
          </div>
        </div>
        <div className="rounded-3xl border border-hairline bg-surface/60 p-8 shadow-md">
          <p className="text-sm uppercase tracking-[0.3em] text-muted">
            Expertise
          </p>
          <ul className="mt-4 grid gap-3 text-base text-ink">
            <li>Product strategy &amp; brand positioning</li>
            <li>iOS &amp; Android native experiences</li>
            <li>AI-assisted creative workflows</li>
            <li>Enterprise-grade infrastructure</li>
          </ul>
        </div>
      </section>
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="font-serif text-3xl tracking-tight text-ink">Our work</h2>
          <p className="text-sm text-muted">Featured first, then alphabetical.</p>
        </div>
        <ul className="grid gap-6 sm:grid-cols-2">
          {orderedProjects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} priority={index < 2} />
          ))}
        </ul>
      </section>
    </div>
  );
}

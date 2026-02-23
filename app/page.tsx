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
            We build apps people actually use, from creative tools to
            enterprise plumbing. No buzzwords, just good software.
          </p>
          <div className="flex gap-4 text-sm font-medium">
            <Link
              href="/about"
              className="inline-flex items-center gap-2 rounded-full border border-hairline bg-surface px-4 py-2 transition duration-150 ease-out hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#d1b59a]"
            >
              About Thirty Seven, Inc.
            </Link>
            <a
              href="mailto:info@37.technology"
              className="inline-flex items-center gap-2 rounded-full bg-ink px-4 py-2 text-surface transition duration-150 ease-out hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#d1b59a]"
            >
              Start a conversation
            </a>
          </div>
        </div>
        <div className="rounded-3xl border border-hairline bg-surface/60 p-8 shadow-md">
          <p className="text-sm uppercase tracking-[0.3em] text-muted">
            What we do
          </p>
          <ul className="mt-4 grid gap-3 text-base text-ink">
            <li>Figure out product and positioning without deck theater</li>
            <li>Build iOS and Android apps people do not rage-delete</li>
            <li>Use AI where it helps and skip it where it does not</li>
            <li>Set up backend and ops so launches are boring (the good kind)</li>
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

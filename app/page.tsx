import Link from "next/link";
import { ProjectCard } from "@/components/ProjectCard";
import { pressReleases } from "@/data/press-releases";
import { orderedProjects } from "@/data/projects";
import { siteConfig } from "@/data/site";

export const revalidate = false;

const services = [
  {
    title: "iOS",
    body: "The deep specialty. Native Swift apps, designed and shipped end to end.",
  },
  {
    title: "Android",
    body: "Native or cross-platform, when the product calls for it.",
  },
  {
    title: "Web",
    body: "Fast, unfussy sites and web apps.",
  },
  {
    title: "Backend & infrastructure",
    body: "APIs, data, and ops that keep launches boring (the good kind).",
  },
  {
    title: "AI features",
    body: "Used where they help, skipped where they do not.",
  },
];

const selectedClients = ["Rhythmic", "Hale"];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
      email: "info@37.technology",
      description:
        "Product studio and consulting practice specialized in iOS app development, with full-stack capabilities across Android, web, backend, and AI.",
      knowsAbout: [
        "iOS development",
        "Android development",
        "Web development",
        "Backend engineering",
        "AI integration",
      ],
    },
    {
      "@type": "WebSite",
      name: siteConfig.name,
      url: siteConfig.url,
    },
  ],
};

export default function HomePage() {
  const latestPressReleases = pressReleases.slice(0, 2);

  return (
    <div className="space-y-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <section className="space-y-6">
        <p className="text-sm uppercase tracking-[0.3em] text-muted">
          Thirty Seven, Inc.
        </p>
        <h1 className="max-w-3xl font-serif text-5xl leading-tight tracking-tight text-ink">
          A product studio building iOS apps — our own, and our clients&rsquo;.
        </h1>
        <p className="max-w-xl text-lg text-muted">
          We ship consumer apps under our own name and take on select
          consulting work. Deep iOS specialization, full-stack range. No
          buzzwords, just good software.
        </p>
        <div className="flex gap-4 text-sm font-medium">
          <Link
            href="/about"
            className="inline-flex items-center gap-2 rounded-full border border-hairline bg-surface px-4 py-2 transition duration-150 ease-out hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#d1b59a]"
          >
            About the studio
          </Link>
          <a
            href="mailto:info@37.technology"
            className="inline-flex items-center gap-2 rounded-full bg-ink px-4 py-2 text-surface transition duration-150 ease-out hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#d1b59a]"
          >
            Work with us
          </a>
        </div>
      </section>
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="font-serif text-3xl tracking-tight text-ink">
            What we do
          </h2>
          <p className="text-sm text-muted">For ourselves, and for clients.</p>
        </div>
        <div className="rounded-3xl border border-hairline bg-surface p-8 shadow-sm">
          <dl className="grid gap-x-8 gap-y-6 sm:grid-cols-2">
            {services.map((service) => (
              <div key={service.title}>
                <dt className="font-medium text-ink">{service.title}</dt>
                <dd className="mt-1 text-sm text-muted">{service.body}</dd>
              </div>
            ))}
          </dl>
          <div className="mt-8 flex flex-wrap items-baseline gap-x-6 gap-y-2 border-t border-hairline pt-6">
            <span className="text-xs uppercase tracking-[0.3em] text-muted">
              Selected clients
            </span>
            {selectedClients.map((client) => (
              <span key={client} className="text-base text-ink">
                {client}
              </span>
            ))}
          </div>
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
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="font-serif text-3xl tracking-tight text-ink">News</h2>
          <Link
            href="/news"
            className="text-sm font-medium text-ink underline decoration-accent/60 underline-offset-4"
          >
            View all press releases
          </Link>
        </div>
        <ul className="grid gap-6 sm:grid-cols-2">
          {latestPressReleases.map((release) => (
            <li key={release.slug}>
              <article className="h-full rounded-3xl border border-hairline bg-surface p-6 shadow-sm">
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
                  {release.publishedLabel}
                </p>
                <h3 className="mt-2 font-serif text-2xl tracking-tight text-ink">
                  {release.title}
                </h3>
                <p className="mt-3 text-sm text-muted">{release.summary}</p>
                <Link
                  href={`/news/${release.slug}`}
                  className="mt-5 inline-flex items-center rounded-full border border-hairline bg-surface px-4 py-2 text-sm font-medium text-ink transition duration-150 ease-out hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#d1b59a]"
                >
                  Read release
                </Link>
              </article>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

import Link from "next/link";
import { TrackedLink } from "@/components/analytics/TrackedLink";
import { JsonLd } from "@/components/landing/JsonLd";
import { ProjectCard } from "@/components/ProjectCard";
import { newsItems, newsKindLabel } from "@/data/news";
import { orderedProjects } from "@/data/projects";
import { siteConfig } from "@/data/site";

export const revalidate = false;

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
      email: "info@37.technology",
      description: siteConfig.description,
      knowsAbout: [
        "iOS development",
        "Android development",
        "Web development",
        "Backend engineering",
        "Product strategy",
        "Software operations",
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
  const latestNewsItems = newsItems.slice(0, 2);

  return (
    <div className="space-y-16">
      <JsonLd data={structuredData} />
      <section className="space-y-5 sm:space-y-6">
        <p className="text-sm uppercase tracking-[0.3em] text-muted">
          Thirty Seven, Inc.
        </p>
        <h1 className="max-w-4xl font-serif text-4xl leading-tight tracking-tight text-ink sm:text-5xl">
          Thirty Seven builds software.
        </h1>
        <p className="max-w-2xl text-base text-muted sm:text-lg">
          We help founders and small teams turn clear ideas into shipped,
          dependable software. Our deepest experience is in iOS, with shipped
          work across Android, web, and backend systems.
        </p>
        <div className="flex flex-wrap gap-3 text-sm font-medium sm:gap-4">
          <Link
            href="/about"
            className="inline-flex items-center gap-2 rounded-full border border-hairline bg-surface px-4 py-2 transition duration-150 ease-out hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#d1b59a]"
          >
            About Thirty Seven
          </Link>
          <TrackedLink
            href="/contact"
            eventName="contact_cta_click"
            eventProperties={{ placement: "homepage_hero" }}
            className="inline-flex items-center gap-2 rounded-full bg-ink px-4 py-2 text-surface transition duration-150 ease-out hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#d1b59a]"
          >
            Discuss a project
          </TrackedLink>
        </div>
      </section>
      <section id="work" className="scroll-mt-24 space-y-6">
        <div className="flex flex-col items-start gap-2 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="font-serif text-3xl tracking-tight text-ink">
            Products we build and operate
          </h2>
        </div>
        <ul className="grid gap-6 sm:grid-cols-2">
          {orderedProjects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} priority={index < 2} />
          ))}
        </ul>
      </section>
      <section className="space-y-6">
        <div className="flex flex-col items-start gap-2 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="font-serif text-3xl tracking-tight text-ink">News</h2>
          <Link
            href="/news"
            className="text-sm font-medium text-ink underline decoration-accent/60 underline-offset-4"
          >
            View all news
          </Link>
        </div>
        <ul className="grid gap-6 sm:grid-cols-2">
          {latestNewsItems.map((item) => (
            <li key={item.slug}>
              <article className="h-full rounded-3xl border border-hairline bg-surface p-6 shadow-sm">
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
                  {newsKindLabel(item.kind)} / {item.publishedLabel}
                </p>
                <h3 className="mt-2 font-serif text-2xl tracking-tight text-ink">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm text-muted">{item.summary}</p>
                <Link
                  href={`/news/${item.slug}`}
                  className="mt-5 inline-flex items-center rounded-full border border-hairline bg-surface px-4 py-2 text-sm font-medium text-ink transition duration-150 ease-out hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#d1b59a]"
                >
                  {item.kind === "press-release" ? "Read release" : "Read article"}
                </Link>
              </article>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

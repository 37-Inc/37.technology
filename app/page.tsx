import type { Metadata } from "next";
import Link from "next/link";
import { TrackedLink } from "@/components/analytics/TrackedLink";
import { HomePortfolioOrbit } from "@/components/home/HomePortfolioOrbit";
import { HomeProjectCard } from "@/components/home/HomeProjectCard";
import { JsonLd } from "@/components/landing/JsonLd";
import { NewsMark } from "@/components/NewsMark";
import { newsItems, newsKindLabel } from "@/data/news";
import { orderedProjects } from "@/data/projects";
import { siteConfig } from "@/data/site";

export const revalidate = false;

export const metadata: Metadata = {
  title: {
    absolute: "Thirty Seven - Independent Software Company",
  },
  description:
    "Thirty Seven builds and operates software products and helps founders and small teams ship dependable iOS, Android, web, and backend systems.",
  alternates: {
    canonical: siteConfig.url,
  },
  openGraph: {
    title: "Thirty Seven - Independent Software Company",
    description:
      "We build and operate our own software portfolio, with deep iOS expertise and shipped work across Android, web, and backend systems.",
    type: "website",
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
      },
    ],
  },
};

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

const projectGridClasses = [
  "md:col-span-7",
  "md:col-span-5",
  "md:col-span-4",
  "md:col-span-4",
  "md:col-span-4",
  "md:col-span-6",
  "md:col-span-6",
];

const operatingPrinciples = [
  {
    number: "01",
    title: "Build",
    body: "Clear product decisions, platform-native implementation, and the discipline to finish.",
  },
  {
    number: "02",
    title: "Ship",
    body: "Real releases across iOS, Android, web, and the systems behind them.",
  },
  {
    number: "03",
    title: "Operate",
    body: "Support, reliability, store changes, pricing, and the next useful release.",
  },
];

export default function HomePage() {
  const latestNewsItems = newsItems.slice(0, 4);

  return (
    <div className="space-y-24 sm:space-y-32">
      <JsonLd data={structuredData} />

      <section className="home-hero relative overflow-hidden rounded-[2rem] border border-black/[0.06] px-4 py-8 shadow-soft sm:px-10 sm:py-12 lg:grid lg:min-h-[640px] lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:gap-12 lg:px-14">
        <div className="home-hero-grid" aria-hidden="true" />
        <div className="home-hero-wash" aria-hidden="true" />

        <div className="home-reveal relative z-10 max-w-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-muted sm:text-sm">
            Independent software company + consultancy
          </p>
          <h1 className="mt-6 font-serif text-5xl leading-[0.94] tracking-[-0.045em] text-ink sm:text-6xl lg:text-7xl">
            Thirty Seven
            <span className="block text-muted">builds software.</span>
          </h1>
          <p className="mt-7 max-w-lg text-base leading-relaxed text-muted sm:text-lg">
            We build and operate our own portfolio. We help founders and small
            teams turn clear ideas into shipped, dependable software.
          </p>

          <div className="mt-8 flex flex-wrap gap-3 text-sm font-semibold">
            <Link
              href="#work"
              className="inline-flex items-center rounded-full bg-ink px-5 py-2.5 text-surface transition duration-150 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2"
            >
              Explore the portfolio
            </Link>
            <TrackedLink
              href="/contact"
              eventName="contact_cta_click"
              eventProperties={{ placement: "homepage_hero" }}
              className="inline-flex items-center rounded-full border border-black/10 bg-white/70 px-5 py-2.5 text-ink backdrop-blur transition duration-150 hover:-translate-y-0.5 hover:border-black/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2"
            >
              Discuss a project
            </TrackedLink>
          </div>
        </div>

        <div className="home-reveal home-reveal-delay-1 relative z-10 mt-12 lg:mt-0">
          <HomePortfolioOrbit projects={orderedProjects} />
        </div>
      </section>

      <section id="work" className="scroll-mt-24">
        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-muted">
              The portfolio
            </p>
            <h2 className="mt-4 max-w-xl font-serif text-4xl leading-tight tracking-[-0.035em] text-ink sm:text-5xl">
              Software we own and operate.
            </h2>
          </div>
          <p className="max-w-2xl text-base leading-relaxed text-muted lg:justify-self-end lg:text-lg">
            A focused portfolio across communication, creativity, healthcare,
            research, and practical tools. Each product keeps its own identity;
            Thirty Seven provides the operating home behind it.
          </p>
        </div>

        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-12">
          {orderedProjects.map((project, index) => (
            <HomeProjectCard
              key={project.slug}
              project={project}
              index={index}
              prominent={index < 2}
              className={projectGridClasses[index]}
            />
          ))}
        </ul>
      </section>

      <section className="home-operating relative overflow-hidden rounded-[2rem] bg-[#20262d] px-5 py-8 text-white shadow-soft sm:px-8 sm:py-12 lg:px-12 lg:py-14">
        <div className="home-operating-orb" aria-hidden="true" />
        <div className="relative">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-end lg:gap-16">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/50">
                How we work
              </p>
              <h2 className="mt-4 max-w-xl font-serif text-4xl leading-tight tracking-[-0.035em] sm:text-5xl">
                The useful work continues after launch.
              </h2>
            </div>
            <div className="max-w-xl lg:justify-self-end">
              <p className="text-sm leading-relaxed text-white/65 sm:text-base">
                Operating our own products keeps engineering, product judgment,
                launch, and maintenance connected.
              </p>
              <Link
                href="/about"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white underline decoration-white/30 underline-offset-4 transition hover:decoration-white"
              >
                How Thirty Seven works <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </div>

          <ol className="mt-8 grid overflow-hidden rounded-2xl border border-white/15 sm:grid-cols-3 lg:mt-12">
            {operatingPrinciples.map((principle) => (
              <li
                key={principle.number}
                className="flex flex-col border-b border-white/15 bg-white/[0.025] p-5 last:border-b-0 sm:min-h-64 sm:border-b-0 sm:border-r sm:p-7 sm:last:border-r-0 lg:p-8"
              >
                <p className="text-xs font-semibold tracking-[0.18em] text-[#d1b59a]">
                  {principle.number}
                </p>
                <div className="mt-8 sm:mt-auto sm:pt-14">
                  <h3 className="font-serif text-3xl tracking-tight">
                    {principle.title}
                  </h3>
                  <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">
                    {principle.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section aria-labelledby="news-heading" className="grid gap-10 lg:grid-cols-[0.65fr_1.35fr] lg:gap-16">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-muted">
            From the company
          </p>
          <h2
            id="news-heading"
            className="mt-4 font-serif text-4xl tracking-[-0.035em] text-ink sm:text-5xl"
          >
            News &amp; Notes
          </h2>
          <p className="mt-4 max-w-sm text-base leading-relaxed text-muted">
            Product releases, operating decisions, and occasional notes when
            there is something useful to share.
          </p>
        </div>

        <ol className="border-t border-hairline">
          {latestNewsItems.map((item) => (
            <li key={item.slug} className="border-b border-hairline">
              <TrackedLink
                href={`/news/${item.slug}`}
                eventName="news_article_open"
                eventProperties={{
                  placement: "homepage_news",
                  slug: item.slug,
                }}
                className="group grid gap-4 py-6 transition sm:grid-cols-[auto_1fr_auto] sm:items-center sm:gap-5 sm:py-7"
              >
                <NewsMark projectSlug={item.projectSlug} />
                <div>
                  <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-muted">
                    {newsKindLabel(item.kind)} / {item.publishedLabel}
                  </p>
                  <h3 className="mt-2 font-serif text-2xl leading-tight tracking-tight text-ink transition group-hover:text-black/65">
                    {item.title}
                  </h3>
                  <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">
                    {item.summary}
                  </p>
                </div>
                <span
                  aria-hidden="true"
                  className="hidden size-10 items-center justify-center rounded-full border border-hairline text-lg text-ink transition group-hover:translate-x-1 sm:inline-flex"
                >
                  &rarr;
                </span>
              </TrackedLink>
            </li>
          ))}
          <li className="border-b border-hairline">
            <Link
              href="/news"
              className="group flex items-center justify-between gap-6 py-5 text-ink transition hover:text-black/65"
            >
              <span>
                <span className="block text-sm font-semibold">
                  View all News &amp; Notes
                </span>
                <span className="mt-1 block text-xs font-normal text-muted">
                  Product updates, company history, and press releases.
                </span>
              </span>
              <span
                aria-hidden="true"
                className="inline-flex size-10 shrink-0 items-center justify-center rounded-full bg-ink text-lg text-white transition group-hover:translate-x-1"
              >
                &rarr;
              </span>
            </Link>
          </li>
        </ol>
      </section>

      <section className="home-contact-panel relative overflow-hidden rounded-[2rem] border border-black/[0.06] px-6 py-10 sm:px-10 sm:py-12 lg:flex lg:items-end lg:justify-between lg:gap-12">
        <div className="home-contact-grid" aria-hidden="true" />
        <div className="relative max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-muted">
            Selected client work
          </p>
          <h2 className="mt-4 font-serif text-4xl leading-tight tracking-[-0.035em] text-ink sm:text-5xl">
            Have something useful to build?
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-muted">
            Our deepest experience is in native iOS, with shipped work across
            Android, web, backend systems, and the practical work after launch.
          </p>
        </div>
        <TrackedLink
          href="/contact"
          eventName="contact_cta_click"
          eventProperties={{ placement: "homepage_footer" }}
          className="relative mt-8 inline-flex shrink-0 items-center rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-surface transition duration-150 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 lg:mt-0"
        >
          Start a conversation
        </TrackedLink>
      </section>
    </div>
  );
}

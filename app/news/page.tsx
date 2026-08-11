import type { Metadata } from "next";
import { TrackedLink } from "@/components/analytics/TrackedLink";
import { JsonLd } from "@/components/landing/JsonLd";
import { NewsMark } from "@/components/NewsMark";
import {
  newsDisplayDate,
  newsItems,
  newsKindLabel,
} from "@/data/news";
import { getProjectBySlug } from "@/data/projects";
import { siteConfig } from "@/data/site";

export const revalidate = false;

export const metadata: Metadata = {
  title: { absolute: "News & Notes | Thirty Seven" },
  description:
    "Product launches, company history, press releases, and operating notes from Thirty Seven, an independent software company.",
  keywords: [
    "Thirty Seven software",
    "independent software company",
    "software product launches",
    "app company news",
  ],
  alternates: {
    canonical: `${siteConfig.url}/news`,
  },
  openGraph: {
    title: "News & Notes | Thirty Seven",
    description:
      "Product launches, company history, press releases, and operating notes from Thirty Seven.",
    url: `${siteConfig.url}/news`,
    type: "website",
    images: [siteConfig.ogImage],
  },
};

export default function NewsPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "News & Notes",
    description:
      "Product launches, company history, press releases, and operating notes from Thirty Seven.",
    url: `${siteConfig.url}/news`,
    isPartOf: {
      "@type": "WebSite",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: newsItems.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.title,
        url: `${siteConfig.url}/news/${item.slug}`,
      })),
    },
  };

  return (
    <div className="space-y-12 sm:space-y-16">
      <JsonLd data={structuredData} />
      <section className="relative isolate overflow-hidden rounded-[2rem] border border-hairline bg-[#20262d] px-6 py-10 text-white shadow-[0_24px_70px_rgba(32,38,45,0.12)] sm:px-10 sm:py-14">
        <div
          aria-hidden="true"
          className="absolute -right-20 -top-28 size-72 rounded-full border-[52px] border-[#4ebce8] opacity-10"
        />
        <div className="relative max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/55">
            Newsroom
          </p>
          <h1 className="mt-4 font-serif text-5xl tracking-tight sm:text-6xl">
            News & Notes
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-white/70">
            Product launches, company history, press releases, and practical notes
            from Thirty Seven.
          </p>
        </div>
      </section>

      <ul className="grid gap-6">
        {newsItems.map((item) => {
          const project = item.projectSlug
            ? getProjectBySlug(item.projectSlug)
            : undefined;
          const accent = project?.theme.accent ?? "#258db4";
          const accentSoft = project?.theme.accentSoft ?? "#f4f6f7";

          return (
            <li key={item.slug}>
              <article
                className="group relative isolate overflow-hidden rounded-[2rem] border border-hairline p-6 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_20px_50px_rgba(32,38,45,0.09)] sm:p-8"
                style={{
                  background: `linear-gradient(120deg, ${accentSoft} 0%, #ffffff 74%)`,
                }}
              >
                <div
                  aria-hidden="true"
                  className="absolute -right-16 -top-20 size-48 rounded-full border-[34px] opacity-[0.07]"
                  style={{ borderColor: accent }}
                />
                <div className="relative flex flex-col items-start gap-5 sm:flex-row sm:gap-6">
                  <NewsMark projectSlug={item.projectSlug} size="large" />
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
                        {newsKindLabel(item.kind)} / {newsDisplayDate(item)}
                      </p>
                      {item.updatedLabel ? (
                        <span className="rounded-full border border-black/10 bg-white/60 px-2.5 py-1 text-[0.68rem] font-medium uppercase tracking-[0.14em] text-muted">
                          Updated {item.updatedLabel}
                        </span>
                      ) : null}
                    </div>
                    <h2 className="mt-3 max-w-4xl font-serif text-2xl tracking-tight text-ink sm:text-3xl">
                      {item.title}
                    </h2>
                    <p className="mt-3 max-w-3xl text-base leading-7 text-muted">
                      {item.summary}
                    </p>
                    <TrackedLink
                      href={`/news/${item.slug}`}
                      eventName="news_article_open"
                      eventProperties={{
                        placement: "news_index",
                        slug: item.slug,
                      }}
                      className="mt-6 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/75 px-4 py-2 text-sm font-semibold text-ink shadow-sm transition duration-150 ease-out group-hover:border-black/20 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#d1b59a]"
                    >
                      {item.kind === "press-release" ? "Read release" : "Read article"}
                      <span aria-hidden="true">→</span>
                    </TrackedLink>
                  </div>
                </div>
              </article>
            </li>
          );
        })}
      </ul>

      <section className="flex flex-col gap-4 rounded-3xl border border-hairline bg-surface p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
        <div>
          <h2 className="font-serif text-2xl tracking-tight text-ink">
            Press materials or an interview?
          </h2>
          <p className="mt-1 text-sm leading-6 text-muted">
            Send a short note and tell us what would be useful.
          </p>
        </div>
        <TrackedLink
          href="/contact?type=press"
          eventName="contact_cta_click"
          eventProperties={{ placement: "news_footer" }}
          className="inline-flex shrink-0 items-center justify-center rounded-full bg-ink px-5 py-3 text-sm font-semibold text-surface transition hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#d1b59a]"
        >
          Send a press inquiry
        </TrackedLink>
      </section>
    </div>
  );
}

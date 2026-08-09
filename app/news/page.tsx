import type { Metadata } from "next";
import Link from "next/link";
import { NewsMark } from "@/components/NewsMark";
import { TrackedLink } from "@/components/analytics/TrackedLink";
import { newsItems, newsKindLabel } from "@/data/news";
import { siteConfig } from "@/data/site";

export const revalidate = false;

export const metadata: Metadata = {
  title: "News",
  description:
    "Product updates, press releases, and company notes from Thirty Seven, Inc.",
  alternates: {
    canonical: `${siteConfig.url}/news`,
  },
};

export default function NewsPage() {
  return (
    <div className="space-y-10">
      <section className="space-y-4">
        <p className="text-sm uppercase tracking-[0.3em] text-muted">Newsroom</p>
        <h1 className="font-serif text-5xl tracking-tight text-ink">
          News & Notes
        </h1>
        <p className="max-w-2xl text-lg text-muted">
          Product updates, press releases, and occasional notes from Thirty Seven.
        </p>
      </section>

      <ul className="grid gap-6">
        {newsItems.map((item) => (
          <li key={item.slug}>
            <article className="rounded-3xl border border-hairline bg-surface p-6 shadow-sm">
              <div className="flex flex-col items-start gap-4 sm:flex-row sm:gap-5">
                <NewsMark projectSlug={item.projectSlug} />
                <div className="min-w-0">
                  <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
                    {newsKindLabel(item.kind)} / {item.publishedLabel}
                  </p>
                  <h2 className="mt-2 font-serif text-2xl tracking-tight text-ink">
                    {item.title}
                  </h2>
                  <p className="mt-3 max-w-3xl text-base text-muted">
                    {item.summary}
                  </p>
                  <Link
                    href={`/news/${item.slug}`}
                    className="mt-5 inline-flex items-center gap-2 rounded-full border border-hairline bg-surface px-4 py-2 text-sm font-medium text-ink transition duration-150 ease-out hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#d1b59a]"
                  >
                    {item.kind === "press-release" ? "Read release" : "Read article"}
                  </Link>
                </div>
              </div>
            </article>
          </li>
        ))}
      </ul>

      <p className="text-sm text-muted">
        Need press materials or interviews?{" "}
        <TrackedLink
          href="/contact?type=press"
          eventName="contact_cta_click"
          eventProperties={{ placement: "news_footer" }}
          className="font-medium text-ink underline decoration-accent/60 underline-offset-4"
        >
          Send a press inquiry
        </TrackedLink>
      </p>
    </div>
  );
}

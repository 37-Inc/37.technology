import type { Metadata } from "next";
import Link from "next/link";
import { pressReleases } from "@/data/press-releases";
import { siteConfig } from "@/data/site";

export const revalidate = false;

export const metadata: Metadata = {
  title: "News",
  description: "Press releases and product announcements from Thirty Seven, Inc.",
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
          Press Releases
        </h1>
        <p className="max-w-2xl text-lg text-muted">
          Official company and product announcements from Thirty Seven, Inc.
        </p>
      </section>

      <ul className="grid gap-6">
        {pressReleases.map((release) => (
          <li key={release.slug}>
            <article className="rounded-3xl border border-hairline bg-surface p-6 shadow-sm">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
                {release.publishedLabel}
              </p>
              <h2 className="mt-2 font-serif text-2xl tracking-tight text-ink">
                {release.title}
              </h2>
              <p className="mt-3 max-w-3xl text-base text-muted">{release.summary}</p>
              <Link
                href={release.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 rounded-full border border-hairline bg-surface px-4 py-2 text-sm font-medium text-ink transition duration-150 ease-out hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#d1b59a]"
              >
                Read release
              </Link>
            </article>
          </li>
        ))}
      </ul>

      <p className="text-sm text-muted">
        Need press materials or interviews?{" "}
        <a
          href="mailto:press@37.technology"
          className="font-medium text-ink underline decoration-accent/60 underline-offset-4"
        >
          Contact press@37.technology
        </a>
      </p>
    </div>
  );
}

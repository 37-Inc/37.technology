import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { TrackedLink } from "@/components/analytics/TrackedLink";
import { JsonLd } from "@/components/landing/JsonLd";
import { NewsMark } from "@/components/NewsMark";
import {
  getNewsItemBySlug,
  newsDisplayDate,
  newsItems,
  newsKindLabel,
} from "@/data/news";
import { getProjectBySlug } from "@/data/projects";
import { siteConfig } from "@/data/site";
import { getNewsMarkdown } from "@/lib/news";
import { cn } from "@/lib/utils";

interface NewsArticlePageProps {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = false;
export const revalidate = false;

export function generateStaticParams() {
  return newsItems.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: NewsArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const item = getNewsItemBySlug(slug);

  if (!item) {
    return {};
  }

  const canonical = `${siteConfig.url}/news/${item.slug}`;
  const title = item.seoTitle ?? item.title;
  const description = item.seoDescription ?? item.summary;

  return {
    title: { absolute: title },
    description,
    keywords: item.keywords,
    alternates: {
      canonical,
    },
    openGraph: {
      title,
      description,
      type: "article",
      url: canonical,
      siteName: siteConfig.name,
      publishedTime: item.publishAt,
      modifiedTime: item.updatedAt ?? item.publishAt,
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [siteConfig.ogImage],
    },
  };
}

export default async function NewsArticlePage({ params }: NewsArticlePageProps) {
  const { slug } = await params;
  const item = getNewsItemBySlug(slug);

  if (!item) {
    notFound();
  }

  let markdown = "";

  try {
    markdown = await getNewsMarkdown(slug);
  } catch {
    notFound();
  }

  const project = item.projectSlug
    ? getProjectBySlug(item.projectSlug)
    : undefined;
  const screenshot = project?.screenshots?.[0];
  const markdownBody = markdown.replace(/^# .+\n+/, "");
  const canonical = `${siteConfig.url}/news/${item.slug}`;
  const articleSchema = {
    "@type": item.kind === "press-release" ? "NewsArticle" : "Article",
    "@id": `${canonical}#article`,
    headline: item.title,
    description: item.seoDescription ?? item.summary,
    datePublished: item.publishAt,
    dateModified: item.updatedAt ?? item.publishAt,
    inLanguage: "en-US",
    image: siteConfig.ogImage,
    mainEntityOfPage: canonical,
    ...(item.eventAt
      ? {
          temporalCoverage: item.eventAt.slice(0, 10),
        }
      : {}),
    ...(item.keywords ? { keywords: item.keywords.join(", ") } : {}),
    ...(item.sources ? { citation: item.sources.map((source) => source.url) } : {}),
    ...(project
      ? {
          about: {
            "@type": "SoftwareApplication",
            name: project.name,
            url: `${siteConfig.url}/${project.slug}`,
          },
        }
      : {}),
    author: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    isPartOf: {
      "@type": "CollectionPage",
      name: "News & Notes",
      url: `${siteConfig.url}/news`,
    },
  };
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      articleSchema,
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: siteConfig.url,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "News & Notes",
            item: `${siteConfig.url}/news`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: item.title,
            item: canonical,
          },
        ],
      },
      ...(item.faqs
        ? [
            {
              "@type": "FAQPage",
              mainEntity: item.faqs.map((faq) => ({
                "@type": "Question",
                name: faq.question,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: faq.answer,
                },
              })),
            },
          ]
        : []),
    ],
  };
  const accent = project?.theme.accent ?? "#258db4";
  const accentSoft = project?.theme.accentSoft ?? "#edf7fa";

  return (
    <article className="space-y-12 sm:space-y-16">
      <JsonLd data={structuredData} />

      <header
        className="relative isolate overflow-hidden rounded-[2rem] border border-hairline px-6 py-8 shadow-[0_24px_70px_rgba(32,38,45,0.08)] sm:px-10 sm:py-12 lg:px-14"
        style={{
          background: `linear-gradient(135deg, ${accentSoft} 0%, #fffdf9 58%, #ffffff 100%)`,
        }}
      >
        <div
          aria-hidden="true"
          className="absolute -right-24 -top-28 size-72 rounded-full border-[52px] opacity-[0.08]"
          style={{ borderColor: accent }}
        />
        <div className="relative grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_18rem]">
          <div>
            <Link
              href="/news"
              className="inline-flex items-center gap-2 text-sm font-medium text-ink underline decoration-accent/60 underline-offset-4"
            >
              <span aria-hidden="true">←</span> News & Notes
            </Link>
            <div className="mt-8 flex items-center gap-4">
              <NewsMark projectSlug={item.projectSlug} size="large" />
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted">
                  {newsKindLabel(item.kind)}
                </p>
                <p className="mt-1 text-sm text-muted">{newsDisplayDate(item)}</p>
              </div>
            </div>
            <h1 className="mt-7 max-w-4xl font-serif text-4xl tracking-tight text-ink sm:text-5xl lg:text-6xl">
              {item.title}
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-muted sm:text-xl">
              {item.summary}
            </p>
            {item.updatedLabel ? (
              <p className="mt-6 text-xs font-medium uppercase tracking-[0.18em] text-muted">
                Updated {item.updatedLabel}
              </p>
            ) : null}
          </div>

          <div className="relative hidden min-h-72 items-center justify-center lg:flex">
            {screenshot ? (
              <div className="relative h-72 w-40 overflow-hidden rounded-[2rem] border-[7px] border-[#20262d] bg-white shadow-2xl">
                <Image
                  src={screenshot.src}
                  alt={`${project?.name ?? item.title} app today`}
                  fill
                  sizes="160px"
                  className="object-contain object-top"
                />
              </div>
            ) : (
              <div className="scale-[1.8]">
                <NewsMark projectSlug={item.projectSlug} size="large" />
              </div>
            )}
          </div>
        </div>
      </header>

      {item.highlights ? (
        <dl className="grid overflow-hidden rounded-3xl border border-hairline bg-surface shadow-sm sm:grid-cols-3">
          {item.highlights.map((highlight, index) => (
            <div
              key={highlight.label}
              className={cn(
                "px-6 py-6 sm:px-8",
                index > 0 && "border-t border-hairline sm:border-l sm:border-t-0"
              )}
            >
              <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
                {highlight.label}
              </dt>
              <dd className="mt-2 font-serif text-2xl tracking-tight text-ink">
                {highlight.value}
              </dd>
            </div>
          ))}
        </dl>
      ) : null}

      <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_19rem] lg:gap-12">
        <div className="rounded-[2rem] border border-hairline bg-surface p-6 shadow-sm sm:p-10 lg:p-12">
          <div
            className={cn(
              "text-[1.04rem] leading-8 text-ink",
              "[&_h1]:mt-10 [&_h1]:font-serif [&_h1]:text-4xl [&_h1]:tracking-tight [&_h1]:text-ink",
              "[&_h2]:mb-3 [&_h2]:mt-12 [&_h2]:font-serif [&_h2]:text-3xl [&_h2]:tracking-tight [&_h2]:text-ink",
              "[&_h3]:mt-9 [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:text-ink",
              "[&_p]:mt-5 [&_p]:text-ink",
              "[&_ul]:mt-5 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6",
              "[&_ol]:mt-5 [&_ol]:list-decimal [&_ol]:space-y-2 [&_ol]:pl-6",
              "[&_blockquote]:my-8 [&_blockquote]:border-l-2 [&_blockquote]:border-accent [&_blockquote]:pl-5 [&_blockquote]:font-serif [&_blockquote]:text-2xl",
              "[&_hr]:my-10 [&_hr]:border-hairline",
              "[&_strong]:font-semibold [&_strong]:text-ink",
              "[&_em]:text-muted"
            )}
          >
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                a: ({ className, href = "", ...props }) => {
                  const isExternal =
                    href.startsWith("http://") ||
                    href.startsWith("https://") ||
                    href.startsWith("mailto:");
                  return (
                    <a
                      href={href}
                      className={cn(
                        "font-medium text-ink underline decoration-accent/60 underline-offset-4",
                        className
                      )}
                      target={isExternal ? "_blank" : undefined}
                      rel={isExternal ? "noopener noreferrer" : undefined}
                      {...props}
                    />
                  );
                },
              }}
            >
              {markdownBody}
            </ReactMarkdown>
          </div>
        </div>

        <aside className="space-y-8 lg:pt-4">
          {item.sources ? (
            <section>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted">
                Sources & references
              </p>
              <ul className="mt-3 space-y-1.5">
                {item.sources.map((source) => (
                  <li key={source.url}>
                    <a
                      href={source.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-start gap-3 rounded-xl px-2 py-2 text-sm leading-5 text-ink transition-colors hover:bg-black/[0.035]"
                    >
                      <span className="underline decoration-hairline underline-offset-4 group-hover:decoration-current">
                        {source.label}
                      </span>
                      <span
                        aria-hidden="true"
                        className="ml-auto mt-px shrink-0 text-muted"
                      >
                        ↗
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          ) : null}

          {project ? (
            <section
              className="rounded-3xl border border-hairline p-5 sm:p-6"
              style={{ backgroundColor: accentSoft }}
            >
              <NewsMark projectSlug={project.slug} />
              <p className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-muted">
                Current product
              </p>
              <h2 className="mt-2 font-serif text-2xl text-ink">{project.name}</h2>
              <p className="mt-2 text-sm leading-5 text-muted">{project.oneLiner}</p>
              <TrackedLink
                href={`/${project.slug}`}
                eventName="project_open"
                eventProperties={{
                  placement: "news_article",
                  project: project.slug,
                }}
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-ink underline decoration-current/30 underline-offset-4"
              >
                View {project.name} <span aria-hidden="true">→</span>
              </TrackedLink>
            </section>
          ) : null}
        </aside>
      </div>

      {item.faqs ? (
        <section className="rounded-[2rem] bg-[#20262d] px-6 py-8 text-white sm:px-9 sm:py-10">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/55">
            Quick answers
          </p>
          <h2 className="mt-2 font-serif text-3xl tracking-tight sm:text-4xl">
            About {project?.name ?? "this update"}
          </h2>
          <div
            className={cn(
              "mt-6 grid gap-px overflow-hidden rounded-2xl bg-white/15",
              item.faqs.length === 3 ? "md:grid-cols-3" : "md:grid-cols-2"
            )}
          >
            {item.faqs.map((faq) => (
              <div key={faq.question} className="bg-[#20262d] p-5 sm:p-6">
                <h3 className="text-balance font-serif text-lg leading-[1.15] sm:text-xl">
                  {faq.question}
                </h3>
                <p className="mt-2 text-sm leading-5 text-white/70">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>
      ) : null}
    </article>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { JsonLd } from "@/components/landing/JsonLd";
import { NewsMark } from "@/components/NewsMark";
import { getNewsItemBySlug, newsItems, newsKindLabel } from "@/data/news";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";
import { getNewsMarkdown } from "@/lib/news";

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

  return {
    title: `${item.title} | News`,
    description: item.summary,
    alternates: {
      canonical,
    },
    openGraph: {
      title: item.title,
      description: item.summary,
      type: "article",
      url: canonical,
      siteName: siteConfig.name,
      publishedTime: item.publishAt,
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
      title: item.title,
      description: item.summary,
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

  const markdownBody = markdown.replace(/^# .+\n+/, "");
  const canonical = `${siteConfig.url}/news/${item.slug}`;
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: item.title,
    description: item.summary,
    datePublished: item.publishAt,
    dateModified: item.publishAt,
    image: siteConfig.ogImage,
    mainEntityOfPage: canonical,
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
  };

  return (
    <article className="space-y-8">
      <JsonLd data={structuredData} />
      <div className="space-y-4">
        <Link
          href="/news"
          className="inline-flex items-center gap-2 text-sm font-medium text-ink underline decoration-accent/60 underline-offset-4"
        >
          Back to News
        </Link>
        <div className="flex flex-col items-start gap-5 sm:flex-row sm:items-center">
          <NewsMark projectSlug={item.projectSlug} size="large" />
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-muted">
              {newsKindLabel(item.kind)} / {item.publishedLabel}
            </p>
            <h1 className="mt-3 max-w-4xl font-serif text-4xl tracking-tight text-ink sm:text-5xl">
              {item.title}
            </h1>
          </div>
        </div>
        <p className="max-w-3xl text-lg text-muted">{item.summary}</p>
      </div>

      <div className="rounded-3xl border border-hairline bg-surface p-6 shadow-sm sm:p-10">
        <div
          className={cn(
            "text-[1.03rem] leading-8 text-ink",
            "[&_h1]:mt-8 [&_h1]:font-serif [&_h1]:text-4xl [&_h1]:tracking-tight [&_h1]:text-ink",
            "[&_h2]:mt-8 [&_h2]:font-serif [&_h2]:text-3xl [&_h2]:tracking-tight [&_h2]:text-ink",
            "[&_h3]:mt-8 [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:text-ink",
            "[&_p]:mt-4 [&_p]:text-ink",
            "[&_ul]:mt-4 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6",
            "[&_ol]:mt-4 [&_ol]:list-decimal [&_ol]:space-y-2 [&_ol]:pl-6",
            "[&_hr]:my-8 [&_hr]:border-hairline",
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
    </article>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { getPressReleaseBySlug, pressReleases } from "@/data/press-releases";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";
import { getPressReleaseMarkdown } from "@/lib/press-releases";

interface PressReleasePageProps {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = false;
export const revalidate = false;

export function generateStaticParams() {
  return pressReleases.map((release) => ({ slug: release.slug }));
}

export async function generateMetadata({
  params,
}: PressReleasePageProps): Promise<Metadata> {
  const { slug } = await params;
  const release = getPressReleaseBySlug(slug);

  if (!release) {
    return {};
  }

  const canonical = `${siteConfig.url}/news/${release.slug}`;

  return {
    title: `${release.title} | News`,
    description: release.summary,
    alternates: {
      canonical,
    },
    openGraph: {
      title: release.title,
      description: release.summary,
      type: "article",
      url: canonical,
      siteName: siteConfig.name,
    },
    twitter: {
      card: "summary_large_image",
      title: release.title,
      description: release.summary,
    },
  };
}

export default async function PressReleasePage({ params }: PressReleasePageProps) {
  const { slug } = await params;
  const release = getPressReleaseBySlug(slug);

  if (!release) {
    notFound();
  }

  let markdown = "";

  try {
    markdown = await getPressReleaseMarkdown(slug);
  } catch {
    notFound();
  }

  const markdownBody = markdown.replace(/^# .+\n+/, "");

  return (
    <article className="space-y-8">
      <div className="space-y-4">
        <Link
          href="/news"
          className="inline-flex items-center gap-2 text-sm font-medium text-ink underline decoration-accent/60 underline-offset-4"
        >
          Back to News
        </Link>
        <p className="text-xs uppercase tracking-[0.3em] text-muted">
          {release.publishedLabel}
        </p>
        <h1 className="max-w-4xl font-serif text-5xl tracking-tight text-ink">
          {release.title}
        </h1>
        <p className="max-w-3xl text-lg text-muted">{release.summary}</p>
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

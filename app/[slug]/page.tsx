import type { Metadata } from "next";
import type { CSSProperties } from "react";
import { notFound } from "next/navigation";
import { TrackedLink } from "@/components/analytics/TrackedLink";
import { Breadcrumbs } from "@/components/landing/Breadcrumbs";
import { ComparisonTable } from "@/components/landing/ComparisonTable";
import { FaqList } from "@/components/landing/FaqList";
import { FeatureGrid } from "@/components/landing/FeatureGrid";
import { FinalCta } from "@/components/landing/FinalCta";
import { JsonLd } from "@/components/landing/JsonLd";
import { LandingHero } from "@/components/landing/LandingHero";
import { ProblemSolution } from "@/components/landing/ProblemSolution";
import { ProjectOptions } from "@/components/landing/ProjectOptions";
import { ProjectSpotlight } from "@/components/landing/ProjectSpotlight";
import { ScreenshotStrip } from "@/components/landing/ScreenshotStrip";
import { UseCaseList } from "@/components/landing/UseCaseList";
import {
  buildBreadcrumbLd,
  buildFaqLd,
  buildSoftwareApplicationLd,
} from "@/components/landing/structured-data";
import { projects, getProjectBySlug } from "@/data/projects";
import { siteConfig } from "@/data/site";
import { getNewsItemBySlug } from "@/data/news";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export const dynamicParams = false;
export const revalidate = false;

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {};
  }

  const title = project.seo.title;
  const description = project.seo.description;
  const canonical = `${siteConfig.url}/${project.slug}`;
  const ogUrl = `${siteConfig.url}/api/og?slug=${project.slug}`;

  return {
    // absolute: the hand-tuned SEO title is already complete; the root
    // layout's "%s · Thirty Seven, Inc." template would push it past ~60 chars
    title: { absolute: title },
    description,
    keywords: project.keywords,
    alternates: {
      canonical,
    },
    openGraph: {
      title,
      description,
      type: "website",
      url: canonical,
      siteName: siteConfig.name,
      images: [
        {
          url: ogUrl,
          width: 1200,
          height: 630,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogUrl],
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const themeVars = {
    "--pa": project.theme.accent,
    "--pa-soft": project.theme.accentSoft,
    "--pa-ink": project.theme.accentInk,
  } as CSSProperties;
  const relatedArticle = project.newsSlug
    ? getNewsItemBySlug(project.newsSlug)
    : undefined;

  return (
    <article style={themeVars} className="space-y-16">
      <JsonLd data={buildSoftwareApplicationLd(project)} />
      <JsonLd data={buildBreadcrumbLd(project)} />
      {project.faqs.length > 0 ? <JsonLd data={buildFaqLd(project.faqs)} /> : null}

      <div className="space-y-8">
        <Breadcrumbs current={project.name} />
        <LandingHero project={project} />
      </div>

      <ProblemSolution problem={project.problem} solution={project.solution} />
      <ProjectOptions options={project.options} />
      <FeatureGrid features={project.features} />
      <ScreenshotStrip name={project.name} screenshots={project.screenshots} />
      <ProjectSpotlight spotlight={project.spotlight} />
      <UseCaseList useCases={project.useCases} />
      <ComparisonTable name={project.name} comparison={project.comparison} />
      <FaqList faqs={project.faqs} />
      {project.resources?.length ? (
        <section aria-labelledby="product-resources" className="rounded-3xl border border-hairline bg-surface p-6 sm:p-8">
          <h2 id="product-resources" className="font-serif text-2xl leading-tight text-ink">
            Setup, support, and the details
          </h2>
          <ul className="mt-5 flex flex-wrap gap-x-6 gap-y-4 text-sm font-medium text-ink">
            {project.resources.map((resource) => (
              <li key={resource.url}>
                <a href={resource.url} target="_blank" rel="noopener noreferrer" className="underline decoration-hairline underline-offset-4 hover:decoration-ink">
                  {resource.label}
                </a>
              </li>
            ))}
          </ul>
        </section>
      ) : null}
      {relatedArticle ? (
        <section className="rounded-3xl border border-hairline bg-[var(--pa-soft)] p-6 sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--pa-ink)]">From Thirty Seven</p>
          <h2 className="mt-3 text-balance font-serif text-3xl leading-tight text-ink">{relatedArticle.title}</h2>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted">{relatedArticle.summary}</p>
          <TrackedLink href={`/news/${relatedArticle.slug}`} eventName="news_article_open" eventProperties={{ slug: relatedArticle.slug, placement: "project_page" }} className="mt-5 inline-flex text-sm font-semibold text-ink underline decoration-current/30 underline-offset-4">
            Read the story <span aria-hidden="true" className="ml-2">&rarr;</span>
          </TrackedLink>
        </section>
      ) : null}
      <FinalCta project={project} />
    </article>
  );
}

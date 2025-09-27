import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { PlatformButtons } from "@/components/PlatformButtons";
import { projects, getProjectBySlug } from "@/data/projects";
import { siteConfig } from "@/data/site";

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

  const title = `${project.name}`;
  const description = project.oneLiner;
  const canonical = `${siteConfig.url}/${project.slug}`;
  const ogUrl = `${siteConfig.url}/api/og?slug=${project.slug}`;

  return {
    title,
    description,
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

  return (
    <article className="space-y-12">
      <header className="space-y-6">
        <div className="flex flex-wrap items-center gap-6">
          <div className="relative h-20 w-20 overflow-hidden rounded-3xl border border-hairline bg-background">
            <Image
              src={project.hero}
              alt={`${project.name} icon`}
              width={160}
              height={160}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="space-y-3">
            <p className="text-sm uppercase tracking-[0.3em] text-muted">
              Thirty Seven, Inc.
            </p>
            <h1 className="font-serif text-5xl tracking-tight text-ink">
              {project.name}
            </h1>
          </div>
        </div>
        <p className="max-w-2xl text-lg text-muted">{project.description}</p>
        <ul className="flex flex-wrap gap-3">
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full border border-hairline bg-surface/80 px-3 py-1 text-xs font-medium uppercase tracking-wide text-muted"
            >
              {tag}
            </li>
          ))}
        </ul>
        <PlatformButtons platforms={project.platforms} />
      </header>
      {project.highlights?.length || project.screenshots?.length ? (
        <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          {project.highlights?.length ? (
            <div className="rounded-3xl border border-hairline bg-surface/80 p-8 shadow-sm">
              <h2 className="font-serif text-2xl tracking-tight text-ink">
                Why it matters
              </h2>
              <ul className="mt-4 space-y-3 text-base text-ink">
                {project.highlights.map((highlight) => (
                  <li key={highlight} className="flex items-start gap-3">
                    <span className="mt-1 inline-block h-1.5 w-8 rounded-full bg-accent/60" aria-hidden />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
          {project.screenshots?.length ? (
            <div className="rounded-3xl border border-hairline bg-surface/60 p-6 shadow-sm">
              <p className="mb-4 text-sm uppercase tracking-[0.3em] text-muted">
                In product
              </p>
              <div className="grid gap-4">
                {project.screenshots.map((src, index) => (
                  <div
                    key={src}
                    className="overflow-hidden rounded-2xl border border-hairline bg-background"
                  >
                    <Image
                      src={src}
                      alt={`${project.name} screenshot ${index + 1}`}
                      width={1200}
                      height={800}
                      className="h-auto w-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="rounded-3xl border border-dashed border-hairline bg-surface/40 p-8 text-muted">
              <p className="text-sm uppercase tracking-[0.3em]">Snapshots</p>
              <p className="mt-4 leading-relaxed">
                Drop your latest screenshots here. Replace the placeholder assets in
                <code className="mx-1 rounded bg-background px-2 py-1 text-xs">/public/assets</code>
                to showcase current visuals.
              </p>
            </div>
          )}
        </section>
      ) : null}
    </article>
  );
}

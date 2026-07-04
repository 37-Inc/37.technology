import type { Feature } from "@/data/projects";
import { SectionHeading } from "./SectionHeading";

interface FeatureGridProps {
  features: Feature[];
}

export function FeatureGrid({ features }: FeatureGridProps) {
  if (features.length === 0) {
    return null;
  }

  return (
    <section aria-labelledby="features-heading" className="space-y-6">
      <SectionHeading
        id="features-heading"
        eyebrow="Features"
        title="What it does"
      />
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => (
          <li
            key={feature.title}
            className="rounded-3xl border border-hairline bg-surface p-6 shadow-sm"
          >
            <span
              aria-hidden
              className="inline-block h-1.5 w-8 rounded-full bg-[var(--pa)]"
            />
            <h3 className="mt-3 text-base font-semibold tracking-tight text-ink">
              {feature.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              {feature.body}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}

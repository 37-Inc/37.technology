import type { UseCase } from "@/data/projects";
import { SectionHeading } from "./SectionHeading";

interface UseCaseListProps {
  useCases?: UseCase[];
}

export function UseCaseList({ useCases }: UseCaseListProps) {
  if (!useCases || useCases.length === 0) {
    return null;
  }

  return (
    <section aria-labelledby="use-cases-heading" className="space-y-6">
      <SectionHeading
        id="use-cases-heading"
        eyebrow="Use cases"
        title="Where it fits"
      />
      <ul className="grid gap-x-8 gap-y-6 sm:grid-cols-2">
        {useCases.map((useCase) => (
          <li key={useCase.title} className="flex items-start gap-3">
            <span
              aria-hidden
              className="mt-2.5 inline-block h-1.5 w-6 shrink-0 rounded-full bg-[var(--pa)]"
            />
            <div>
              <h3 className="text-base font-semibold tracking-tight text-ink">
                {useCase.title}
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-muted">
                {useCase.body}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

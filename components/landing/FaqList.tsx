import type { Faq } from "@/data/projects";
import { SectionHeading } from "./SectionHeading";

interface FaqListProps {
  faqs: Faq[];
}

export function FaqList({ faqs }: FaqListProps) {
  if (faqs.length === 0) {
    return null;
  }

  return (
    <section aria-labelledby="faq-heading" className="space-y-6">
      <SectionHeading
        id="faq-heading"
        eyebrow="FAQ"
        title="Frequently asked questions"
      />
      <div className="space-y-3">
        {faqs.map((faq) => (
          <details
            key={faq.question}
            className="group rounded-2xl border border-hairline bg-surface px-6 py-4 shadow-sm"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 rounded-lg text-base font-medium text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#d1b59a] [&::-webkit-details-marker]:hidden">
              <span>{faq.question}</span>
              <span
                aria-hidden
                className="text-xl leading-none text-muted transition-transform duration-150 ease-out group-open:rotate-45"
              >
                +
              </span>
            </summary>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">
              {faq.answer}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}

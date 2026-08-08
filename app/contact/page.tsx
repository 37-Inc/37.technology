import type { Metadata } from "next";
import { ContactForm } from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Discuss a project",
  description:
    "Tell Thirty Seven about a software project, including its current stage, platforms, timeline, and constraints.",
  alternates: {
    canonical: "/contact",
  },
};

const usefulDetails = [
  "What you need and who it needs to help",
  "What exists today, from an idea to an established product",
  "Timing, constraints, and any useful links",
];

export default function ContactPage() {
  return (
    <div className="relative">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 -top-28 h-72 w-72 rounded-full bg-accent/10 blur-3xl"
      />
      <div className="relative grid gap-10 lg:grid-cols-[minmax(0,0.78fr)_minmax(0,1.22fr)] lg:gap-16">
        <section className="space-y-8 lg:sticky lg:top-10 lg:self-start">
          <div className="space-y-5">
            <p className="text-sm uppercase tracking-[0.3em] text-muted">
              Contact Thirty Seven
            </p>
            <h1 className="max-w-xl font-serif text-4xl leading-tight tracking-tight text-ink sm:text-5xl">
              Tell us what you&rsquo;re working on.
            </h1>
            <p className="max-w-xl text-base leading-relaxed text-muted sm:text-lg">
              A short, direct note is enough. We read every inquiry ourselves
              and reply when we can be useful.
            </p>
          </div>

          <div className="rounded-3xl border border-hairline bg-surface/80 p-5 shadow-sm sm:p-6">
            <h2 className="font-serif text-2xl tracking-tight text-ink">
              The useful details
            </h2>
            <ul className="mt-5 grid gap-4 text-sm leading-relaxed text-muted">
              {usefulDetails.map((detail, index) => (
                <li key={detail} className="flex gap-3">
                  <span className="font-serif text-lg text-ink">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </div>

          <p className="max-w-lg text-sm leading-relaxed text-muted">
            Submitting the form starts a conversation, not a sales sequence.
            We do not add inquiries to a marketing list or share the contents
            with analytics providers.
          </p>
        </section>

        <ContactForm initialInquiryType="project" />
      </div>
    </div>
  );
}

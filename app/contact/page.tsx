import type { Metadata } from "next";
import { ContactForm } from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Discuss a project",
  description:
    "Send Thirty Seven a short note about a software project, press request, or other inquiry.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <div className="relative">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 -top-28 h-72 w-72 rounded-full bg-accent/10 blur-3xl"
      />
      <div className="relative grid gap-10 lg:grid-cols-[minmax(0,0.78fr)_minmax(0,1.22fr)] lg:gap-16">
        <section className="lg:sticky lg:top-10 lg:self-start">
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
        </section>

        <ContactForm initialInquiryType="project" />
      </div>
    </div>
  );
}

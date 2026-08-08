import { Metadata } from "next";
import { TrackedLink } from "@/components/analytics/TrackedLink";
import { Prose } from "@/components/Prose";

export const metadata: Metadata = {
  title: "About",
  description:
    "Thirty Seven is an independent software company and consultancy with deep iOS expertise and shipped work across Android, web, and backend systems.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <Prose
      title="About Thirty Seven, Inc."
      intro="Thirty Seven builds software and helps partners do the same."
    >
      <p>
        We are an independent software company. We build, own, and operate the
        products on our homepage, and we selectively partner with founders and
        small teams when the work is a good fit.
      </p>
      <p>
        iOS is where we&rsquo;ve spent the most years: native Swift, from
        prototype to App Store. We have also shipped products across Android,
        the web, and backend systems.
      </p>
      <p>
        Client work can include product guidance, implementation, launch, and
        post-launch support. We keep the relationship direct: you work with
        the people writing the code.
      </p>
      <p>
        Have something to build?{" "}
        <TrackedLink
          href="/contact"
          eventName="contact_cta_click"
          eventProperties={{ placement: "about_body" }}
        >
          Tell us about the project.
        </TrackedLink>
      </p>
    </Prose>
  );
}

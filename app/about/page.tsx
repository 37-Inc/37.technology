import { Metadata } from "next";
import { Prose } from "@/components/Prose";

export const metadata: Metadata = {
  title: "About",
  description:
    "Thirty Seven, Inc. is a small product studio. We ship our own apps and websites, and build for clients across a range of platforms and use cases.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <Prose
      title="About Thirty Seven, Inc."
      intro="A small product studio. We ship our own apps and websites, and build for clients across a range of platforms and use cases."
    >
      <p>
        We design, build, and run the apps on our homepage, and we take on
        client work when it&rsquo;s a good fit.
      </p>
      <p>
        iOS is where we&rsquo;ve spent the most years — native Swift, from
        prototype to App Store. We&rsquo;re just as comfortable on Android, the
        web, and the backend.
      </p>
      <p>
        We keep things small and direct: you talk to the people writing the
        code. We move fast, scope honestly, and price fairly.
      </p>
      <p>
        Have something to build? Write to
        <a className="ml-1" href="mailto:info@37.technology">
          info@37.technology
        </a>
        .
      </p>
    </Prose>
  );
}

import { Metadata } from "next";
import { Prose } from "@/components/Prose";

export const metadata: Metadata = {
  title: "About",
  description:
    "Thirty Seven, Inc. is a small, senior product studio that ships its own iOS apps and takes on select client work across iOS, Android, web, and backend.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <Prose
      title="About Thirty Seven, Inc."
      intro="A small, senior studio. We ship our own apps and build for a few clients at a time."
    >
      <p>
        Thirty Seven, Inc. is an independent product studio. We design, build,
        and run our own consumer apps — the ones on our homepage — and we take
        on select consulting work for teams that need software shipped.
      </p>
      <p>
        iOS is the deep specialty: native Swift, from first prototype through
        the App Store and everything after. Around it sits a full-stack range —
        Android, web, backend and infrastructure, and AI features where they
        actually earn their place.
      </p>
      <p>
        We work as a small team with direct communication. No account managers,
        no deck theater; the people you talk to are the people writing the
        code. Because we ship our own products, we build like owners: pragmatic
        scope, boring launches, software that keeps working.
      </p>
      <p>
        Have an app to build, or a team that needs senior hands? Write to
        <a className="ml-1" href="mailto:info@37.technology">
          info@37.technology
        </a>
        .
      </p>
    </Prose>
  );
}

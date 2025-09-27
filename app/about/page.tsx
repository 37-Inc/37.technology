import { Metadata } from "next";
import { Prose } from "@/components/Prose";

export const metadata: Metadata = {
  title: "About",
  description:
    "Thirty Seven, Inc. crafts mobile-first products with meticulous strategy, design, and engineering.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <Prose
      title="About Thirty Seven, Inc."
      intro="We build products that feel timeless the first time you open them."
    >
      <p>
        Thirty Seven, Inc. is a boutique product studio at the intersection of
        design, engineering, and brand narrative. We partner with founders and
        established teams to deliver experiences that are instantly understood,
        undeniably polished, and ready to scale.
      </p>
      <p>
        From category-defining consumer apps to enterprise-grade infrastructure,
        we thrive on clarity: crisp information architecture, soulful
        typography, and rapid performance throughout the stack. Every launch is
        underpinned by research, accessibility, and a measurable growth
        strategy.
      </p>
      <p>
        Need a collaborator for your next release? Reach out at
        <a className="ml-1" href="mailto:hello@37.technology">
          hello@37.technology
        </a>
        .
      </p>
    </Prose>
  );
}

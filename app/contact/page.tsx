import { Metadata } from "next";
import { Prose } from "@/components/Prose";

export const metadata: Metadata = {
  title: "Discuss a project",
  description:
    "Tell Thirty Seven about a software project, including its current stage, platforms, timeline, and constraints.",
  alternates: {
    canonical: "/contact",
  },
};

const inquiryEmail = "info@37.technology";
const inquiryHref = `mailto:${inquiryEmail}?subject=Project%20inquiry`;

export default function ContactPage() {
  return (
    <Prose
      title="Discuss a project"
      intro="We selectively work with founders and small teams on clear, useful software products."
    >
      <p>
        A short first note is enough. To help us understand whether the project
        is a fit, include what you are building and where things stand today.
      </p>

      <h2>What to send</h2>
      <ul>
        <li>A brief description of the product and its users</li>
        <li>Its current stage, from idea through an existing product</li>
        <li>The platforms or systems involved</li>
        <li>Your preferred timeline and any important constraints</li>
        <li>A budget range, if one is already defined</li>
        <li>Links to relevant designs, prototypes, or existing software</li>
      </ul>

      <p>
        <a href={inquiryHref}>Email {inquiryEmail}</a>. If that link does not
        open your email app, send the same information directly to {inquiryEmail}.
      </p>
    </Prose>
  );
}

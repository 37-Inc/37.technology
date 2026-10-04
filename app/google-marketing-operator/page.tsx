import type { Metadata } from "next";
import Link from "next/link";
import { Prose } from "@/components/Prose";

const description =
  "An internal Thirty Seven, Inc. tool for managing Google Ads campaigns and reviewing analytics, search performance, and advertising reports.";

export const metadata: Metadata = {
  title: { absolute: "Thirty Seven Google Marketing Operator" },
  description,
  alternates: { canonical: "/google-marketing-operator" },
  openGraph: {
    title: "Thirty Seven Google Marketing Operator",
    description,
    url: "/google-marketing-operator",
  },
  twitter: {
    title: "Thirty Seven Google Marketing Operator",
    description,
  },
};

export default function GoogleMarketingOperatorPage() {
  return (
    <Prose
      title="Thirty Seven Google Marketing Operator"
      intro="Internal marketing operations for Thirty Seven, Inc."
    >
      <p>
        Thirty Seven Google Marketing Operator is our internal tool for managing
        Google Ads campaigns and reviewing the performance of our websites and
        apps. It is operated by Thirty Seven, Inc., the software company behind
        this website.
      </p>

      <h2 className="mt-10 font-serif text-2xl">What the tool does</h2>
      <ul>
        <li>Reads advertising performance and manages Google Ads campaigns.</li>
        <li>Reviews website and app measurements from Google Analytics.</li>
        <li>Reviews search traffic and indexing information from Search Console.</li>
        <li>Retrieves advertising revenue and performance reports from AdMob.</li>
      </ul>
      <p>
        These integrations support reporting and marketing decisions for the
        accounts we are authorized to manage. The Marketing Operator does not
        generate images or videos.
      </p>

      <h2 className="mt-10 font-serif text-2xl">Who uses it</h2>
      <p>
        Access is for authorized Thirty Seven operators. This is not a public
        signup service. Google account permissions determine which advertising
        accounts, analytics properties, and sites the tool can access. This
        information page does not grant access to any of those accounts.
      </p>

      <h2 className="mt-10 font-serif text-2xl">Privacy and support</h2>
      <p>
        We use the connected Google services for account administration,
        performance reporting, and marketing operations. Our{" "}
        <Link href="/legal/privacy" className="underline underline-offset-4">
          privacy policy
        </Link>{" "}
        and{" "}
        <Link href="/legal/terms" className="underline underline-offset-4">
          terms of service
        </Link>{" "}
        are available on this website. For questions about the Marketing
        Operator or its access, contact{" "}
        <a href="mailto:cam@37.technology" className="underline underline-offset-4">
          cam@37.technology
        </a>
        .
      </p>
    </Prose>
  );
}

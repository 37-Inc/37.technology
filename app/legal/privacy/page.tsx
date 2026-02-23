import { Metadata } from "next";
import { Prose } from "@/components/Prose";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for Thirty Seven, Inc.",
  alternates: {
    canonical: "/legal/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <Prose title="Privacy Policy" intro="Effective date: February 23, 2026">
      <p>
        Thirty Seven, Inc. keeps data collection intentionally minimal. This
        policy explains what we collect, how we use it, and your choices.
      </p>

      <h2>Scope</h2>
      <p>
        This policy applies to the 37.technology website and related legal
        pages. It covers information collected directly by Thirty Seven through
        this site.
      </p>

      <h2>Information We Collect</h2>
      <h3>1. Basic website analytics (non-identifiable)</h3>
      <p>
        When analytics is enabled, we use Plausible Analytics in cookieless
        mode to understand traffic trends. This reporting is aggregated and is
        not used to identify you personally.
      </p>
      <ul>
        <li>Pages viewed and approximate visit counts</li>
        <li>Referring site or campaign tags</li>
        <li>Browser, device type, and approximate country</li>
      </ul>
      <p>
        We do not use analytics to create user profiles, run targeted ads, or
        track people across websites.
      </p>

      <h3>2. Information you choose to send us</h3>
      <p>
        If you email us, we receive the information in your message (such as
        your email address and message content) so we can respond.
      </p>

      <h2>How We Use Information</h2>
      <ul>
        <li>Operate and improve site reliability and performance</li>
        <li>Understand aggregate usage patterns</li>
        <li>Respond to inquiries and privacy requests</li>
      </ul>

      <h2>How We Share Information</h2>
      <p>
        We do not sell personal information. We only share limited data with
        service providers that help us run this site, such as hosting,
        analytics, and email providers, and only for those operational
        purposes.
      </p>

      <h2>Cookies and Tracking</h2>
      <p>
        Our current analytics setup is cookieless. We do not use third-party
        advertising trackers on this site.
      </p>

      <h2>Data Retention</h2>
      <p>
        We retain non-identifiable analytics in aggregate form for trend
        analysis. If you email us, we retain those communications only as long
        as needed to address your request or satisfy legal obligations.
      </p>

      <h2>Your Rights and Choices</h2>
      <p>
        You can request access to, correction of, or deletion of personal
        information you have shared with us by contacting
        <a className="ml-1" href="mailto:info@37.technology">
          info@37.technology
        </a>
        .
      </p>

      <h2>Children and Teen Privacy</h2>
      <p>
        This site is not directed to children under 13, and we do not knowingly
        collect personal information from children.
      </p>

      <h2>Changes to This Policy</h2>
      <p>
        We may update this policy as our practices evolve. The latest version
        will always be posted at this URL with an updated effective date.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about this policy can be sent to
        <a className="ml-1" href="mailto:info@37.technology">
          info@37.technology
        </a>
        .
      </p>
    </Prose>
  );
}

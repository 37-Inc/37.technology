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
    <Prose title="Privacy Policy" intro="Effective date: January 1, 2025">
      <p>
        Thirty Seven, Inc. respects your privacy. We only collect the
        information needed to deliver, improve, and secure our products. We do
        not sell personal data.
      </p>
      <p>
        Analytics: When enabled, we use Plausible Analytics with cookieless,
        aggregated reporting. No personal data is stored or shared.
      </p>
      <p>
        Communications: If you contact us by email, we will use your message
        solely to reply. We do not add you to marketing lists without explicit
        consent.
      </p>
      <p>
        Data requests: Reach out at
        <a className="ml-1" href="mailto:privacy@37.technology">
          privacy@37.technology
        </a>
        to request access, updates, or deletion.
      </p>
      <p>
        Updates: We may revise this policy as our products evolve. We will post
        the latest version at this address.
      </p>
    </Prose>
  );
}

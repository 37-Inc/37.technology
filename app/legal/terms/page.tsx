import { Metadata } from "next";
import { Prose } from "@/components/Prose";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of service for Thirty Seven, Inc.",
  alternates: {
    canonical: "/legal/terms",
  },
};

export default function TermsPage() {
  return (
    <Prose title="Terms of Service" intro="Effective date: January 1, 2025">
      <p>
        By using products and services from Thirty Seven, Inc., you agree to
        these terms. If you access our products on behalf of a company, you
        confirm you have authority to bind that company.
      </p>
      <p>
        Licenses: We grant you a limited, non-transferable license to use our
        apps for their intended purpose. Reverse engineering or unauthorized
        resale is prohibited.
      </p>
      <p>
        Payments: App Store and Play Store purchases are governed by the
        applicable store terms. Subscription renewals are managed by the store
        provider.
      </p>
      <p>
        Liability: Products are provided “as is.” To the fullest extent allowed
        by law, Thirty Seven, Inc. disclaims warranties and liability for
        indirect or consequential damages.
      </p>
      <p>
        Contact: Questions about these terms? Email
        <a className="ml-1" href="mailto:legal@37.technology">
          legal@37.technology
        </a>
        .
      </p>
    </Prose>
  );
}

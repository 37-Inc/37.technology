import { Metadata } from "next";
import Link from "next/link";
import { Prose } from "@/components/Prose";

export const metadata: Metadata = {
  title: "Fax It Terms of Service",
  description:
    "Terms of service for the Fax It iOS application by Thirty Seven, Inc.",
  alternates: {
    canonical: "/legal/terms/faxit",
  },
};

export default function FaxItTermsPage() {
  return (
    <Prose title="Fax It Terms of Service" intro="Effective date: May 7, 2026">
      <p>
        These terms apply specifically to the Fax It iOS application published
        by Thirty Seven, Inc. They supplement the corporate terms at
        <Link className="ml-1 underline" href="/legal/terms">
          /legal/terms
        </Link>
        . By using Fax It you agree to these terms. If you access Fax It on
        behalf of a company, you confirm you have authority to bind that
        company.
      </p>

      <h2>License</h2>
      <p>
        We grant you a limited, non-transferable license to use Fax It for its
        intended purpose of sending and receiving fax transmissions. Reverse
        engineering, sublicensing, or unauthorized resale of the service is
        prohibited.
      </p>

      <h2>Credits and Payment</h2>
      <p>
        Outbound faxes are billed against a credit balance you purchase
        through Apple&apos;s in-app purchase system. Page counts are calculated
        per transmission and deducted from your balance once a fax is
        successfully accepted by our telephony provider. Credit purchases are
        non-refundable except as required by law or by Apple&apos;s App Store
        policies. We do not store your payment information.
      </p>

      <h2>Fax It Number Subscription</h2>
      <p>
        <strong>Eligibility and availability.</strong> Fax It Number
        subscriptions are currently offered only in the United States and
        Canada and only to users whose Apple ID storefront is set to a country
        where the service is available. We may add or remove regions at our
        discretion.
      </p>
      <p>
        <strong>Plans.</strong> Fax It offers two subscription tiers, &ldquo;Fax
        It Number&rdquo; and &ldquo;Fax It Number Unlimited,&rdquo; at the
        prices displayed on the in-app subscription screen. Each plan grants
        you the right to use a single phone number that we provision on your
        behalf, and to send and receive faxes through that number subject to
        the page allowance described on the in-app subscription screen for the
        relevant plan. Pages used in excess of the included allowance are
        billed against your outbound credit balance at the standard per-page
        rate; we may pause incoming or outgoing fax transmission once available
        credits are exhausted.
      </p>
      <p>
        <strong>Auto-renewal.</strong> All Fax It Number subscriptions are
        auto-renewing monthly subscriptions managed entirely by Apple under
        Apple&apos;s standard in-app purchase terms. Your subscription will
        renew automatically at the end of each billing period unless you
        cancel at least 24 hours before the period ends through Apple&apos;s
        subscription management screen (Settings &rarr; [your name] &rarr;
        Subscriptions, or via the in-app &ldquo;Manage Subscription&rdquo;
        link). We do not store your payment information and we cannot cancel
        an Apple subscription on your behalf.
      </p>
      <p>
        <strong>Plan changes.</strong> You may upgrade from &ldquo;Fax It
        Number&rdquo; to &ldquo;Fax It Number Unlimited&rdquo; at any time;
        the upgrade takes effect immediately and Apple will prorate billing
        under Apple&apos;s standard rules. A downgrade takes effect at the end
        of the current billing period.
      </p>
      <p>
        <strong>Phone number assignment.</strong> When you start a Fax It
        Number subscription, we assign a US or Canadian phone number to your
        account. The number is licensed to you for the duration of your
        subscription only; we retain ownership of and control over the number.
        We do not guarantee that any specific number will remain available or
        that we can re-assign your previous number to you if you cancel and
        resubscribe.
      </p>
      <p>
        <strong>Cancellation and number release.</strong> If you cancel a Fax
        It Number subscription, your subscription remains active until the end
        of the paid period and you may continue to send and receive faxes
        through your assigned number until that date. At the end of the paid
        period we release the number back to our telephony carrier; the
        carrier may apply its own holding period and may eventually re-assign
        the number to another customer.{" "}
        <strong>
          Faxes sent to a released number after release will not reach you.
        </strong>{" "}
        Faxes received during the subscription remain accessible in the app
        for as long as your Fax It account exists.
      </p>
      <p>
        <strong>Suspension and termination.</strong> We may suspend or
        terminate your Fax It Number subscription at any time, with or without
        notice, if we believe in good faith that your use of the number
        violates these terms, our acceptable use policy below, applicable law,
        or the requirements of our telephony carrier (including without
        limitation use of the number for unsolicited fax broadcasting,
        unlawful content, harassment, or attempted impersonation).
      </p>
      <p>
        <strong>Refunds.</strong> All Apple in-app subscription refund requests
        must be made through Apple. We do not separately offer refunds for the
        subscription itself.
      </p>

      <h2>Acceptable Use</h2>
      <p>
        When you use Fax It, including any phone number assigned to you
        through a Fax It Number subscription, you agree not to use the service
        (and not to permit others to use it) to:
      </p>
      <ul>
        <li>
          send or solicit unlawful fax broadcasts, including unsolicited
          advertising in any jurisdiction in which such broadcasts are
          unlawful (for example, the U.S. Telephone Consumer Protection Act);
        </li>
        <li>impersonate another person or entity;</li>
        <li>
          receive or transmit content that infringes the intellectual property
          rights of any other person or entity;
        </li>
        <li>
          receive or transmit content that is unlawful, threatening,
          defamatory, obscene, or that consists of child sexual abuse material;
        </li>
        <li>
          circumvent or attempt to circumvent the page caps or other usage
          limits described on the in-app subscription screen;
        </li>
        <li>resell or sublicense an assigned number to a third party.</li>
      </ul>
      <p>
        We respond to subpoenas and other lawful process about phone-number
        assignments and fax content as required by applicable law. Where
        legally permitted, we may notify you of such requests.
      </p>

      <h2>Disclaimer of Suitability</h2>
      <p>
        Fax It is provided &ldquo;as is&rdquo; and is not certified for any
        specific regulatory regime. Without limiting the foregoing,{" "}
        <strong>
          Fax It is not a HIPAA-covered service, we do not enter into Business
          Associate Agreements, the Fax It Number service is not certified for
          transmission of payment-card data under PCI-DSS, and you should not
          use the service for the receipt of communications subject to
          attorney-client privilege without performing your own diligence on
          the suitability of the service for that purpose.
        </strong>{" "}
        If you require a regulated fax service, you should not use Fax It.
      </p>

      <h2>Limitation of Liability</h2>
      <p>
        To the fullest extent allowed by law, Thirty Seven, Inc. disclaims
        warranties and liability for indirect or consequential damages.
        Without limiting the foregoing, neither party shall be liable to the
        other for: (a) the failure of any third party (including without
        limitation any sender of an inbound fax, our telephony carrier, or our
        cloud infrastructure provider) to deliver, receive, or correctly route
        a fax transmission; (b) any holding period, allocation policy, or
        recycling decision made by our telephony carrier in respect of a
        released phone number; or (c) any consequence of the user&apos;s
        failure to download received faxes before deleting their account or
        before the corresponding subscription is cancelled and the number
        released.
      </p>

      <h2>Changes</h2>
      <p>
        We may update these terms as the service evolves. The latest version
        will always be posted at this URL with an updated effective date.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about these terms? Email
        <a className="ml-1" href="mailto:info@37.technology">
          info@37.technology
        </a>
        .
      </p>
    </Prose>
  );
}

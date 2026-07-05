import { Metadata } from "next";
import { Prose } from "@/components/Prose";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms of service for Thirty Seven, Inc., covering the 37.technology website and all apps we publish.",
  alternates: {
    canonical: "/legal/terms",
  },
};

export default function TermsPage() {
  return (
    <Prose title="Terms of Service" intro="Effective date: July 5, 2026">
      <p>
        These are the terms of service for all products published by Thirty
        Seven, Inc., including Stitch It, Fax It, ColorCub, ReShoot, HowHigh,
        and Goose Gifts. By using our products and services you agree to these
        terms; if you access them on behalf of a company, you confirm you have
        authority to bind that company. These terms supersede any earlier
        app-specific terms previously posted on this site. Where a product has
        terms beyond the general ones, they are described in the app-specific
        sections below.
      </p>

      <h2>License</h2>
      <p>
        We grant you a limited, non-transferable license to use our apps for
        their intended purpose. Reverse engineering, sublicensing, or
        unauthorized resale is prohibited.
      </p>

      <h2>Payments</h2>
      <p>
        App Store and Play Store purchases are governed by the applicable store
        terms. Subscriptions auto-renew and are managed entirely by the store
        provider — we do not store your payment information and cannot cancel a
        store subscription on your behalf. Refund requests for in-app purchases
        must be made through the store. Credit purchases (where offered) are
        non-refundable except as required by law or by store policy.
      </p>

      <h2>Fax It</h2>
      <h3>Credits</h3>
      <p>
        Outbound faxes are billed against a credit balance purchased through
        Apple&apos;s in-app purchase system. Page counts are calculated per
        transmission and deducted once a fax is successfully accepted by our
        telephony provider.
      </p>
      <h3>Fax It Number subscription</h3>
      <p>
        Fax It Number subscriptions are currently offered only in the United
        States and Canada, and only to users whose Apple ID storefront is set
        to a country where the service is available; we may add or remove
        regions at our discretion. Each plan (&ldquo;Fax It Number&rdquo; and
        &ldquo;Fax It Number Unlimited&rdquo;) grants use of a single phone
        number we provision on your behalf, with the page allowance shown on
        the in-app subscription screen. Pages beyond the allowance are billed
        against your credit balance at the standard per-page rate; we may pause
        transmission once available credits are exhausted. Upgrades take effect
        immediately with prorated billing under Apple&apos;s rules; downgrades
        take effect at the end of the current billing period.
      </p>
      <h3>Phone number assignment and release</h3>
      <p>
        Assigned numbers are licensed to you for the duration of your
        subscription only; we retain ownership and control. If you cancel, your
        subscription remains active until the end of the paid period, after
        which we release the number back to our carrier, which may eventually
        re-assign it.{" "}
        <strong>
          Faxes sent to a released number after release will not reach you.
        </strong>{" "}
        Faxes received during the subscription remain accessible in the app for
        as long as your account exists. We do not guarantee that a specific
        number will remain available or can be re-assigned to you if you cancel
        and resubscribe.
      </p>
      <h3>Acceptable use</h3>
      <p>
        You agree not to use Fax It, including any assigned number, to:
      </p>
      <ul>
        <li>
          send or solicit unlawful fax broadcasts, including unsolicited
          advertising where unlawful (for example, the U.S. Telephone Consumer
          Protection Act);
        </li>
        <li>impersonate another person or entity;</li>
        <li>
          receive or transmit content that infringes intellectual property
          rights;
        </li>
        <li>
          receive or transmit content that is unlawful, threatening,
          defamatory, obscene, or that consists of child sexual abuse material;
        </li>
        <li>circumvent page caps or other usage limits;</li>
        <li>resell or sublicense an assigned number.</li>
      </ul>
      <p>
        We may suspend or terminate service if we believe in good faith that
        your use violates these terms, applicable law, or our carrier&apos;s
        requirements. We respond to subpoenas and other lawful process about
        number assignments and fax content as required by law and, where
        legally permitted, may notify you of such requests.
      </p>
      <h3>Suitability</h3>
      <p>
        Fax It is not certified for any specific regulatory regime.{" "}
        <strong>
          It is not a HIPAA-covered service, we do not enter into Business
          Associate Agreements, and it is not certified for transmission of
          payment-card data under PCI-DSS.
        </strong>{" "}
        If you require a regulated fax service, do not use Fax It.
      </p>

      <h2>Liability</h2>
      <p>
        Products are provided &ldquo;as is.&rdquo; To the fullest extent
        allowed by law, Thirty Seven, Inc. disclaims warranties and liability
        for indirect or consequential damages. Without limiting the foregoing,
        we are not liable for: (a) the failure of any third party (including a
        fax sender, telephony carrier, or cloud provider) to deliver, receive,
        or correctly route a transmission; (b) any holding, allocation, or
        recycling decision made by a telephony carrier for a released number;
        or (c) consequences of failing to download received faxes before
        deleting an account or releasing a number.
      </p>

      <h2>Changes</h2>
      <p>
        We may update these terms as our products evolve. The latest version
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

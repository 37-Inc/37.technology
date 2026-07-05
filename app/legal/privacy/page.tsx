import { Metadata } from "next";
import { Prose } from "@/components/Prose";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy policy for Thirty Seven, Inc., covering the 37.technology website and all apps we publish.",
  alternates: {
    canonical: "/legal/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <Prose title="Privacy Policy" intro="Effective date: July 5, 2026">
      <p>
        Thirty Seven, Inc. keeps data collection intentionally minimal. This
        policy explains what we collect, how we use it, and your choices. It is
        the single privacy policy for everything we publish — this website and
        all of our apps — and it supersedes any earlier app-specific policies
        previously posted on this site.
      </p>

      <h2>Scope</h2>
      <p>
        This policy applies to the 37.technology website and to the apps and
        services published by Thirty Seven, Inc., including Stitch It, Fax It,
        ColorCub, ReShoot, HowHigh, and Goose Gifts. Where an app has practices
        beyond the general ones below, they are described in the app-specific
        sections of this policy.
      </p>

      <h2>The Short Version</h2>
      <ul>
        <li>We do not sell personal information.</li>
        <li>We do not run advertising trackers or build user profiles.</li>
        <li>
          Most of our apps process your content on your device; it never
          reaches our servers.
        </li>
        <li>
          All payments are processed by Apple or Google — we never see your
          payment-card details.
        </li>
      </ul>

      <h2>The Website</h2>
      <p>
        When analytics is enabled, we use Plausible Analytics in cookieless
        mode to understand traffic trends: pages viewed, approximate visit
        counts, referring site, browser and device type, and approximate
        country. This reporting is aggregated and is not used to identify you
        personally. If you email us, we receive the information in your message
        (such as your email address and message content) so we can respond.
      </p>

      <h2>Our Apps — General Practices</h2>
      <h3>On-device processing</h3>
      <p>
        Stitch It, ReShoot, and HowHigh process your content — screenshots,
        video, sensor readings — entirely on your device. The images you
        stitch, the footage you reframe, and the altitude you measure are not
        uploaded to us.
      </p>
      <h3>Accounts and diagnostics</h3>
      <p>
        Some apps and services use cloud infrastructure (Google Firebase /
        Google Cloud Platform) to provide accounts and features that cannot run
        on-device. Where an account exists, it consists of a pseudonymous user
        ID, the authentication provider you used, and basic device metadata
        (device model, OS version, app version). Diagnostic logs may include IP
        address, request IDs, and user ID, retained for up to twelve (12)
        months for debugging and abuse detection.
      </p>
      <h3>Purchases and subscriptions</h3>
      <p>
        All in-app payments are processed by Apple or Google under their
        standard store terms; we never see your payment-card information. For
        apps with subscriptions or credits, our entitlements provider
        (RevenueCat, Inc.) receives a pseudonymous user identifier and standard
        subscription event metadata (purchase, renewal, cancellation, refund)
        so we can grant access to what you have paid for.
      </p>

      <h2>ColorCub</h2>
      <p>
        The text or voice prompts you submit in ColorCub are processed by our
        image-generation provider solely to create your coloring pages. Prompts
        are not used for advertising or profiling. ColorCub shows no ads and
        has no third-party trackers.
      </p>

      <h2>Goose Gifts</h2>
      <p>
        Goose Gifts is a browsable catalog. It requires no account, and
        product links lead to Amazon, where Amazon&apos;s own privacy policy
        applies. Links may include an affiliate tag, which tells Amazon the
        visit came from us but tells us nothing about you.
      </p>

      <h2>Fax It</h2>
      <p>
        Fax It transmits documents on your behalf, so it necessarily processes
        more data than our other apps.
      </p>
      <h3>Outbound fax data</h3>
      <p>
        When you send a fax we receive the recipient phone number, the document
        content, and transmission metadata (page count, success/failure,
        timestamps). The document is transmitted to our telephony provider and
        a record is retained in your account history so you can review it
        later.
      </p>
      <h3>Fax It Number subscribers</h3>
      <p>
        If you subscribe to a Fax It Number we record the US or Canadian fax
        number provisioned for you, your subscription tier and renewal status,
        page counts per billing period, and the date the number is released
        when you cancel. Faxes sent to your number are received on your behalf
        by our telephony provider and routed to us: we process the calling
        party&apos;s number (where presented), time of receipt, page count, and
        document content. We cannot prevent third parties from transmitting to
        your number, and received faxes frequently contain sensitive material —
        we treat the entirety of a received fax as confidential.
      </p>
      <h3>How we use fax data</h3>
      <ul>
        <li>To send and receive faxes on your behalf and deliver them to you</li>
        <li>To provision, maintain, and release Fax It Number assignments</li>
        <li>To enforce subscription quotas, page caps, and credit balances</li>
        <li>To apply credits, refunds, or chargeback adjustments</li>
        <li>To identify and respond to abuse, fraud, or carrier-compliance issues</li>
        <li>To provide customer support and respond to privacy requests</li>
        <li>
          To meet our obligations to telephony providers and applicable
          telecommunications regulations
        </li>
      </ul>
      <p>
        We do not use the content of faxes for advertising, analytics
        profiling, training of automated systems, or any purpose other than
        delivering the service. Where you have purchased credits or a
        subscription, we process this data to perform our contract with you; we
        process operational metadata (page counts, delivery status, error logs)
        on the basis of our legitimate interests in operating and securing the
        service.
      </p>
      <h3>Sensitive information and HIPAA</h3>
      <p>
        Faxes may by their nature contain sensitive personal data such as
        health, financial, or legal information. Fax It is{" "}
        <strong>not a HIPAA-covered service</strong>, we do not enter into
        Business Associate Agreements, and we do not represent the service as
        suitable for any specific regulated category of data. If you require a
        HIPAA-eligible fax service, do not use Fax It for that purpose.
      </p>
      <h3>Fax data retention</h3>
      <p>
        Outbound fax records are retained for the lifetime of your account so
        your in-app history remains complete, and deleted when you delete your
        account (subject to a short overlap for outstanding refund or
        chargeback obligations). Received-fax content remains in your account
        so you can download it; if you delete your account, we delete all
        received-fax content, number assignments, and associated metadata
        within thirty (30) days except where the law requires longer retention,
        and we make a best-effort deletion request to our telephony provider.
        If you need copies, download them before requesting deletion.
      </p>
      <h3>California residents</h3>
      <p>
        We receive fax transmissions originated by third parties on your
        behalf. We treat the sender&apos;s number (where signaled) and the
        document content as personal information about you, the recipient, and
        apply the rights described below to it.
      </p>

      <h2>Service Providers</h2>
      <p>
        We share limited data with processors only as necessary to operate our
        products:
      </p>
      <ul>
        <li>
          <strong>Google LLC (Firebase / Google Cloud Platform)</strong> —
          cloud infrastructure for accounts, app data, and operational logs.
        </li>
        <li>
          <strong>Apple, Inc.</strong> and <strong>Google Play</strong> — all
          in-app purchases and subscriptions.{" "}
          <a href="https://www.apple.com/legal/privacy/">
            apple.com/legal/privacy
          </a>
        </li>
        <li>
          <strong>RevenueCat, Inc.</strong> — subscription entitlement
          tracking; receives no payment-card data.{" "}
          <a href="https://www.revenuecat.com/privacy">revenuecat.com/privacy</a>
        </li>
        <li>
          <strong>SignalWire, Inc.</strong> — telephony carrier for Fax It;
          receives sender and recipient numbers, document content, and
          transmission metadata.{" "}
          <a href="https://signalwire.com/legal/privacy-policy">
            signalwire.com/legal/privacy-policy
          </a>
        </li>
        <li>
          <strong>Plausible Analytics</strong> — cookieless website analytics.
        </li>
      </ul>
      <p>We do not sell personal information.</p>

      <h2>Your Rights and Choices</h2>
      <p>
        You can request access to, correction of, or deletion of personal
        information by contacting
        <a className="ml-1" href="mailto:info@37.technology">
          info@37.technology
        </a>
        . Deleting a Fax It account that has received faxes deletes the content
        of those faxes; we cannot recover fax content after deletion has been
        processed.
      </p>

      <h2>Children</h2>
      <p>
        Our website and apps are not directed to children under 13, and we do
        not knowingly collect personal information from children. ColorCub is
        designed to be used by families together; prompts are not linked to a
        child&apos;s identity.
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

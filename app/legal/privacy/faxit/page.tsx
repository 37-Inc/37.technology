import { Metadata } from "next";
import Link from "next/link";
import { Prose } from "@/components/Prose";

export const metadata: Metadata = {
  title: "Fax It Privacy Policy",
  description:
    "Privacy policy for the Fax It iOS application by Thirty Seven, Inc.",
  alternates: {
    canonical: "/legal/privacy/faxit",
  },
};

export default function FaxItPrivacyPage() {
  return (
    <Prose title="Fax It Privacy Policy" intro="Effective date: May 7, 2026">
      <p>
        This policy applies specifically to the Fax It iOS application
        published by Thirty Seven, Inc. It is distinct from the corporate
        website privacy policy at
        <Link className="ml-1 underline" href="/legal/privacy">
          /legal/privacy
        </Link>
        , which covers 37.technology browsing only. The Fax It app processes
        outbound fax submissions, inbound fax content, telephony number
        assignments, and Apple subscription billing, so it warrants its own
        disclosures.
      </p>

      <h2>What We Collect</h2>

      <h3>Account and device data</h3>
      <p>
        When you sign in we create a Firebase user record containing a
        pseudonymous user ID, the authentication provider you used, and basic
        device metadata (device model, OS version, app version). Diagnostic
        logs may include IP address, request IDs, and Firebase user ID for
        debugging and abuse detection.
      </p>

      <h3>Outbound fax data</h3>
      <p>
        When you send a fax we receive the recipient phone number, the
        document content, and metadata about transmission status (page count,
        success/failure, timestamps). The document is transmitted to our
        telephony provider and a record of the transmission is retained in
        your account history so you can review it later.
      </p>

      <h3>Telephony assignment data (Fax It Number subscribers)</h3>
      <p>
        If you subscribe to a Fax It Number we record the United States or
        Canadian fax number provisioned for you, the date you acquired it,
        your subscription tier and renewal status, page counts sent and
        received during each billing period, and the date the number is
        released back to the carrier when you cancel.
      </p>

      <h3>Inbound fax data (Fax It Number subscribers)</h3>
      <p>
        Faxes sent to your assigned number are received on your behalf by our
        telephony provider and routed to us. We process the calling party&apos;s
        phone number (where presented), the time of receipt, page count, and
        the document content of each fax. We do not solicit or have a direct
        relationship with senders, and we cannot prevent third parties from
        transmitting to your number. Inbound fax content frequently includes
        information that is sensitive on its face (medical, legal, or
        financial documents). We treat the entirety of a received fax as
        confidential.
      </p>

      <h3>Subscription and purchase data</h3>
      <p>
        All in-app payments are processed by Apple. We do not see your
        payment-card information at any time. Apple shares standard
        subscription event metadata (purchase, renewal, cancellation, refund)
        with our entitlements provider so we can grant you access to features
        you have paid for.
      </p>

      <h2>How We Use Your Data</h2>
      <ul>
        <li>To send and receive faxes on your behalf and deliver them to you</li>
        <li>To provision, maintain, and release Fax It Number assignments</li>
        <li>To enforce subscription quotas, page caps, and credit balances</li>
        <li>To apply credits, refunds, or chargeback adjustments</li>
        <li>
          To identify and respond to abuse, fraud, or carrier-compliance issues
        </li>
        <li>To provide customer support and respond to privacy requests</li>
        <li>
          To meet our obligations to telephony providers and applicable
          telecommunications regulations
        </li>
      </ul>
      <p>
        We do not use the content of faxes for advertising, analytics
        profiling, training of automated systems, or any purpose other than
        delivering the service described in these terms.
      </p>

      <h2>Lawful Basis</h2>
      <p>
        Where you have purchased credits or a Fax It Number subscription, we
        process the data above on the basis of <em>performance of the contract</em>{" "}
        you entered into with us. We additionally process operational metadata
        (page counts, delivery status, error logs) on the basis of our{" "}
        <em>legitimate interests</em> in operating, monitoring, securing, and
        improving the service.
      </p>

      <h2>Sensitive Information and HIPAA</h2>
      <p>
        Inbound faxes may, by their nature, contain sensitive personal data
        such as health, financial, or legal information about you or about
        third parties. We do not request or require that you receive sensitive
        data through the service. Fax It is{" "}
        <strong>not a HIPAA-covered service</strong>, we do not enter into
        Business Associate Agreements, and we do not represent the service as
        suitable for any specific regulated category of data. If you require a
        HIPAA-eligible fax service, do not use Fax It for that purpose.
      </p>

      <h2>Service Providers</h2>
      <p>
        We share limited data with the following processors, only as necessary
        to operate the service.
      </p>
      <ul>
        <li>
          <strong>SignalWire, Inc.</strong> — telephony carrier for outbound
          fax transmission and the Fax It Number inbound-fax service. Receives
          sender and recipient phone numbers, document content, and associated
          metadata. Privacy practices:{" "}
          <a href="https://signalwire.com/legal/privacy-policy">
            signalwire.com/legal/privacy-policy
          </a>
          .
        </li>
        <li>
          <strong>RevenueCat, Inc.</strong> — subscription entitlement tracking.
          Receives a pseudonymous Fax It user identifier and Apple subscription
          event metadata. Does not receive payment-card data. Privacy practices:{" "}
          <a href="https://www.revenuecat.com/privacy">
            revenuecat.com/privacy
          </a>
          .
        </li>
        <li>
          <strong>Apple, Inc.</strong> — processes all in-app purchases and
          subscriptions under Apple&apos;s standard in-app purchase system.
          Privacy practices:{" "}
          <a href="https://www.apple.com/legal/privacy/">
            apple.com/legal/privacy
          </a>
          .
        </li>
        <li>
          <strong>Google LLC (Firebase / Google Cloud Platform)</strong> —
          cloud infrastructure where account data, fax content, and operational
          logs are stored. Acts as our processor under our cloud services
          agreement.
        </li>
      </ul>
      <p>We do not sell personal information.</p>

      <h2>Data Retention</h2>
      <p>
        <strong>Outbound fax data.</strong> We retain transaction records and
        metadata for outbound faxes for the lifetime of your account so that
        the fax history visible in the app remains complete. We delete this
        data when you delete your account, subject to any short overlap
        required to satisfy outstanding refund or chargeback obligations.
      </p>
      <p>
        <strong>Inbound fax data and Fax It Number assignments.</strong> While
        your subscription is active, we retain the document content of each
        fax received to your Fax It Number, plus the associated metadata
        (sender, time, page count). If you cancel your subscription we release
        your fax number back to the carrier at the end of the paid period; the
        document content of faxes received during the subscription remains in
        your account so you can continue to download it from the app. If you
        delete your account, we delete all received-fax content, the phone
        number assignment record, and associated metadata within thirty (30)
        days, except where we are required by law to retain it for longer. We
        also make a best-effort request to our telephony provider to delete
        any copy held on their side, although that deletion is governed by the
        provider&apos;s own retention policy.
      </p>
      <p>
        <strong>Operational and security logs.</strong> Diagnostic logs that
        may include identifiers (request IDs, IP address, device model,
        Firebase user ID) are retained for up to twelve (12) months for
        debugging, fraud and abuse detection, and meeting our obligations to
        telephony carriers and payment processors.
      </p>

      <h2>Your Rights</h2>
      <p>
        You can request access to, correction of, or deletion of personal
        information by contacting{" "}
        <a className="ml-1" href="mailto:info@37.technology">
          info@37.technology
        </a>
        . If you exercise the right to deletion in respect of an account that
        has received faxes through a Fax It Number, deletion will include the
        content of those received faxes. We cannot selectively delete an
        inbound fax record while retaining its associated metadata, and we
        cannot recover deleted fax content after the deletion request has been
        processed. If you need to keep copies, download them from the app
        before requesting account deletion.
      </p>

      <h2>California Residents</h2>
      <p>
        For California residents, we additionally receive on your behalf fax
        transmissions originated by third parties. The phone number of the
        sender (where signaled) and the document content are received from our
        telephony provider, SignalWire. We treat that data as personal
        information about you (because you are the recipient) and apply the
        rights described above to it.
      </p>

      <h2>Children</h2>
      <p>
        Fax It is not directed to children under 13 and we do not knowingly
        collect personal information from children.
      </p>

      <h2>Changes</h2>
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

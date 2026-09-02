import { Metadata } from "next";
import Link from "next/link";
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
    <Prose title="Privacy Policy" intro="Effective date: September 2, 2026">
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
        ColorCub, ReShoot, HowHigh, Goose Gifts, and Quick Key (acquired
        September 2026; this policy replaces the Quick Key policy previously
        published by Design by Educators / Validated Learning Company). Where
        an app has practices
        beyond the general ones below, they are described in the app-specific
        sections of this policy.
      </p>

      <h2>The Short Version</h2>
      <ul>
        <li>We do not sell personal information.</li>
        <li>
          Most of our apps process your content on your device; it never
          reaches our servers.
        </li>
        <li>
          Payments are processed by Apple, Google, or (for Quick Key) Braintree
          and PayPal — we never see your payment-card details.
        </li>
        <li>
          Quick Key handles student data on behalf of teachers and schools. We
          use it only to provide the grading service, never for advertising,
          and never sell it.
        </li>
      </ul>

      <h2>The Website</h2>
      <p>
        We use Google Analytics and PostHog to understand traffic and product
        interest on 37.technology: pages viewed, referring site, browser and
        device type, approximate location, contact-form interactions, and
        clicks to our product listings. We do not send names, email addresses,
        links, or message contents to either analytics provider. PostHog
        session recording and automatic interaction capture are disabled, and
        its browser identifier is kept only in memory for the current visit.
        Google Analytics may set cookies and collect device identifiers on
        Google&apos;s behalf. We review this data only in aggregate and do not use
        it for advertising or to identify you personally. The site does not
        initialize analytics when your browser sends a &ldquo;Do Not
        Track&rdquo; signal. You can also limit analytics with a content
        blocker or Google&apos;s{" "}
        <a href="https://tools.google.com/dlpage/gaoptout">
          opt-out browser add-on
        </a>
        . Blocking the Cloudflare verification script may prevent the inquiry
        form from submitting; if that happens, contact info@37.technology
        directly.
      </p>
      <p>
        If you submit our inquiry form or email us, we receive the information
        you provide, such as your name, email address, message, and any details
        or links you include. We use it only to evaluate and respond
        to the inquiry, manage a resulting working relationship, prevent abuse,
        and maintain ordinary business records. Form messages are delivered by
        Resend and protected against automated abuse by Cloudflare Turnstile.
        Turnstile may process IP address and browser integrity signals, but we
        do not use it for advertising. We retain inquiries only as long as
        reasonably necessary for those purposes or to meet legal obligations.
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

      <h2>HowHigh</h2>
      <p>
        HowHigh keeps altitude, pressure, location, calibration, and recorded
        session data on your device. It does not send sensor readings,
        coordinates, weather-station identifiers, timestamps, session notes,
        or other text you enter to us or to an analytics provider.
      </p>
      <p>
        HowHigh uses PostHog for limited product analytics. It sends only
        explicit events for opening the app, completing or skipping
        onboarding, starting, completing, or discarding a recording, and
        exporting a session. Event details are limited to broad categories
        such as measurement mode, duration and sample-count ranges,
        completion or interruption reason, calibration-source category, and
        export format. A random anonymous installation identifier helps count
        journeys, but HowHigh does not create a person profile, associate the
        identifier with an account or personal identity, use it for tracking,
        or reuse it after the identifier is reset. Automatic interaction
        capture, screen recording, screenshots, error autocapture, and session
        replay are disabled. You can turn this analytics collection off in
        HowHigh under Settings &gt; Privacy.
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

      <h2>Quick Key</h2>
      <p>
        Quick Key lets teachers grade paper bubble-sheet assessments by scanning
        them with a phone. Because it stores class rosters and scores, it
        processes more data than our other apps, including data about
        students, most of whom are minors. This section describes those
        practices; the general practices above apply as well.
      </p>
      <h3>Teacher accounts</h3>
      <p>
        When you create a Quick Key account we collect your name, email
        address, and password (stored hashed), and optionally your school
        name, ZIP code or country, role, subject, grade level, language, and a
        profile photo. If you sign in through Google, Edmodo, or Clever, we
        receive your name, email address, and account identifier from that
        provider. For paid plans we store a Braintree customer identifier and
        your plan and renewal status; your card or PayPal details are held by
        Braintree and PayPal, not by us. We record sign-in timestamps and IP
        addresses for security.
      </p>
      <h3>Student data</h3>
      <p>
        Teachers and schools add students to Quick Key by typing them in,
        importing a file, or syncing a roster from a student information
        system such as Clever or PowerSchool. For each student we may store a
        first and last name, a school-assigned student ID or roster
        identifier, an optional email address, class enrollments, and the
        answers and scores from assessments the teacher grades with Quick Key,
        including the scanned image of each answer sheet. Students do not
        create accounts, and Quick Key does not communicate with students
        directly.
      </p>
      <p>
        We process student data only as a service provider to the teacher or
        school that entered it, solely to provide, secure, and support the
        grading service. We do not use student data for advertising, sell it,
        build profiles of students, or use it to train automated systems.
        Teachers control this data: they can edit, export, or delete students,
        classes, and assessments at any time, and deleting them removes the
        associated scores and sheet images from the service. Data is deleted
        when the teacher deletes it or closes the account, subject to a short
        backup-retention period.
      </p>
      <h3>Schools, districts, and student-privacy laws</h3>
      <p>
        Where a school or district uses Quick Key, we act on the school&apos;s
        behalf as a &ldquo;school official&rdquo; with a legitimate educational
        interest under the U.S. Family Educational Rights and Privacy Act
        (FERPA), and we rely on the school&apos;s consent under the
        Children&apos;s Online Privacy Protection Act (COPPA) for any student
        under 13 whose information the school or teacher enters. We do not
        knowingly collect information from children directly. For customers in
        the United Kingdom and European Union, the school or teacher is the
        controller of student data and Thirty Seven, Inc. acts as their
        processor under the UK and EU GDPR; teachers are controllers of their
        own account data. Site-license customers who need a data-processing
        agreement can request one through our inquiry form. Parents and
        guardians who wish to review or delete a student&apos;s information
        should contact the teacher or school, who can act on the request in
        the product; we will assist the school with any such request.
      </p>
      <h3>Integrations you choose</h3>
      <p>
        If a teacher connects Quick Key to a third-party service — Clever,
        PowerSchool, Edmodo, Google, or a publisher integration — we exchange
        only the roster, assignment, or score data needed for that
        integration, at the teacher&apos;s direction. Those services are
        governed by their own privacy policies.
      </p>
      <h3>Support and email</h3>
      <p>
        Quick Key uses Intercom for in-app support and product messages, which
        receives your name, email address, and basic account and usage
        metadata so we can respond to you. Transactional email (receipts,
        password resets, exports) is delivered by SendGrid. Student data is not
        sent to Intercom or SendGrid except where you include it in a support
        message yourself.
      </p>
      <h3>Infrastructure and diagnostics</h3>
      <p>
        Quick Key runs on Render and Amazon Web Services (database, search,
        file storage, and content delivery), with caching on Heroku. Scanned
        answer sheets and profile photos are stored on Amazon S3. We use
        Airbrake and New Relic for error and performance monitoring; these
        receive technical diagnostics such as request identifiers, stack
        traces, and IP addresses, retained for up to twelve (12) months.
      </p>
      <h3>Quick Key payments</h3>
      <p>
        Quick Key subscriptions purchased on the web are processed by Braintree
        (a PayPal service) or PayPal; purchases made inside the iOS or Android
        app are processed by Apple or Google. We receive subscription status
        and a customer identifier, never full payment-card numbers.
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
          <strong>Braintree (PayPal, Inc.)</strong> and <strong>PayPal</strong>{" "}
          — payment processing for Quick Key web subscriptions; receives your
          payment details directly.{" "}
          <a href="https://www.braintreepayments.com/legal/braintree-privacy-policy">
            braintreepayments.com/legal/braintree-privacy-policy
          </a>
        </li>
        <li>
          <strong>Amazon Web Services, Inc.</strong> — database, search, file
          storage, and content delivery for Quick Key.{" "}
          <a href="https://aws.amazon.com/privacy/">aws.amazon.com/privacy</a>
        </li>
        <li>
          <strong>Render Services, Inc.</strong> and{" "}
          <strong>Heroku (Salesforce, Inc.)</strong> — application hosting and
          caching for Quick Key.{" "}
          <a href="https://render.com/privacy">render.com/privacy</a>
        </li>
        <li>
          <strong>Intercom, Inc.</strong> — in-app support and product
          messaging for Quick Key teachers.{" "}
          <a href="https://www.intercom.com/legal/privacy">
            intercom.com/legal/privacy
          </a>
        </li>
        <li>
          <strong>SendGrid (Twilio Inc.)</strong> — transactional email for
          Quick Key.{" "}
          <a href="https://www.twilio.com/en-us/legal/privacy">
            twilio.com/legal/privacy
          </a>
        </li>
        <li>
          <strong>Airbrake (LogicMonitor)</strong> and{" "}
          <strong>New Relic, Inc.</strong> — error and performance monitoring
          for Quick Key.
        </li>
        <li>
          <strong>Clever, Inc.</strong>, <strong>PowerSchool</strong>,{" "}
          <strong>Edmodo</strong>, and <strong>Google</strong> — roster and
          sign-in integrations that a teacher chooses to connect to Quick Key.
        </li>
        <li>
          <strong>Google Analytics</strong> — website traffic measurement on
          37.technology.{" "}
          <a href="https://policies.google.com/privacy">
            policies.google.com/privacy
          </a>
        </li>
        <li>
          <strong>PostHog, Inc.</strong> — privacy-limited website traffic and
          interaction measurement on 37.technology and the limited anonymous
          HowHigh product events described above. Form contents, sensor data,
          coordinates, and session contents are never included. {" "}
          <a href="https://posthog.com/privacy">posthog.com/privacy</a>
        </li>
        <li>
          <strong>Resend, Inc.</strong> — delivery of website inquiries to our
          business mailbox. <a href="https://resend.com/legal/privacy-policy">resend.com/legal/privacy-policy</a>
        </li>
        <li>
          <strong>Cloudflare, Inc.</strong> — Turnstile bot detection for the
          website inquiry form. <a href="https://www.cloudflare.com/privacypolicy/">cloudflare.com/privacypolicy</a>
        </li>
      </ul>
      <p>We do not sell personal information.</p>

      <h2>Your Rights and Choices</h2>
      <p>
        You can request access to, correction of, or deletion of personal
        information through our{" "}
        <Link href="/contact?type=other">inquiry form</Link>. Deleting a Fax It
        account that has received faxes deletes the content
        of those faxes; we cannot recover fax content after deletion has been
        processed. Quick Key teachers can delete students, classes,
        assessments, and their account from within the product; requests
        about a student&apos;s data should go to the student&apos;s teacher or
        school, and we will assist them.
      </p>

      <h2>Children</h2>
      <p>
        Our website and apps are not directed to children under 13, and we do
        not knowingly collect personal information from children directly.
        ColorCub is designed to be used by families together; prompts are not
        linked to a child&apos;s identity. Quick Key stores information about
        students, including children under 13, only when a teacher or school
        enters it, and only for that school&apos;s educational purposes, as
        described in the Quick Key section above.
      </p>

      <h2>Changes to This Policy</h2>
      <p>
        We may update this policy as our practices evolve. The latest version
        will always be posted at this URL with an updated effective date.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about this policy can be sent through our{" "}
        <Link href="/contact?type=other">inquiry form</Link>.
      </p>
    </Prose>
  );
}

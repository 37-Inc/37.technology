import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import { faxit } from "@/data/projects/faxit";
import { InvitationClient } from "./InvitationClient";

const title = "A little credit. An easier fax.";
export function Invitation({ staging = false }: { staging?: boolean }) {
  return (
    <article className="mx-auto max-w-2xl [letter-spacing:0]">
      {staging ? (
        <aside className="mb-6 border-l-4 border-[#a63023] bg-[#fff0ed] p-4 text-[#7c2017]">
          <strong>Staging invitation. Test credits only.</strong>
          <p className="mt-2 text-sm leading-relaxed">
            Use the staging Fax It build. Do not enter this code in the App Store
            build. This page does not open a production claim.
          </p>
        </aside>
      ) : null}
      <header className="border-b border-hairline pb-8">
        <Link
          href="/faxit"
          className="inline-flex items-center gap-4 rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#174b9f]"
        >
          <Image
            src={faxit.hero}
            alt=""
            width={64}
            height={64}
            unoptimized
            className="size-16 rounded-lg border border-hairline"
          />
          <h1 className="font-serif text-4xl text-ink">Fax It</h1>
        </Link>
        <p className="mt-6 font-serif text-2xl text-ink">
          {staging ? "Test a Fax It invitation." : title}
        </p>
        <p className="mt-3 max-w-lg leading-relaxed text-muted">
          You&apos;re invited. Sign in with Apple in Fax It and claim your
          invitation. No purchase needed. Confirm the current credit offer in
          the app before claiming.
        </p>
      </header>

      <Suspense
        fallback={
          <p className="py-8 text-muted">
            {staging ? "Use the staging build to confirm the test offer." : "Open this invitation in Fax It to confirm the offer."}
          </p>
        }
      >
        <InvitationClient staging={staging} />
      </Suspense>

      <section className="border-t border-hairline pt-8" aria-labelledby="install-heading">
        <h2 id="install-heading" className="font-serif text-2xl text-ink">
          {staging ? "Use the staging build" : "New to Fax It?"}
        </h2>
        <p className="mt-3 leading-relaxed text-muted">
          {staging
            ? "Install the staging Fax It build, then copy this code and enter it in Account. This test invitation does not automatically open an app."
            : "Install Fax It, then reopen this invitation or enter its code in Account. Installing from the App Store does not carry the code into the app automatically."}
        </p>
        <p className="mt-3 leading-relaxed text-muted">
          Sign in with Apple, choose Have an invitation code? in Account, and
          confirm the offer before claiming. If the invitation screen does not
          appear, {staging ? "update the staging build" : "update Fax It"} and try again.
        </p>
        <p className="mt-5 text-sm text-muted">
          Available for iPhone, iPad and Mac. There is no Android or web app.
        </p>
      </section>
    </article>
  );
}

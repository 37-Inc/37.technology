"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { FaApple } from "react-icons/fa";
import { FiArrowUpRight, FiCopy } from "react-icons/fi";
import { faxit } from "@/data/projects/faxit";

export function parseInvitation(query: Pick<URLSearchParams, "getAll">, staging = false) {
  const codes = query.getAll("code");
  const offers = query.getAll("offer");
  const rawCode = codes.length === 1 ? codes[0].trim() : "";
  const code = /^[A-Za-z0-9]{8}$/.test(rawCode) ? rawCode.toUpperCase() : "";
  const offer = offers.length === 1 ? offers[0].trim() : "";

  if (!code) {
    return { code: "", offer: "", appUrl: "" };
  }

  // The website can validate link shape, not eligibility or a live reward amount.
  if (offers.length > 1 || (offers.length === 1 && !/^[A-Za-z0-9][A-Za-z0-9._-]{0,63}$/.test(offer))) {
    return { code, offer: "", appUrl: "" };
  }

  const params = new URLSearchParams({ code });
  if (offer) params.set("offer", offer);
  return { code, offer, appUrl: `faxit://${staging ? "stage-invite" : "invite"}?${params.toString()}` };
}

const actionClass =
  "inline-flex min-h-12 items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#174b9f]";

export function InvitationClient({ staging = false }: { staging?: boolean }) {
  const query = useSearchParams();
  const { code, offer, appUrl } = parseInvitation(query, staging);
  const [copyStatus, setCopyStatus] = useState({ code: "", message: "" });

  async function copyCode() {
    try {
      await navigator.clipboard.writeText(code);
      setCopyStatus({ code, message: "Code copied." });
    } catch {
      setCopyStatus({ code, message: "Could not copy. Select the code above and copy it manually." });
    }
  }

  return (
    <section className="py-8" aria-label="Your invitation">
      {code ? (
        <>
          <p id="invitation-code-label" className="text-sm font-medium text-muted">
            Invitation code
          </p>
          <code
            aria-labelledby="invitation-code-label"
            className="mt-2 block select-all break-all font-mono text-3xl font-semibold leading-relaxed text-ink"
          >
            {code}
          </code>
          {offer ? <p className="mt-1 break-all text-sm text-muted">Offer version: {offer}</p> : null}
          {!appUrl ? (
            <p className="mt-3 text-sm text-muted">
              This link&apos;s offer version is not recognized. Copy the code
              and confirm the current offer in Account instead.
            </p>
          ) : null}
        </>
      ) : (
        <p className="leading-relaxed text-muted">
          This link is missing a recognizable invitation code. Ask your friend
          for the full invitation, or enter their code in Fax It&apos;s Account.
        </p>
      )}

      <div className="mt-6 grid gap-3 sm:flex sm:flex-wrap">
        {appUrl ? (
          <a href={appUrl} rel="noreferrer" className={`${actionClass} bg-[#246fe5] text-white hover:bg-[#174b9f]`}>
            <FiArrowUpRight aria-hidden className="size-4 shrink-0" />
            {staging ? "Open Fax It (Staging)" : "Open Fax It"}
          </a>
        ) : null}
        {code ? (
          <button type="button" onClick={copyCode} className={`${actionClass} border border-hairline bg-surface text-ink hover:bg-[#eef5ff]`}>
            <FiCopy aria-hidden className="size-4 shrink-0" />
            Copy Code
          </button>
        ) : null}
        {!staging ? <a href={faxit.platforms[0].url} rel="noreferrer" className={`${actionClass} bg-ink text-surface hover:bg-[#3b3934]`}>
          <FaApple aria-hidden className="size-4 shrink-0" />
          App Store
        </a> : null}
      </div>
      <p role="status" aria-live="polite" className="mt-3 min-h-12 text-sm text-muted">
        {copyStatus.code === code ? copyStatus.message : ""}
      </p>
    </section>
  );
}

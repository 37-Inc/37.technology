import { createHash } from "node:crypto";
import {
  inquiryTypes,
  labelFor,
  type ContactSubmission,
} from "@/lib/contact";

function escapeHtml(value: string) {
  return value.replace(/[&<>'"]/g, (character) => {
    const entities: Record<string, string> = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      "'": "&#39;",
      '"': "&quot;",
    };
    return entities[character];
  });
}

export function buildInquiryEmail(submission: ContactSubmission) {
  const inquiryType = labelFor(inquiryTypes, submission.inquiryType);
  const subjectName = submission.name.replace(/[\r\n]+/g, " ");
  const fields = [
    ["Inquiry type", inquiryType],
    ["Name", submission.name],
    ["Email", submission.email],
  ];

  const text = `${fields
    .map(([label, value]) => `${label}: ${value}`)
    .join("\n")}\n\nWhat they need:\n${submission.summary}`;
  const rows = fields
    .map(
      ([label, value]) =>
        `<tr><th align="left" style="padding:6px 16px 6px 0;vertical-align:top">${escapeHtml(label)}</th><td style="padding:6px 0">${escapeHtml(value)}</td></tr>`
    )
    .join("");
  const html = `
    <div style="font-family:ui-sans-serif,system-ui,-apple-system,sans-serif;color:#211f1a;line-height:1.55">
      <h1 style="font-family:Georgia,serif;font-size:26px">New ${escapeHtml(inquiryType.toLowerCase())}</h1>
      <table style="border-collapse:collapse">${rows}</table>
      <h2 style="font-family:Georgia,serif;font-size:20px;margin-top:28px">What they need</h2>
      <p style="white-space:pre-wrap">${escapeHtml(submission.summary)}</p>
    </div>`;

  return {
    html,
    subject: `${inquiryType} from ${subjectName}`,
    text,
  };
}

export function contactIdempotencyKey(submission: ContactSubmission) {
  const fingerprint = JSON.stringify([
    submission.startedAt,
    submission.inquiryType,
    submission.name,
    submission.email,
    submission.summary,
  ]);

  return `contact-${createHash("sha256").update(fingerprint).digest("hex")}`;
}

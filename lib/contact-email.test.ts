import { describe, expect, it } from "vitest";
import {
  buildInquiryEmail,
  contactIdempotencyKey,
} from "@/lib/contact-email";
import type { ContactSubmission } from "@/lib/contact";

const submission: ContactSubmission = {
  companyWebsite: "",
  email: "person@example.com",
  inquiryType: "project",
  name: "Pat <Example>\nBcc: someone@example.com",
  startedAt: 1_786_110_400_000,
  summary: "Build <script>alert('no')</script> safely.",
  turnstileToken: "test-token",
};

describe("contact email", () => {
  it("escapes HTML and removes subject newlines", () => {
    const email = buildInquiryEmail(submission);
    expect(email.html).not.toContain("<script>");
    expect(email.html).toContain("&lt;script&gt;");
    expect(email.html).toContain("Pat &lt;Example&gt;");
    expect(email.subject).not.toContain("\n");
  });

  it("uses a stable key for retries and changes it for new submissions", () => {
    const first = contactIdempotencyKey(submission);
    expect(contactIdempotencyKey({ ...submission })).toBe(first);
    expect(
      contactIdempotencyKey({ ...submission, startedAt: submission.startedAt + 1 })
    ).not.toBe(first);
  });
});

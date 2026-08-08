import { describe, expect, it } from "vitest";
import { validateContactSubmission } from "@/lib/contact";

function validSubmission(overrides: Record<string, unknown> = {}) {
  return {
    companyWebsite: "",
    email: "person@example.com",
    inquiryType: "project",
    name: "Pat Example",
    startedAt: Date.now() - 3_000,
    summary: "We need help taking a tested prototype into production.",
    turnstileToken: "test-token",
    ...overrides,
  };
}

describe("validateContactSubmission", () => {
  it("accepts a complete project inquiry", () => {
    const result = validateContactSubmission(validSubmission());
    expect(result.errors).toEqual({});
    expect(result.data?.email).toBe("person@example.com");
  });

  it("accepts a press inquiry with the same minimal fields", () => {
    const result = validateContactSubmission(
      validSubmission({ inquiryType: "press" })
    );
    expect(result.errors).toEqual({});
  });

  it("rejects an unknown inquiry type", () => {
    const result = validateContactSubmission(
      validSubmission({ inquiryType: "sales" })
    );
    expect(result.errors.inquiryType).toBeDefined();
  });

  it("rejects an invalid email and overlong message", () => {
    const result = validateContactSubmission(
      validSubmission({ email: "not-an-email", summary: "x".repeat(4_001) })
    );
    expect(result.errors.email).toBeDefined();
    expect(result.errors.summary).toBeDefined();
  });

  it("ignores fields that are not part of the minimal contract", () => {
    const result = validateContactSubmission(
      validSubmission({ organization: "Not retained", budget: "$1" })
    );
    expect(result.data).not.toHaveProperty("organization");
    expect(result.data).not.toHaveProperty("budget");
  });
});

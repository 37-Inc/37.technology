import { describe, expect, it } from "vitest";
import { validateContactSubmission } from "@/lib/contact";

function validSubmission(overrides: Record<string, unknown> = {}) {
  return {
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

  it("rejects an invalid email", () => {
    const result = validateContactSubmission(
      validSubmission({ email: "not-an-email" })
    );
    expect(result.errors.email).toBeDefined();
  });

  it("accepts a message of any non-empty length", () => {
    expect(
      validateContactSubmission(validSubmission({ summary: "x" })).errors
    ).toEqual({});
    expect(
      validateContactSubmission(
        validSubmission({ summary: "x".repeat(20_000) })
      ).errors
    ).toEqual({});
  });

  it("rejects an empty or whitespace-only message", () => {
    for (const summary of ["", "   ", "\n\t"]) {
      const result = validateContactSubmission(validSubmission({ summary }));
      expect(result.errors.summary).toBe("Tell us how we can help.");
    }
  });

  it("ignores fields that are not part of the minimal contract", () => {
    const result = validateContactSubmission(
      validSubmission({ organization: "Not retained", budget: "$1" })
    );
    expect(result.data).not.toHaveProperty("organization");
    expect(result.data).not.toHaveProperty("budget");
  });
});

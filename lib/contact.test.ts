import { describe, expect, it } from "vitest";
import { validateContactSubmission } from "@/lib/contact";

function validSubmission(overrides: Record<string, unknown> = {}) {
  return {
    budget: "25-50",
    companyWebsite: "",
    email: "person@example.com",
    inquiryType: "project",
    link: "https://example.com/brief",
    name: "Pat Example",
    organization: "Example Co",
    platforms: "iOS and web",
    projectStage: "prototype",
    startedAt: Date.now() - 3_000,
    summary: "We need help taking a tested prototype into production.",
    timeline: "one-to-three",
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

  it("accepts a non-project inquiry without project fields", () => {
    const result = validateContactSubmission(
      validSubmission({
        budget: "",
        inquiryType: "press",
        platforms: "",
        projectStage: "",
        timeline: "",
      })
    );
    expect(result.errors).toEqual({});
  });

  it("rejects unknown select values", () => {
    const result = validateContactSubmission(
      validSubmission({ budget: "unlimited", projectStage: "done" })
    );
    expect(result.errors.budget).toBeDefined();
    expect(result.errors.projectStage).toBeDefined();
  });

  it("rejects non-http links and overlong messages", () => {
    const result = validateContactSubmission(
      validSubmission({ link: "javascript:alert(1)", summary: "x".repeat(4_001) })
    );
    expect(result.errors.link).toBeDefined();
    expect(result.errors.summary).toBeDefined();
  });
});

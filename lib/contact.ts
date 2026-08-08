export const inquiryTypes = [
  { value: "project", label: "Project inquiry" },
  { value: "press", label: "Press or interview request" },
  { value: "other", label: "Something else" },
] as const;

export const contactTurnstileAction = "contact_submit";

export type InquiryType = (typeof inquiryTypes)[number]["value"];

export interface ContactSubmission {
  email: string;
  inquiryType: InquiryType;
  name: string;
  startedAt: number;
  summary: string;
  turnstileToken: string;
}

export type ContactField = Exclude<
  keyof ContactSubmission,
  "startedAt" | "turnstileToken"
>;

export type ContactFieldErrors = Partial<Record<ContactField, string>>;

interface ContactValidationResult {
  data?: ContactSubmission;
  errors: ContactFieldErrors;
}

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const allowedInquiryTypes = new Set<string>(
  inquiryTypes.map(({ value }) => value)
);

function asTrimmedString(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

export function validateContactSubmission(
  input: unknown
): ContactValidationResult {
  if (!input || typeof input !== "object") {
    return { errors: { summary: "Tell us how we can help." } };
  }

  const raw = input as Record<string, unknown>;
  const data: ContactSubmission = {
    email: asTrimmedString(raw.email).toLowerCase(),
    inquiryType: asTrimmedString(raw.inquiryType) as InquiryType,
    name: asTrimmedString(raw.name),
    startedAt:
      typeof raw.startedAt === "number"
        ? raw.startedAt
        : Number.parseInt(String(raw.startedAt), 10),
    summary: asTrimmedString(raw.summary),
    turnstileToken: asTrimmedString(raw.turnstileToken),
  };
  const errors: ContactFieldErrors = {};

  if (!allowedInquiryTypes.has(data.inquiryType)) {
    errors.inquiryType = "Choose an inquiry type.";
  }
  if (data.name.length < 2 || data.name.length > 100) {
    errors.name = "Enter your name.";
  }
  if (
    data.email.length > 254 ||
    !emailPattern.test(data.email)
  ) {
    errors.email = "Enter a valid email address.";
  }
  if (!data.summary) {
    errors.summary = "Tell us how we can help.";
  }

  return Object.keys(errors).length > 0 ? { errors } : { data, errors };
}

export function labelFor(
  options: ReadonlyArray<{ label: string; value: string }>,
  value: string
) {
  return options.find((option) => option.value === value)?.label ?? "Not provided";
}

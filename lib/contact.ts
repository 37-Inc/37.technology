export const inquiryTypes = [
  { value: "project", label: "Project inquiry" },
  { value: "press", label: "Press or interview request" },
  { value: "other", label: "Something else" },
] as const;

export const projectStages = [
  { value: "idea", label: "Idea or early planning" },
  { value: "prototype", label: "Design or prototype" },
  { value: "building", label: "In active development" },
  { value: "launched", label: "Already launched" },
] as const;

export const timelineOptions = [
  { value: "exploring", label: "Exploring timing" },
  { value: "one-to-three", label: "1–3 months" },
  { value: "three-to-six", label: "3–6 months" },
  { value: "six-plus", label: "6+ months" },
] as const;

export const budgetOptions = [
  { value: "not-set", label: "Not set yet" },
  { value: "under-25", label: "Under $25,000" },
  { value: "25-50", label: "$25,000–$50,000" },
  { value: "50-100", label: "$50,000–$100,000" },
  { value: "100-plus", label: "$100,000+" },
] as const;

export const contactTurnstileAction = "contact_submit";

export type InquiryType = (typeof inquiryTypes)[number]["value"];

export interface ContactSubmission {
  budget: string;
  companyWebsite: string;
  email: string;
  inquiryType: InquiryType;
  link: string;
  name: string;
  organization: string;
  platforms: string;
  projectStage: string;
  startedAt: number;
  summary: string;
  timeline: string;
  turnstileToken: string;
}

export type ContactField = Exclude<
  keyof ContactSubmission,
  "companyWebsite" | "startedAt" | "turnstileToken"
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
const allowedProjectStages = new Set<string>(
  projectStages.map(({ value }) => value)
);
const allowedTimelines = new Set<string>(
  timelineOptions.map(({ value }) => value)
);
const allowedBudgets = new Set<string>(
  budgetOptions.map(({ value }) => value)
);

function asTrimmedString(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

export function validateContactSubmission(
  input: unknown
): ContactValidationResult {
  if (!input || typeof input !== "object") {
    return { errors: { summary: "Enter a little about what you need." } };
  }

  const raw = input as Record<string, unknown>;
  const data: ContactSubmission = {
    budget: asTrimmedString(raw.budget),
    companyWebsite: asTrimmedString(raw.companyWebsite),
    email: asTrimmedString(raw.email).toLowerCase(),
    inquiryType: asTrimmedString(raw.inquiryType) as InquiryType,
    link: asTrimmedString(raw.link),
    name: asTrimmedString(raw.name),
    organization: asTrimmedString(raw.organization),
    platforms: asTrimmedString(raw.platforms),
    projectStage: asTrimmedString(raw.projectStage),
    startedAt:
      typeof raw.startedAt === "number"
        ? raw.startedAt
        : Number.parseInt(String(raw.startedAt), 10),
    summary: asTrimmedString(raw.summary),
    timeline: asTrimmedString(raw.timeline),
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
  if (data.organization.length > 120) {
    errors.organization = "Keep the organization name under 120 characters.";
  }
  if (data.summary.length < 30 || data.summary.length > 4_000) {
    errors.summary = "Share between 30 and 4,000 characters.";
  }
  if (data.platforms.length > 200) {
    errors.platforms = "Keep the platform details under 200 characters.";
  }
  if (
    data.inquiryType === "project" &&
    !allowedProjectStages.has(data.projectStage)
  ) {
    errors.projectStage = "Choose the current project stage.";
  }
  if (data.projectStage && !allowedProjectStages.has(data.projectStage)) {
    errors.projectStage = "Choose a listed project stage.";
  }
  if (data.timeline && !allowedTimelines.has(data.timeline)) {
    errors.timeline = "Choose a listed timeline.";
  }
  if (data.budget && !allowedBudgets.has(data.budget)) {
    errors.budget = "Choose a listed budget range.";
  }
  if (data.link.length > 500) {
    errors.link = "Keep the link under 500 characters.";
  } else if (data.link) {
    try {
      const url = new URL(data.link);
      if (!['http:', 'https:'].includes(url.protocol)) throw new Error();
    } catch {
      errors.link = "Enter a complete http:// or https:// link.";
    }
  }

  return Object.keys(errors).length > 0 ? { errors } : { data, errors };
}

export function labelFor(
  options: ReadonlyArray<{ label: string; value: string }>,
  value: string
) {
  return options.find((option) => option.value === value)?.label ?? "Not provided";
}

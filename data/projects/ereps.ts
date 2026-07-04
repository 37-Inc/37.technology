import type { Project } from "./types";

export const ereps: Project = {
  slug: "ereps",
  name: "Ereps",
  category: "Exercise prescription software for rehab clinicians",
  oneLiner:
    "Exercise prescription software with evidence-based rehab protocols and outcome tracking.",
  description:
    "Ereps is cloud-based exercise prescription software for physiotherapists, chiropractors, and osteopaths. Build custom rehabilitation programs from a searchable exercise database, follow research-based protocols with clear progression criteria, and track patient outcomes with built-in measures — completed in clinic or remotely.",
  problem: {
    heading: "Paper exercise sheets don't get done",
    body: "Most clinics still hand-write or photocopy exercise handouts. Patients lose them, forget the technique, and quietly stop doing their program. And with nothing measured between visits, you have no objective picture of whether treatment is actually working.",
  },
  solution: {
    heading: "Prescribe in clicks, measure what happens",
    body: "Ereps lets you search exercises by name, condition, or indication and assemble a program in a few clicks — or start from a step-by-step protocol grounded in peer-reviewed research. Programs go out by email or print, and built-in outcome measures are scored instantly and graphed over time, so progress is visible instead of assumed.",
  },
  features: [
    {
      title: "Evidence-based rehab protocols",
      body: "Step-by-step rehabilitation programs based on peer-reviewed research, each with clear criteria for when to progress a patient.",
    },
    {
      title: "Searchable exercise database",
      body: "Find exercises by name, condition, or indication and add them to a program in a few clicks.",
    },
    {
      title: "Built-in outcome measures",
      body: "Patients complete major outcome measures on a tablet or online; results are scored instantly and graphed to show progress.",
    },
    {
      title: "Email or print delivery",
      body: "Send programs and exercises to patients by email, or print them for patients who prefer paper.",
    },
    {
      title: "Cloud-based, nothing to install",
      body: "Ereps runs in the browser, so any practitioner in the clinic can prescribe and review programs from any computer.",
    },
    {
      title: "Plans for any clinic size",
      body: "Solo, three-practitioner, and five-practitioner plans, with custom options for larger practices.",
    },
  ],
  useCases: [
    {
      title: "Home exercise programs that stick",
      body: "Email each patient a clear, illustrated program instead of a photocopied sheet, so they know exactly what to do between appointments.",
    },
    {
      title: "Post-surgical rehabilitation",
      body: "Follow staged protocols with defined goals and progression criteria, from early recovery through return to full function.",
    },
    {
      title: "Objective progress reviews",
      body: "Have patients complete outcome measures in the waiting room or at home, then review the graphed scores together at the next visit.",
    },
    {
      title: "Consistency across practitioners",
      body: "Give every clinician in a multi-practitioner practice the same protocols and exercise library, so care doesn't depend on who's rostered.",
    },
  ],
  comparison: {
    heading: "Ereps vs. the usual ways clinics prescribe exercise",
    rows: [
      {
        alternative: "Paper handouts and photocopied sheets",
        drawback: "Easily lost, hard to update, and give you no idea whether the patient ever did the exercises.",
        advantage: "Programs are emailed or printed on demand, and outcome measures show whether patients are actually improving.",
      },
      {
        alternative: "Building each program manually",
        drawback: "Writing out sets, reps, and instructions per patient eats clinical time and drifts from the evidence.",
        advantage: "Searchable exercises and research-based protocols with progression criteria turn prescription into a few clicks.",
      },
      {
        alternative: "Generic fitness apps",
        drawback: "Built for workouts, not clinical rehab — no protocols, no contraindication context, no outcome measures.",
        advantage: "Ereps is built for clinicians, pairing rehab-specific programs with instantly scored, graphed outcome measures.",
      },
    ],
  },
  faqs: [
    {
      question: "How much does Ereps cost?",
      answer: "Plans start at $20/month for a solo practitioner, $40/month for three practitioners, and $50/month for five, with custom plans for larger practices. Pricing is in AUD for Australia and New Zealand and USD elsewhere.",
    },
    {
      question: "Is there a free trial?",
      answer: "Yes — every plan includes a 14-day free trial, with no contract and the option to cancel anytime.",
    },
    {
      question: "Who is Ereps for?",
      answer: "Physiotherapists, chiropractors, osteopaths, musculoskeletal therapists, and exercise physiologists — from solo practitioners to multi-practitioner clinics.",
    },
    {
      question: "Do patients need to install an app?",
      answer: "No. Patients receive their exercise programs by email or on paper, and can complete outcome measures on a tablet in the clinic or online from home.",
    },
    {
      question: "Are the rehabilitation programs evidence-based?",
      answer: "Yes. Protocols are based on peer-reviewed research and include step-by-step progression criteria, so you know when a patient is ready to advance.",
    },
    {
      question: "Can I track patient outcomes remotely?",
      answer: "Yes. Outcome measures can be completed online outside the clinic, are scored instantly, and are graphed so you can review progress between visits.",
    },
  ],
  keywords: [
    "exercise prescription software",
    "rehab exercise software for physiotherapists",
    "home exercise program software",
    "chiropractic exercise prescription",
    "physiotherapy exercise prescription software",
    "rehabilitation protocol software",
    "exercise program builder for clinicians",
    "patient outcome measures software",
    "evidence-based rehab programs",
    "HEP software for physical therapy",
  ],
  seo: {
    title: "Ereps — Exercise Prescription Software for Rehab Clinics",
    description:
      "Build evidence-based rehab exercise programs in minutes, send them to patients, and track outcomes. Cloud-based, from $20/month with a 14-day free trial.",
  },
  applicationCategory: "HealthApplication",
  theme: {
    accent: "#1b8fce",
    accentSoft: "#e9f4fb",
    accentInk: "#0f5c8c",
  },
  tags: ["Web", "Healthcare", "Rehabilitation"],
  hero: "/assets/projects/ereps.png",
  screenshots: [
    {
      src: "/assets/projects/ereps/screenshot-1.webp",
      width: 402,
      height: 242,
      alt: "Ereps exercise prescription dashboard on a desktop computer, with search filters and patient programs",
    },
    {
      src: "/assets/projects/ereps/screenshot-2.webp",
      width: 402,
      height: 242,
      alt: "Adding a rehabilitation program in Ereps on a tablet, with treatment goals and criteria to progress",
    },
    {
      src: "/assets/projects/ereps/screenshot-3.webp",
      width: 402,
      height: 242,
      alt: "A rehab program in Ereps on a tablet showing an exercise demonstration photo and progression criteria",
    },
  ],
  platforms: [
    {
      label: "Website",
      url: "https://erepsonline.com/",
      kind: "website",
    },
  ],
  offer: { price: "20", description: "From $20/month after a 14-day free trial" },
  operatingSystem: "Web",
  cta: {
    heading: "Retire the photocopied exercise sheet",
    body: "Try Ereps free for 14 days — prescribe evidence-based programs and start measuring outcomes at your next appointment.",
  },
};

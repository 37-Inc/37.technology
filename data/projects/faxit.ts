import type { Project } from "./types";

export const faxit: Project = {
  slug: "faxit",
  name: "Fax It",
  category: "Send-and-receive fax app for iPhone, iPad, and Mac",
  oneLiner:
    "Send with page credits, or choose a plan with your own fax number.",
  description:
    "Fax It sends and receives faxes on iPhone, iPad, and Mac. Scan or import documents, check every page, and send to the US, Canada, and 50+ countries. Pay-per-page credits remain available for occasional sending, while optional Fax It Number plans add a dedicated US or Canadian number, an inbox, and plan-covered sending and receiving.",
  problem: {
    heading: "One outgoing fax - or a number for incoming ones.",
    body: "A doctor's office, government agency, or business still needs a fax, but you do not own the machine. Sometimes the job is one outgoing form. Other times you need a number where documents and replies can reach you.",
  },
  solution: {
    heading: "Pay by the page - or choose a plan.",
    body: "Use credits that do not expire when you only need to send. When you need a dedicated number, choose a Fax It Number plan and receive faxes in the app alongside plan-covered sending.",
  },
  features: [
    {
      title: "Scan, import, and arrange",
      body: "Scan paper on iPhone or iPad, or import supported PDFs and images. Add, remove, and reorder pages before sending.",
    },
    {
      title: "Native on Mac",
      body: "Drag documents into the Mac app, build multi-document faxes, review the page count, and send from a native desktop workflow.",
    },
    {
      title: "Your own fax number",
      body: "An optional Fax It Number plan adds a dedicated US or Canadian number and an inbox for received faxes.",
    },
    {
      title: "Flexible ways to pay",
      body: "Use non-expiring page credits for occasional sending, or choose a monthly 200-page or Unlimited number plan for ongoing use.",
    },
    {
      title: "Fax 50+ countries",
      body: "Send to the US, Canada, and more than 50 international destinations with a built-in country-code picker.",
    },
    {
      title: "History across devices",
      body: "Follow delivery status and review sent or received faxes from the signed-in account on iPhone or Mac.",
    },
  ],
  useCases: [
    {
      title: "The occasional outgoing fax",
      body: "Buy page credits for one important document and keep the unused balance for later. Credits do not expire.",
    },
    {
      title: "A number for replies",
      body: "Choose a dedicated US or Canadian number and receive incoming faxes in the app's Inbox.",
    },
    {
      title: "Medical and government paperwork",
      body: "Send referrals, records, signed forms, or applications to an office that still requires fax.",
    },
    {
      title: "Ongoing document exchange",
      body: "Use a Fax It Number plan when regular sending and receiving fits better than buying pages one fax at a time.",
    },
  ],
  comparison: {
    heading: "Choose the fax setup that matches the job",
    rows: [
      {
        alternative: "Finding a fax machine or print shop",
        drawback:
          "It means traveling, waiting, and handing an important document to another service.",
        advantage:
          "Scan or import the document and send it from iPhone, iPad, or Mac.",
      },
      {
        alternative: "A one-size subscription",
        drawback:
          "One billing model rarely fits both a single outgoing fax and someone who needs a permanent number.",
        advantage:
          "Use non-expiring page credits for occasional sending or choose a number plan for ongoing use.",
      },
      {
        alternative: "Emailing the document instead",
        drawback:
          "Many medical offices, courts, agencies, and businesses still require a real fax transmission.",
        advantage:
          "Send to a fax number, follow delivery status, and receive replies in the app when you have a Fax It Number.",
      },
    ],
  },
  faqs: [
    {
      question: "Is Fax It free?",
      answer:
        "Fax It is free to download. Sending can use page credits purchased in the app, while receiving requires an optional monthly Fax It Number plan.",
    },
    {
      question: "Can I send a fax without a subscription?",
      answer:
        "Yes. Pay-per-page sending remains available with credits that do not expire. A monthly plan is optional for people who want a dedicated number and included usage.",
    },
    {
      question: "Can Fax It receive faxes?",
      answer:
        "Yes. A Fax It Number plan provides a dedicated US or Canadian fax number. Incoming faxes appear in the app's Inbox as documents you can open, save, or share.",
    },
    {
      question: "Does Fax It work on Mac?",
      answer:
        "Yes. Fax It is available for iPhone, iPad, and Mac. Sent and received history follows the signed-in account between iPhone and Mac.",
    },
    {
      question: "Which countries can I fax to?",
      answer:
        "Fax It sends to the US, Canada, and more than 50 international destinations. Dedicated receiving numbers are available for supported US and Canadian App Store accounts.",
    },
    {
      question: "What documents can I fax?",
      answer:
        "Fax It supports PDFs and common image formats, including multi-page and multi-document faxes. Preview the assembled pages before sending.",
    },
  ],
  keywords: [
    "send and receive fax app",
    "send a fax from iPhone",
    "fax app for Mac",
    "fax app with phone number",
    "pay per page fax app",
    "receive fax on iPhone",
    "fax without a fax machine",
    "dedicated fax number app",
    "international fax app",
    "scan and fax app iPhone",
  ],
  seo: {
    title: "Fax It - Send & Receive Faxes on iPhone, iPad, Mac",
    description:
      "Send and receive faxes on iPhone, iPad, or Mac. Pay by the page with credits, or choose a plan with your own fax number and inbox.",
  },
  applicationCategory: "BusinessApplication",
  theme: {
    accent: "#246fe5",
    accentSoft: "#eef5ff",
    accentInk: "#174b9f",
  },
  tags: ["iOS", "iPadOS", "macOS", "Business", "Productivity"],
  hero: "/assets/projects/faxit.jpg",
  screenshots: [
    {
      src: "/assets/projects/faxit/screenshot-1.webp",
      width: 442,
      height: 960,
      alt: "Fax It storefront showing pay-by-page sending or a fax number plan on iPhone",
    },
    {
      src: "/assets/projects/faxit/screenshot-2.webp",
      width: 442,
      height: 960,
      alt: "Fax It number picker for choosing a local or memorable fax number",
    },
    {
      src: "/assets/projects/faxit/screenshot-3.webp",
      width: 442,
      height: 960,
      alt: "Fax It inbox showing received faxes sent to a dedicated number",
    },
    {
      src: "/assets/projects/faxit/screenshot-4.webp",
      width: 442,
      height: 960,
      alt: "Fax It delivery history showing the status of sent faxes",
    },
    {
      src: "/assets/projects/faxit/screenshot-5.webp",
      width: 442,
      height: 960,
      alt: "Fax It received fax detail ready to open, review, and share",
    },
    {
      src: "/assets/projects/faxit/screenshot-6.webp",
      width: 442,
      height: 960,
      alt: "Fax It compose workflow with the selected documents ready to send",
    },
  ],
  platforms: [
    {
      label: "App Store",
      url: "https://apps.apple.com/us/app/fax-it-send-receive-fax/id1458261691",
      kind: "app-store",
    },
  ],
  offer: {
    price: "0",
    description: "Free download; sending uses page credits or an optional plan",
  },
  operatingSystem: "iOS, iPadOS, macOS",
  cta: {
    heading: "Send one fax - or keep your own number",
    body: "Fax It is available for iPhone, iPad, and Mac. Pay by the page for occasional sending, or choose a Fax It Number plan.",
  },
};

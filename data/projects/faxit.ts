import type { Project } from "./types";

export const faxit: Project = {
  slug: "faxit",
  name: "Fax It",
  category: "Pay-per-page fax app for iPhone, iPad, and Mac",
  oneLiner:
    "Fax for less. Simple sending and receiving. iPhone, iPad & Mac.",
  description:
    "Send without a required subscription using pay-per-page credits that do not expire. Add an optional US or Canadian fax number when you need to receive faxes.",
  problem: {
    heading: "An occasional fax should not become another subscription.",
    body: "You have a form, application, or signed document that still has to reach a fax number. You need a clear way to send it, confirm delivery, and move on - without maintaining a fax machine or paying every month just to send.",
  },
  solution: {
    heading: "Pay by the page. Add a number only when you need one.",
    body: "Buy page credits for sending and keep any unused balance for later. If you need replies or ongoing inbound faxing, an optional Fax It Number plan adds a dedicated US or Canadian number and an inbox.",
  },
  features: [
    {
      title: "Send without a subscription",
      body: "Use pay-per-page credits for occasional sending. Buy the pages you need and keep unused credits for your next fax.",
    },
    {
      title: "Scan, import, and add a cover page",
      body: "Scan paper on iPhone or iPad, or import PDFs and images. Arrange the pages, add a cover page, and review the fax before sending.",
    },
    {
      title: "Know when it arrived",
      body: "Follow delivery status in the app. When delivery is confirmed, open a receipt you can share or keep with your records.",
    },
    {
      title: "Receive with your own number",
      body: "Optional monthly plans add a dedicated US or Canadian fax number and an inbox for received documents.",
    },
    {
      title: "One account across Apple devices",
      body: "Use the same signed-in account, credit balance, fax number, and history on iPhone, iPad, and Mac.",
    },
    {
      title: "Native Mac workflow",
      body: "Drag in documents, build a multi-document fax, check the page count, and send without moving the work to your phone.",
    },
  ],
  useCases: [
    {
      title: "One important form",
      body: "Send an application, signed agreement, government form, or other document without committing to a sending subscription.",
    },
    {
      title: "A fax number for replies",
      body: "Choose a dedicated US or Canadian number when an office, client, or service needs to fax documents back to you.",
    },
    {
      title: "Paperwork already on your Mac",
      body: "Drag in PDFs or images, combine documents, add a cover page, and send from the native Mac app.",
    },
    {
      title: "A local automation workflow",
      body: "On Mac, opt in to the localhost MCP server to connect compatible tools to the signed-in Fax It app.",
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
          "Scan or import the document, review the pages, and send from iPhone, iPad, or Mac.",
      },
      {
        alternative: "A one-size subscription",
        drawback:
          "One billing model rarely fits both a single outgoing fax and someone who needs a permanent number.",
        advantage:
          "Use non-expiring page credits for sending or choose a number plan when you need to receive.",
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
      question: "Do I need a subscription to send a fax?",
      answer:
        "No. Pay-per-page sending is available with credits purchased in the app. A monthly plan is optional and is intended for people who want a dedicated receiving number and plan-covered usage.",
    },
    {
      question: "Do unused Fax It credits expire?",
      answer:
        "No. Unused page credits remain on your Fax It account for a future fax.",
    },
    {
      question: "Can Fax It receive faxes?",
      answer:
        "Yes. A Fax It Number plan provides a dedicated US or Canadian fax number. Incoming faxes appear in the app's Inbox as documents you can open, save, or share.",
    },
    {
      question: "Can I use the same Fax It account on iPhone, iPad, and Mac?",
      answer:
        "Yes. Fax It is native on iPhone, iPad, and Mac. Your signed-in account keeps the same credit balance, fax number, and sent or received history available across those devices.",
    },
    {
      question: "How do I know whether my fax was delivered?",
      answer:
        "Fax It shows the delivery status in your fax history. A confirmed delivery includes a receipt you can open and share.",
    },
    {
      question: "What is Fax It automation on Mac?",
      answer:
        "Fax It for Mac includes an optional localhost MCP server for compatible automation tools. It is off until you enable it, runs while Fax It is open, and uses the signed-in app account for supported account, history, document, and sending actions.",
    },
  ],
  keywords: [
    "fax app for iPhone",
    "fax app for Mac",
    "send a fax from iPhone",
    "send a fax from Mac",
    "receive fax on iPhone",
    "pay per page fax app",
    "fax app no subscription for sending",
    "scan and fax app",
    "fax delivery receipt",
    "dedicated fax number app",
  ],
  seo: {
    title: "Fax It App: Send & Receive on iPhone, iPad & Mac",
    description:
      "Send without a subscription using non-expiring page credits, or add a US/Canadian fax number. Native on iPhone, iPad, and Mac.",
  },
  applicationCategory: "BusinessApplication",
  theme: {
    accent: "#246fe5",
    accentSoft: "#eef5ff",
    accentInk: "#174b9f",
  },
  tags: ["iOS", "iPadOS", "macOS", "Business", "Productivity"],
  hero: "/assets/projects/faxit.jpg",
  heroMedia: {
    src: "/assets/projects/faxit/hero-platforms.webp",
    width: 960,
    height: 600,
    alt: "Fax It showing the same delivered fax on iPhone, iPad, and Mac",
  },
  proofPoints: [
    {
      title: "No sending subscription",
      body: "Pay only for the pages you send.",
    },
    {
      title: "Credits do not expire",
      body: "Keep any unused balance for later.",
    },
    {
      title: "One account",
      body: "iPhone, iPad, and Mac stay in step.",
    },
  ],
  screenshots: [
    {
      src: "/assets/projects/faxit/screenshot-1.webp",
      width: 442,
      height: 960,
      alt: "Fax It compose screen with recipient, documents, cover page, page count, and credit balance",
    },
    {
      src: "/assets/projects/faxit/screenshot-2.webp",
      width: 442,
      height: 960,
      alt: "Fax It delivery detail showing confirmed delivery and a shareable receipt",
    },
    {
      src: "/assets/projects/faxit/screenshot-3.webp",
      width: 442,
      height: 960,
      alt: "Fax It number picker for choosing a dedicated US or Canadian fax number",
    },
    {
      src: "/assets/projects/faxit/screenshot-4.webp",
      width: 442,
      height: 960,
      alt: "Fax It page-credit options showing that no sending subscription is required",
    },
    {
      src: "/assets/projects/faxit/screenshot-5.webp",
      width: 442,
      height: 960,
      alt: "Fax It showing one account and fax history across iPhone, iPad, and Mac",
    },
    {
      src: "/assets/projects/faxit/screenshot-6.webp",
      width: 442,
      height: 960,
      alt: "Fax It overview showing simple sending and receiving across Apple devices",
    },
  ],
  spotlight: {
    eyebrow: "Optional on Mac",
    heading: "Bring Fax It into a local automation workflow.",
    body: "Fax It for Mac includes an opt-in localhost MCP server for compatible tools. It keeps supported account, history, document, and sending actions connected to the native app you are already signed in to.",
    points: [
      "Off until you enable it in Fax It for Mac",
      "Runs on localhost while the app is open",
      "Works with the same Fax It account and history",
    ],
    media: {
      src: "/assets/projects/faxit/mac-automation.webp",
      width: 960,
      height: 600,
      alt: "Fax It for Mac settings with the optional local MCP server enabled",
    },
  },
  platforms: [
    {
      label: "App Store",
      url: "https://apps.apple.com/us/app/fax-it-send-receive-fax/id1458261691",
      kind: "app-store",
    },
  ],
  offer: {
    price: "0",
    description:
      "Free download; sending uses page credits and receiving numbers require an optional plan",
  },
  operatingSystem: "iOS, iPadOS, macOS",
  cta: {
    heading: "Send the fax. Keep the rest simple.",
    body: "Download Fax It for iPhone, iPad, and Mac. Pay by the page for sending, or add a number when you need to receive.",
  },
};

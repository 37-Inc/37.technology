import type { Project } from "./types";

export const faxit: Project = {
  slug: "faxit",
  name: "Fax It",
  category: "Pay-per-page fax app for iPhone",
  oneLiner:
    "Send a fax from your iPhone — no fax machine, no subscription, pay per page.",
  description:
    "Fax It sends faxes from your iPhone or iPad without a fax machine or a monthly plan. Scan documents with your camera or import PDFs and photos from iCloud Drive, Dropbox, or Google Drive, preview exactly what the recipient will get, and send to the US, Canada, and 50+ countries. You buy credits per page — they never expire, so an occasional fax costs cents, not a subscription.",
  problem: {
    heading: "You need to send one fax. You don't own a fax machine.",
    body: "Doctors' offices, government agencies, and law firms still ask for faxes, and email won't do. Hunting down a print shop wastes an afternoon, and most fax apps push a $10–30/month subscription to send a single form.",
  },
  solution: {
    heading: "Fax it from your phone, pay for the pages, done.",
    body: "Scan the document with your camera or pull it from your files, type the fax number, and preview the exact pages before they go out. Fax It charges per page with credits that never expire — no plan, no auto-renewal, no fax machine.",
  },
  features: [
    {
      title: "Scan with your camera",
      body: "Auto-scan paper documents straight into a fax, with adjustable image quality and contrast so they arrive legible.",
    },
    {
      title: "Import from anywhere",
      body: "Fax PDFs and photos from iCloud Drive, Google Drive, Dropbox, your photo library, or email and Messages attachments.",
    },
    {
      title: "Fax 50+ countries",
      body: "Send to the US, Canada, and more than 50 international destinations with a built-in country-code picker.",
    },
    {
      title: "Preview before sending",
      body: "See exactly what the recipient will receive — every page, in order — before it goes out.",
    },
    {
      title: "Delivery status",
      body: "Watch each fax move to delivered, with the recipient, page count, cost, and date kept on record.",
    },
    {
      title: "Credits that never expire",
      body: "Buy as few or as many page credits as you need. No subscription, no monthly reset, no auto-renewal.",
    },
  ],
  useCases: [
    {
      title: "Fax a doctor's office",
      body: "Send medical records, referral forms, or prescription paperwork to a clinic that only accepts fax.",
    },
    {
      title: "Government and tax forms",
      body: "Fax signed forms to the IRS, DMV, courts, or other agencies that won't take email attachments.",
    },
    {
      title: "Contracts and legal documents",
      body: "Scan a signed contract or real estate form and fax it back in minutes, multi-page and previewed.",
    },
    {
      title: "The once-a-year fax",
      body: "Keep leftover credits for next time — they don't expire, so the occasional fax never needs a plan.",
    },
  ],
  comparison: {
    heading: "How people send a fax without a fax machine today",
    rows: [
      {
        alternative: "Finding a fax machine or print shop",
        drawback: "Driving somewhere, waiting in line, and paying per page anyway — with your documents passing through someone else's hands.",
        advantage: "Scan and send from your phone in minutes, from wherever the document is.",
      },
      {
        alternative: "Online fax subscription services",
        drawback: "Monthly plans of $10–30 whether you fax a hundred pages or one, often with auto-renewal you have to remember to cancel.",
        advantage: "Pay per page with credits that never expire. No plan to cancel because there is no plan.",
      },
      {
        alternative: "Emailing the document instead",
        drawback: "Many medical offices, courts, and government agencies still require fax and won't accept email attachments.",
        advantage: "A real fax transmission to a real fax number, with delivery status to confirm it arrived.",
      },
    ],
  },
  faqs: [
    {
      question: "Is Fax It free?",
      answer: "The app is free to download. Sending costs page credits you buy in-app — pay only for what you send, with no subscription and no recurring charges.",
    },
    {
      question: "Do the fax credits expire?",
      answer: "No. Credits never expire, so whatever you don't use today is still there for the next fax, whenever that is.",
    },
    {
      question: "How do I send a fax from my iPhone?",
      answer: "Scan the document with your camera or import it from Files, iCloud Drive, Dropbox, Google Drive, or Photos. Enter the recipient's fax number, preview the pages, and hit Send.",
    },
    {
      question: "Can I fax to a doctor's office or the IRS with it?",
      answer: "Yes. Fax It sends to any fax number — medical offices, government agencies, courts, and businesses — and shows delivery status so you know it arrived.",
    },
    {
      question: "Which countries can I fax to?",
      answer: "The US, Canada, and more than 50 international countries, selected from a built-in country-code picker.",
    },
    {
      question: "What happens to my documents?",
      answer: "You preview exactly what will be transmitted before sending, and each fax keeps a delivery record in the app. The full privacy policy is at 37.technology/legal/privacy/faxit.",
    },
  ],
  keywords: [
    "send a fax from iPhone",
    "fax without a fax machine",
    "fax app no subscription",
    "pay per page fax app",
    "one-time fax from phone",
    "how to send a fax from my phone",
    "fax to doctor's office from iPhone",
    "fax government forms from phone",
    "international fax app",
    "scan and fax app iPhone",
  ],
  seo: {
    title: "Fax It — Send a Fax from iPhone, No Subscription",
    description:
      "Need to fax a form but don't own a fax machine? Fax It sends faxes from your iPhone to 50+ countries. Pay per page — credits never expire.",
  },
  applicationCategory: "BusinessApplication",
  theme: {
    accent: "#7448c8",
    accentSoft: "#f2eefa",
    accentInk: "#46307e",
  },
  tags: ["iOS", "Business", "Productivity"],
  hero: "/assets/projects/faxit.jpg",
  screenshots: [
    {
      src: "/assets/projects/faxit/screenshot-1.webp",
      width: 392,
      height: 696,
      alt: "Fax It compose screen with a recipient fax number entered and an Add Page button — fax securely with no subscription",
    },
    {
      src: "/assets/projects/faxit/screenshot-2.webp",
      width: 392,
      height: 696,
      alt: "Country picker listing international dialing codes for faxing to 50+ countries, above the document scanner and file import options",
    },
    {
      src: "/assets/projects/faxit/screenshot-3.webp",
      width: 392,
      height: 696,
      alt: "Delivery record for a 5-page fax to a medical group showing recipient, cost in credits, date, and a Success status",
    },
    {
      src: "/assets/projects/faxit/screenshot-4.webp",
      width: 392,
      height: 696,
      alt: "Import source menu for adding fax pages from Gallery, Camera, Files, or Dropbox",
    },
  ],
  platforms: [
    {
      label: "App Store",
      url: "https://apps.apple.com/us/app/fax-it/id1458261691",
      kind: "app-store",
    },
  ],
  offer: { price: "0", description: "Free app; sending uses pay-per-page credits" },
  operatingSystem: "iOS",
  cta: {
    heading: "Send that fax and move on",
    body: "Fax It is free on the App Store. Buy credits for just the pages you need — they never expire.",
  },
};

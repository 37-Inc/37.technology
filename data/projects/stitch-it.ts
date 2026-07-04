import type { Project } from "./types";

export const stitchIt: Project = {
  slug: "stitch-it",
  name: "Stitch It",
  category: "Screenshot stitching app for iPhone and Android",
  oneLiner:
    "Combine screenshots into one long image — a whole conversation in a single picture.",
  description:
    "Stitch It merges multiple screenshots into one seamless image. Import a batch, drag them into order, crop the overlapping edges, and export a single long screenshot of an entire text conversation, receipt, or webpage. It stitches vertically or horizontally, includes blur, pixelate, and solid-color redaction for private details, and exports PNG, JPG, or PDF — all processed on your device. On the App Store since 2012, and also available on Google Play.",
  problem: {
    heading: "The conversation never fits on one screen",
    body: "A text thread, receipt, or webpage that matters is always longer than your display. So you take six screenshots and send them one by one — they arrive out of order, the context gets lost, and anything private is visible to whoever scrolls through.",
  },
  solution: {
    heading: "One image that tells the whole story",
    body: "Stitch It combines your screenshots into a single continuous image. Import them all at once, arrange with drag-and-drop, crop away the overlap, and blur out anything private. Export one clean PNG, JPG, or PDF and share it anywhere.",
  },
  features: [
    {
      title: "Vertical and horizontal stitching",
      body: "Stack screenshots top-to-bottom for chat threads and pages, or side-by-side for comparisons — most apps only do one.",
    },
    {
      title: "Batch import and arrange",
      body: "Load dozens of screenshots at once and drag them into the right order.",
    },
    {
      title: "Crop and align edges",
      body: "Trim the top and bottom of each screenshot so the seams disappear and the result reads as one continuous capture.",
    },
    {
      title: "Redact private details",
      body: "Blur, pixelate, or block out names, addresses, and account numbers before you share.",
    },
    {
      title: "Export PNG, JPG, or PDF",
      body: "Save in the format the recipient needs and share to any app.",
    },
    {
      title: "On-device processing",
      body: "Stitching happens entirely on your phone — your photos never leave it.",
    },
  ],
  useCases: [
    {
      title: "Share a whole text conversation",
      body: "Capture a long iMessage or WhatsApp thread as one image instead of a stack of out-of-order screenshots.",
    },
    {
      title: "Keep a full receipt or confirmation",
      body: "Save an entire order confirmation or booking email as a single record you can file or forward.",
    },
    {
      title: "Save a scrolling page or thread",
      body: "Turn a full article, social thread, or comment section into one long screenshot.",
    },
    {
      title: "Compare things side by side",
      body: "Stitch horizontally to put two prices, designs, or listings next to each other in one image.",
    },
  ],
  comparison: {
    heading: "Other ways people share what doesn't fit on one screen",
    rows: [
      {
        alternative: "Sending multiple screenshots",
        drawback: "They arrive as a messy stack, often out of order, and the thread is hard to follow.",
        advantage: "One continuous image keeps the whole conversation in sequence.",
      },
      {
        alternative: "Screen-recording a video",
        drawback: "Huge files the recipient has to sit through and can't skim or search.",
        advantage: "A single image is small, skimmable, and easy to save or print.",
      },
      {
        alternative: "Generic photo collage apps",
        drawback: "Built for grids and borders, not for aligning screenshot edges into a seamless scroll.",
        advantage: "Purpose-built cropping and alignment make the seams disappear.",
      },
    ],
  },
  faqs: [
    {
      question: "How do I combine screenshots into one image on iPhone?",
      answer: "Import your screenshots into Stitch It, drag them into order, crop the overlapping edges, and tap Stitch It. You get one long image you can save or share anywhere.",
    },
    {
      question: "Is Stitch It free?",
      answer: "Yes — the app is free to use with a small watermark on exports. A Pro upgrade removes the watermark, unlocks unlimited images per stitch, and removes ads.",
    },
    {
      question: "Can I share a whole text conversation as one image?",
      answer: "Yes. Screenshot the conversation as you scroll, then stitch the captures vertically into one continuous image of the entire thread.",
    },
    {
      question: "Can I hide private information before sharing?",
      answer: "Yes. Built-in redaction tools let you blur, pixelate, or cover names, phone numbers, addresses, and account details before you export.",
    },
    {
      question: "Are my screenshots uploaded anywhere?",
      answer: "No. All stitching and redaction happens on your device — your photos never leave your phone.",
    },
    {
      question: "Does Stitch It work on Android?",
      answer: "Yes. Stitch It is available on the App Store for iPhone and iPad and on Google Play for Android.",
    },
  ],
  keywords: [
    "combine screenshots into one image",
    "long screenshot iphone",
    "stitch screenshots together",
    "scrolling screenshot app",
    "merge screenshots",
    "share a whole text conversation",
    "screenshot stitching app",
    "combine screenshots android",
    "redact screenshot",
    "save text conversation as image",
  ],
  seo: {
    title: "Stitch It — Combine Screenshots into One Long Image",
    description:
      "A conversation never fits one screen. Stitch It merges screenshots into a single long image — align, redact private details, share. iOS and Android.",
  },
  applicationCategory: "UtilitiesApplication",
  theme: {
    accent: "#7fae43",
    accentSoft: "#eef4e2",
    accentInk: "#3d5a1f",
  },
  tags: ["iOS", "Android", "Utilities"],
  featured: true,
  hero: "/assets/projects/stitch-it.jpg",
  screenshots: [
    {
      src: "/assets/projects/stitch-it/screenshot-1.webp",
      width: 443,
      height: 960,
      alt: "A long text message conversation stitched into one continuous image with Stitch It",
    },
    {
      src: "/assets/projects/stitch-it/screenshot-2.webp",
      width: 442,
      height: 960,
      alt: "Arranging two chat screenshots vertically in Stitch It before combining them",
    },
    {
      src: "/assets/projects/stitch-it/screenshot-3.webp",
      width: 442,
      height: 960,
      alt: "Horizontal stitching in Stitch It placing two product screenshots side by side",
    },
    {
      src: "/assets/projects/stitch-it/screenshot-4.webp",
      width: 442,
      height: 960,
      alt: "Redacting private details in a text conversation with Stitch It's markup tools",
    },
  ],
  platforms: [
    {
      label: "Website",
      url: "https://www.stitchitapp.com/",
      kind: "website",
    },
    {
      label: "App Store",
      url: "https://itunes.apple.com/us/app/stitch-it!-edit-share-screenshots!/id554594252?mt=8",
      kind: "app-store",
    },
    {
      label: "Google Play",
      url: "https://play.google.com/store/apps/details?id=com.luckybunnyllc.stitchit",
      kind: "google-play",
    },
  ],
  offer: { price: "0", description: "Free download; optional Pro upgrade" },
  operatingSystem: "iOS, Android",
  cta: {
    heading: "Turn scattered screenshots into one image",
    body: "Free to download on iPhone, iPad, and Android. Stitch your first conversation in under a minute.",
  },
};

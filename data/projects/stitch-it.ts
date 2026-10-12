import type { Project } from "./types";

export const stitchIt: Project = {
  slug: "stitch-it",
  name: "Stitch It",
  category: "Screenshot stitching app for iPhone, iPad, Mac, and Android",
  oneLiner:
    "Combine screenshots and images vertically or horizontally into one clean result.",
  description:
    "Combine screenshots and other images on iPhone, iPad, Mac, and Android. Arrange them manually, choose a vertical or horizontal layout, crop overlaps, cover private details, and export PNG, JPEG, or PDF. The native Mac app adds a live preview, precise pixel trimming, and editable projects you can reopen on your Mac.",
  problem: {
    heading: "The conversation never fits on one screen",
    body: "A text thread, receipt, or webpage that matters is always longer than your display. So you take six screenshots and send them one by one — they arrive out of order, the context gets lost, and anything private is visible to whoever scrolls through.",
  },
  solution: {
    heading: "One image that tells the whole story",
    body: "Stitch It combines your screenshots into a single continuous image. Import them, put them in order, crop away the overlap, and cover anything private. Export one clean PNG, JPEG, or PDF. On Mac, save that exported file before sharing it with another app.",
  },
  features: [
    {
      title: "Vertical and horizontal stitching",
      body: "Stack images top-to-bottom for conversations and pages, or place them side-by-side for comparisons on iPhone, iPad, Mac, and Android.",
    },
    {
      title: "Batch import and arrange",
      body: "Import screenshots and put them in order. On Mac, choose PNG or JPEG files, import from Photos, or paste from the clipboard.",
    },
    {
      title: "Crop and align edges",
      body: "Trim the overlapping edges yourself. On Mac, use exact pixel controls and a live preview of the complete stitch; alignment is manual.",
    },
    {
      title: "Solid-color redaction tools",
      body: "Cover names, addresses, account numbers, and other private details with solid-color marks. On Mac, use rectangles or a freehand brush with color, brush-width, undo, and redo controls.",
    },
    {
      title: "PNG, JPG, or PDF export",
      body: "Export the finished stitch as PNG, JPEG, or PDF. On Mac, save an exported file; iPhone, iPad, and Android also have their own save/share controls.",
    },
    {
      title: "Editable projects on Mac",
      body: "Save your images, order, trims, and marks in a project you can reopen on Mac. Projects retain original images, so share an exported image or PDF when private details must stay hidden.",
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
      body: "Stitch horizontally to put prices, designs, listings, or product screens next to each other in one image.",
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
      question: "How do I combine screenshots into one image?",
      answer: "Import your screenshots into Stitch It, put them in order, choose vertical or horizontal stitching, and crop overlapping edges manually. Export the result as an image or PDF. On Mac, the live preview shows the complete stitch as you edit.",
    },
    {
      question: "Is Stitch It free?",
      answer: "Yes. Stitch It for Mac is free with up to three images per project and a small export watermark. Pro lifts the image cap and removes the watermark. There are no Mac ads in either tier; mobile features and Pro options vary by platform.",
    },
    {
      question: "Which Macs support Stitch It?",
      answer: "The native Mac app supports Apple Silicon and Intel Macs running macOS 14 or later. Apple Pro purchases can be restored across iPhone, iPad, and Mac using the same Apple Account, with no separate Stitch It login. Android purchases are separate.",
    },
    {
      question: "Can I hide private information before sharing?",
      answer: "Yes. Use solid-color redaction before exporting. Mac supports rectangles and a freehand brush; iPhone, iPad, and Android have their own redaction controls. Mac does not offer blur or pixelation tools.",
    },
    {
      question: "Are my screenshots uploaded anywhere?",
      answer: "Stitching and redaction are processed on your device. On Mac, editable projects retain the original images; share an exported image or PDF when private details must remain hidden. Mac projects do not currently open for editing in the iPhone or iPad app.",
    },
    {
      question: "Does Stitch It work on Android?",
      answer: "Yes. Stitch It for Android supports vertical and horizontal stitching with arrangement, directional cropping, solid-color redaction, PNG/JPG/PDF output, and save/share controls.",
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
    "horizontal screenshot stitcher android",
    "combine screenshots on Mac",
    "Mac screenshot stitching app",
    "native Mac image stitcher",
    "redact screenshot",
    "save text conversation as image",
  ],
  seo: {
    title: "Stitch It: Screenshot Stitching for iPhone, Mac & Android",
    description:
      "Combine screenshots on iPhone, iPad, Mac, or Android. Stitch vertically or horizontally, crop, redact private details, and export PNG, JPEG, or PDF.",
  },
  applicationCategory: "UtilitiesApplication",
  theme: {
    accent: "#7fae43",
    accentSoft: "#eef4e2",
    accentInk: "#3d5a1f",
  },
  tags: ["iOS", "macOS", "Android", "Utilities"],
  featured: true,
  hero: "/assets/projects/stitch-it.jpg",
  heroMedia: {
    src: "/assets/projects/stitch-it/mac-one-clean-result.webp",
    width: 1286,
    height: 804,
    alt: "Three conversation screenshots combined in the native Stitch It Mac editor, from its approved Mac App Store artwork",
  },
  spotlight: {
    eyebrow: "Native on Mac",
    heading: "More room to see the whole result.",
    body: "Stitch It for Mac brings image importing, precise trimming, solid-color redaction, and a live preview into a native SwiftUI and AppKit workspace.",
    points: [
      "Apple Silicon and Intel Macs running macOS 14 or later",
      "PNG/JPEG files, Photos, and clipboard import",
      "Save an editable project to reopen on your Mac",
      "Export JPEG, PNG, or PDF; share an export, not a project containing original images",
      "Restore Apple Pro purchases with the same Apple Account; no extra login",
    ],
    media: {
      src: "/assets/projects/stitch-it/mac-horizontal.webp",
      width: 1286,
      height: 804,
      alt: "Horizontal image stitching and live preview in Stitch It for Mac, shown in approved Mac App Store artwork",
    },
  },
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
      alt: "Horizontal stitching on iPhone in Stitch It placing two product screenshots side by side",
    },
    {
      src: "/assets/projects/stitch-it/screenshot-4.webp",
      width: 442,
      height: 960,
      alt: "Redacting private details in a text conversation with Stitch It's markup tools",
    },
    {
      src: "/assets/projects/stitch-it/android-horizontal-result.webp",
      width: 540,
      height: 960,
      alt: "Android horizontal stitched result in Stitch It with three product screenshots placed side by side",
    },
    {
      src: "/assets/projects/stitch-it/android-horizontal-arrange.webp",
      width: 540,
      height: 960,
      alt: "Android Arrange screen in Stitch It with product screenshots ordered side by side for horizontal stitching",
    },
    {
      src: "/assets/projects/stitch-it/mac-one-clean-result.webp",
      width: 1286,
      height: 804,
      alt: "Mac App Store artwork showing three images combined in Stitch It's native Mac editor",
    },
    {
      src: "/assets/projects/stitch-it/mac-horizontal.webp",
      width: 1286,
      height: 804,
      alt: "Mac App Store artwork showing horizontal stitching in the native Stitch It Mac app",
    },
  ],
  platforms: [
    {
      label: "Website",
      url: "https://www.stitchitapp.com/",
      kind: "website",
    },
    {
      label: "iPhone & iPad",
      url: "https://apps.apple.com/us/app/stitch-it-long-screenshots/id554594252",
      kind: "app-store",
    },
    {
      label: "Mac App Store",
      url: "https://apps.apple.com/us/app/stitch-it-long-screenshots/id554594252?platform=mac",
      kind: "app-store",
    },
    {
      label: "Google Play",
      url: "https://play.google.com/store/apps/details?id=com.luckybunnyllc.stitchit",
      kind: "google-play",
    },
  ],
  offer: { price: "0", description: "Free download; optional Pro upgrade" },
  operatingSystem: "iOS, iPadOS, macOS, Android",
  cta: {
    heading: "Turn scattered screenshots into one image",
    body: "Free to download on iPhone, iPad, Mac, and Android. Choose your platform; workflows and Pro options vary.",
  },
};

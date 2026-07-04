import type { Project } from "./types";

export const reshoot: Project = {
  slug: "reshoot",
  name: "ReShoot",
  category: "Video reframing app for iPhone",
  oneLiner:
    "Convert landscape video to portrait for TikTok, Reels, and Shorts by moving your phone.",
  description:
    "ReShoot turns landscape video into portrait content for TikTok, Instagram Reels, and YouTube Shorts. Import footage, pick an aspect ratio, then record a new camera move over it — hold your phone and pan with the gyroscope, or use touch for precise control. Export up to 4K with voiceover, and take the motion path into After Effects or Final Cut Pro.",
  problem: {
    heading: "You shot landscape. Every platform wants vertical.",
    body: "TikTok, Reels, and Shorts all demand 9:16, but your best footage is 16:9. A static center-crop cuts off the action, letterboxing looks like an afterthought, and re-keyframing every clip in a desktop editor eats an evening.",
  },
  solution: {
    heading: "Reframe it like a camera move, not a crop.",
    body: "ReShoot plays your clip while you steer the crop in real time — tilt and pan your phone and the gyroscope records the move, or drag with touch for frame-accurate control. One take, and the vertical version follows the action instead of losing it.",
  },
  features: [
    {
      title: "Motion-controlled reframing",
      body: "Hold your phone and move it — the gyroscope records your crop path over the footage in real time, with optional stabilization to smooth out jitter.",
    },
    {
      title: "Every aspect ratio",
      body: "Convert to 9:16, 1:1, 4:5, 16:9, 21:9, or 2:3 — vertical, square, landscape, or cinematic from the same source clip.",
    },
    {
      title: "Up to 4K export",
      body: "Export 720p, 1080p, or 4K HEVC, keeping the source audio or swapping it out.",
    },
    {
      title: "Voiceover recording",
      body: "Narrate while you reframe, then replace the original audio or mix the two.",
    },
    {
      title: "Motion path export",
      body: "Export your camera path as JSON, CSV, FCPXML, or an After Effects .jsx script and finish the edit on desktop.",
    },
    {
      title: "Precise touch controls",
      body: "Prefer not to wave your phone around? Drag and pinch the frame directly, with edge clamping to keep the crop inside the source.",
    },
  ],
  useCases: [
    {
      title: "Repurpose footage for vertical",
      body: "Turn existing landscape shoots into TikTok, Reels, and Shorts cutdowns without rebuilding the edit from scratch.",
    },
    {
      title: "Narrated demos and tutorials",
      body: "Reframe a screen or product recording while recording a voiceover in the same pass.",
    },
    {
      title: "Previsualize camera moves",
      body: "Test a pan or push-in by hand, then export the motion path to After Effects or Final Cut instead of keyframing it blind.",
    },
  ],
  comparison: {
    heading: "How people make horizontal video vertical today",
    rows: [
      {
        alternative: "Desktop editors with manual keyframing",
        drawback: "Placing crop keyframes by hand takes minutes per shot and never feels like a natural camera move.",
        advantage: "Record the whole move in one real-time pass with your phone's motion — and still export the path to your editor if you want to refine it.",
      },
      {
        alternative: "Auto-crop AI tools",
        drawback: "An algorithm guesses what the subject is, and when it guesses wrong the action leaves the frame.",
        advantage: "You steer the crop yourself, so the frame follows what you know matters.",
      },
      {
        alternative: "Posting letterboxed or center-cropped",
        drawback: "Black bars waste the screen, and a static center-crop lops off anything that moves.",
        advantage: "A moving crop keeps the subject full-frame for the whole clip.",
      },
    ],
  },
  faqs: [
    {
      question: "Is ReShoot free?",
      answer: "Yes — ReShoot is free to download on the App Store, with an optional $4.99 Pro Upgrade in-app purchase.",
    },
    {
      question: "How do I convert a landscape video to portrait on iPhone?",
      answer: "Import the clip into ReShoot, choose 9:16, then press record and move your phone (or drag with touch) to steer the crop as the video plays. Export when you're done.",
    },
    {
      question: "What aspect ratios and resolutions can I export?",
      answer: "9:16, 1:1, 4:5, 16:9, 21:9, and 2:3, at 720p, 1080p, or 4K HEVC.",
    },
    {
      question: "Does it work with After Effects or Final Cut Pro?",
      answer: "Yes — export your camera path as an After Effects .jsx script, FCPXML, JSON, or CSV and continue the edit on desktop.",
    },
    {
      question: "Can I add a voiceover?",
      answer: "Yes. Record narration while you reframe, then either replace the source audio or mix the two on export.",
    },
    {
      question: "What devices does it support?",
      answer: "ReShoot runs on iPhone and iPad with iOS 18.0 or later.",
    },
  ],
  keywords: [
    "convert landscape video to portrait",
    "crop video for TikTok",
    "crop video for Instagram Reels",
    "crop video for YouTube Shorts",
    "reframe video iPhone",
    "make horizontal video vertical",
    "vertical video converter app",
    "change video aspect ratio iPhone",
    "9:16 video crop app",
    "motion path export After Effects",
  ],
  seo: {
    title: "ReShoot — Convert Landscape Video to Portrait on iPhone",
    description:
      "You shot landscape; TikTok, Reels, and Shorts want vertical. ReShoot reframes video by recording your phone's motion — any ratio, up to 4K.",
  },
  theme: {
    accent: "#3d5fd0",
    accentSoft: "#eef1fa",
    accentInk: "#2b3a80",
  },
  tags: ["iOS", "Video", "Creativity"],
  featured: true,
  hero: "/assets/projects/reshoot.png",
  screenshots: [
    {
      src: "/assets/projects/reshoot/screenshot-1.png",
      alt: "ReShoot capture screen reframing a landscape street video in real time, with a minimap showing the crop's position in the source frame",
    },
    {
      src: "/assets/projects/reshoot/screenshot-2.png",
      alt: "Output format picker with aspect ratios for every platform — 9:16 for TikTok, 16:9 for YouTube, 1:1 and 4:5 for Instagram, plus 21:9 and 2:3",
    },
    {
      src: "/assets/projects/reshoot/screenshot-3.png",
      alt: "Settings screen with pro controls: stabilization, edge clamping, minimap, viewfinder guides, and voiceover replace-or-mix audio options",
    },
    {
      src: "/assets/projects/reshoot/screenshot-4.png",
      alt: "Three-step workflow — import footage, reframe with gyro or touch, then export the finished clip",
    },
  ],
  platforms: [
    {
      label: "App Store",
      url: "https://apps.apple.com/us/app/reshoot-video-reframe-crop/id6753581365",
      kind: "app-store",
    },
  ],
  appStoreId: "6753581365",
  price: "Free + $4.99 Pro upgrade",
  operatingSystem: "iOS",
  cta: {
    heading: "Reframe your first clip",
    body: "ReShoot is free on the App Store. Import a clip, pick a ratio, and record the move.",
  },
};

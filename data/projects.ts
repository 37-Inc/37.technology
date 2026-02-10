export type PlatformKind =
  | "app-store"
  | "google-play"
  | "website"
  | "developer";

export interface PlatformLink {
  label: string;
  url: string;
  kind: PlatformKind;
}

export interface Project {
  slug: string;
  name: string;
  oneLiner: string;
  description: string;
  tags: string[];
  featured?: boolean;
  hero: string;
  highlights?: string[];
  screenshots?: string[];
  platforms: PlatformLink[];
}

export const projects: Project[] = [
  {
    slug: "reshoot",
    name: "ReShoot",
    oneLiner:
      "The only app that lets you reframe video using your phone's motion.",
    description:
      "ReShoot transforms landscape videos into portrait content for TikTok, Instagram Reels, and YouTube Shorts. Hold your phone and move to create dynamic crop paths, or use touch gestures for precise control. Export in any aspect ratio at up to 4K with voiceover recording and motion path export for After Effects.",
    tags: ["iOS", "Video", "Creativity"],
    featured: true,
    hero: "/assets/projects/reshoot.png",
    highlights: [
      "Gyroscope-based reframing — physically move your phone to control the crop",
      "Export to 9:16, 16:9, 1:1, 4:5 at up to 4K with source frame rate preserved",
      "Record voiceover narration while reframing",
      "Motion path export to JSON, CSV, FCPXML, or After Effects .jsx",
    ],
    platforms: [],
    screenshots: [],
  },
  {
    slug: "stitch-it",
    name: "Stitch It",
    oneLiner: "Stitch chat and webpage screenshots into one polished story in seconds.",
    description:
      "Capture entire conversations, receipts, or scrolling pages and merge them into a single image with precise edge alignment, redaction tools, and instant export.",
    tags: ["iOS", "Android", "Utilities"],
    featured: true,
    hero: "/assets/projects/stitch-it.jpg",
    highlights: [
      "Vertical and horizontal stitching with automatic overlap detection",
      "Redact private details before sharing to any app",
      "Export high-resolution PNG, JPG, or PDF with watermark-free Pro tier",
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
    screenshots: [
      "https://is1-ssl.mzstatic.com/image/thumb/Purple116/v4/b6/c8/27/b6c82710-e918-3cf9-9a0a-8befa9eae443/pr_source.png/828x1792bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/Purple126/v4/1a/5a/8f/1a5a8fb2-cfdb-ed21-da8f-17e2364888e6/pr_source.png/828x1792bb.png",
    ],
  },
  {
    slug: "colorcub",
    name: "ColorCub",
    oneLiner: "Describe anything and ColorCub turns it into a printable coloring page.",
    description:
      "An AI-powered studio that transforms prompts or voice ideas into custom line art you can color, share, or print—designed for mindful, ad-free screen time.",
    tags: ["iOS", "AI", "Creativity"],
    featured: true,
    hero: "/assets/projects/colorcub.jpg",
    highlights: [
      "Voice or text prompts craft unique pages instantly",
      "Built-in palettes, undo, and flood fill for easy coloring",
      "Offline-friendly with no ads or tracking",
    ],
    platforms: [
      {
        label: "App Store",
        url: "https://apps.apple.com/us/app/colorcub-ai-coloring-pages/id6745206164",
        kind: "app-store",
      },
    ],
    screenshots: [],
  },
  {
    slug: "howhigh",
    name: "HowHigh",
    oneLiner: "Measure how high you’ve climbed using iPhone’s barometric sensor.",
    description:
      "A precision altimeter for iPhone that converts barometric pressure changes into distance travelled—ideal for hikes, amusement rides, and anywhere a tape measure can’t reach.",
    tags: ["iOS", "Utilities", "Navigation"],
    hero: "/assets/projects/howhigh.jpg",
    highlights: [
      "Reads altitude gain in inches, feet, or yards in real time",
      "Built for iPhone barometer hardware—no data connection required",
      "Perfect for measuring large objects, staircases, or scenic climbs",
    ],
    platforms: [
      {
        label: "App Store",
        url: "https://apps.apple.com/us/app/howhigh-barometric-pressure-measurement-tool/id921339656",
        kind: "app-store",
      },
    ],
    screenshots: [
      "https://is1-ssl.mzstatic.com/image/thumb/Purple3/v4/b8/78/5c/b8785c10-5641-d2fe-503e-835c62fdffff/pr_source.png/828x1792bb.png",
    ],
  },
  {
    slug: "faxit",
    name: "Fax It",
    oneLiner: "Scan, send, and track faxes worldwide right from your phone.",
    description:
      "Upload documents from your camera, files, or cloud drives and fax them to 50+ countries with live delivery status, adjustable quality, and cost-effective pricing.",
    tags: ["iOS", "Business", "Productivity"],
    hero: "/assets/projects/faxit.jpg",
    highlights: [
      "Supports multi-page documents with preview and quality controls",
      "Accepts scans, photos, and files from iCloud, Dropbox, or Google Drive",
      "Transparent pricing and delivery tracking on every send",
    ],
    platforms: [
      {
        label: "App Store",
        url: "https://apps.apple.com/us/app/fax-it/id1458261691",
        kind: "app-store",
      },
    ],
    screenshots: [
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource113/v4/d2/7c/52/d27c5229-1be7-60fa-22c8-887ca235fd2c/e48e6912-4302-4f4f-9c0a-acf0149d88f6_iphone_01.png/828x1792bb.png",
    ],
  },
  {
    slug: "ereps",
    name: "Ereps",
    oneLiner: "Exercise prescription software with ready-to-use rehab protocols and outcome tracking.",
    description:
      "Ereps streamlines custom rehabilitation programs for chiropractors, osteopaths, and physiotherapists with continually updated clinical content and patient progress dashboards.",
    tags: ["Web", "Healthcare", "Rehabilitation"],
    hero: "/assets/projects/ereps.png",
    highlights: [
      "Hundreds of evidence-based exercise plans with criteria to progress",
      "Built-in outcome measures patients can complete in-clinic or remotely",
      "Cloud delivery with branding, patient libraries, and support resources",
    ],
    platforms: [
      {
        label: "Website",
        url: "https://erepsonline.com/",
        kind: "website",
      },
    ],
    screenshots: [
      "https://erepsonline.com/bundles/erepsuser/images/imac-images.png",
    ],
  },
  {
    slug: "goose-gifts",
    name: "Goose Gifts",
    oneLiner: "AI-powered gift discovery that turns any description into thoughtful bundles.",
    description:
      "An intelligent gift curation platform that helps users find humorous and thoughtful presents by describing the recipient. The AI curates gift concepts paired with real products from trending items to community bundles—ready to purchase or share.",
    tags: ["Web", "AI", "E-commerce"],
    featured: true,
    hero: "/assets/projects/goose-gifts.png",
    highlights: [
      "Describe recipient interests and AI generates personalized gift bundles",
      "Browse trending products and community-curated collections",
      "Seamless purchase flow with Amazon integration",
    ],
    platforms: [
      {
        label: "Website",
        url: "https://goose.gifts/",
        kind: "website",
      },
    ],
    screenshots: [],
  },
];

export const getProjectBySlug = (slug: string): Project | undefined =>
  projects.find((project) => project.slug === slug);

export const orderedProjects = projects
  .slice()
  .sort((a, b) => {
    if (a.featured && !b.featured) return -1;
    if (!a.featured && b.featured) return 1;
    return a.name.localeCompare(b.name);
  });

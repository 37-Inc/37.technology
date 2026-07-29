import type { Project } from "./types";

export const colorcub: Project = {
  slug: "colorcub",
  name: "ColorCub",
  category: "AI coloring page generator for iPhone and iPad",
  oneLiner:
    "An AI coloring page generator — describe anything, get a printable page in seconds.",
  description:
    "ColorCub turns a typed or spoken idea into custom line art you can color together, print, or share. No ads and no fixed library — just the page you imagined.",
  problem: {
    heading: "The page they imagine rarely exists in a coloring book",
    body: "A T-rex flying a rocket. A princess riding a narwhal. Searching for a very specific printable often means wading through ad-choked sites to find something generic. Most coloring apps simply replace the paper with a fixed library and a pile of pop-ups.",
  },
  solution: {
    heading: "Describe it, and ColorCub draws it",
    body: "Say or type the idea and ColorCub generates a clean line-art page in seconds. Color it together in the app with fills and palettes, or print it and bring out the crayons. There are no ads, and saved pages remain available offline.",
  },
  features: [
    {
      title: "Any idea, in seconds",
      body: "Describe a scene in plain words and AI drafts a custom line-art coloring page built for filling in.",
    },
    {
      title: "Say it or type it",
      body: "Speak an idea instead of typing, then watch it become a page you can color together.",
    },
    {
      title: "Real coloring tools",
      body: "Brushes, color palettes, flood fill, and undo/redo make it easy to color on screen.",
    },
    {
      title: "Print and share",
      body: "Send finished pages to the printer or share the artwork straight from the app.",
    },
    {
      title: "Ad-free for everyone",
      body: "Free and Pro users get the same focused experience without ads or pop-ups.",
    },
    {
      title: "Offline once created",
      body: "Generated pages keep working without a connection — made for car rides and flights.",
    },
  ],
  useCases: [
    {
      title: "The very specific request",
      body: "When “a dinosaur” isn't enough and it has to be a triceratops eating birthday cake, generate exactly that page instead of settling.",
    },
    {
      title: "Car rides and flights",
      body: "Create a few pages before you leave; they stay colorable offline, with no ads to wander into.",
    },
    {
      title: "Print-outs for the kitchen table",
      body: "Skip the printable-page websites — generate pages at home and print them for crayons, fridges, and frames.",
    },
    {
      title: "Quiet time for any age",
      body: "Mandalas and calmer scenes make it a relaxing, mindful activity for adults, too.",
    },
  ],
  comparison: {
    heading: "How ColorCub compares",
    rows: [
      {
        alternative: "Googling printable coloring pages",
        drawback:
          "Ad-heavy sites, pop-ups, and generic pages that rarely match the idea you started with.",
        advantage:
          "Generates a custom page from your description, with no ads in the app.",
      },
      {
        alternative: "Coloring apps with fixed libraries",
        drawback:
          "A finite catalog — the specific scene your family wants to color usually isn't in it.",
        advantage:
          "Create three custom pages free; Pro unlocks unlimited generation.",
      },
      {
        alternative: "General AI image tools",
        drawback:
          "The output is rarely the clean, printable line art you want for a coloring activity.",
        advantage:
          "Purpose-built for coloring, with clean outlines and drawing tools in the same app.",
      },
    ],
  },
  faqs: [
    {
      question: "Is ColorCub free?",
      answer:
        "Yes. Create three custom pages free. Pro unlocks unlimited generation. Drawing, saving, sharing, and printing remain available without Pro.",
    },
    {
      question: "Does ColorCub have ads?",
      answer:
        "No. ColorCub is ad-free for free and Pro users.",
    },
    {
      question: "Can I print the coloring pages?",
      answer:
        "Yes. Print pages to color with real crayons and markers, or save and share the finished artwork from the app.",
    },
    {
      question: "How do you make a coloring page with AI?",
      answer:
        "Type a description — or speak it aloud — and ColorCub generates a custom line-art page in seconds, ready to color in the app or print.",
    },
    {
      question: "Does ColorCub work offline?",
      answer:
        "Pages work offline once they've been created, so you can generate a few before a car ride or flight.",
    },
    {
      question: "What devices does ColorCub run on?",
      answer:
        "ColorCub runs on iPhone and iPad.",
    },
  ],
  keywords: [
    "AI coloring page generator",
    "custom coloring pages for families",
    "printable coloring pages from a description",
    "ad-free family coloring app",
    "coloring app without ads",
    "make your own coloring page",
    "AI coloring book app",
    "coloring pages app for iPad",
    "voice to coloring page app",
    "dinosaur and unicorn coloring pages",
  ],
  seo: {
    title: "ColorCub — AI Coloring Pages for Families",
    description:
      "Turn any typed or spoken idea into a printable coloring page, then color it together. Three custom pages free, no ads, for iPhone and iPad.",
  },
  applicationCategory: "EntertainmentApplication",
  theme: {
    accent: "#db5a74",
    accentSoft: "#fbeef0",
    accentInk: "#8a2e44",
  },
  tags: ["iOS", "AI", "Creativity"],
  featured: true,
  hero: "/assets/projects/colorcub.jpg",
  screenshots: [
    {
      src: "/assets/projects/colorcub/screenshot-1.webp",
      width: 442,
      height: 960,
      alt: "ColorCub app printing and sharing a finished flower coloring page from an iPhone",
    },
    {
      src: "/assets/projects/colorcub/screenshot-2.webp",
      width: 600,
      height: 800,
      alt: "ColorCub turning ideas into coloring pages with AI — pizza astronaut and dragon line-art pages",
    },
    {
      src: "/assets/projects/colorcub/screenshot-3.webp",
      width: 600,
      height: 800,
      alt: "Coloring a generated page on iPad with ColorCub's palette, fill, and undo tools",
    },
    {
      src: "/assets/projects/colorcub/screenshot-4.webp",
      width: 600,
      height: 800,
      alt: "ColorCub gallery of saved coloring pages on iPad",
    },
  ],
  platforms: [
    {
      label: "App Store",
      url: "https://apps.apple.com/us/app/colorcub-ai-coloring-pages/id6745206164",
      kind: "app-store",
    },
  ],
  offer: { price: "0", description: "Free download with optional premium features" },
  operatingSystem: "iOS",
  cta: {
    heading: "Color the page you imagined",
    body: "Create three custom pages free on iPhone and iPad. Describe an idea, color it together, or print it.",
  },
};

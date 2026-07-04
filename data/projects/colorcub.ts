import type { Project } from "./types";

export const colorcub: Project = {
  slug: "colorcub",
  name: "ColorCub",
  category: "AI coloring page generator for iPhone and iPad",
  oneLiner:
    "An AI coloring page generator — describe anything, get a printable page in seconds.",
  description:
    "ColorCub turns a typed or spoken idea into custom line art your kid can color, print, or share. No ads, no tracking, no fixed library — just the exact page they asked for.",
  problem: {
    heading: "Kids want to color the thing in their head, right now",
    body: "A T-rex flying a rocket. A princess riding a narwhal. No coloring book has that page, and searching for printables means wading through ad-choked sites to land on something generic. Most coloring apps just swap the paper for a fixed library and a pile of pop-ups.",
  },
  solution: {
    heading: "Describe it, and ColorCub draws it",
    body: "Type the idea — or let your kid say it out loud — and ColorCub generates a clean line-art page in seconds. Color it in the app with fills and palettes, or print it and hand over the crayons. No ads, no tracking, and pages keep working offline once created.",
  },
  features: [
    {
      title: "Any idea, in seconds",
      body: "Describe a scene in plain words and AI drafts a custom line-art coloring page built for filling in.",
    },
    {
      title: "Voice input for pre-readers",
      body: "Kids who can't type yet can speak their idea and watch it appear.",
    },
    {
      title: "Real coloring tools",
      body: "Brushes, color palettes, flood fill, and undo/redo — friendly for small hands, capable enough for grown-ups.",
    },
    {
      title: "Print and share",
      body: "Send finished pages to the printer or share the artwork straight from the app.",
    },
    {
      title: "No ads, no tracking",
      body: "Nothing to tap on by accident and nothing watching — screen time that stays on task.",
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
          "Ad-heavy sites, pop-ups, and generic pages that rarely match what your kid actually asked for.",
        advantage:
          "Generates the exact page from their description, with no ads and no tracking.",
      },
      {
        alternative: "Coloring apps with fixed libraries",
        drawback:
          "A finite catalog — the specific scene your kid is obsessed with this week usually isn't in it.",
        advantage:
          "Unlimited pages: every prompt makes a new one, so they never run out.",
      },
      {
        alternative: "General AI image tools",
        drawback:
          "Not built for kids, and the output is rarely clean, printable line art you'd hand to a six-year-old.",
        advantage:
          "Purpose-built for coloring: clean outlines, kid-friendly tools, rated 4+.",
      },
    ],
  },
  faqs: [
    {
      question: "Is ColorCub free?",
      answer:
        "ColorCub is free to download, and basic features don't require a subscription. Optional premium features are available in the app.",
    },
    {
      question: "Does ColorCub have ads?",
      answer:
        "No. ColorCub is ad-free and doesn't track you or your kids.",
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
        "ColorCub runs on iPhone and iPad and is rated 4+ on the App Store.",
    },
  ],
  keywords: [
    "AI coloring page generator",
    "custom coloring pages for kids",
    "printable coloring pages from a description",
    "ad-free kids coloring app",
    "coloring app without ads",
    "make your own coloring page",
    "AI coloring book app",
    "coloring pages app for iPad",
    "voice to coloring page app",
    "dinosaur and unicorn coloring pages",
  ],
  seo: {
    title: "ColorCub — AI Coloring Page Generator for Kids",
    description:
      "Kids want to color exactly what they imagine. ColorCub turns a typed or spoken idea into a printable coloring page — no ads, no tracking, free on iOS.",
  },
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
      src: "/assets/projects/colorcub/screenshot-1.png",
      alt: "ColorCub app printing and sharing a finished flower coloring page from an iPhone",
    },
    {
      src: "/assets/projects/colorcub/screenshot-2.png",
      alt: "ColorCub turning ideas into coloring pages with AI — pizza astronaut and dragon line-art pages",
    },
    {
      src: "/assets/projects/colorcub/screenshot-3.png",
      alt: "Coloring a generated page on iPad with ColorCub's palette, fill, and undo tools",
    },
    {
      src: "/assets/projects/colorcub/screenshot-4.png",
      alt: "ColorCub gallery of saved coloring pages on iPad — kid-safe with no ads and no tracking",
    },
  ],
  platforms: [
    {
      label: "App Store",
      url: "https://apps.apple.com/us/app/colorcub-ai-coloring-pages/id6745206164",
      kind: "app-store",
    },
  ],
  appStoreId: "6745206164",
  price: "Free, with optional premium features",
  operatingSystem: "iOS",
  cta: {
    heading: "Give them the exact page they asked for",
    body: "Free on the App Store for iPhone and iPad. Describe an idea, color it, print it.",
  },
};

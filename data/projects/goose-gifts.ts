import type { Project } from "./types";

export const gooseGifts: Project = {
  slug: "goose-gifts",
  name: "Goose Gifts",
  category: "Funny gift finder and gag gift catalog",
  oneLiner:
    "Funny gift ideas for people who are hard to shop for — weird, useful, real products.",
  description:
    "Goose Gifts (goose.gifts) is the internet's least serious gift catalog: a fast, curated collection of funny, weird, and genuinely useful products for people who are hard to shop for. Browse gift guides for white elephant parties, coworkers, and dads, or search the live catalog by describing the person. Every item is a real product with a direct Amazon link.",
  problem: {
    heading: "You know the person. You don't know the gift.",
    body: "Searching a marketplace by category surfaces the same generic bestsellers everyone else already bought. Gift-guide listicles recycle the same twenty items with affiliate padding. So you stall, and they get another gift card.",
  },
  solution: {
    heading: "A catalog built for weird, specific people",
    body: "Goose Gifts hand-picks absurd, useful, and deeply unnecessary finds and organizes them into guides for real situations — white elephant exchanges, coworker gifts, dads who want nothing. Search the catalog by describing the person, then jump straight to the product on Amazon.",
  },
  features: [
    {
      title: "Curated gift guides",
      body: "Ready-made guides for white elephant gifts, funny coworker gifts, gifts for dads, novelty desk toys, and weird kitchen gadgets.",
    },
    {
      title: "Search by person, not category",
      body: "Type who you're shopping for — like \"dad with no spare time\" — and browse matches from the live catalog.",
    },
    {
      title: "Real, purchasable products",
      body: "Every listing is an actual product with a direct link to check the current price on Amazon.",
    },
    {
      title: "Descriptions with jokes",
      body: "Each find comes with a short, pun-heavy write-up, so browsing is entertainment rather than a chore.",
    },
    {
      title: "Free, no account",
      body: "Browse everything without signing up; the site earns through Amazon affiliate links, never your wallet directly.",
    },
  ],
  useCases: [
    {
      title: "White elephant exchange",
      body: "You need something under budget that gets a laugh in a room full of coworkers or relatives — the white elephant guide is built for exactly that.",
    },
    {
      title: "The coworker gift",
      body: "Funny but office-safe: desk toys and gag gifts that land at a Secret Santa without an HR follow-up.",
    },
    {
      title: "The dad who wants nothing",
      body: "When \"don't get me anything\" is the brief, a strange-but-useful gadget beats another pair of socks.",
    },
    {
      title: "Someone who has everything",
      body: "They can buy whatever they want, so surprise them with something they'd never think to search for.",
    },
  ],
  comparison: {
    heading: "Goose Gifts vs. the usual gift hunt",
    rows: [
      {
        alternative: "Scrolling marketplace categories",
        drawback: "Category pages are ranked by bestsellers, so you see the same generic items as everyone else.",
        advantage: "A hand-picked catalog of weird, funny finds you wouldn't surface by browsing.",
      },
      {
        alternative: "Generic gift-guide listicles",
        drawback: "Recycled SEO lists padded to hit a word count, with the actual products buried.",
        advantage: "A fast, browsable grid — picture, one-line joke, price link — and nothing else.",
      },
      {
        alternative: "Falling back to a gift card",
        drawback: "It quietly says you ran out of time and ideas.",
        advantage: "A strange, specific object says you actually thought about them.",
      },
    ],
  },
  faqs: [
    {
      question: "Is Goose Gifts free to use?",
      answer: "Yes. Browsing and searching the catalog is free and requires no account. The site earns a commission through Amazon affiliate links when you buy something.",
    },
    {
      question: "Can I buy gifts directly on goose.gifts?",
      answer: "No — every item links to its listing on Amazon, where you check the current price and complete the purchase with normal Amazon shipping and returns.",
    },
    {
      question: "What kinds of gifts will I find?",
      answer: "Funny gag gifts, white elephant ideas, novelty desk toys, weird kitchen gadgets, and other absurd-but-real products for people who are hard to shop for.",
    },
    {
      question: "How do I find a gift for someone specific?",
      answer: "Use the catalog search and describe the person — for example \"dad with no spare time\" — or start from a guide like funny gifts for coworkers or white elephant gifts.",
    },
    {
      question: "Are the products real?",
      answer: "Yes. Every entry in the catalog is a real product currently sold on Amazon, linked directly so you can verify price and availability yourself.",
    },
  ],
  keywords: [
    "funny gift ideas",
    "gag gifts",
    "white elephant gift ideas",
    "funny gifts for coworkers",
    "gifts for someone who has everything",
    "funny gifts for dads",
    "novelty desk toys",
    "weird kitchen gadgets",
    "gift finder",
    "weird gifts that are actually useful",
  ],
  seo: {
    title: "Goose Gifts — Funny Gift Ideas & White Elephant Finder",
    description:
      "You know the person, not the gift. Goose Gifts is a curated catalog of funny, weird, real products — gift guides and search for hard-to-shop-for people.",
  },
  applicationCategory: "ShoppingApplication",
  theme: {
    accent: "#e0861a",
    accentSoft: "#fbf1e0",
    accentInk: "#7a4a10",
  },
  tags: ["Web", "E-commerce"],
  featured: true,
  hero: "/assets/projects/goose-gifts.png",
  platforms: [
    {
      label: "Website",
      url: "https://goose.gifts/",
      kind: "website",
    },
  ],
  offer: { price: "0" },
  operatingSystem: "Web",
  cta: {
    heading: "Skip the gift card this year",
    body: "Browse the catalog, find something ridiculous, and take all the credit.",
  },
};

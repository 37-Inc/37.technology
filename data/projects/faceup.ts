import type { Project } from "./types";

export const faceup: Project = {
  slug: "faceup",
  name: "FACE UP",
  category: "Black & white face sticker pack for iMessage",
  oneLiner:
    "Hand-drawn black-and-white face stickers that say what your iMessage texts can't.",
  description:
    "FACE UP® Sticker Studio is a free iMessage sticker pack of hand-drawn, black-and-white faces — each one a blunt, funny expression you can send in a chat, stick on a message bubble, or drop straight onto a photo. A pack holds 20–25 faces in the FACE UP® style.",
  problem: {
    heading: "Every reaction looks the same",
    body: "Emoji are tiny, identical, and everyone sends the same ones. When a message deserves more than a thumbs-up — an eye-roll, a smirk, a full piece of your mind — typing it out kills the joke, and stock emoji don't cut it.",
  },
  solution: {
    heading: "A face for what you actually mean",
    body: "FACE UP puts a pack of hand-drawn black-and-white faces inside iMessage. Tap one to send it, or peel it off and stick it anywhere — on a bubble, on a photo, stacked on other stickers. Pinch to size it, spin it around, and let the face do the talking.",
  },
  features: [
    {
      title: "Stick them anywhere",
      body: "Send a sticker in the chat, or drag it onto any message bubble or picture in the thread.",
    },
    {
      title: "Photo-bomb any pic",
      body: "Drop a face onto your own photos — or your friends' — right inside iMessage.",
    },
    {
      title: "Pinch, drag, rotate",
      body: "Choose each sticker's size with pinch and drag, roll it around, and stack stickers any way you like.",
    },
    {
      title: "20–25 faces per pack",
      body: "Each pack is a poke of popular expressions, plus a few random ones, all in the hand-drawn FACE UP® style.",
    },
    {
      title: "Avatar-ready",
      body: "Use a face as your avatar and swap it whenever your mood changes.",
    },
  ],
  useCases: [
    {
      title: "Reply without typing",
      body: "A group chat needs a reaction, not a paragraph. Slap a deadpan face on the offending message and move on.",
    },
    {
      title: "Mark up shared photos",
      body: "Someone posts a pic in the thread — photo-bomb it with a face before anyone else does.",
    },
    {
      title: "An avatar with attitude",
      body: "Set a FACE UP face as your avatar and change it with your mood.",
    },
  ],
  comparison: {
    heading: "FACE UP vs. the usual ways to react",
    rows: [
      {
        alternative: "Standard emoji",
        drawback:
          "Tiny, fixed in place, and identical on every phone — no way to put one on a photo or size it up.",
        advantage:
          "Full-size hand-drawn faces you can place, scale, rotate, and stack anywhere in the conversation.",
      },
      {
        alternative: "Typing out your reaction",
        drawback: "Explaining the eye-roll ruins the eye-roll.",
        advantage: "One blunt face says it in a single tap.",
      },
      {
        alternative: "Paid sticker packs",
        drawback: "Sticker packs add up fast when each one costs a few dollars.",
        advantage: "FACE UP is free on the App Store.",
      },
    ],
  },
  faqs: [
    {
      question: "Is FACE UP free?",
      answer: "Yes. FACE UP® Sticker Studio B&W is free on the App Store.",
    },
    {
      question: "What devices does FACE UP work on?",
      answer:
        "It's an iMessage sticker pack for iPhone and iPad, and requires iOS 11.0 or later.",
    },
    {
      question: "How do I use the stickers in iMessage?",
      answer:
        "Open FACE UP from the iMessage app drawer. Tap a sticker to send it, or press and drag it onto a message bubble or photo — then pinch to resize and rotate it before letting go.",
    },
    {
      question: "How many stickers are in a pack?",
      answer:
        "A pack holds 20–25 stickers, each a different expression in the FACE UP® style.",
    },
  ],
  keywords: [
    "black and white face stickers",
    "iMessage sticker pack",
    "funny face stickers for iMessage",
    "hand-drawn stickers for iMessage",
    "free iMessage stickers",
    "photo bomb stickers iPhone",
    "expression stickers for texting",
    "sticker pack for iPhone messages",
  ],
  seo: {
    title: "FACE UP® Sticker Studio — B&W Face Stickers for iMessage",
    description:
      "FACE UP is a free iMessage sticker pack of hand-drawn black-and-white faces. Peel, stack, resize, and photo-bomb any chat with 20–25 blunt expressions.",
  },
  theme: {
    accent: "#3d3a35",
    accentSoft: "#efedea",
    accentInk: "#26241f",
  },
  tags: ["iOS", "Stickers", "iMessage"],
  hero: "/assets/projects/faceup.png",
  screenshots: [
    {
      src: "/assets/projects/faceup/screenshot-1.png",
      alt: "Hand-drawn black-and-white FACE UP stickers placed across an iMessage conversation on iPhone",
    },
    {
      src: "/assets/projects/faceup/screenshot-2.png",
      alt: "FACE UP sticker drawer open in iMessage on iPad, with black-and-white face stickers stuck onto chat bubbles",
    },
  ],
  platforms: [
    {
      label: "App Store",
      url: "https://apps.apple.com/us/app/face-up-sticker-studio-b-w/id1299475618",
      kind: "app-store",
    },
  ],
  appStoreId: "1299475618",
  price: "Free",
  operatingSystem: "iOS",
  cta: {
    heading: "Say it with a face",
    body: "FACE UP® Sticker Studio B&W is free on the App Store for iPhone and iPad.",
  },
};

import type { Project } from "./types";

export const quickkey: Project = {
  slug: "quickkey",
  name: "QuickKey",
  category: "Paper quiz grading for teachers",
  oneLiner: "Grade paper quizzes. See what needs another look.",
  description:
    "Keep the questions you have already written. Scan supported QuickKey answer sheets with your phone, review the answers, and see what your class needs to revisit.",
  problem: {
    heading: "The useful part comes after the marking.",
    body: "A pile of quizzes can tell you where students need help, but marking every response by hand takes time away from that conversation. A total score alone can hide the question that confused the whole class.",
  },
  solution: {
    heading: "Paper in. A clearer picture out.",
    body: "Create an answer key, print a supported QuickKey form, and scan completed sheets with the iOS or Android app. Review captured responses and results by student and question before deciding what to teach next.",
  },
  features: [
    {
      title: "Grade with your phone",
      body: "Use the camera on a supported iPhone, iPad, or Android device to scan QuickKey paper answer sheets. No dedicated grading machine is needed.",
    },
    {
      title: "Keep your own questions",
      body: "Use quizzes you have already prepared. Add their answer key in QuickKey and pair them with a supported printed form.",
    },
    {
      title: "Review the captured answers",
      body: "Check the student match and individual responses, review ambiguous marks, and make corrections rather than treating every scan as final.",
    },
    {
      title: "Look beyond the total",
      body: "Review results by student and by question to find topics that need another explanation or a different example.",
    },
    {
      title: "Set up classes on the web",
      body: "Manage your account and class setup in the browser. Google Classroom roster import is available through the QuickKey web dashboard.",
    },
    {
      title: "English and Spanish",
      body: "The rebuilt mobile apps support English and Spanish. QuickKey also has an English and Spanish homepage; some supporting guides remain in English.",
    },
  ],
  useCases: [
    {
      title: "A quick exit ticket",
      body: "Check a short set of questions after a lesson and use the class results to plan your next explanation.",
    },
    {
      title: "Your existing quiz bank",
      body: "Keep a familiar paper assessment instead of rebuilding every question in a new digital format.",
    },
    {
      title: "Paper without student devices",
      body: "Students use printed answer sheets. The teacher uses a supported phone or tablet to scan them.",
    },
  ],
  faqs: [
    {
      question: "What is QuickKey?",
      answer: "QuickKey is assessment software for teachers. Its iOS and Android apps scan supported paper answer sheets, with review and reporting tools to help teachers understand results by student and question.",
    },
    {
      question: "Does QuickKey scan any worksheet?",
      answer: "No. Use supported QuickKey answer sheets, not arbitrary worksheets or another brand's bubble sheets. Check the current form, device, and plan guidance on the QuickKey website before printing.",
    },
    {
      question: "Do my students need an app or a device?",
      answer: "Not for paper assessments. Students fill in a printed QuickKey answer sheet, and the teacher scans it with the app. QuickKey's separate online quiz workflow does use student devices.",
    },
    {
      question: "Is QuickKey free?",
      answer: "The apps are free to download and a free account is available. Paid plans provide additional features and capacity. See QuickKey's current pricing page for limits and school or district options.",
    },
    {
      question: "Does QuickKey need an internet connection?",
      answer: "Plan on a connection for sign-in, account setup, roster import, and syncing results. Do not assume a new account or an unprepared quiz will work without one; follow the current scanning guidance for your app version.",
    },
    {
      question: "Who operates QuickKey, and where can I get help?",
      answer: "QuickKey is operated by Thirty Seven, Inc., which acquired the product's assets in September 2026. Visit quickkeyapp.com/contact-us for support and quickkeyapp.com/privacy-policy for the product's privacy information.",
    },
  ],
  keywords: [
    "QuickKey",
    "Quick Key grading app",
    "paper quiz grading app",
    "scan answer sheets",
    "bubble sheet scanner for teachers",
    "formative assessment",
  ],
  seo: {
    title: "QuickKey - Paper Quiz Grading for Teachers",
    description:
      "Scan QuickKey paper answer sheets on iPhone, iPad, or Android. Review answers and class results. A teacher-focused product operated by Thirty Seven.",
  },
  applicationCategory: "EducationalApplication",
  theme: {
    accent: "#78be43",
    accentSoft: "#f0f6e9",
    accentInk: "#2d642b",
  },
  tags: ["iOS", "Android", "Education"],
  hero: "/assets/projects/quickkey-icon.webp",
  heroMedia: {
    src: "/assets/projects/quickkey/hero.webp",
    alt: "Published QuickKey artwork showing paper scanning on iPhone and class results on iPad, using fictional classroom examples",
    width: 1200,
    height: 800,
  },
  proofPoints: [
    { title: "Your questions", body: "Keep the quizzes you already use." },
    { title: "Teacher review", body: "Check responses before moving on." },
    { title: "Useful results", body: "See students and questions, not just totals." },
  ],
  screenshots: [
    {
      src: "/assets/projects/quickkey/answer-key.webp",
      alt: "QuickKey iPhone answer-key screen in published App Store artwork, using a fictional biology quiz",
      width: 442,
      height: 960,
    },
    {
      src: "/assets/projects/quickkey/print.webp",
      alt: "QuickKey iPhone supported answer-sheet printing screen in published App Store artwork",
      width: 442,
      height: 960,
    },
    {
      src: "/assets/projects/quickkey/scan.webp",
      alt: "QuickKey iPhone scanning a completed supported paper answer sheet in published App Store artwork, with fictional student data",
      width: 442,
      height: 960,
    },
    {
      src: "/assets/projects/quickkey/review.webp",
      alt: "QuickKey iPhone answer review showing an ambiguous mark and correction controls in published App Store artwork",
      width: 442,
      height: 960,
    },
    {
      src: "/assets/projects/quickkey/results.webp",
      alt: "QuickKey iPhone class results in published App Store artwork, using fictional classroom examples",
      width: 442,
      height: 960,
    },
  ],
  platforms: [
    { label: "QuickKey website", url: "https://quickkeyapp.com/", kind: "website" },
    { label: "App Store", url: "https://apps.apple.com/app/id686229501", kind: "app-store" },
    { label: "Google Play", url: "https://play.google.com/store/apps/details?id=com.kiteknology.quickkey", kind: "google-play" },
  ],
  resources: [
    { label: "Supported answer sheets", url: "https://quickkeyapp.com/bubble-sheets/" },
    { label: "Plans and limits", url: "https://quickkeyapp.com/products-pricing/" },
    { label: "QuickKey support", url: "https://quickkeyapp.com/contact-us/" },
    { label: "Privacy", url: "https://quickkeyapp.com/privacy-policy/" },
    { label: "Terms", url: "https://quickkeyapp.com/terms-of-service/" },
  ],
  newsSlug: "quickkey-joins-thirty-seven",
  offer: { price: "0", description: "Free download and account; paid plans available" },
  operatingSystem: "iOS, iPadOS, Android, Web",
  cta: {
    heading: "Make the marking useful.",
    body: "Find supported answer sheets, current plans, setup guidance, and help on the QuickKey website.",
  },
};

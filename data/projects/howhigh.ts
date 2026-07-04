import type { Project } from "./types";

export const howhigh: Project = {
  slug: "howhigh",
  name: "HowHigh",
  category: "Barometer and altimeter app for iPhone",
  oneLiner:
    "A barometric altimeter for iPhone — track elevation gain and air pressure in real time.",
  description:
    "HowHigh turns the barometric pressure sensor inside your iPhone or iPad into a live altimeter and barometer. Start a session, climb, and watch elevation gain, loss, and pressure trends chart themselves in real time — on a trail, in a stairwell, or anywhere a tape measure can't reach.",
  problem: {
    heading: "GPS can't tell you how high you climbed",
    body: "GPS altitude is coarse — it can drift by tens of feet and needs a clear view of the sky. A tape measure tops out at a staircase. So when you want to know the elevation you gained on a hike, or roughly how tall that building or hill is, you end up guessing.",
  },
  solution: {
    heading: "Your phone already has the right sensor",
    body: "Modern iPhones carry a barometric pressure sensor that picks up the small pressure changes that come with changes in height. HowHigh reads it directly, converts pressure into elevation, and records the whole climb as a session you can scrub through afterwards. No GPS fix, no network required.",
  },
  features: [
    {
      title: "Live altimeter",
      body: "See your current altitude and the direction it's moving, straight from the barometer.",
    },
    {
      title: "Live barometer",
      body: "Watch air pressure in real time with a trend indicator — useful for weather watching too.",
    },
    {
      title: "Session recording",
      body: "Record a climb and get a summary of elevation gain, loss, and duration you can replay later.",
    },
    {
      title: "Interactive charts",
      body: "Scrub through pressure and elevation graphs to see exactly when and how much you climbed.",
    },
    {
      title: "Calibration built in",
      body: "Dial in sea-level pressure by hand or auto-calibrate from local weather data via WeatherKit.",
    },
    {
      title: "Metric or imperial",
      body: "Switch between meters and feet, hPa and kPa, with a tap.",
    },
  ],
  useCases: [
    {
      title: "Elevation gain on a hike",
      body: "Start a session at the trailhead and see your total gain, loss, and time when you reach the top.",
    },
    {
      title: "How tall is this thing?",
      body: "Ride or walk from the bottom of a building, tower, or hill to the top — the session gain is its height, no tape measure involved.",
    },
    {
      title: "Watching the weather",
      body: "Falling pressure often means weather is coming. Keep an eye on the live barometer and its trend.",
    },
  ],
  comparison: {
    heading: "Other ways people measure height",
    rows: [
      {
        alternative: "GPS elevation apps",
        drawback:
          "GPS altitude is the least accurate part of a GPS fix — it drifts, lags, and fails indoors.",
        advantage:
          "The barometer responds to small changes in height instantly and works indoors, in tunnels, and offline.",
      },
      {
        alternative: "Guessing from floor counts",
        drawback:
          "Multiplying floors by an assumed ceiling height is a rough estimate at best.",
        advantage:
          "HowHigh measures the actual pressure change of your climb and reports it in feet or meters.",
      },
      {
        alternative: "Laser distance measures",
        drawback:
          "They need a clear line of sight to the top and are hardware you have to buy and carry.",
        advantage:
          "Your phone is already in your pocket, and it measures the path you actually travel — including trails.",
      },
    ],
  },
  faqs: [
    {
      question: "Is HowHigh free?",
      answer: "Yes. HowHigh is free on the App Store.",
    },
    {
      question: "Does HowHigh need GPS or an internet connection?",
      answer:
        "No. Readings come from the barometric sensor in your device, so the altimeter and barometer work fully offline. The optional WeatherKit calibration fetches local pressure data and does use the internet.",
    },
    {
      question: "Which devices does it work on?",
      answer:
        "iPhone and iPad models with a built-in barometric pressure sensor, running iOS 16 or later.",
    },
    {
      question: "How accurate is a barometric altimeter?",
      answer:
        "Barometric sensors are very sensitive to changes in height, which makes them well suited to measuring gain and loss during a climb. Absolute altitude depends on current sea-level pressure, so HowHigh lets you calibrate it manually or from local weather data.",
    },
    {
      question: "Can I measure the height of a building with my iPhone?",
      answer:
        "Yes. Start a session at the bottom, travel to the top, and the session summary shows the elevation you gained — that's the height you climbed.",
    },
    {
      question: "Where is my data stored?",
      answer:
        "Recorded sessions stay on your device until you choose to share or export them. No account is required.",
    },
  ],
  keywords: [
    "barometric altimeter app iPhone",
    "altimeter app for iPhone",
    "barometer app iOS",
    "elevation gain tracker no GPS",
    "measure height of a building with phone",
    "how high did I climb",
    "air pressure app iPhone",
    "elevation tracker for hiking",
    "iPhone barometer sensor app",
  ],
  seo: {
    title: "HowHigh — Barometer & Altimeter App for iPhone",
    description:
      "GPS altitude is coarse. HowHigh uses your iPhone's barometric sensor to track elevation gain, air pressure, and climbs in real time. Free on iOS.",
  },
  theme: {
    accent: "#4a8ac9",
    accentSoft: "#edf4fb",
    accentInk: "#275d8c",
  },
  tags: ["iOS", "Utilities", "Navigation"],
  hero: "/assets/projects/howhigh.jpg",
  screenshots: [
    {
      src: "/assets/projects/howhigh/screenshot-2.png",
      alt: "HowHigh altimeter tab showing current altitude, a live elevation chart, and a session summary of gain, loss, and duration",
    },
    {
      src: "/assets/projects/howhigh/screenshot-1.png",
      alt: "HowHigh barometer tab with current air pressure, pressure trend, and a live pressure chart",
    },
    {
      src: "/assets/projects/howhigh/screenshot-3.png",
      alt: "HowHigh settings with metric or imperial units, sea-level pressure calibration, and WeatherKit auto-calibration",
    },
  ],
  platforms: [
    {
      label: "App Store",
      url: "https://apps.apple.com/us/app/howhigh-barometric-pressure-measurement-tool/id921339656",
      kind: "app-store",
    },
  ],
  appStoreId: "921339656",
  price: "Free",
  operatingSystem: "iOS",
  cta: {
    heading: "Know exactly how high",
    body: "Free on the App Store. Start a session and let the sensor do the measuring.",
  },
};

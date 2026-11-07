import { createHash } from "node:crypto";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const sourceRoot = process.argv[2];
if (!sourceRoot) throw new Error("Pass the local QuickKey source root.");
const destination = "public/assets/projects/quickkey";
await mkdir(destination, { recursive: true });
const exportsRoot = "release-prep-20261031/v1-approved/exports";
const sources = [
  ["answer-key", "02-your-answer-key"],
  ["print", "03-ready-to-print"],
  ["scan", "01-paper-to-results"],
  ["review", "04-review-with-confidence"],
  ["results", "05-plan-the-next-lesson"],
];
const records = [];
const sha = (data) => createHash("sha256").update(data).digest("hex");

async function record(source, file, data, note) {
  await writeFile(file, data);
  const metadata = await sharp(data).metadata();
  records.push({ source, sourceSha256: sha(await readFile(path.join(sourceRoot, source))), file, sha256: sha(data), width: metadata.width, height: metadata.height, note });
}

const icon = "mobile/ios/QuickKey/Assets.xcassets/AppIcon.appiconset/AppIcon.jpg";
await record(icon, "public/assets/projects/quickkey-icon.webp", await sharp(path.join(sourceRoot, icon)).resize(192, 192).webp({ lossless: true }).toBuffer(), "Resize-only derivative of the existing native rabbit icon.");

for (const [name, sourceName] of sources) {
  const source = `${exportsRoot}/iphone/en-US/${sourceName}.png`;
  await record(source, `${destination}/${name}.webp`, await sharp(path.join(sourceRoot, source)).resize({ height: 960 }).webp({ quality: 90 }).toBuffer(), "Published iPhone store artwork, fictional classroom examples; complete image retained.");
}

const phoneSource = `${exportsRoot}/iphone/en-US/01-paper-to-results.png`;
const reviewSource = `${exportsRoot}/iphone/en-US/04-review-with-confidence.png`;
const phone = await sharp(path.join(sourceRoot, phoneSource)).resize({ height: 740 }).toBuffer();
const review = await sharp(path.join(sourceRoot, reviewSource)).resize({ height: 740 }).toBuffer();
const hero = await sharp({ create: { width: 1200, height: 800, channels: 3, background: "#e4eed9" } }).composite([
  { input: phone, left: 220, top: 30 },
  { input: review, left: 640, top: 30 },
]).webp({ quality: 90 }).toBuffer();
await record(phoneSource, `${destination}/hero.webp`, hero, "Full published iPhone scanning and answer-review posters, resized onto a neutral brand-tint background without altering app UI.");

const label = Buffer.from(`<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg"><rect width="1200" height="630" fill="#f0f6e9"/><text x="72" y="86" font-family="sans-serif" font-size="23" fill="#2d642b" letter-spacing="3">THIRTY SEVEN / QUICKKEY</text><text x="72" y="220" font-family="serif" font-size="66" fill="#173b24">A new chapter.</text><text x="72" y="300" font-family="serif" font-size="66" fill="#173b24">The same useful job.</text><text x="72" y="410" font-family="sans-serif" font-size="25" fill="#445644">Paper quizzes. Teacher review.</text><text x="72" y="451" font-family="sans-serif" font-size="25" fill="#445644">A clearer picture of the class.</text><text x="72" y="558" font-family="sans-serif" font-size="22" fill="#2d642b">37.technology/quickkey</text></svg>`);
const sharePhone = await sharp(path.join(sourceRoot, phoneSource)).resize({ height: 570 }).toBuffer();
const share = await sharp(label).composite([{ input: sharePhone, left: 840, top: 30 }]).webp({ quality: 92 }).toBuffer();
await record(phoneSource, `${destination}/share.webp`, share, "Announcement composition; full published phone artwork retained, no fabricated app screen.");

await writeFile("docs/quickkey-media-provenance.json", JSON.stringify({ reviewedOn: "2026-11-06", store: "https://apps.apple.com/app/id686229501", artworkSet: "v1-approved; current public 1.0.0 store screenshot names independently matched November 6", secondaryHeroSource: { source: reviewSource, sha256: sha(await readFile(path.join(sourceRoot, reviewSource))) }, records }, null, 2) + "\n");
console.log(records.map(({ file, width, height }) => ({ file, width, height })));

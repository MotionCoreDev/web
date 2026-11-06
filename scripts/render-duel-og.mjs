// Renders the link preview image of private duel invites (public/images/og-duel.png, 1200x630): the app icon and
// wordmark, PRIVATE DUEL in the app's Figtree, a green and a red player ring with the brand red VS between them, on the
// app's dark split background. Run from the repo root:
//   node scripts/render-duel-og.mjs <path to the mobile repo's apps/mobile/assets/fonts>
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { createRequire } from "node:module";

import { readdirSync } from "node:fs";

const require = createRequire(import.meta.url);
const root = join(dirname(fileURLToPath(import.meta.url)), "..");
// sharp comes in with Next.js; pnpm keeps it in its own store, so look there too.
function loadSharp() {
  try { return require("sharp"); } catch {}
  const store = join(root, "node_modules/.pnpm");
  const dir = readdirSync(store).find((name) => name.startsWith("sharp@"));
  if (!dir) throw new Error("sharp is not installed; run pnpm install");
  return require(join(store, dir, "node_modules/sharp"));
}
const sharp = loadSharp();
const publicDir = join(root, "apps/landing-page/public");
const fonts = process.argv[2];
if (!fonts) throw new Error("Pass the folder with the Figtree-*.ttf files");

const W = 1200;
const H = 630;
const CREAM = "#F4F3D4";

const background = Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#10B981" stop-opacity="0.05"/><stop offset="0.5" stop-color="#10B981" stop-opacity="0.2"/>
      <stop offset="1" stop-color="#10B981" stop-opacity="0.04"/>
    </linearGradient>
    <linearGradient id="r" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#DC1612" stop-opacity="0.06"/><stop offset="0.5" stop-color="#DC1612" stop-opacity="0.26"/>
      <stop offset="1" stop-color="#DC1612" stop-opacity="0.05"/>
    </linearGradient>
    <radialGradient id="glow" cx="0.5" cy="0.62" r="0.5">
      <stop offset="0" stop-color="#DC1612" stop-opacity="0.35"/><stop offset="1" stop-color="#DC1612" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="${W}" height="${H}" fill="#0B0F1A"/>
  <polygon points="0,0 660,0 540,${H} 0,${H}" fill="url(#g)"/>
  <polygon points="660,0 ${W},0 ${W},${H} 540,${H}" fill="url(#r)"/>
  <line x1="660" y1="0" x2="540" y2="${H}" stroke="#FFFFFF" stroke-opacity="0.08" stroke-width="3"/>
  <circle cx="600" cy="392" r="210" fill="url(#glow)"/>
  <!-- The two players: your green ring, the friend's red one waiting. -->
  <circle cx="330" cy="392" r="86" fill="#141925" stroke="#10B981" stroke-width="8"/>
  <circle cx="870" cy="392" r="86" fill="#141925" stroke="#DC1612" stroke-width="8" stroke-dasharray="22 14"/>
  <circle cx="600" cy="392" r="58" fill="#DC1612" stroke="${CREAM}" stroke-opacity="0.4" stroke-width="5"/>
  <!-- A simple head-and-shoulders mark in the player ring. -->
  <circle cx="330" cy="370" r="26" fill="${CREAM}" fill-opacity="0.85"/>
  <path d="M282 440 q48 -54 96 0 z" fill="${CREAM}" fill-opacity="0.85"/>
  <rect x="0" y="${H - 6}" width="${W}" height="6" fill="#DC1612"/>
</svg>`);

// Pango needs the family name with the file, or it falls back to a default face.
const FAMILY = {
  "Figtree-Bold.ttf": "Figtree Bold",
  "Figtree-SemiBold.ttf": "Figtree SemiBold",
  "Figtree-Medium.ttf": "Figtree Medium",
};
const text = (value, file, size, color) => sharp({ text: {
  text: `<span foreground="${color}">${value}</span>`, font: `${FAMILY[file]} ${size}`, fontfile: join(fonts, file),
  rgba: true, dpi: 72,
} }).png().toBuffer();

const [icon, wordmark, title, vs, question, subtitle, footer] = await Promise.all([
  sharp(join(publicDir, "images/app-icon.png")).resize(72, 72).composite([{
    input: Buffer.from(`<svg width="72" height="72"><rect width="72" height="72" rx="18" ry="18"/></svg>`), blend: "dest-in",
  }]).png().toBuffer(),
  text("MotionCore", "Figtree-Bold.ttf", 34, CREAM),
  text("ÖZEL DÜELLO", "Figtree-Bold.ttf", 88, CREAM),
  text("VS", "Figtree-Bold.ttf", 40, CREAM),
  text("?", "Figtree-Bold.ttf", 76, "#98A2B3"),
  text("Arkadaşın seni canlı bir 1v1 fitness düellosuna çağırıyor", "Figtree-SemiBold.ttf", 30, "#D0D5DD"),
  text("Bağlantıya dokun, odaya gir · Kodla da katılabilirsin", "Figtree-Medium.ttf", 24, "#98A2B3"),
]);

const meta = async (buffer) => sharp(buffer).metadata();
const centered = async (buffer, cx, cy) => {
  const { width, height } = await meta(buffer);
  return { input: buffer, left: Math.round(cx - width / 2), top: Math.round(cy - height / 2) };
};
const wordmarkMeta = await meta(wordmark);

await sharp(background)
  .composite([
    { input: icon, left: 56, top: 44 },
    { input: wordmark, left: 144, top: Math.round(80 - wordmarkMeta.height / 2) },
    await centered(title, W / 2, 170),
    await centered(subtitle, W / 2, 248),
    await centered(vs, 600, 392),
    await centered(question, 870, 392),
    await centered(footer, W / 2, 560),
  ])
  .png({ compressionLevel: 9 })
  .toFile(join(publicDir, "images/og-duel.png"));
console.log("wrote images/og-duel.png");

// Builds the private duel invite pages, one per site language, and their link preview image:
//   apps/landing-page/public/duel/<lang>/index.html   served for https://motioncore.fit/<lang>/duel/<CODE>
//                                                     (and the same on motioncore.netlify.app)
//   apps/landing-page/public/images/og-duel-<lang>.png  1200x630: the logo where two athletes meet, one short line
// The app shares the link in the sender's language, so WhatsApp, Discord and others show the preview in that
// language (crawlers do not run scripts, so each language needs its own static page). Run from the repo root
// after changing a text or the image, and commit the output:
//   node scripts/build-duel-invites.mjs
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { createRequire } from "node:module";
import { mkdirSync, readdirSync, writeFileSync } from "node:fs";

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

const SITE = "https://motioncore.fit";
const STORE = "https://play.google.com/store/apps/details?id=com.motioncore.app";
const IMAGE_VERSION = 4;

/** Every text of the page and the image, per site language. `steps` and `stepsTitle` may hold <b>. */
const TEXTS = {
  tr: {
    locale: "tr_TR",
    ogTitle: "MotionCore'da düelloya davet edildin! ⚔️",
    ogDescription: "Arkadaşın seni canlı bir 1v1 fitness düellosuna çağırıyor. Bağlantıya dokun ve odaya gir.",
    imageAlt: "MotionCore özel düello: iki oyuncu, aralarında VS",
    badge: "⚔ ÖZEL DÜELLO",
    title: "Düelloya davet edildin!",
    lead: "Arkadaşın seni canlı bir 1v1 fitness düellosuna çağırıyor. Kameranı kur, tekrarlarını say, kazanan belli olsun.",
    codeLabel: "ODA KODU",
    imageLine: "DÜELLOYA DAVETLİSİN",
    copy: "Kodu kopyala",
    copied: "Kopyalandı",
    open: "Uygulamada aç",
    stepsTitle: "<b>Bağlantı açılmazsa</b>",
    steps: "MotionCore'u aç, <b>VS Fitness Arenası → Arkadaşınla oyna → Kodla katıl</b> yolunu izle ve aşağıdaki kodu yaz.",
    store: "Google Play'den edinin",
  },
  en: {
    locale: "en_US",
    ogTitle: "You're invited to a duel on MotionCore! ⚔️",
    ogDescription: "Your friend is calling you to a live 1v1 fitness duel. Tap the link and enter the room.",
    imageAlt: "MotionCore private duel: two players with VS between them",
    badge: "⚔ PRIVATE DUEL",
    title: "You're invited to a duel!",
    lead: "Your friend is calling you to a live 1v1 fitness duel. Set up your camera, count your reps, may the best win.",
    codeLabel: "ROOM CODE",
    imageLine: "YOU'RE INVITED TO A DUEL",
    copy: "Copy code",
    copied: "Copied",
    open: "Open in the app",
    stepsTitle: "<b>If the link doesn't open</b>",
    steps: "Open MotionCore, go to <b>VS Fitness Arena → Play a friend → Join with a code</b> and type the code below.",
    store: "Get it on Google Play",
  },
  de: {
    locale: "de_DE",
    ogTitle: "Du wurdest auf MotionCore zum Duell herausgefordert! ⚔️",
    ogDescription: "Dein Freund fordert dich zu einem Live-1v1-Fitnessduell heraus. Tippe auf den Link und betritt den Raum.",
    imageAlt: "MotionCore privates Duell: zwei Spieler, dazwischen VS",
    badge: "⚔ PRIVATES DUELL",
    title: "Du bist zu einem Duell eingeladen!",
    lead: "Dein Freund fordert dich zu einem Live-1v1-Fitnessduell heraus. Kamera aufstellen, Wiederholungen zählen, der Bessere gewinnt.",
    codeLabel: "RAUMCODE",
    imageLine: "DU BIST ZUM DUELL GELADEN",
    copy: "Code kopieren",
    copied: "Kopiert",
    open: "In der App öffnen",
    stepsTitle: "<b>Falls der Link nicht öffnet</b>",
    steps: "Öffne MotionCore, geh zu <b>VS Fitness Arena → Gegen Freund spielen → Mit Code beitreten</b> und gib den Code unten ein.",
    store: "Jetzt bei Google Play",
  },
  es: {
    locale: "es_ES",
    ogTitle: "¡Te han retado a un duelo en MotionCore! ⚔️",
    ogDescription: "Tu amigo te reta a un duelo de fitness 1v1 en directo. Toca el enlace y entra en la sala.",
    imageAlt: "Duelo privado de MotionCore: dos jugadores con VS entre ellos",
    badge: "⚔ DUELO PRIVADO",
    title: "¡Te han invitado a un duelo!",
    lead: "Tu amigo te reta a un duelo de fitness 1v1 en directo. Coloca la cámara, cuenta tus repeticiones y que gane el mejor.",
    codeLabel: "CÓDIGO DE SALA",
    imageLine: "ESTÁS INVITADO A UN DUELO",
    copy: "Copiar código",
    copied: "Copiado",
    open: "Abrir en la app",
    stepsTitle: "<b>Si el enlace no se abre</b>",
    steps: "Abre MotionCore, ve a <b>VS Fitness Arena → Jugar con un amigo → Unirse con código</b> y escribe el código de abajo.",
    store: "Disponible en Google Play",
  },
};

const attr = (value) => value.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");

function page(lang, T) {
  // Bump IMAGE_VERSION when the image changes: chat apps and the 7-day image cache keep the old one by its address.
  const image = `${SITE}/images/og-duel-${lang}.png?v=${IMAGE_VERSION}`;
  return `<!doctype html>
<!--
  Generated by scripts/build-duel-invites.mjs; edit the texts there, not here.
  Private duel invites in ${lang}: ${SITE}/${lang}/duel/<CODE>, shared from the app (netlify.toml serves this file for
  every such path). The Open Graph tags below are what WhatsApp, Discord and others show for the link; the script reads
  the code from the address, shows it, and opens the room in the app (Android: an intent link that falls back to Google
  Play).
-->
<html lang="${lang}">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="robots" content="noindex" />
    <meta name="theme-color" content="#DC1612" />
    <title>${T.title} · MotionCore</title>
    <meta name="description" content="${attr(T.ogDescription)}" />

    <meta property="og:type" content="website" />
    <!-- No og:url: every room has its own address (with its code), and Facebook would send clicks to og:url. -->
    <meta property="og:site_name" content="MotionCore" />
    <meta property="og:locale" content="${T.locale}" />
    <meta property="og:title" content="${attr(T.ogTitle)}" />
    <meta property="og:description" content="${attr(T.ogDescription)}" />
    <meta property="og:image" content="${image}" />
    <meta property="og:image:secure_url" content="${image}" />
    <meta property="og:image:type" content="image/png" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:image:alt" content="${attr(T.imageAlt)}" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${attr(T.ogTitle)}" />
    <meta name="twitter:description" content="${attr(T.ogDescription)}" />
    <meta name="twitter:image" content="${image}" />

    <link rel="icon" href="/favicon.png" type="image/png" />
    <style>
      /* The app's font (SIL OFL, /fonts/OFL-Figtree.txt). */
      @font-face { font-family: "Figtree"; src: url("/fonts/Figtree-Regular.ttf") format("truetype"); font-weight: 400; font-display: swap; }
      @font-face { font-family: "Figtree"; src: url("/fonts/Figtree-Medium.ttf") format("truetype"); font-weight: 500; font-display: swap; }
      @font-face { font-family: "Figtree"; src: url("/fonts/Figtree-SemiBold.ttf") format("truetype"); font-weight: 600; font-display: swap; }
      @font-face { font-family: "Figtree"; src: url("/fonts/Figtree-Bold.ttf") format("truetype"); font-weight: 700 900; font-display: swap; }
      :root { color-scheme: dark; }
      * { box-sizing: border-box; }
      body { margin: 0; min-height: 100vh; display: flex; align-items: center; justify-content: center; padding: 24px 16px;
        background: radial-gradient(circle at 50% -10%, rgba(220, 22, 18, 0.28), transparent 55%), #0b0f1a;
        color: #f4f3d4; font-family: "Figtree", system-ui, sans-serif; text-align: center; }
      main { width: 100%; max-width: 420px; min-width: 0; }
      .icon { display: block; margin: 0 auto; width: 72px; height: 72px; border-radius: 18px; box-shadow: 0 20px 50px -12px rgba(220, 22, 18, 0.6); }
      .badge { display: flex; width: fit-content; margin: 20px auto 0; gap: 6px; align-items: center; padding: 6px 12px; border-radius: 12px;
        border: 1px solid rgba(220, 22, 18, 0.6); background: rgba(220, 22, 18, 0.15); color: #f26f6c;
        font-size: 12px; font-weight: 700; letter-spacing: 0.12em; }
      h1 { font-size: 30px; line-height: 1.15; margin: 14px 0 8px; font-weight: 700; }
      p { color: #98a2b3; margin: 6px 0; line-height: 1.5; font-size: 15px; }
      /* The room code, small, where it is needed: in the box that says what to do when the link does not open. */
      .code-row { display: flex; align-items: center; justify-content: space-between; gap: 12px; margin-top: 12px;
        padding-top: 12px; border-top: 1px solid #1f2532; }
      /* Label and code side by side on one baseline, so the small caps sit on the same line as the code. */
      .code-box { display: flex; align-items: baseline; gap: 10px; min-width: 0; }
      .code-label { font-size: 11px; line-height: 1; letter-spacing: 0.16em; color: #98a2b3; font-weight: 700; }
      .code { font-size: 18px; line-height: 1; letter-spacing: 0.14em; font-weight: 700; color: #f4f3d4;
        font-variant-numeric: tabular-nums; user-select: all; }
      .copy { flex-shrink: 0; padding: 8px 14px; border-radius: 999px; border: 1px solid rgba(244, 243, 212, 0.25);
        background: transparent; color: #f4f3d4; font: 700 13px/1 "Figtree", system-ui, sans-serif; cursor: pointer; }
      .copy.done { border-color: rgba(16, 185, 129, 0.55); color: #10b981; }
      .open { display: block; margin-top: 22px; padding: 16px; border-radius: 999px; background: #dc1612; color: #fff;
        font-weight: 700; font-size: 16px; text-decoration: none; }
      .open:active { background: #c01210; }
      .steps { margin-top: 22px; padding: 14px 16px; border-radius: 18px; border: 1px solid #1f2532; text-align: left; }
      .steps p { margin: 4px 0; font-size: 14px; }
      .steps b { color: #f4f3d4; }
      .store { display: inline-block; margin-top: 20px; }
      .store img { height: 52px; }
      [hidden] { display: none !important; }
    </style>
  </head>
  <body>
    <main>
      <img class="icon" src="/images/app-icon.png" alt="MotionCore" />
      <div class="badge">${T.badge}</div>
      <h1>${T.title}</h1>
      <p>${T.lead}</p>

      <a class="open" id="open" href="motioncore://duel/">${T.open}</a>

      <div class="steps">
        <p>${T.stepsTitle}</p>
        <p>${T.steps}</p>
        <div class="code-row" id="code-row" hidden>
          <div class="code-box">
            <span class="code-label">${T.codeLabel}</span>
            <span class="code" id="code"></span>
          </div>
          <button class="copy" id="copy" type="button" hidden>${T.copy}</button>
        </div>
      </div>

      <a class="store" href="${STORE}">
        <img src="/images/google-play-${lang}.png" alt="${attr(T.store)}" />
      </a>
    </main>
    <script>
      (function () {
        var STORE = "${STORE}";
        // Room codes use these characters only (no 0/O, 1/I/L), six of them.
        var match = location.pathname.match(/\\/duel\\/([A-Za-z0-9-]{6,8})\\/?$/);
        var code = match ? match[1].toUpperCase().replace(/-/g, "") : "";
        if (!/^[ABCDEFGHJKMNPQRSTUVWXYZ23456789]{6}$/.test(code)) code = "";

        var open = document.getElementById("open");
        if (code) {
          document.getElementById("code").textContent = code;
          document.getElementById("code-row").hidden = false;
          // A button to copy the code, for typing it in the app when the link does not open it.
          var copy = document.getElementById("copy");
          if (navigator.clipboard && window.isSecureContext) {
            copy.hidden = false;
            copy.addEventListener("click", function () {
              navigator.clipboard.writeText(code).then(function () {
                copy.textContent = ${JSON.stringify(T.copied)};
                copy.className = "copy done";
                setTimeout(function () { copy.textContent = ${JSON.stringify(T.copy)}; copy.className = "copy"; }, 1600);
              }, function () {});
            });
          }
        }
        // Android opens the app straight into the room, or Google Play when it is not installed.
        if (/Android/i.test(navigator.userAgent)) {
          open.href = "intent://duel/" + code + "#Intent;scheme=motioncore;package=com.motioncore.app;S.browser_fallback_url=" +
            encodeURIComponent(STORE) + ";end";
        } else {
          open.href = "motioncore://duel/" + code;
        }
      })();
    </script>
  </body>
</html>
`;
}

const W = 1200;
const H = 630;

// The preview image: the app's own battle art (two athletes charging at each other, green against red) pulled apart so
// the MotionCore logo stands at the point where they meet, with red light, a few diagonal light lines and sparks, and one
// short line of text. WhatsApp shows a small square cut from the middle, so the logo, the clash and the athletes'
// reaching arms sit there; the text is for the larger previews (Discord, Facebook, WhatsApp on phones).
const ARENA = join(root, "scripts/assets/duel-arena.webp"); // 1672x941, mobile assets/images/battle/online-battle-arena-v1
const CLASH_X = 1143; // where the two athletes meet, in the art's pixels
const BAND_TOP = 130; // the strip of the art that is used, cut to 1200x630
const BAND_H = 577;
const HALF_GAP = 112; // each athlete moves this far out from the middle
const FEATHER = 90;
const LOGO = 300;
const LOGO_CY = 292;

const scale = H / BAND_H;
const artWidth = Math.round(1672 * scale);
const clash = Math.round(CLASH_X * scale);
const sideWidth = W / 2 - HALF_GAP;
const art = await sharp(ARENA)
  .extract({ left: 0, top: BAND_TOP, width: 1672, height: BAND_H })
  .resize(artWidth, H)
  .modulate({ brightness: 0.92, saturation: 0.95 })
  .png()
  .toBuffer();

// Each half fades out towards the middle, where the light column and the logo are.
const fade = (towards) => Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${sideWidth}" height="${H}">
  <defs><linearGradient id="f" x1="0" y1="0" x2="1" y2="0">
    ${towards === "right"
      ? `<stop offset="${1 - FEATHER / sideWidth}" stop-color="#fff"/><stop offset="1" stop-color="#fff" stop-opacity="0"/>`
      : `<stop offset="0" stop-color="#fff" stop-opacity="0"/><stop offset="${FEATHER / sideWidth}" stop-color="#fff"/>`}
  </linearGradient></defs>
  <rect width="${sideWidth}" height="${H}" fill="url(#f)"/>
</svg>`);
const half = async (left, towards) => sharp(art)
  .extract({ left, top: 0, width: sideWidth, height: H })
  .composite([{ input: fade(towards), blend: "dest-in" }])
  .png()
  .toBuffer();
const [greenSide, redSide] = await Promise.all([half(clash - sideWidth, "right"), half(clash, "left")]);

// Fixed sparks, so the image is the same on every build.
const SPARKS = [
  [452, 188, 2.2, "#FF6A5C", 0.8], [498, 120, 1.4, "#F4F3D4", 0.6], [538, 470, 1.8, "#FF8A3D", 0.7],
  [640, 96, 1.6, "#F4F3D4", 0.55], [700, 168, 2.4, "#FF4B3E", 0.85], [748, 432, 1.5, "#FFB36B", 0.6],
  [770, 250, 1.2, "#F4F3D4", 0.5], [430, 360, 1.3, "#FF6A5C", 0.55], [808, 500, 2, "#FF4B3E", 0.7],
  [568, 520, 1.2, "#F4F3D4", 0.5],
];
const overlay = Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
  <defs>
    <radialGradient id="vignette" cx="0.5" cy="0.46" r="0.75">
      <stop offset="0.45" stop-color="#05070C" stop-opacity="0"/><stop offset="1" stop-color="#05070C" stop-opacity="0.82"/>
    </radialGradient>
    <linearGradient id="column" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#DC1612" stop-opacity="0"/><stop offset="0.45" stop-color="#FF5A3C" stop-opacity="0.9"/>
      <stop offset="1" stop-color="#DC1612" stop-opacity="0"/>
    </linearGradient>
    <radialGradient id="glow" cx="0.5" cy="${LOGO_CY / H}" r="0.42">
      <stop offset="0" stop-color="#DC1612" stop-opacity="0.55"/><stop offset="0.6" stop-color="#DC1612" stop-opacity="0.12"/>
      <stop offset="1" stop-color="#DC1612" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="streak" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="#F4F3D4" stop-opacity="0"/><stop offset="0.5" stop-color="#F4F3D4" stop-opacity="0.32"/>
      <stop offset="1" stop-color="#F4F3D4" stop-opacity="0"/>
    </linearGradient>
    <linearGradient id="streakRed" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="#FF4B3E" stop-opacity="0"/><stop offset="0.5" stop-color="#FF4B3E" stop-opacity="0.45"/>
      <stop offset="1" stop-color="#FF4B3E" stop-opacity="0"/>
    </linearGradient>
    <linearGradient id="floor" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#05070C" stop-opacity="0"/><stop offset="1" stop-color="#05070C" stop-opacity="0.9"/>
    </linearGradient>
    <filter id="soft"><feGaussianBlur stdDeviation="6"/></filter>
  </defs>
  <rect width="${W}" height="${H}" fill="url(#glow)"/>
  <!-- The light column where the two meet, as in the art. -->
  <rect x="${W / 2 - 10}" y="0" width="20" height="${H}" fill="url(#column)" filter="url(#soft)" opacity="0.7"/>
  <rect x="${W / 2 - 1}" y="0" width="2" height="${H}" fill="url(#column)"/>
  <!-- Two diagonal light lines crossing behind the logo. -->
  <rect x="${W / 2 - 360}" y="${LOGO_CY - 1}" width="720" height="2" fill="url(#streak)" transform="rotate(-24 ${W / 2} ${LOGO_CY})"/>
  <rect x="${W / 2 - 330}" y="${LOGO_CY - 1.5}" width="660" height="3" fill="url(#streakRed)" transform="rotate(21 ${W / 2} ${LOGO_CY})"/>
  ${SPARKS.map(([x, y, r, c, o]) => `<circle cx="${x}" cy="${y}" r="${r}" fill="${c}" opacity="${o}"/>`).join("\n  ")}
  <rect width="${W}" height="${H}" fill="url(#vignette)"/>
  <rect y="${H - 190}" width="${W}" height="190" fill="url(#floor)"/>
  <!-- A soft red light behind the logo, and the logo's shadow. -->
  <rect x="${(W - LOGO) / 2 - 10}" y="${LOGO_CY - LOGO / 2 - 4}" width="${LOGO + 20}" height="${LOGO + 20}" rx="78"
    fill="#DC1612" opacity="0.55" filter="url(#bigBlur)"/>
  <filter id="bigBlur" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="34"/></filter>
  <rect x="${(W - LOGO) / 2}" y="${LOGO_CY - LOGO / 2 + 16}" width="${LOGO}" height="${LOGO}" rx="70" fill="#000" opacity="0.55"
    filter="url(#bigBlur)"/>
</svg>`);

const icon = await sharp(join(publicDir, "images/app-icon.png")).resize(LOGO, LOGO).composite([{
  input: Buffer.from(`<svg width="${LOGO}" height="${LOGO}"><rect width="${LOGO}" height="${LOGO}" rx="70" ry="70"/></svg>`),
  blend: "dest-in",
}]).png().toBuffer();
// A thin light edge around the logo, so it lifts off the red light behind it.
const iconEdge = Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${LOGO + 8}" height="${LOGO + 8}">
  <rect x="2" y="2" width="${LOGO + 4}" height="${LOGO + 4}" rx="72" fill="none" stroke="#F4F3D4" stroke-opacity="0.35" stroke-width="2"/>
</svg>`);

const base = await sharp({ create: { width: W, height: H, channels: 4, background: "#07090F" } })
  .composite([
    { input: greenSide, left: 0, top: 0 },
    { input: redSide, left: W - sideWidth, top: 0 },
    { input: overlay, left: 0, top: 0 },
    { input: icon, left: (W - LOGO) / 2, top: LOGO_CY - LOGO / 2 },
    { input: iconEdge, left: (W - LOGO) / 2 - 4, top: LOGO_CY - LOGO / 2 - 4 },
  ])
  .png()
  .toBuffer();

// Pango needs the family name with the file, or it falls back to a default face.
const tagline = (value) => sharp({ text: {
  text: `<span foreground="#F4F3D4" letter_spacing="${4 * 1024}">${value.replace(/&/g, "&amp;").replace(/</g, "&lt;")}</span>`,
  font: "Figtree Bold 34", fontfile: join(publicDir, "fonts/Figtree-Bold.ttf"), rgba: true, dpi: 72,
} }).png().toBuffer();

async function renderImage(lang, T) {
  const line = await tagline(T.imageLine);
  const { width, height } = await sharp(line).metadata();
  if (width > W - 120) throw new Error(`The ${lang} image line is ${width}px wide`);
  const pill = Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${width + 64}" height="${height + 26}">
    <rect x="1" y="1" width="${width + 62}" height="${height + 24}" rx="${(height + 24) / 2}" fill="#0B0F1A" fill-opacity="0.72"
      stroke="#DC1612" stroke-opacity="0.85" stroke-width="2"/>
  </svg>`);
  const top = 512;
  await sharp(base)
    .composite([
      { input: pill, left: Math.round((W - width - 64) / 2), top },
      { input: line, left: Math.round((W - width) / 2), top: top + 13 },
    ])
    .png({ compressionLevel: 9 })
    .toFile(join(publicDir, `images/og-duel-${lang}.png`));
}

for (const [lang, T] of Object.entries(TEXTS)) {
  await renderImage(lang, T);
  const dir = join(publicDir, "duel", lang);
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, "index.html"), page(lang, T));
  console.log(`wrote duel/${lang}/index.html and images/og-duel-${lang}.png`);
}

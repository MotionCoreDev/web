// Builds the private duel invite pages, one per site language, and their link preview images:
//   apps/landing-page/public/duel/<lang>/index.html   served for https://motioncore.fit/<lang>/duel/<CODE>
//   apps/landing-page/public/images/og-duel-<lang>.png  (1200x630)
// The app shares the link in the sender's language, so WhatsApp, Discord and others show the preview in that language
// (crawlers do not run scripts, so each language needs its own static page). The image: the app logo large in the
// middle with its glow, the MotionCore wordmark and PRIVATE DUEL in the app's Figtree, on the app's dark background. Run from the repo root after changing a text or the layout, and commit the output:
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
const fonts = join(publicDir, "fonts");

const SITE = "https://motioncore.fit";
const STORE = "https://play.google.com/store/apps/details?id=com.motioncore.app";
const IMAGE_VERSION = 2;

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
    copy: "Kodu kopyala",
    copied: "Kopyalandı",
    open: "Uygulamada aç",
    stepsTitle: "<b>Bağlantı açılmazsa</b>",
    steps: "MotionCore'u aç, <b>VS Fitness Arenası → Arkadaşınla oyna → Kodla katıl</b> yolunu izle ve oda kodunu yaz.",
    store: "Google Play'den edinin",
    imageTitle: "ÖZEL DÜELLO",
    imageSubtitle: "Arkadaşın seni canlı bir 1v1 fitness düellosuna çağırıyor",
    imageFooter: "Bağlantıya dokun, odaya gir · Kodla da katılabilirsin",
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
    copy: "Copy code",
    copied: "Copied",
    open: "Open in the app",
    stepsTitle: "<b>If the link doesn't open</b>",
    steps: "Open MotionCore, go to <b>VS Fitness Arena → Play a friend → Join with a code</b> and type the room code.",
    store: "Get it on Google Play",
    imageTitle: "PRIVATE DUEL",
    imageSubtitle: "Your friend is calling you to a live 1v1 fitness duel",
    imageFooter: "Tap the link to enter the room · or join with the code",
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
    copy: "Code kopieren",
    copied: "Kopiert",
    open: "In der App öffnen",
    stepsTitle: "<b>Falls der Link nicht öffnet</b>",
    steps: "Öffne MotionCore, geh zu <b>VS Fitness Arena → Gegen Freund spielen → Mit Code beitreten</b> und gib den Raumcode ein.",
    store: "Jetzt bei Google Play",
    imageTitle: "PRIVATES DUELL",
    imageSubtitle: "Dein Freund fordert dich zum Live-1v1-Fitnessduell heraus",
    imageFooter: "Tippe auf den Link und betritt den Raum · oder nutze den Code",
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
    copy: "Copiar código",
    copied: "Copiado",
    open: "Abrir en la app",
    stepsTitle: "<b>Si el enlace no se abre</b>",
    steps: "Abre MotionCore, ve a <b>VS Fitness Arena → Jugar con un amigo → Unirse con código</b> y escribe el código de sala.",
    store: "Disponible en Google Play",
    imageTitle: "DUELO PRIVADO",
    imageSubtitle: "Tu amigo te reta a un duelo de fitness 1v1 en directo",
    imageFooter: "Toca el enlace y entra en la sala · o únete con el código",
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
      .code-card { margin: 22px auto 0; padding: 16px 20px; border-radius: 22px; background: #141925; border: 1px solid #2a3142; }
      .code-label { font-size: 11px; letter-spacing: 0.22em; color: #98a2b3; font-weight: 700; }
      .code { font-size: 36px; letter-spacing: 0.22em; font-weight: 700; margin-top: 6px; font-variant-numeric: tabular-nums;
        user-select: all; }
      .copy { margin-top: 12px; padding: 9px 18px; border-radius: 999px; border: 1px solid rgba(244, 243, 212, 0.25);
        background: transparent; color: #f4f3d4; font: 700 14px "Figtree", system-ui, sans-serif; cursor: pointer; }
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

      <div class="code-card" id="code-card" hidden>
        <div class="code-label">${T.codeLabel}</div>
        <div class="code" id="code"></div>
        <button class="copy" id="copy" type="button" hidden>${T.copy}</button>
      </div>

      <a class="open" id="open" href="motioncore://duel/">${T.open}</a>

      <div class="steps">
        <p>${T.stepsTitle}</p>
        <p>${T.steps}</p>
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
          document.getElementById("code-card").hidden = false;
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
const CREAM = "#F4F3D4";

// The logo in the middle (WhatsApp often shows only a square from the centre), glowing on the app's dark background.
const LOGO = 240;
const LOGO_CY = 196;
const background = Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
  <defs>
    <radialGradient id="glow" cx="0.5" cy="${LOGO_CY / H}" r="0.55">
      <stop offset="0" stop-color="#DC1612" stop-opacity="0.42"/><stop offset="0.55" stop-color="#DC1612" stop-opacity="0.08"/>
      <stop offset="1" stop-color="#DC1612" stop-opacity="0"/>
    </radialGradient>
    <filter id="blur" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="40"/></filter>
  </defs>
  <rect width="${W}" height="${H}" fill="#0B0F1A"/>
  <rect width="${W}" height="${H}" fill="url(#glow)"/>
  <rect x="${W / 2 - LOGO / 2}" y="${LOGO_CY - LOGO / 2 + 10}" width="${LOGO}" height="${LOGO}" rx="56" fill="#DC1612"
    fill-opacity="0.55" filter="url(#blur)"/>
  <rect x="0" y="${H - 6}" width="${W}" height="6" fill="#DC1612"/>
</svg>`);

// Pango needs the family name with the file, or it falls back to a default face.
const FAMILY = {
  "Figtree-Bold.ttf": "Figtree Bold",
  "Figtree-SemiBold.ttf": "Figtree SemiBold",
  "Figtree-Medium.ttf": "Figtree Medium",
};
const text = (value, file, size, color, spacing = 0) => sharp({ text: {
  text: `<span foreground="${color}" letter_spacing="${Math.round(spacing * 1024)}">${value.replace(/&/g, "&amp;").replace(/</g, "&lt;")}</span>`,
  font: `${FAMILY[file]} ${size}`, fontfile: join(fonts, file), rgba: true, dpi: 72,
} }).png().toBuffer();

const meta = async (buffer) => sharp(buffer).metadata();
const centered = async (buffer, cx, cy) => {
  const { width, height } = await meta(buffer);
  if (width > W - 80) throw new Error(`A text is ${width}px wide, too wide for the image`);
  return { input: buffer, left: Math.round(cx - width / 2), top: Math.round(cy - height / 2) };
};

const [icon, wordmark] = await Promise.all([
  sharp(join(publicDir, "images/app-icon.png")).resize(LOGO, LOGO).composite([{
    input: Buffer.from(`<svg width="${LOGO}" height="${LOGO}"><rect width="${LOGO}" height="${LOGO}" rx="56" ry="56"/></svg>`),
    blend: "dest-in",
  }]).png().toBuffer(),
  text("MotionCore", "Figtree-Bold.ttf", 50, CREAM),
]);

for (const [lang, T] of Object.entries(TEXTS)) {
  const [title, subtitle, footer] = await Promise.all([
    text(T.imageTitle, "Figtree-Bold.ttf", 30, "#F26F6C", 4),
    text(T.imageSubtitle, "Figtree-SemiBold.ttf", 28, "#D0D5DD"),
    text(T.imageFooter, "Figtree-Medium.ttf", 22, "#98A2B3"),
  ]);
  await sharp(background)
    .composite([
      { input: icon, left: W / 2 - LOGO / 2, top: LOGO_CY - LOGO / 2 },
      await centered(wordmark, W / 2, 376),
      await centered(title, W / 2, 430),
      await centered(subtitle, W / 2, 492),
      await centered(footer, W / 2, 566),
    ])
    .png({ compressionLevel: 9 })
    .toFile(join(publicDir, `images/og-duel-${lang}.png`));

  const dir = join(publicDir, "duel", lang);
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, "index.html"), page(lang, T));
  console.log(`wrote duel/${lang}/index.html and images/og-duel-${lang}.png`);
}

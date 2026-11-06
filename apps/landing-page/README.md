# MotionCore website

The public site for the MotionCore app: landing page, support, account deletion, privacy policy and
terms of use, in English, Turkish, German and Spanish. It is a static Next.js export hosted on
Netlify's free plan.

## Pages

Every page exists once per language under `/en`, `/tr`, `/de` and `/es`:

| Path | What it is |
|---|---|
| `/{locale}/` | Landing page |
| `/{locale}/support/` | Contact and common fixes |
| `/{locale}/delete-account/` | In-app deletion steps and the web deletion request form (required by Google Play) |
| `/{locale}/privacy/` | Privacy policy |
| `/{locale}/terms/` | Terms of use |

`/`, `/privacy`, `/terms`, `/support` and `/delete-account` without a language redirect to the
visitor's language (see `netlify.toml` at the repo root). Use these short links in the app and in
the Play Console.

## Run it

```bash
pnpm install                                   # from the repo root
pnpm --filter @startup/landing-page dev        # http://localhost:3000/en/
pnpm --filter @startup/landing-page build      # writes apps/landing-page/out
pnpm --filter @startup/landing-page typecheck
```

`out/` is plain HTML, CSS, JS and images. Language redirects, the 404 page and the deletion form
only work on Netlify, because they depend on `netlify.toml` and Netlify Forms.

## Changing texts

All copy lives in `src/i18n/dictionaries/{en,tr,de,es}.ts`. They share the `Dictionary` type from
`src/i18n/types.ts`, so a string missing in one language fails `typecheck` and `build`. Strings can
use three inline marks:

- `**bold**`
- `[label](/delete-account)`: paths starting with `/` stay in the current language
- `{email}`: the contact address from `packages/config`, as a mailto link

When you change the privacy policy or the terms, update all four languages and the `effective` date
in each.

Write texts the way people write in that language: periods, commas, colons and parentheses. Don't
use em dashes (—); they read as machine-written, and Turkish doesn't use them this way.

Brand facts shared across the repo (name, site URL, contact email, Play Store link) live in
`packages/config/site.config.ts`.

## Account deletion requests

The form on `/{locale}/delete-account/` posts to Netlify Forms as `account-deletion`. Netlify finds
the form through `public/__forms.html`; keep its field names in sync with
`src/components/site/deletion-request-form.tsx`. Requests appear under **Forms** in the Netlify
dashboard and are emailed to the address set up there.

## Deploying on Netlify

1. In Netlify, choose **Add new site → Import an existing project**, then pick `MotionCoreDev/web`.
   `netlify.toml` already sets the build command, the publish directory and Node 22.
2. Under **Site configuration → Site details**, rename the site (for example `motioncore`, which
   gives `motioncore.netlify.app`).
3. Under **Forms**, turn on form detection and redeploy. Then, under **Forms → Form notifications**,
   add an email notification for `account-deletion`.

Netlify passes the site's address to the build as `URL`; canonical links and the sitemap use it.

## Assets

The icons, 3D scenes and exercise animations are copied from the mobile app (`MotionCoreDev/mobile`,
`apps/mobile/assets`), so the site matches the app. The Google Play badges are Google's official
localized badges.

Text is set in Figtree and the wordmark in Montserrat Black Italic, both under the SIL Open Font
License. `next/font/google` downloads them at build time and the site serves them itself.

This repository is public, so **never commit font files** unless their license allows public
redistribution. The app's text font, General Sans (Fontshare), allows embedding but not
redistribution, which is why the site doesn't use it. Gotham, used for the wordmark before, is a
commercial font without a license here.

# MotionCore website

The public website of [MotionCore](https://play.google.com/store/apps/details?id=com.motioncore.app),
the camera-based training app that counts every rep. It hosts the landing page, support, the
account deletion request form, the privacy policy and the terms of use, in English, Turkish, German
and Spanish.

**Live:** https://motioncore.netlify.app

## Repository layout

```
apps/landing-page/   the website (Next.js static export), see its README for details
packages/config/     brand facts shared by the apps: name, site URL, contact email, store link
netlify.toml         Netlify build, language redirects, 404 page and security headers
```

## Quick start

```bash
pnpm install
pnpm --filter @startup/landing-page dev    # http://localhost:3000/en/
```

Every push to `main` is deployed to Netlify automatically. Texts live in
`apps/landing-page/src/i18n/dictionaries/`, one file per language.

## Contact

redme.developer@gmail.com

## License

This repository is public so that the site's source can be reviewed. It is **not** open source:
the code, texts, illustrations, 3D renders, icons and the MotionCore name and logo are
© MotionCore, all rights reserved. Third-party parts keep their own licenses: Figtree and
Montserrat (SIL Open Font License), npm dependencies (their respective licenses) and the Google
Play badge (Google's brand guidelines).

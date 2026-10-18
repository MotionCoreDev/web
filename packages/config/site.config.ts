/**
 * Central site configuration: brand facts every app in this repo shares.
 * Texts that differ per language live in the landing page's dictionaries, not here.
 */

/** Netlify sets URL to the site's primary address during builds; local builds fall back to it. */
const SITE_URL = (process.env.URL ?? "https://motioncore.netlify.app").replace(/\/$/, "");

export const BRAND_CONFIG = {
    name: "MotionCore",
    /** Production address of the website, without a trailing slash. */
    domain: SITE_URL,
    /** Inbox for support, privacy and deletion requests. */
    email: "redme.developer@gmail.com",
    /** Android application id, as listed on Google Play. */
    androidPackage: "com.motioncore.app",
    brandColor: "#DC1612",
    backgroundColor: "#0B0F1A",
} as const;

export const STORE_LINKS = {
    googlePlay: `https://play.google.com/store/apps/details?id=${BRAND_CONFIG.androidPackage}`,
} as const;

export type BrandConfig = typeof BRAND_CONFIG;
export type StoreLinks = typeof STORE_LINKS;

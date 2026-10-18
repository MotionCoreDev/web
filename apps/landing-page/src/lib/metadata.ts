import type { Metadata } from "next";
import { BRAND_CONFIG } from "@startup/config";
import { localeLabels, localePath, locales, type Locale, type SitePage } from "@/i18n/config";
import type { PageMeta } from "@/i18n/types";

/** Title, description, canonical URL and hreflang alternates for one page in one language. */
export function pageMetadata(locale: Locale, page: SitePage, meta: PageMeta, options: { absoluteTitle?: boolean } = {}): Metadata {
    const languages = Object.fromEntries(locales.map((code) => [code, localePath(code, page)]));
    const url = localePath(locale, page);

    return {
        title: options.absoluteTitle ? { absolute: meta.title } : meta.title,
        description: meta.description,
        alternates: {
            canonical: url,
            languages: { ...languages, "x-default": localePath("en", page) },
        },
        openGraph: {
            type: "website",
            siteName: BRAND_CONFIG.name,
            title: meta.title,
            description: meta.description,
            url,
            locale: localeLabels[locale].og,
            images: [{ url: "/images/og-image.png", width: 1200, height: 630, alt: BRAND_CONFIG.name }],
        },
        twitter: {
            card: "summary_large_image",
            title: meta.title,
            description: meta.description,
            images: ["/images/og-image.png"],
        },
    };
}

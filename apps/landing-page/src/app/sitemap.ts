import type { MetadataRoute } from "next";
import { BRAND_CONFIG } from "@startup/config";
import { localePath, locales, sitePages } from "@/i18n/config";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
    return sitePages.flatMap((page) =>
        locales.map((locale) => ({
            url: `${BRAND_CONFIG.domain}${localePath(locale, page)}`,
            changeFrequency: "monthly" as const,
            priority: page === "" ? 1 : 0.6,
            alternates: {
                languages: Object.fromEntries(locales.map((code) => [code, `${BRAND_CONFIG.domain}${localePath(code, page)}`])),
            },
        })),
    );
}

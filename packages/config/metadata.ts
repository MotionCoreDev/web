/**
 * Next.js Metadata Generator
 * Merkezi konfigürasyondan Next.js uyumlu metadata objesi oluşturur.
 */

import type { Metadata } from "next";
import {
    BRAND_CONFIG,
    FAVICON_CONFIG,
    OG_IMAGE_CONFIG,
    APP_METADATA,
    type AppType,
} from "./site.config";

/**
 * Belirtilen uygulama için Next.js Metadata objesi oluşturur
 * @param appType - Uygulama tipi: 'landing', 'product', veya 'admin'
 * @returns Next.js Metadata objesi
 */
export function createMetadata(appType: AppType): Metadata {
    const appConfig = APP_METADATA[appType];

    return {
        title: appConfig.title,
        description: appConfig.description,
        appleWebApp: {
            title: BRAND_CONFIG.name,
        },

        openGraph: {
            type: "website",
            siteName: BRAND_CONFIG.name,
            title: typeof appConfig.title === "object" ? appConfig.title.default : appConfig.title,
            description: appConfig.description,
            images: [OG_IMAGE_CONFIG],
        },
        twitter: {
            card: "summary_large_image",
            creator: BRAND_CONFIG.twitterHandle,
            title: typeof appConfig.title === "object" ? appConfig.title.default : appConfig.title,
            description: appConfig.description,
            images: [OG_IMAGE_CONFIG.url],
        },
        metadataBase: new URL(BRAND_CONFIG.domain),
        robots: {
            index: true,
            follow: true,
        },
    };
}

/**
 * Sayfa bazlı metadata oluşturmak için yardımcı fonksiyon
 * @param pageTitle - Sayfa başlığı
 * @param pageDescription - Sayfa açıklaması (opsiyonel)
 * @returns Partial Metadata objesi
 */
export function createPageMetadata(
    pageTitle: string,
    pageDescription?: string
): Metadata {
    return {
        title: pageTitle,
        ...(pageDescription && {
            description: pageDescription,
            openGraph: { description: pageDescription },
            twitter: { description: pageDescription },
        }),
    };
}

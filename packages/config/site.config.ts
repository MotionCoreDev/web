/**
 * Merkezi Site Konfigürasyonu
 * Tüm uygulamalar bu dosyadan ortak ayarları alır.
 * Favicon, logo, site adı gibi tüm temel bilgiler burada yönetilir.
 */

export const BRAND_CONFIG = {
    /** Site/Marka adı */
    name: "MotionCore",

    /** Kısa açıklama */
    tagline: "AI Powered CV Builder",

    /** Site açıklaması */
    description: "MotionCore is an AI powered CV builder that helps you create professional resumes in minutes. No design skills required. Get started for free!",

    /** Copyright metni */
    copyright: `© ${new Date().getFullYear()} MotionCore. All rights reserved.`,

    /** Domain adresi (production) */
    domain: "https://motioncore.com",

    /** Twitter hesabı */
    twitterHandle: "@motioncoreapp",
} as const;

export const FAVICON_CONFIG = {
    /** Ana favicon ICO dosyası */
    ico: "/favicon.ico",

    /** PNG favicon dosyaları (farklı boyutlarda) */
    png: {
        small: "/icons/favicon-16x16.png",
        medium: "/icons/favicon-32x32.png",
        large: "/icons/favicon-192x192.png",
    },

    /** SVG favicon (dark ve light mode) */
    svg: {
        dark: "/icons/favicon-dark.svg",
        light: "/icons/favicon-light.svg",
    },

    /** Apple Touch Icon */
    appleTouchIcon: "/icons/apple-touch-icon.png",
} as const;

export const LOGO_CONFIG = {
    /** Logo (dark mode için - açık renkli logo) */
    dark: "/images/logo-dark.svg",

    /** Logo (light mode için - koyu renkli logo) */
    light: "/images/logo-light.svg",

    /** Logo ikonu (kare, küçük) */
    icon: {
        dark: "/images/icon-dark.svg",
        light: "/images/icon-light.svg",
    },
} as const;

/**
 * Uygulama bazlı başlık ve açıklamalar
 * Her uygulama kendi özel metadata'sını burada tanımlar
 */
export const APP_METADATA = {
    landing: {
        title: {
            default: `${BRAND_CONFIG.name} - ${BRAND_CONFIG.tagline}`,
            template: `%s | ${BRAND_CONFIG.name}`,
        },
        description: BRAND_CONFIG.description,
    },
    product: {
        title: {
            default: `Dashboard | ${BRAND_CONFIG.name}`,
            template: `%s | ${BRAND_CONFIG.name}`,
        },
        description: `Your personal dashboard for ${BRAND_CONFIG.name}. Manage your CVs, track applications, and more.`,
    },
    admin: {
        title: {
            default: `Admin Panel | ${BRAND_CONFIG.name}`,
            template: `%s | ${BRAND_CONFIG.name} Admin`,
        },
        description: `Admin panel for ${BRAND_CONFIG.name}. Manage users, analytics, and system settings.`,
    },
} as const;

/**
 * OpenGraph ve Twitter Card için ortak görsel
 */
export const OG_IMAGE_CONFIG = {
    url: "/images/og-image.png",
    width: 1200,
    height: 630,
    alt: `${BRAND_CONFIG.name} - ${BRAND_CONFIG.tagline}`,
} as const;

export type BrandConfig = typeof BRAND_CONFIG;
export type FaviconConfig = typeof FAVICON_CONFIG;
export type LogoConfig = typeof LOGO_CONFIG;
export type AppMetadataConfig = typeof APP_METADATA;
export type AppType = keyof typeof APP_METADATA;

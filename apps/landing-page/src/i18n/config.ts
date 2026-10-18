// The languages the app ships in. Every page exists once per locale: /en/..., /tr/..., /de/..., /es/...
export const locales = ["en", "tr", "de", "es"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export const localeLabels: Record<Locale, { short: string; name: string; og: string }> = {
    en: { short: "EN", name: "English", og: "en_US" },
    tr: { short: "TR", name: "Türkçe", og: "tr_TR" },
    de: { short: "DE", name: "Deutsch", og: "de_DE" },
    es: { short: "ES", name: "Español", og: "es_ES" },
};

export function isLocale(value: string): value is Locale {
    return (locales as readonly string[]).includes(value);
}

/** Pages that exist in every locale, as paths below /{locale}. "" is the home page. */
export const sitePages = ["", "support", "delete-account", "privacy", "terms"] as const;

export type SitePage = (typeof sitePages)[number];

/** "/tr/privacy/" for ("tr", "privacy"); "/tr/" for the home page. */
export function localePath(locale: Locale, page: string = ""): string {
    const clean = page.replace(/^\/+|\/+$/g, "");
    return clean ? `/${locale}/${clean}/` : `/${locale}/`;
}

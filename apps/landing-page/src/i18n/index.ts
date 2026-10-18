import { isLocale, type Locale } from "./config";
import de from "./dictionaries/de";
import en from "./dictionaries/en";
import es from "./dictionaries/es";
import tr from "./dictionaries/tr";
import type { Dictionary } from "./types";

export * from "./config";
export type { Dictionary, LegalBlock, LegalDoc, LegalSection } from "./types";

const dictionaries: Record<Locale, Dictionary> = { en, tr, de, es };

// Imported by server components only: a page sends the browser just the strings it renders.
export function getDictionary(locale: Locale): Dictionary {
    return dictionaries[locale];
}

/** Resolves a route's [locale] param. Unknown values cannot reach here: dynamicParams is false. */
export function resolveLocale(value: string): Locale {
    if (!isLocale(value)) {
        throw new Error(`Unknown locale "${value}"`);
    }
    return value;
}

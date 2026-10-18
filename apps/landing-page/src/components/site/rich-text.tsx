import Link from "next/link";
import * as React from "react";
import { BRAND_CONFIG } from "@startup/config";
import { localePath, type Locale } from "@/i18n/config";

// Renders the inline marks the language files use: **bold**, [label](href) and {email}.
const TOKEN = /\*\*(.+?)\*\*|\[(.+?)\]\((.+?)\)|\{email\}/g;

interface Props {
    text: string;
    locale: Locale;
    linkClassName?: string;
}

export function RichText({ text, locale, linkClassName = "font-medium text-foreground underline decoration-primary/60 underline-offset-4 transition-colors hover:text-primary" }: Props) {
    const parts: React.ReactNode[] = [];
    let last = 0;
    let key = 0;

    for (const match of text.matchAll(TOKEN)) {
        const index = match.index ?? 0;
        if (index > last) parts.push(text.slice(last, index));

        const [whole, bold, label, href] = match;
        if (bold !== undefined) {
            parts.push(
                <strong key={key++} className="font-semibold text-foreground">
                    {bold}
                </strong>,
            );
        } else if (label !== undefined && href !== undefined) {
            parts.push(
                href.startsWith("/") ? (
                    <Link key={key++} href={localePath(locale, href)} className={linkClassName}>
                        {label}
                    </Link>
                ) : (
                    <a key={key++} href={href} className={linkClassName} target="_blank" rel="noopener noreferrer">
                        {label}
                    </a>
                ),
            );
        } else if (whole === "{email}") {
            parts.push(
                <a key={key++} href={`mailto:${BRAND_CONFIG.email}`} className={linkClassName}>
                    {BRAND_CONFIG.email}
                </a>,
            );
        }
        last = index + whole.length;
    }

    if (last < text.length) parts.push(text.slice(last));
    return <>{parts}</>;
}

export default RichText;

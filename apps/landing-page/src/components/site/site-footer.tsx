import Link from "next/link";
import { BRAND_CONFIG } from "@startup/config";
import { localePath, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/types";
import { GooglePlayBadge, Wordmark } from "./brand";

interface Props {
    locale: Locale;
    footer: Dictionary["footer"];
    common: Dictionary["common"];
}

export function SiteFooter({ locale, footer, common }: Props) {
    const home = localePath(locale);
    const columns = [
        {
            title: footer.columns.app,
            links: [
                { href: `${home}#features`, label: footer.links.features },
                { href: `${home}#how-it-works`, label: footer.links.howItWorks },
                { href: `${home}#faq`, label: footer.links.faq },
            ],
        },
        {
            title: footer.columns.help,
            links: [
                { href: localePath(locale, "support"), label: footer.links.support },
                { href: localePath(locale, "delete-account"), label: footer.links.deleteAccount },
            ],
        },
        {
            title: footer.columns.legal,
            links: [
                { href: localePath(locale, "privacy"), label: footer.links.privacy },
                { href: localePath(locale, "terms"), label: footer.links.terms },
            ],
        },
    ];

    return (
        <footer className="relative w-full overflow-hidden border-t border-border bg-card/60 backdrop-blur-md">
            <div className="relative mx-auto max-w-6xl px-4 lg:px-6">
                <div className="flex flex-col gap-6 py-10 md:flex-row md:items-center md:justify-between">
                    <div className="flex items-center gap-3">
                        <img src="/images/app-icon.png" alt="" width={48} height={48} className="size-12 shrink-0 rounded-[12px]" />
                        <div>
                            <Wordmark locale={locale} className="[&>span]:text-[1.1rem]" />
                            <p className="mt-1 max-w-md text-sm text-muted-foreground">{footer.tagline}</p>
                        </div>
                    </div>
                    <GooglePlayBadge locale={locale} alt={common.googlePlayAlt} className="-m-1.5 self-start md:self-auto" />
                </div>

                <div className="h-px bg-border" />

                <div className="grid grid-cols-2 gap-8 py-10 md:grid-cols-4">
                    {columns.map((column) => (
                        <div key={column.title}>
                            <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-foreground">{column.title}</h3>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                                {column.links.map((link) => (
                                    <li key={link.href}>
                                        <Link href={link.href} className="transition-colors hover:text-foreground">
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                    <div>
                        <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-foreground">{common.emailUs}</h3>
                        <a href={`mailto:${BRAND_CONFIG.email}`} className="break-all text-sm text-muted-foreground transition-colors hover:text-foreground">
                            {BRAND_CONFIG.email}
                        </a>
                    </div>
                </div>

                <div className="h-px bg-border" />

                <p className="py-5 text-xs text-muted-foreground">{footer.rights}</p>
            </div>
        </footer>
    );
}

export default SiteFooter;

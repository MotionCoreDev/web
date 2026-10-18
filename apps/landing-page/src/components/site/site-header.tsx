"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { Check, ChevronDown, Globe, Menu, X } from "lucide-react";
import { STORE_LINKS } from "@startup/config";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { localeLabels, localePath, locales, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/types";
import { Wordmark } from "./brand";

interface Props {
    locale: Locale;
    nav: Dictionary["nav"];
}

/** The same page in another language: /tr/privacy/ -> /de/privacy/. */
function switchLocale(pathname: string, target: Locale): string {
    const rest = pathname.split("/").filter(Boolean).slice(1).join("/");
    return localePath(target, rest);
}

export function SiteHeader({ locale, nav }: Props) {
    const pathname = usePathname() ?? localePath(locale);
    const [menuOpen, setMenuOpen] = React.useState(false);
    const [scrolled, setScrolled] = React.useState(false);

    React.useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 50);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    React.useEffect(() => setMenuOpen(false), [pathname]);

    const home = localePath(locale);
    const items = [
        { label: nav.features, href: `${home}#features` },
        { label: nav.howItWorks, href: `${home}#how-it-works` },
        { label: nav.faq, href: `${home}#faq` },
        { label: nav.support, href: localePath(locale, "support") },
    ];

    return (
        <header>
            <a
                href="#main"
                className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
            >
                {nav.skipToContent}
            </a>
            <nav data-state={menuOpen ? "active" : undefined} className="group fixed inset-x-0 top-0 z-30 w-full px-2">
                <div
                    className={cn(
                        "mx-auto mt-2 max-w-[1600px] px-6 transition-all duration-300 lg:px-12",
                        (scrolled || menuOpen) && "max-w-7xl rounded-2xl bg-background/70 backdrop-blur-lg lg:px-5",
                    )}
                >
                    <div className="relative flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">
                        <div className="flex w-full items-center justify-between lg:w-auto">
                            <Wordmark locale={locale} />

                            <button
                                type="button"
                                onClick={() => setMenuOpen((open) => !open)}
                                aria-label={menuOpen ? nav.closeMenu : nav.openMenu}
                                aria-expanded={menuOpen}
                                className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden"
                            >
                                <Menu className="m-auto size-6 duration-200 group-data-[state=active]:rotate-180 group-data-[state=active]:scale-0 group-data-[state=active]:opacity-0" />
                                <X className="absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200 group-data-[state=active]:rotate-0 group-data-[state=active]:scale-100 group-data-[state=active]:opacity-100" />
                            </button>
                        </div>

                        <div className="absolute inset-0 m-auto hidden size-fit lg:block">
                            <ul className="flex gap-8 text-sm">
                                {items.map((item) => (
                                    <li key={item.href}>
                                        <Link href={item.href} className="block text-muted-foreground duration-150 hover:text-primary">
                                            {item.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="mb-6 hidden w-full flex-wrap items-center justify-end gap-6 rounded-3xl border border-border/60 bg-background p-6 shadow-2xl group-data-[state=active]:flex lg:m-0 lg:flex lg:w-fit lg:flex-nowrap lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none">
                            <ul className="w-full space-y-5 text-base lg:hidden">
                                {items.map((item) => (
                                    <li key={item.href}>
                                        <Link
                                            href={item.href}
                                            onClick={() => setMenuOpen(false)}
                                            className="block text-muted-foreground duration-150 hover:text-primary"
                                        >
                                            {item.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>

                            <div className="flex w-full flex-col gap-3 sm:flex-row lg:w-fit">
                                <LanguageMenu locale={locale} pathname={pathname} label={nav.language} />
                                <Button asChild size="sm" className="h-9 px-4">
                                    <a href={STORE_LINKS.googlePlay} target="_blank" rel="noopener noreferrer">
                                        {nav.download}
                                    </a>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}

function LanguageMenu({ locale, pathname, label }: { locale: Locale; pathname: string; label: string }) {
    const [open, setOpen] = React.useState(false);

    return (
        <DropdownMenu.Root onOpenChange={setOpen}>
            <DropdownMenu.Trigger asChild>
                <button
                    type="button"
                    aria-label={label}
                    className="inline-flex h-9 items-center gap-1.5 rounded-[15px] border border-border/60 bg-background/80 px-3 text-sm text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                    <Globe className="size-4 shrink-0" />
                    <span className="min-w-[1.5rem] text-left">{localeLabels[locale].short}</span>
                    <ChevronDown className={cn("size-3.5 shrink-0 opacity-60 transition-transform duration-200", open && "rotate-180")} />
                </button>
            </DropdownMenu.Trigger>
            <DropdownMenu.Portal>
                <DropdownMenu.Content
                    align="end"
                    sideOffset={6}
                    className="z-50 min-w-[10rem] overflow-hidden rounded-[15px] border border-border/60 bg-popover/95 p-1 shadow-lg backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95"
                >
                    {locales.map((code) => (
                        <DropdownMenu.Item key={code} asChild>
                            <Link
                                href={switchLocale(pathname, code)}
                                hrefLang={code}
                                lang={code}
                                className={cn(
                                    "flex cursor-pointer items-center justify-between gap-3 rounded-[10px] px-3 py-2 text-sm outline-none transition-colors",
                                    code === locale
                                        ? "bg-primary/10 font-semibold text-primary"
                                        : "text-muted-foreground hover:bg-muted hover:text-foreground focus:bg-muted focus:text-foreground",
                                )}
                            >
                                <span>{localeLabels[code].name}</span>
                                {code === locale ? <Check className="size-3.5" /> : <span className="text-xs opacity-60">{localeLabels[code].short}</span>}
                            </Link>
                        </DropdownMenu.Item>
                    ))}
                </DropdownMenu.Content>
            </DropdownMenu.Portal>
        </DropdownMenu.Root>
    );
}

export default SiteHeader;

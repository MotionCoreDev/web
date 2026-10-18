import type { Metadata, Viewport } from "next";
import { BRAND_CONFIG } from "@startup/config";
import "@/styles/globals.css";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";
import { getDictionary, locales, resolveLocale } from "@/i18n";
import { brandFont, generalSans } from "@/lib/fonts";
import { cn } from "@/lib/utils";

// One static copy of every page per language; anything else is a 404.
export const dynamicParams = false;

export function generateStaticParams() {
    return locales.map((locale) => ({ locale }));
}

type LayoutProps = {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: LayoutProps): Promise<Metadata> {
    const locale = resolveLocale((await params).locale);
    const { meta } = getDictionary(locale);

    return {
        metadataBase: new URL(BRAND_CONFIG.domain),
        title: { default: meta.home.title, template: `%s · ${meta.siteName}` },
        description: meta.home.description,
        applicationName: meta.siteName,
        icons: {
            icon: [{ url: "/favicon.png", type: "image/png" }],
            apple: "/apple-touch-icon.png",
        },
        manifest: "/manifest.webmanifest",
        appleWebApp: { capable: true, title: meta.siteName, statusBarStyle: "black-translucent" },
        robots: { index: true, follow: true },
    };
}

export const viewport: Viewport = {
    themeColor: BRAND_CONFIG.backgroundColor,
    colorScheme: "dark",
};

export default async function LocaleLayout({ children, params }: LayoutProps) {
    const locale = resolveLocale((await params).locale);
    const dict = getDictionary(locale);

    return (
        <html lang={locale}>
            <body
                className={cn(
                    "min-h-screen max-w-full overflow-x-hidden bg-background font-sans text-foreground antialiased",
                    generalSans.variable,
                    brandFont.variable,
                )}
            >
                <SiteHeader locale={locale} nav={dict.nav} />
                <div className="flex w-full flex-col items-center">
                    {children}
                    <SiteFooter locale={locale} footer={dict.footer} common={dict.common} />
                </div>
            </body>
        </html>
    );
}

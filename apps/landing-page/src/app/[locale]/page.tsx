import type { Metadata } from "next";
import { HomePage } from "@/components/home/home-page";
import { getDictionary, resolveLocale } from "@/i18n";
import { pageMetadata } from "@/lib/metadata";

type PageProps = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const locale = resolveLocale((await params).locale);
    return pageMetadata(locale, "", getDictionary(locale).meta.home, { absoluteTitle: true });
}

export default async function Page({ params }: PageProps) {
    const locale = resolveLocale((await params).locale);
    const { home, common } = getDictionary(locale);
    return <HomePage locale={locale} home={home} common={common} />;
}

import type { Metadata } from "next";
import { LegalDocument } from "@/components/site/legal-document";
import { getDictionary, resolveLocale } from "@/i18n";
import { pageMetadata } from "@/lib/metadata";

type PageProps = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const locale = resolveLocale((await params).locale);
    return pageMetadata(locale, "privacy", getDictionary(locale).meta.privacy);
}

export default async function PrivacyPage({ params }: PageProps) {
    const locale = resolveLocale((await params).locale);
    const { legal, common } = getDictionary(locale);
    return <LegalDocument locale={locale} doc={legal.privacy} common={common} />;
}

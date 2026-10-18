import type { Metadata } from "next";
import { Mail, Smartphone, Trash2 } from "lucide-react";
import Wrapper from "@/components/global/wrapper";
import { DeletionRequestForm } from "@/components/site/deletion-request-form";
import { PageHero } from "@/components/site/page-hero";
import { RichText } from "@/components/site/rich-text";
import { getDictionary, resolveLocale } from "@/i18n";
import { pageMetadata } from "@/lib/metadata";

type PageProps = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const locale = resolveLocale((await params).locale);
    return pageMetadata(locale, "delete-account", getDictionary(locale).meta.deleteAccount);
}

export default async function DeleteAccountPage({ params }: PageProps) {
    const locale = resolveLocale((await params).locale);
    const { deletion } = getDictionary(locale);

    return (
        <main id="main" className="w-full">
            <PageHero eyebrow={deletion.app} eyebrowAsWritten title={deletion.title}>
                <p>{deletion.intro}</p>
            </PageHero>

            <Wrapper className="px-4 pb-24 pt-16 md:px-8 md:pb-32">
                <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
                    <div className="space-y-8">
                        <Panel icon={<Smartphone className="size-5" />} title={deletion.inApp.title} badge={deletion.inApp.badge}>
                            <ol className="space-y-3">
                                {deletion.inApp.steps.map((step, idx) => (
                                    <li key={step} className="flex gap-3">
                                        <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-primary/15 text-xs font-semibold text-primary">
                                            {idx + 1}
                                        </span>
                                        <span>
                                            <RichText text={step} locale={locale} />
                                        </span>
                                    </li>
                                ))}
                            </ol>
                        </Panel>

                        <Panel icon={<Trash2 className="size-5" />} title={deletion.deleted.title}>
                            <ul className="space-y-2">
                                {deletion.deleted.items.map((item) => (
                                    <li key={item} className="flex gap-3">
                                        <span aria-hidden className="mt-[0.55rem] size-1.5 shrink-0 rounded-full bg-primary" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <p className="mt-4 border-t border-border/60 pt-4 text-xs">{deletion.deleted.note}</p>
                        </Panel>

                        <Panel icon={<Mail className="size-5" />} title={deletion.email.title}>
                            <p>
                                <RichText text={deletion.email.body} locale={locale} />
                            </p>
                        </Panel>
                    </div>

                    <section
                        aria-labelledby="deletion-form-title"
                        className="h-fit rounded-3xl border border-border/60 bg-gradient-to-b from-background/90 to-background/50 p-6 shadow-[0_30px_80px_-40px_rgba(220,22,18,0.45)] backdrop-blur-md md:p-10"
                    >
                        <h2 id="deletion-form-title" className="text-2xl font-semibold tracking-tight">
                            {deletion.form.title}
                        </h2>
                        <p className="mb-8 mt-3 text-sm leading-relaxed text-muted-foreground">
                            <RichText text={deletion.form.intro} locale={locale} />
                        </p>
                        <DeletionRequestForm locale={locale} form={deletion.form} />
                    </section>
                </div>
            </Wrapper>
        </main>
    );
}

function Panel({ icon, title, badge, children }: { icon: React.ReactNode; title: string; badge?: string; children: React.ReactNode }) {
    return (
        <section className="rounded-3xl border border-border/60 bg-background/60 p-6 text-sm leading-relaxed text-muted-foreground backdrop-blur-md md:p-8">
            <div className="mb-5 flex flex-wrap items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">{icon}</div>
                <h2 className="text-lg font-semibold text-foreground">{title}</h2>
                {badge && <span className="rounded-full border border-success/40 bg-success/10 px-2.5 py-0.5 text-xs font-medium text-success">{badge}</span>}
            </div>
            {children}
        </section>
    );
}

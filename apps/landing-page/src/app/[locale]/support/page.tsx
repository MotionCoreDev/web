import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Mail, MessageSquareWarning, UserX } from "lucide-react";
import { BRAND_CONFIG } from "@startup/config";
import Wrapper from "@/components/global/wrapper";
import { PageHero } from "@/components/site/page-hero";
import { RichText } from "@/components/site/rich-text";
import { Button } from "@/components/ui/button";
import { getDictionary, localePath, resolveLocale } from "@/i18n";
import { pageMetadata } from "@/lib/metadata";

type PageProps = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const locale = resolveLocale((await params).locale);
    return pageMetadata(locale, "support", getDictionary(locale).meta.support);
}

export default async function SupportPage({ params }: PageProps) {
    const locale = resolveLocale((await params).locale);
    const { support, nav, common } = getDictionary(locale);

    return (
        <main id="main" className="w-full">
            <PageHero eyebrow={nav.support} title={support.title}>
                <p>{support.intro}</p>
            </PageHero>

            <Wrapper className="px-4 pb-24 pt-16 md:px-8 md:pb-32">
                <div className="mx-auto max-w-5xl space-y-16">
                    <div className="grid gap-5 md:grid-cols-2">
                        <Card icon={<Mail className="size-5" />} title={support.contact.title}>
                            <p>
                                <RichText text={support.contact.body} locale={locale} />
                            </p>
                            <p className="text-xs uppercase tracking-wider">{support.contact.note}</p>
                            <Button asChild className="mt-2 w-fit">
                                <a href={`mailto:${BRAND_CONFIG.email}`}>{common.emailUs}</a>
                            </Button>
                        </Card>
                        <Card icon={<MessageSquareWarning className="size-5" />} title={support.inApp.title}>
                            <p>
                                <RichText text={support.inApp.body} locale={locale} />
                            </p>
                        </Card>
                    </div>

                    <section>
                        <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">{support.topics.title}</h2>
                        <div className="mt-6 grid gap-px overflow-hidden rounded-3xl border border-border/60 bg-border/60 md:grid-cols-2">
                            {support.topics.items.map((topic) => (
                                <div key={topic.title} className="bg-background/80 p-6 md:p-8">
                                    <h3 className="text-lg font-semibold">{topic.title}</h3>
                                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                                        <RichText text={topic.body} locale={locale} />
                                    </p>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section className="flex flex-col items-start gap-6 rounded-3xl border border-border/60 bg-gradient-to-b from-background/80 to-background/40 p-8 md:flex-row md:items-center md:justify-between md:p-10">
                        <div className="flex gap-4">
                            <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                                <UserX className="size-5" />
                            </div>
                            <div>
                                <h2 className="text-xl font-semibold">{support.deletion.title}</h2>
                                <p className="mt-1 max-w-xl text-sm text-muted-foreground">{support.deletion.body}</p>
                            </div>
                        </div>
                        <Link
                            href={localePath(locale, "delete-account")}
                            className="group inline-flex shrink-0 items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-primary"
                        >
                            {support.deletion.cta}
                            <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
                        </Link>
                    </section>
                </div>
            </Wrapper>
        </main>
    );
}

function Card({ icon, title, children }: { icon: React.ReactNode; title: string; children: React.ReactNode }) {
    return (
        <section className="flex flex-col gap-3 rounded-3xl border border-border/60 bg-gradient-to-b from-background/80 to-background/40 p-8 text-sm leading-relaxed text-muted-foreground backdrop-blur-md">
            <div className="mb-2 inline-flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">{icon}</div>
            <h2 className="text-xl font-semibold text-foreground">{title}</h2>
            {children}
        </section>
    );
}

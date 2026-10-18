import { Info } from "lucide-react";
import Wrapper from "@/components/global/wrapper";
import type { Locale } from "@/i18n/config";
import type { Dictionary, LegalBlock, LegalDoc } from "@/i18n/types";
import { PageHero } from "./page-hero";
import { RichText } from "./rich-text";

interface Props {
    locale: Locale;
    doc: LegalDoc;
    common: Dictionary["common"];
}

/** A privacy policy or terms page: title, effective date, a contents list and the numbered sections. */
export function LegalDocument({ locale, doc, common }: Props) {
    return (
        <main id="main" className="w-full">
            <PageHero eyebrow={`${common.effectiveLabel}: ${doc.effective}`} title={doc.title}>
                <p>{doc.intro}</p>
            </PageHero>

            <Wrapper className="px-4 pb-24 pt-16 md:px-8 md:pb-32">
                <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[15rem_1fr]">
                    <nav aria-label={common.contents} className="lg:sticky lg:top-28 lg:self-start">
                        <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-foreground">{common.contents}</p>
                        <ol className="space-y-2 border-l border-border/60 text-sm text-muted-foreground">
                            {doc.sections.map((section) => (
                                <li key={section.id}>
                                    <a href={`#${section.id}`} className="-ml-px block border-l border-transparent pl-4 transition-colors hover:border-primary hover:text-foreground">
                                        {section.title}
                                    </a>
                                </li>
                            ))}
                        </ol>
                    </nav>

                    <article className="min-w-0 space-y-12">
                        {doc.sections.map((section) => (
                            <section key={section.id} id={section.id} className="scroll-mt-28">
                                <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">{section.title}</h2>
                                <div className="mt-5 space-y-4 text-[15px] leading-relaxed text-muted-foreground">
                                    {section.blocks.map((block, idx) => (
                                        <Block key={idx} block={block} locale={locale} />
                                    ))}
                                </div>
                            </section>
                        ))}
                        <p className="border-t border-border/60 pt-8 text-sm text-muted-foreground">
                            <a href="#main" className="transition-colors hover:text-foreground">
                                ↑ {common.backToTop}
                            </a>
                        </p>
                    </article>
                </div>
            </Wrapper>
        </main>
    );
}

function Block({ block, locale }: { block: LegalBlock; locale: Locale }) {
    switch (block.type) {
        case "p":
            return (
                <p>
                    <RichText text={block.text} locale={locale} />
                </p>
            );
        case "list":
            return (
                <ul className="space-y-2 pl-1">
                    {block.items.map((item) => (
                        <li key={item} className="flex gap-3">
                            <span aria-hidden className="mt-[0.6rem] size-1.5 shrink-0 rounded-full bg-primary" />
                            <span>
                                <RichText text={item} locale={locale} />
                            </span>
                        </li>
                    ))}
                </ul>
            );
        case "table":
            return (
                <div className="overflow-hidden rounded-2xl border border-border/60">
                    <table className="w-full text-left text-sm">
                        <thead className="bg-muted/40 text-xs uppercase tracking-wider text-foreground">
                            <tr>
                                <th scope="col" className="w-2/5 px-4 py-3 font-semibold">{block.head[0]}</th>
                                <th scope="col" className="px-4 py-3 font-semibold">{block.head[1]}</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-border/60">
                            {block.rows.map(([label, value]) => (
                                <tr key={label} className="align-top">
                                    <th scope="row" className="px-4 py-3 font-medium text-foreground">{label}</th>
                                    <td className="px-4 py-3">{value}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            );
        case "callout":
            return (
                <div className="flex gap-3 rounded-2xl border border-primary/30 bg-primary/[0.07] p-5">
                    <Info className="mt-0.5 size-5 shrink-0 text-primary" />
                    <p>
                        <RichText text={block.text} locale={locale} />
                    </p>
                </div>
            );
    }
}

export default LegalDocument;

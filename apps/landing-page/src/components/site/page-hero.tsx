import type * as React from "react";
import Wrapper from "@/components/global/wrapper";
import { cn } from "@/lib/utils";

interface Props {
    eyebrow?: string;
    /** Keep the eyebrow's own casing, e.g. when it holds a brand name or package id. */
    eyebrowAsWritten?: boolean;
    title: string;
    children?: React.ReactNode;
}

/** Title block shared by the support, deletion and legal pages. */
export function PageHero({ eyebrow, eyebrowAsWritten = false, title, children }: Props) {
    return (
        <section className="relative w-full pt-32 md:pt-40">
            <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
                <div className="absolute left-1/2 top-[-14rem] h-[30rem] w-[30rem] -translate-x-1/2 rounded-full bg-primary/10 blur-[9rem]" />
                <div className="dotPattern absolute inset-0 opacity-30 [mask-image:radial-gradient(ellipse_at_top,black_20%,transparent_70%)]" />
            </div>
            <Wrapper className="px-4 md:px-8">
                <div className="mx-auto max-w-3xl text-center">
                    {eyebrow && (
                        <span
                            className={cn(
                                "inline-flex items-center rounded-full border border-border/60 bg-background/40 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur-md",
                                !eyebrowAsWritten && "uppercase tracking-widest",
                            )}
                        >
                            {eyebrow}
                        </span>
                    )}
                    <h1 className="mt-5 text-balance text-4xl font-semibold leading-tight tracking-tight md:text-6xl">{title}</h1>
                    {children && <div className="mx-auto mt-5 max-w-2xl text-balance text-base text-muted-foreground md:text-lg">{children}</div>}
                </div>
            </Wrapper>
        </section>
    );
}

export default PageHero;

"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Download, Mail, Newspaper, Palette, Quote } from "lucide-react";

import { Container, Wrapper } from "@/components";
import { HeroHeader } from "@/components/ui/hero-section";
import { WaitlistForm } from "@/components/ui/waitlist-form";

const resources = [
    {
        icon: Palette,
        title: "Brand assets",
        body: "Logos, wordmarks, color palette and clearspace rules. SVG and PNG.",
        cta: "Download .zip",
        href: "#",
    },
    {
        icon: Newspaper,
        title: "Press kit",
        body: "One-pager, screenshots, founder bios, milestone timeline.",
        cta: "Get the kit",
        href: "#",
    },
    {
        icon: Quote,
        title: "Boilerplate copy",
        body: "Short, medium and long descriptions of MotionCore for your story.",
        cta: "Copy text",
        href: "#",
    },
    {
        icon: Mail,
        title: "Press contact",
        body: "Reach our comms team directly — we usually reply within 24h.",
        cta: "press@motioncore.app",
        href: "mailto:press@motioncore.app",
    },
];

const ResourcesPage = () => {
    return (
        <>
            <HeroHeader />

            <main className="relative w-full overflow-hidden">
                <BackgroundGlow />

                {/* Hero */}
                <section className="relative pt-32 md:pt-40">
                    <Wrapper className="px-4 md:px-8">
                        <motion.div
                            initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
                            animate={{ opacity: 1, y: 0, filter: "blur(0)" }}
                            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                            className="mx-auto max-w-3xl text-center"
                        >
                            <span className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/40 px-3 py-1 text-xs font-medium uppercase tracking-widest text-muted-foreground backdrop-blur-md">
                                Press &amp; resources
                            </span>
                            <h1 className="mt-6 text-balance text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl">
                                Tell the{" "}
                                <span className="bg-gradient-to-r from-primary to-[#ff5a55] bg-clip-text text-transparent">
                                    MotionCore story.
                                </span>
                            </h1>
                            <p className="mx-auto mt-6 max-w-2xl text-balance text-lg text-muted-foreground">
                                Everything you need to write about, design with, or talk about MotionCore — in one place.
                            </p>
                        </motion.div>
                    </Wrapper>
                </section>

                {/* Resource grid */}
                <section className="py-20 md:py-32">
                    <Wrapper className="px-4 md:px-8">
                        <div className="grid gap-px overflow-hidden rounded-3xl border border-border/60 bg-border/60 md:grid-cols-2">
                            {resources.map((res, idx) => (
                                <motion.div
                                    key={res.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{ duration: 0.5, delay: idx * 0.05 }}
                                    className="group flex flex-col bg-background/80 p-8 transition-colors hover:bg-background"
                                >
                                    <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform duration-300 group-hover:-translate-y-1">
                                        <res.icon className="h-5 w-5" />
                                    </div>
                                    <h3 className="mt-5 text-xl font-semibold">{res.title}</h3>
                                    <p className="mt-2 text-sm text-muted-foreground">{res.body}</p>
                                    <Link
                                        href={res.href}
                                        className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-primary/80"
                                    >
                                        <Download className="h-4 w-4" />
                                        {res.cta}
                                        <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    </Wrapper>
                </section>

                {/* Brand swatch + tone */}
                <section className="py-20 md:py-28">
                    <Wrapper className="px-4 md:px-8">
                        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
                            <div>
                                <p className="text-xs font-semibold uppercase tracking-widest text-primary">Color</p>
                                <h2 className="mt-2 text-3xl font-semibold leading-tight md:text-4xl">
                                    The MotionCore palette.
                                </h2>
                                <div className="mt-6 grid grid-cols-3 gap-3">
                                    {[
                                        { name: "Signal Red", hex: "#DC1612", className: "bg-primary text-primary-foreground" },
                                        { name: "Deep Night", hex: "#070A14", className: "bg-background text-foreground border border-border/60" },
                                        { name: "Soft Mist", hex: "#F5F6FA", className: "bg-foreground text-background" },
                                    ].map((sw) => (
                                        <div key={sw.name} className={`rounded-2xl p-5 text-sm font-medium ${sw.className}`}>
                                            <p className="font-semibold">{sw.name}</p>
                                            <p className="mt-2 text-xs opacity-80">{sw.hex}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <p className="text-xs font-semibold uppercase tracking-widest text-primary">Tone</p>
                                <h2 className="mt-2 text-3xl font-semibold leading-tight md:text-4xl">
                                    How we sound.
                                </h2>
                                <ul className="mt-6 space-y-4 text-sm">
                                    {[
                                        "Direct, never preachy. Coaches don't lecture.",
                                        "Confident, not loud. We let the data carry the swagger.",
                                        "Warm, but not cute. Athletes can smell try-hard.",
                                    ].map((line) => (
                                        <li key={line} className="rounded-2xl border border-border/60 bg-background/40 p-4 text-foreground/90 backdrop-blur-md">
                                            {line}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </Wrapper>
                </section>

                {/* CTA */}
                <section className="pb-32 pt-12">
                    <Wrapper className="px-4 md:px-8">
                        <Container>
                            <div className="relative overflow-hidden rounded-[2.5rem] border border-border/60 bg-gradient-to-br from-primary/15 via-background to-background p-10 text-center md:p-16">
                                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(220,22,18,0.25),transparent_70%)]" />
                                <div className="relative mx-auto max-w-2xl">
                                    <h2 className="text-balance text-3xl font-semibold leading-tight md:text-5xl">
                                        Reviewing MotionCore? Get on early.
                                    </h2>
                                    <p className="mx-auto mt-4 max-w-md text-muted-foreground md:text-lg">
                                        Press waitlist gets a build a week before public waves. Drop your email below.
                                    </p>
                                    <div className="mx-auto mt-8 max-w-md">
                                        <WaitlistForm cta="Request early access" />
                                    </div>
                                </div>
                            </div>
                        </Container>
                    </Wrapper>
                </section>
            </main>
        </>
    );
};

export default ResourcesPage;

const BackgroundGlow = () => (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-12rem] h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-primary/20 blur-[10rem]" />
        <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)] dotPattern opacity-40" />
    </div>
);

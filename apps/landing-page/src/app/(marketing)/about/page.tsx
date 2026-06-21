"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
    Compass,
    HeartPulse,
    Lightbulb,
    Mountain,
    Shield,
    Sparkles,
    Target,
    Users,
} from "lucide-react";

import { Container, Wrapper } from "@/components";
import { HeroHeader } from "@/components/ui/hero-section";
import { WaitlistForm } from "@/components/ui/waitlist-form";
import { Button } from "@/components/ui/button";

const principles = [
    {
        icon: Lightbulb,
        title: "Earn the screen",
        body: "Every screen has to defend its existence. If it doesn't help you train better, it gets cut.",
    },
    {
        icon: HeartPulse,
        title: "Recovery is training",
        body: "We refuse to ship features that punish rest. Your streak should reflect consistency, not exhaustion.",
    },
    {
        icon: Compass,
        title: "Adaptive over rigid",
        body: "Your body is dynamic. Your plan should be too. Adaptation is a first-class feature, not a setting.",
    },
    {
        icon: Shield,
        title: "Quietly private",
        body: "Your sleep, your metrics, your training history — yours. Encrypted by default, exportable anytime.",
    },
    {
        icon: Mountain,
        title: "Built with athletes",
        body: "600+ beta athletes shaped the app. Every feature exists because someone real asked for it twice.",
    },
    {
        icon: Users,
        title: "No dark patterns",
        body: "No streak panic, no manipulative notifications. We win when you keep showing up — not when you can't stop scrolling.",
    },
];

const timeline = [
    { year: "2024", label: "Garage prototype, 12 athletes." },
    { year: "2025", label: "Closed beta with 600 lifters & runners." },
    { year: "2026", label: "Public waitlist + iOS launch." },
    { year: "2026 →", label: "Android, Wear OS, coach mode." },
];

const AboutPage = () => {
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
                                Why MotionCore exists
                            </span>
                            <h1 className="mt-6 text-balance text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl">
                                Built for people who actually{" "}
                                <span className="bg-gradient-to-r from-primary to-[#ff5a55] bg-clip-text text-transparent">
                                    show up.
                                </span>
                            </h1>
                            <p className="mx-auto mt-6 max-w-2xl text-balance text-lg text-muted-foreground">
                                We were tired of training apps that were either spreadsheets in disguise or social networks pretending to coach. So we built the one we wanted.
                            </p>
                        </motion.div>
                    </Wrapper>
                </section>

                {/* Mission + Vision */}
                <section className="py-24 md:py-32">
                    <Wrapper className="px-4 md:px-8">
                        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
                            {[
                                {
                                    icon: Target,
                                    eyebrow: "Mission",
                                    title: "Make consistency the default.",
                                    body:
                                        "We want training to feel like brushing your teeth. Not because it's gamified — because it just works, every day, with as little friction as possible.",
                                },
                                {
                                    icon: Sparkles,
                                    eyebrow: "Vision",
                                    title: "An adaptive coach in every pocket.",
                                    body:
                                        "Personalised, recovery-aware coaching shouldn't cost $200/month. We're building it so it doesn't.",
                                },
                            ].map((item) => (
                                <motion.div
                                    key={item.eyebrow}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                                    className="group relative overflow-hidden rounded-3xl border border-border/60 bg-gradient-to-b from-background/80 to-background/40 p-8 backdrop-blur-md transition-colors hover:border-primary/40"
                                >
                                    <div className="pointer-events-none absolute -top-20 -right-20 h-48 w-48 rounded-full bg-primary/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />
                                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                                        <item.icon className="h-6 w-6" />
                                    </div>
                                    <p className="mt-5 text-xs font-semibold uppercase tracking-widest text-primary">
                                        {item.eyebrow}
                                    </p>
                                    <h2 className="mt-2 text-2xl font-semibold leading-tight md:text-3xl">
                                        {item.title}
                                    </h2>
                                    <p className="mt-4 text-muted-foreground">{item.body}</p>
                                </motion.div>
                            ))}
                        </div>
                    </Wrapper>
                </section>

                {/* Principles */}
                <section className="py-24 md:py-32">
                    <Wrapper className="px-4 md:px-8">
                        <div className="mx-auto max-w-3xl text-center">
                            <h2 className="text-balance text-3xl font-semibold leading-tight md:text-5xl">
                                The six principles{" "}
                                <span className="text-primary">we won&apos;t bend on.</span>
                            </h2>
                        </div>
                        <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-border/60 bg-border/60 md:grid-cols-2 lg:grid-cols-3">
                            {principles.map((p) => (
                                <div key={p.title} className="group bg-background/80 p-8 transition-colors hover:bg-background">
                                    <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform duration-300 group-hover:-translate-y-1">
                                        <p.icon className="h-5 w-5" />
                                    </div>
                                    <h3 className="mt-5 text-lg font-semibold">{p.title}</h3>
                                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.body}</p>
                                </div>
                            ))}
                        </div>
                    </Wrapper>
                </section>

                {/* Timeline */}
                <section className="py-24 md:py-32">
                    <Wrapper className="px-4 md:px-8">
                        <div className="mx-auto max-w-3xl text-center">
                            <h2 className="text-balance text-3xl font-semibold leading-tight md:text-5xl">
                                The road so far.
                            </h2>
                        </div>
                        <div className="mx-auto mt-14 max-w-3xl">
                            <div className="relative space-y-6 border-l border-border/60 pl-8">
                                {timeline.map((item) => (
                                    <div key={item.year} className="relative">
                                        <span className="absolute -left-[37px] top-1 h-3 w-3 rounded-full border-2 border-primary bg-background" />
                                        <p className="text-xs font-semibold uppercase tracking-widest text-primary">
                                            {item.year}
                                        </p>
                                        <p className="mt-1 text-base text-foreground/90 md:text-lg">{item.label}</p>
                                    </div>
                                ))}
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
                                        Train with us, from day one.
                                    </h2>
                                    <p className="mx-auto mt-4 max-w-md text-muted-foreground md:text-lg">
                                        Drop your email. Get your invite the moment your wave opens.
                                    </p>
                                    <div className="mx-auto mt-8 max-w-md">
                                        <WaitlistForm cta="Join waitlist" />
                                    </div>
                                    <div className="mt-6">
                                        <Button asChild variant="ghost" className="text-muted-foreground">
                                            <Link href="/contact">Or get in touch →</Link>
                                        </Button>
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

export default AboutPage;

/* -------------------------------------------------------------------------- */

const BackgroundGlow = () => (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-12rem] h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-primary/20 blur-[10rem]" />
        <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)] dotPattern opacity-40" />
    </div>
);

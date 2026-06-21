"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
    ArrowRight,
    BarChart3,
    CheckCircle2,
    Compass,
    Flame,
    HeartPulse,
    Sparkles,
    Timer,
    Trophy,
} from "lucide-react";

import { Container, Wrapper } from "@/components";
import { Button } from "@/components/ui/button";
import { HeroHeader } from "@/components/ui/hero-section";
import { PhoneFrame } from "@/components/ui/phone-frame";
import { WaitlistForm } from "@/components/ui/waitlist-form";
import { cn } from "@/lib/utils";

const tour = [
    {
        eyebrow: "01 · Open the app",
        title: "Today, in one screen.",
        body:
            "Your session, your warm-up, your coach&apos;s note — all on the first screen, the second you launch.",
        bullets: ["Glanceable cards", "One tap to start", "No nested menus"],
        accent: "from-primary/30 to-primary/0",
        icon: Compass,
    },
    {
        eyebrow: "02 · Train",
        title: "Log a set in under a second.",
        body:
            "Big tap targets, smart defaults from last week, swipe-to-swap exercises. Built for sweaty hands and noisy gyms.",
        bullets: ["Auto rest timer", "Voice notes", "Swap mid-session"],
        accent: "from-orange-500/30 to-orange-500/0",
        icon: Timer,
    },
    {
        eyebrow: "03 · Recover",
        title: "Recovery turns into tomorrow&apos;s plan.",
        body:
            "We pull sleep, HRV and steps from your wearable, then quietly trim or load tomorrow&apos;s session.",
        bullets: ["Apple Health & Google Fit", "Auto-deloads", "Optional manual check-in"],
        accent: "from-emerald-500/30 to-emerald-500/0",
        icon: HeartPulse,
    },
    {
        eyebrow: "04 · Look back",
        title: "Progress that means something.",
        body:
            "Volume, PRs, consistency. No vanity charts, no leaderboards you can&apos;t beat.",
        bullets: ["12-week trends", "Lift & cardio split", "Weekly recap email"],
        accent: "from-blue-500/30 to-blue-500/0",
        icon: BarChart3,
    },
];

const ProductPage = () => {
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
                                The app · iOS &amp; Android
                            </span>
                            <h1 className="mt-6 text-balance text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl">
                                The full{" "}
                                <span className="bg-gradient-to-r from-primary to-[#ff5a55] bg-clip-text text-transparent">
                                    MotionCore tour
                                </span>
                            </h1>
                            <p className="mx-auto mt-6 max-w-2xl text-balance text-lg text-muted-foreground">
                                Four moments shape every training week. We rebuilt each of them.
                            </p>
                            <div className="mx-auto mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                                <Button asChild size="lg" className="h-12 rounded-[15px] px-6 shadow-[0_8px_30px_-8px_rgba(220,22,18,0.6)]">
                                    <Link href="/#waitlist">
                                        Join the waitlist
                                        <ArrowRight className="ml-2 h-4 w-4" />
                                    </Link>
                                </Button>
                                <Button asChild size="lg" variant="ghost" className="h-12 rounded-[15px] px-6 text-base">
                                    <Link href="/features">Browse features</Link>
                                </Button>
                            </div>
                        </motion.div>
                    </Wrapper>
                </section>

                {/* Tour steps */}
                <section className="py-20 md:py-32">
                    <Wrapper className="px-4 md:px-8">
                        <div className="flex flex-col gap-24 md:gap-32">
                            {tour.map((step, idx) => (
                                <motion.div
                                    key={step.title}
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                                    className={cn(
                                        "grid items-center gap-12 lg:grid-cols-2 lg:gap-20",
                                        idx % 2 === 1 && "lg:[&>*:first-child]:order-2",
                                    )}
                                >
                                    <div>
                                        <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                                            <step.icon className="h-6 w-6" />
                                        </div>
                                        <p className="mt-5 text-xs font-semibold uppercase tracking-widest text-primary">
                                            {step.eyebrow}
                                        </p>
                                        <h2 className="mt-2 text-balance text-3xl font-semibold leading-tight md:text-5xl">
                                            {step.title.replace(/&apos;/g, "’")}
                                        </h2>
                                        <p className="mt-5 text-base text-muted-foreground md:text-lg">
                                            {step.body.replace(/&apos;/g, "’")}
                                        </p>
                                        <ul className="mt-6 space-y-3 text-sm">
                                            {step.bullets.map((bullet) => (
                                                <li key={bullet} className="flex items-center gap-3">
                                                    <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-primary" />
                                                    <span className="text-foreground/80">{bullet}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="relative flex justify-center">
                                        <div
                                            className={cn(
                                                "absolute -inset-10 rounded-full bg-gradient-radial blur-3xl",
                                                step.accent,
                                            )}
                                        />
                                        <PhoneFrame className="w-[260px]">
                                            <TourPhone variant={idx} />
                                        </PhoneFrame>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </Wrapper>
                </section>

                {/* Comparison */}
                <section className="py-24 md:py-32">
                    <Wrapper className="px-4 md:px-8">
                        <div className="mx-auto max-w-3xl text-center">
                            <h2 className="text-balance text-3xl font-semibold leading-tight md:text-5xl">
                                Most apps track.{" "}
                                <span className="text-primary">MotionCore decides.</span>
                            </h2>
                        </div>
                        <div className="mx-auto mt-12 grid max-w-4xl gap-5 md:grid-cols-2">
                            <div className="rounded-3xl border border-border/60 bg-background/40 p-8 backdrop-blur-md">
                                <p className="text-xs uppercase tracking-widest text-muted-foreground">Other apps</p>
                                <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                                    {["Static templates", "You guess the load", "Recovery is a separate app", "Rest day = streak dies"].map(
                                        (line) => (
                                            <li key={line} className="flex items-start gap-3">
                                                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-muted-foreground/40" />
                                                <span>{line}</span>
                                            </li>
                                        ),
                                    )}
                                </ul>
                            </div>
                            <div className="rounded-3xl border border-primary/40 bg-primary/5 p-8 backdrop-blur-md">
                                <p className="text-xs uppercase tracking-widest text-primary">MotionCore</p>
                                <ul className="mt-4 space-y-3 text-sm text-foreground/90">
                                    {[
                                        "Adaptive plan rewritten daily",
                                        "Loads auto-regulate by RPE & history",
                                        "Recovery, sleep & training in one place",
                                        "Streaks survive rest days",
                                    ].map((line) => (
                                        <li key={line} className="flex items-start gap-3">
                                            <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                                            <span>{line}</span>
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
                                        Be on day one.
                                    </h2>
                                    <p className="mx-auto mt-4 max-w-md text-muted-foreground md:text-lg">
                                        Join the waitlist and we&apos;ll send your invite the moment your wave opens.
                                    </p>
                                    <div className="mx-auto mt-8 max-w-md">
                                        <WaitlistForm cta="Get my invite" />
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

export default ProductPage;

/* -------------------------------------------------------------------------- */

const BackgroundGlow = () => (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-12rem] h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-primary/20 blur-[10rem]" />
        <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)] dotPattern opacity-40" />
    </div>
);

const TourPhone = ({ variant }: { variant: number }) => {
    if (variant === 0) {
        return (
            <div className="flex h-full flex-col bg-gradient-to-b from-primary/15 via-background to-background p-4 pt-8">
                <p className="text-[10px] uppercase tracking-widest text-muted-foreground">Today</p>
                <h3 className="mt-1 text-base font-semibold">Push · Upper</h3>
                <div className="mt-3 grid grid-cols-3 gap-2 text-center">
                    {[
                        { l: "Time", v: "52m" },
                        { l: "Lifts", v: "6" },
                        { l: "Sets", v: "18" },
                    ].map((s) => (
                        <div key={s.l} className="rounded-xl border border-border/60 bg-background/60 p-2.5">
                            <p className="text-[9px] uppercase tracking-widest text-muted-foreground">{s.l}</p>
                            <p className="mt-1 text-sm font-semibold">{s.v}</p>
                        </div>
                    ))}
                </div>
                <div className="mt-4 flex-1 rounded-2xl border border-border/60 bg-background/60 p-3 text-[11px]">
                    <p className="font-semibold">Warm-up · 6 min</p>
                    <p className="mt-1 text-muted-foreground">
                        Banded shoulder pass-throughs &middot; Scap push-ups &middot; Empty bar
                    </p>
                </div>
                <div className="mt-3 rounded-2xl border border-primary/30 bg-primary/10 p-3 text-center text-[11px] font-semibold text-primary">
                    Start session
                </div>
            </div>
        );
    }
    if (variant === 1) {
        return (
            <div className="flex h-full flex-col bg-gradient-to-b from-orange-500/15 via-background to-background p-4 pt-8">
                <p className="text-[10px] uppercase tracking-widest text-muted-foreground">Set 2 of 4</p>
                <h3 className="mt-1 text-base font-semibold">Incline DB Press</h3>
                <div className="mt-4 rounded-2xl border border-border/60 bg-background/60 p-4 text-center">
                    <p className="text-3xl font-semibold tabular-nums">10 × 24kg</p>
                    <p className="mt-1 text-[10px] uppercase tracking-widest text-muted-foreground">RPE 7</p>
                </div>
                <div className="mt-4 grid grid-cols-2 gap-2 text-[11px] font-semibold">
                    <div className="rounded-xl border border-border/60 bg-background/60 p-3 text-center">−</div>
                    <div className="rounded-xl border border-border/60 bg-background/60 p-3 text-center">+</div>
                </div>
                <div className="mt-auto rounded-2xl border border-primary/40 bg-primary/15 p-3 text-center text-[11px] font-semibold text-primary">
                    Log set
                </div>
            </div>
        );
    }
    if (variant === 2) {
        return (
            <div className="flex h-full flex-col bg-gradient-to-b from-emerald-500/15 via-background to-background p-4 pt-8">
                <p className="text-[10px] uppercase tracking-widest text-emerald-400">Recovery</p>
                <h3 className="mt-1 text-base font-semibold">Ready</h3>
                <div className="mt-4 grid grid-cols-2 gap-2">
                    {[
                        { l: "Sleep", v: "7h41" },
                        { l: "HRV", v: "+6" },
                        { l: "RHR", v: "54" },
                        { l: "Steps", v: "9.2k" },
                    ].map((s) => (
                        <div key={s.l} className="rounded-xl border border-border/60 bg-background/60 p-3">
                            <p className="text-[9px] uppercase tracking-widest text-muted-foreground">{s.l}</p>
                            <p className="mt-1 text-sm font-semibold">{s.v}</p>
                        </div>
                    ))}
                </div>
                <div className="mt-auto rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-3 text-center text-[11px] font-semibold text-emerald-300">
                    Cleared for full session
                </div>
            </div>
        );
    }
    return (
        <div className="flex h-full flex-col bg-gradient-to-b from-blue-500/15 via-background to-background p-4 pt-8">
            <p className="text-[10px] uppercase tracking-widest text-muted-foreground">Last 12 weeks</p>
            <h3 className="mt-1 text-base font-semibold">Volume trend</h3>
            <div className="mt-4 flex h-32 items-end gap-1.5 rounded-2xl border border-border/60 bg-background/60 p-3">
                {[40, 55, 48, 62, 70, 65, 78, 82, 76, 88, 92, 95].map((h, i) => (
                    <div
                        key={i}
                        style={{ height: `${h}%` }}
                        className={cn(
                            "flex-1 rounded-md",
                            i >= 9 ? "bg-primary/80" : "bg-primary/40",
                        )}
                    />
                ))}
            </div>
            <div className="mt-4 grid grid-cols-2 gap-2">
                <div className="rounded-xl border border-border/60 bg-background/60 p-3">
                    <p className="text-[9px] uppercase tracking-widest text-muted-foreground">PRs</p>
                    <p className="mt-1 text-sm font-semibold flex items-center gap-1">
                        <Trophy className="h-3 w-3 text-primary" /> 4 this month
                    </p>
                </div>
                <div className="rounded-xl border border-border/60 bg-background/60 p-3">
                    <p className="text-[9px] uppercase tracking-widest text-muted-foreground">Streak</p>
                    <p className="mt-1 text-sm font-semibold flex items-center gap-1">
                        <Flame className="h-3 w-3 text-primary" /> 21 days
                    </p>
                </div>
            </div>
            <div className="mt-3 flex items-center justify-center gap-1 text-[10px] text-muted-foreground">
                <Sparkles className="h-3 w-3 text-primary" /> Up 18% on the same block
            </div>
        </div>
    );
};

"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
    BarChart3,
    Bell,
    Brain,
    Compass,
    Flame,
    HeartPulse,
    Repeat,
    Shield,
    Sparkles,
    Timer,
    Trophy,
} from "lucide-react";

import { Container, Wrapper } from "@/components";
import { HeroHeader } from "@/components/ui/hero-section";
import { PhoneFrame } from "@/components/ui/phone-frame";
import { WaitlistForm } from "@/components/ui/waitlist-form";
import { cn } from "@/lib/utils";

const featureSpotlights = [
    {
        eyebrow: "Adaptive coach",
        title: "A plan that learns you, session by session.",
        body:
            "MotionCore reads your RPE, completed reps and recovery signals, then adjusts tomorrow before you wake up. No more guessing, no more spreadsheets.",
        bullets: [
            "Auto-regulated load and volume",
            "Deload weeks dropped in automatically",
            "Plan flex for travel, sickness or busy weeks",
        ],
        icon: Brain,
    },
    {
        eyebrow: "Frictionless logging",
        title: "Built for the gym floor, not your desk.",
        body:
            "Big tap targets, glanceable rest timers and swipe-to-log. Designed for one sweaty hand and a noisy gym.",
        bullets: [
            "Tap a set, log a set",
            "Swipe to swap exercises mid-session",
            "Voice notes on any movement",
        ],
        icon: Timer,
    },
    {
        eyebrow: "Recovery-aware",
        title: "Respects how recovered you actually are.",
        body:
            "Pulls sleep, HRV and steps from Apple Health, Google Fit and your wearable, then quietly trims volume on rough days.",
        bullets: [
            "Apple Watch, Garmin, Whoop & Oura",
            "Auto-deloads on red-flag weeks",
            "Optional check-in if you train without a wearable",
        ],
        icon: HeartPulse,
    },
];

const featureGrid = [
    { icon: BarChart3, title: "Real progress", info: "Volume, PRs and consistency. No vanity metrics." },
    { icon: Repeat, title: "Plans that bend", info: "Re-flow your block in a single tap." },
    { icon: Bell, title: "Smart reminders", info: "Nudges that learn your real schedule." },
    { icon: Trophy, title: "PR detection", info: "Confetti before the bar leaves your hands." },
    { icon: Compass, title: "Goal modes", info: "Strength, hypertrophy, endurance, hybrid." },
    { icon: Flame, title: "Streaks that survive", info: "Rest days don't kill them. Skipped sessions do." },
    { icon: Sparkles, title: "Smart swaps", info: "Equipment busy? Swap with a tap." },
    { icon: Shield, title: "Privacy first", info: "Export your data anytime. Encrypted by default." },
];

export const FeaturesClient = () => {
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
                                Inside MotionCore
                            </span>
                            <h1 className="mt-6 text-balance text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl">
                                Every feature{" "}
                                <span className="bg-gradient-to-r from-primary to-[#ff5a55] bg-clip-text text-transparent">
                                    earns its place.
                                </span>
                            </h1>
                            <p className="mx-auto mt-6 max-w-2xl text-balance text-lg text-muted-foreground">
                                We don&apos;t ship features for screenshots. Each one was asked for, twice, by athletes who actually train.
                            </p>
                        </motion.div>
                    </Wrapper>
                </section>

                {/* Spotlights */}
                <section className="py-20 md:py-32">
                    <Wrapper className="px-4 md:px-8">
                        <div className="flex flex-col gap-24 md:gap-32">
                            {featureSpotlights.map((feature, idx) => (
                                <motion.div
                                    key={feature.title}
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
                                            <feature.icon className="h-6 w-6" />
                                        </div>
                                        <p className="mt-5 text-xs font-semibold uppercase tracking-widest text-primary">
                                            {feature.eyebrow}
                                        </p>
                                        <h2 className="mt-2 text-3xl font-semibold leading-tight md:text-4xl">
                                            {feature.title}
                                        </h2>
                                        <p className="mt-4 text-base text-muted-foreground md:text-lg">
                                            {feature.body}
                                        </p>
                                        <ul className="mt-6 space-y-3 text-sm">
                                            {feature.bullets.map((bullet) => (
                                                <li key={bullet} className="flex items-start gap-3">
                                                    <span className="mt-1.5 inline-flex h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                                                    <span className="text-foreground/80">{bullet}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="relative flex justify-center">
                                        <PhoneFrame className="w-[260px]">
                                            <SpotlightPhone variant={idx} />
                                        </PhoneFrame>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </Wrapper>
                </section>

                {/* Feature grid */}
                <section className="py-20 md:py-32">
                    <Wrapper className="px-4 md:px-8">
                        <div className="mx-auto max-w-3xl text-center">
                            <h2 className="text-balance text-3xl font-semibold leading-tight md:text-5xl">
                                And the smaller things,{" "}
                                <span className="text-primary">done right.</span>
                            </h2>
                        </div>
                        <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-border/60 bg-border/60 sm:grid-cols-2 lg:grid-cols-4">
                            {featureGrid.map((item) => (
                                <div key={item.title} className="group bg-background/80 p-6 transition-colors hover:bg-background">
                                    <item.icon className="h-5 w-5 text-primary transition-transform duration-300 group-hover:-translate-y-1" />
                                    <h3 className="mt-4 text-base font-semibold">{item.title}</h3>
                                    <p className="mt-1.5 text-sm text-muted-foreground">{item.info}</p>
                                </div>
                            ))}
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
                                        Want it on your phone?
                                    </h2>
                                    <p className="mx-auto mt-4 max-w-md text-muted-foreground md:text-lg">
                                        Join the waitlist — we&apos;ll send your invite the moment your wave opens.
                                    </p>
                                    <div className="mx-auto mt-8 max-w-md">
                                        <WaitlistForm cta="Get my invite" />
                                    </div>
                                    <Link
                                        href="/product"
                                        className="mt-6 inline-flex text-sm text-muted-foreground transition-colors hover:text-foreground"
                                    >
                                        Or take the full app tour →
                                    </Link>
                                </div>
                            </div>
                        </Container>
                    </Wrapper>
                </section>
            </main>
        </>
    );
};

/* -------------------------------------------------------------------------- */

const BackgroundGlow = () => (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-12rem] h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-primary/20 blur-[10rem]" />
        <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)] dotPattern opacity-40" />
    </div>
);

const SpotlightPhone = ({ variant }: { variant: number }) => {
    if (variant === 0) {
        return (
            <div className="flex h-full flex-col bg-gradient-to-b from-primary/15 via-background to-background p-4 pt-8">
                <div className="mt-2">
                    <p className="text-[10px] uppercase tracking-widest text-primary">Coach</p>
                    <h3 className="mt-1 text-base font-semibold leading-tight">Tomorrow looks lighter.</h3>
                </div>
                <div className="mt-4 space-y-3">
                    <div className="rounded-xl border border-primary/30 bg-primary/10 p-3 text-[11px]">
                        Sleep was 5h12. Dropping bench by 5%, removing the AMRAP.
                    </div>
                    <div className="rounded-xl border border-border/60 bg-background/60 p-3 text-[11px]">
                        Squat day moved to Friday — 48h gap restored.
                    </div>
                    <div className="rounded-xl border border-border/60 bg-background/60 p-3 text-[11px]">
                        Mobility added Wednesday. 12 min, hips and t-spine.
                    </div>
                </div>
                <div className="mt-auto rounded-2xl border border-border/60 bg-background/60 p-3 text-center text-[11px] font-semibold">
                    Approve plan
                </div>
            </div>
        );
    }
    if (variant === 1) {
        return (
            <div className="flex h-full flex-col bg-gradient-to-b from-background via-background to-primary/10 p-4 pt-8">
                <p className="text-[10px] uppercase tracking-widest text-muted-foreground">Set 3 of 4</p>
                <h3 className="mt-1 text-base font-semibold">Bench Press</h3>
                <div className="mt-4 grid grid-cols-3 gap-2 text-center">
                    {["6 × 80", "6 × 80", "—", "—"].map((rep, i) => (
                        <div
                            key={i}
                            className={cn(
                                "rounded-xl border p-3 text-[11px]",
                                i < 2
                                    ? "border-primary/40 bg-primary/10 text-primary"
                                    : "border-border/60 bg-background/60",
                            )}
                        >
                            {rep}
                        </div>
                    ))}
                </div>
                <div className="mt-6 rounded-2xl border border-border/60 bg-background/60 p-4 text-center">
                    <p className="text-[10px] uppercase tracking-widest text-muted-foreground">Rest</p>
                    <p className="mt-1 text-3xl font-semibold tabular-nums">1:42</p>
                </div>
                <div className="mt-auto grid grid-cols-2 gap-2 text-[11px] font-semibold">
                    <div className="rounded-xl border border-border/60 bg-background/60 p-3 text-center">Swap</div>
                    <div className="rounded-xl border border-primary/40 bg-primary/15 p-3 text-center text-primary">
                        Log set
                    </div>
                </div>
            </div>
        );
    }
    return (
        <div className="flex h-full flex-col bg-gradient-to-b from-emerald-500/15 via-background to-background p-4 pt-8">
            <p className="text-[10px] uppercase tracking-widest text-emerald-400">Recovery · ready</p>
            <div className="mt-4 grid grid-cols-3 gap-2">
                {[
                    { l: "HRV", v: "+6" },
                    { l: "Sleep", v: "7h41" },
                    { l: "Steps", v: "9.2k" },
                ].map((s) => (
                    <div key={s.l} className="rounded-xl border border-border/60 bg-background/60 p-3 text-center">
                        <p className="text-[9px] uppercase tracking-widest text-muted-foreground">{s.l}</p>
                        <p className="mt-1 text-sm font-semibold">{s.v}</p>
                    </div>
                ))}
            </div>
            <div className="mt-5 rounded-2xl border border-border/60 bg-background/60 p-3 text-[11px] text-muted-foreground">
                Last 7 days are green. Holding loads, adding 2.5kg to squats.
            </div>
            <div className="mt-auto rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-3 text-center text-[11px] font-semibold text-emerald-300">
                Cleared for full session
            </div>
        </div>
    );
};

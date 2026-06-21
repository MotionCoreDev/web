"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import {
    ArrowRight,
    ChevronDown,
    Flame,
    HeartPulse,
    Sparkles,
    Trophy,
    Zap,
} from "lucide-react";

import { Container, Wrapper } from "@/components";
import { Button } from "@/components/ui/button";
import { HeroHeader } from "@/components/ui/hero-section";
import { WaitlistForm } from "@/components/ui/waitlist-form";
import { features, perks, faqItems, trustBadges, showcaseCards } from "@/constants";
import { cn } from "@/lib/utils";
import iNotificationsStackAnimation from "../../../public/lottie/iNotifications-Stack.json";

const fadeUp = {
    hidden: { opacity: 0, y: 24, filter: "blur(8px)" },
    visible: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
    },
} as const;

const HomePage = () => {
    return (
        <>
            <HeroHeader />

            <main className="relative w-full overflow-hidden">
                <BackgroundGlow />

                <HeroSection />
                <TrustRibbon />
                <AppShowcaseSection />
                <FeatureGridSection />
                <HowItWorksSection />
                <SocialProofSection />
                <FaqSection />
                <FinalCtaSection />
            </main>
        </>
    );
};

export default HomePage;

/* -------------------------------------------------------------------------- */
/*  Sections                                                                  */
/* -------------------------------------------------------------------------- */

const BackgroundGlow = () => (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-12rem] h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-primary/10 blur-[10rem]" />
        <div className="absolute right-[-10rem] top-[40rem] h-[28rem] w-[28rem] rounded-full bg-primary/15 blur-[10rem]" />
        <div className="absolute left-[-12rem] top-[80rem] h-[28rem] w-[28rem] rounded-full bg-primary/15 blur-[10rem]" />
        <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)] dotPattern opacity-40" />
    </div>
);

const HeroSection = () => {
    return (
        <section className="relative pt-32 md:pt-40">
            <Wrapper className="px-4 md:px-8">
                <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
                        className="text-center lg:text-left"
                    >
                        <motion.h1
                            variants={fadeUp}
                            className="mt-6 text-balance text-5xl font-semibold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl"
                        >
                            Train smarter.{" "}
                            <span className="bg-gradient-to-r from-primary via-[#ff5a55] to-primary bg-clip-text text-transparent">
                                Show up daily.
                            </span>
                        </motion.h1>

                        <motion.p
                            variants={fadeUp}
                            className="mx-auto mt-6 max-w-xl text-balance text-base text-muted-foreground md:text-lg lg:mx-0"
                        >
                            MotionCore is the adaptive training app that builds your week, logs your sets in seconds and respects how recovered you actually are. Get your invite first.
                        </motion.p>

                        <motion.div variants={fadeUp} className="mt-8">
                            <WaitlistForm
                                className="mx-auto max-w-md lg:mx-0"
                                helper={
                                    <>
                                        Join 12,400+ early athletes. No spam, unsubscribe anytime.
                                    </>
                                }
                            />
                        </motion.div>

                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 40, rotate: -2 }}
                        animate={{ opacity: 1, y: 0, rotate: 0 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                        className="relative mx-auto w-fit"
                    >
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 6, ease: "easeInOut", repeat: Infinity }}
                            className="relative h-[620px] w-[380px] max-w-[88vw] overflow-hidden"
                        >
                            <Lottie
                                animationData={iNotificationsStackAnimation}
                                autoplay
                                loop
                                className="absolute left-1/2 top-1/2 h-[280%] w-[280%] -translate-x-1/2 -translate-y-1/2"
                            />
                        </motion.div>

                        {/* Floating cards */}
                        <motion.div
                            initial={{ opacity: 0, x: -40, y: 20 }}
                            animate={{ opacity: 1, x: 0, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="absolute -left-6 top-20 hidden rounded-2xl border border-border/60 bg-background/70 p-3 shadow-2xl backdrop-blur-xl sm:flex md:-left-12"
                        >
                            <div className="flex items-center gap-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/15 text-primary">
                                    <Flame className="h-5 w-5" />
                                </div>
                                <div className="text-left">
                                    <p className="text-xs text-muted-foreground">Streak</p>
                                    <p className="text-sm font-semibold">21 days</p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 40, y: 30 }}
                            animate={{ opacity: 1, x: 0, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.75 }}
                            className="absolute -right-4 bottom-24 hidden rounded-2xl border border-border/60 bg-background/70 p-3 shadow-2xl backdrop-blur-xl sm:flex md:-right-10"
                        >
                            <div className="flex items-center gap-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-400">
                                    <HeartPulse className="h-5 w-5" />
                                </div>
                                <div className="text-left">
                                    <p className="text-xs text-muted-foreground">Recovery</p>
                                    <p className="text-sm font-semibold">Ready · HRV +6</p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </Wrapper>
        </section>
    );
};

const TrustRibbon = () => (
    <section className="border-y border-border/40 bg-background/40 py-6 mt-20 mb-32 backdrop-blur-md">
        <Wrapper className="px-4 md:px-8">
            <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 text-sm text-muted-foreground md:justify-between">
                {trustBadges.map((badge) => (
                    <div key={badge.label} className="flex items-center gap-2">
                        <badge.icon className="h-4 w-4 text-primary/80" />
                        <span>{badge.label}</span>
                    </div>
                ))}
                <div className="flex items-center gap-2">
                    <Zap className="h-4 w-4 text-primary/80" />
                    <span>Apple Health · Google Fit · Wear OS</span>
                </div>
            </div>
        </Wrapper>
    </section>
);

const AppShowcaseSection = () => (
    <section className="py-24 md:py-32">
        <Wrapper className="px-4 md:px-8">
            <SectionHeading
                eyebrow="Inside the app"
                title={
                    <>
                        A coach, a tracker and a stopwatch —{" "}
                        <span className="text-primary">finally one app</span>
                    </>
                }
                description="Every screen earns its place. Built around the four moments that actually matter in a session."
            />

            <div className="mt-16 grid gap-5 md:grid-cols-6">
                <BentoCard className="md:col-span-4 md:row-span-2">
                    <div className="flex h-full flex-col justify-between gap-8 p-6 md:p-10">
                        <div>
                            <p className="text-xs uppercase tracking-widest text-primary">Today view</p>
                            <h3 className="mt-2 text-2xl font-semibold md:text-3xl">
                                One tap to start. Zero menus to fight.
                            </h3>
                            <p className="mt-3 max-w-md text-sm text-muted-foreground md:text-base">
                                Your session, your warm-up, your coach&apos;s note — all on the first screen, the second you open the app.
                            </p>
                        </div>

                        <div className="flex items-center gap-4">
                            {showcaseCards.map((card) => (
                                <div
                                    key={card.title}
                                    className={cn(
                                        "flex-1 rounded-2xl border border-border/60 bg-gradient-to-b p-4 backdrop-blur-md",
                                        card.accent,
                                    )}
                                >
                                    <p className="text-[10px] uppercase tracking-widest text-muted-foreground">
                                        {card.title}
                                    </p>
                                    <p className="mt-2 text-lg font-semibold leading-tight">{card.subtitle}</p>
                                    <p className="mt-1 text-xs text-muted-foreground">{card.meta}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </BentoCard>

                <BentoCard className="md:col-span-2">
                    <div className="flex h-full flex-col justify-between p-6">
                        <div className="flex items-start gap-3">
                            <Trophy className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                            <h4 className="text-lg font-semibold">PRs surfaced automatically</h4>
                        </div>
                        <div>
                            <p className="mt-2 text-sm text-muted-foreground">
                                Beat last week? You&apos;ll see the confetti before the bar leaves your hands.
                            </p>
                        </div>
                    </div>
                </BentoCard>

                <BentoCard className="md:col-span-2">
                    <div className="flex h-full flex-col justify-between p-6">
                        <div className="flex items-start gap-3">
                            <HeartPulse className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                            <h4 className="text-lg font-semibold">Recovery aware loading</h4>
                        </div>
                        <div>
                            <p className="mt-2 text-sm text-muted-foreground">
                                Bad sleep, low HRV? MotionCore quietly trims volume so you don&apos;t.
                            </p>
                        </div>
                    </div>
                </BentoCard>

                <BentoCard className="md:col-span-3">
                    <div className="flex h-full flex-col justify-between p-6">
                        <div className="flex items-start gap-3">
                            <Sparkles className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                            <h4 className="text-lg font-semibold">Plans that bend, not break</h4>
                        </div>
                        <div>
                            <p className="mt-2 text-sm text-muted-foreground">
                                Travel week? Sick day? Tap once, the whole block re-flows.
                            </p>
                        </div>
                    </div>
                </BentoCard>

                <BentoCard className="md:col-span-3">
                    <div className="flex h-full flex-col justify-between p-6">
                        <Flame className="h-6 w-6 text-primary" />
                        <div>
                            <h4 className="text-lg font-semibold">Streaks that mean something</h4>
                            <p className="mt-2 text-sm text-muted-foreground">
                                Consistency over chaos. Your streak survives rest days, not skipped sessions.
                            </p>
                        </div>
                    </div>
                </BentoCard>
            </div>
        </Wrapper>
    </section>
);

const BentoCard = ({ className, children }: { className?: string; children: React.ReactNode }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
            "group relative overflow-hidden rounded-3xl border border-border/60 bg-gradient-to-b from-background/80 to-background/40 backdrop-blur-md transition-colors hover:border-primary/40",
            className,
        )}
    >
        <div className="pointer-events-none absolute -top-24 -right-24 h-48 w-48 rounded-full bg-primary/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />
        {children}
    </motion.div>
);

const FeatureGridSection = () => (
    <section className="py-24 md:py-32">
        <Wrapper className="px-4 md:px-8">
            <SectionHeading
                eyebrow="What you get"
                title={
                    <>
                        Everything you need.{" "}
                        <span className="text-primary">Nothing you don&apos;t.</span>
                    </>
                }
                description="Every feature exists because real lifters and runners asked for it — twice."
            />

            <div className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-border/60 bg-border/60 md:grid-cols-2 lg:grid-cols-3">
                {features.map((feature, idx) => (
                    <motion.div
                        key={feature.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.5, delay: idx * 0.05 }}
                        className="group relative bg-background/80 p-8 transition-colors hover:bg-background"
                    >
                        <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform duration-300 group-hover:-translate-y-1">
                            <feature.icon className="h-5 w-5" />
                        </div>
                        <h3 className="text-lg font-semibold">{feature.title}</h3>
                        <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{feature.info}</p>
                    </motion.div>
                ))}
            </div>
        </Wrapper>
    </section>
);

const HowItWorksSection = () => (
    <section className="relative py-24 md:py-32">
        <Wrapper className="px-4 md:px-8">
            <SectionHeading
                eyebrow="How it works"
                title={
                    <>
                        From install to PR{" "}
                        <span className="text-primary">in a week</span>
                    </>
                }
                description="No 30-minute onboarding. No quiz. Just three steps and you're training."
            />

            <div className="relative mt-16">
                <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-border to-transparent lg:block" />
                <div className="grid gap-8 lg:grid-cols-3 lg:gap-12">
                    {perks.map((perk, idx) => (
                        <motion.div
                            key={perk.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: idx * 0.1 }}
                            className="relative rounded-3xl border border-border/60 bg-background/60 p-8 backdrop-blur-md"
                        >
                            <span className="absolute -top-4 left-8 rounded-full border border-primary/40 bg-background px-3 py-1 text-xs font-semibold text-primary">
                                Step {idx + 1}
                            </span>
                            <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                                <perk.icon className="h-6 w-6" />
                            </div>
                            <h3 className="text-xl font-semibold">{perk.title}</h3>
                            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{perk.info}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </Wrapper>
    </section>
);

const SocialProofSection = () => {
    const [innerPos, setInnerPos] = React.useState({ x: 50, y: 0 });
    const [isHovered, setIsHovered] = React.useState(false);
    const containerRef = React.useRef<HTMLDivElement>(null);
    const innerGlowRef = React.useRef<HTMLDivElement>(null);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const xPct = (x / rect.width) * 100;
        const yPct = (y / rect.height) * 100;
        if (containerRef.current) {
            containerRef.current.style.background = `radial-gradient(200px circle at ${x}px ${y}px, #DC1612, transparent 70%)`;
        }
        setInnerPos({ x: xPct, y: yPct });
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        if (containerRef.current) {
            containerRef.current.style.background = 'rgba(255,255,255,0.06)';
        }
    };

    const handleMouseEnter = () => setIsHovered(true);

    return (
    <section className="py-24 md:py-32">
        <Wrapper className="px-4 md:px-8">
            <Container>
                <div
                    ref={containerRef}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                    onMouseEnter={handleMouseEnter}
                    className="relative rounded-[2.5rem] p-[1.5px]"
                    style={{ background: 'rgba(255,255,255,0.06)' }}
                >
                <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-b from-background/80 to-background/40 p-8 backdrop-blur-md md:p-16">
                    <div
                        ref={innerGlowRef}
                        className="pointer-events-none absolute inset-0"
                        style={{
                            background: `radial-gradient(600px circle at ${innerPos.x}% ${innerPos.y}%, rgba(220,22,18,0.12), transparent 60%)`,
                            transition: 'background 0.8s ease',
                            opacity: isHovered ? 1 : 0,
                        }}
                    />

                    <div className="relative grid items-center gap-12 lg:grid-cols-2">
                        <div>
                            <p className="text-sm uppercase tracking-widest text-primary">From the beta</p>
                            <h2 className="mt-3 text-3xl font-semibold leading-tight md:text-5xl">
                                &ldquo;It&apos;s the first training app I haven&apos;t deleted by week three.&rdquo;
                            </h2>
                            <p className="mt-6 max-w-md text-muted-foreground">
                                MotionCore is shaped by 600+ beta athletes — powerlifters, runners, weekend hybrids — telling us what should stay and what should go.
                            </p>
                        </div>

                        <div className="grid gap-4 sm:grid-cols-2">
                            {[
                                { value: "12.4k", label: "On the waitlist" },
                                { value: "94%", label: "Beta retention at 30 days" },
                                { value: "21d", label: "Average streak in beta" },
                                { value: "4.9", label: "Average beta rating" },
                            ].map((stat) => (
                                <div
                                    key={stat.label}
                                    className="rounded-2xl border border-border/60 bg-background/60 p-5"
                                >
                                    <p className="text-3xl font-semibold">{stat.value}</p>
                                    <p className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
                                        {stat.label}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                </div>
            </Container>
        </Wrapper>
    </section>
    );
};

const FaqSection = () => {
    const [open, setOpen] = React.useState<number | null>(null);

    return (
        <section className="py-24 md:py-32">
            <Wrapper className="px-4 md:px-8">
                <SectionHeading
                    eyebrow="FAQ"
                    title={
                        <>
                            Asked, answered.{" "}
                            <span className="text-primary">No fine print.</span>
                        </>
                    }
                />

                <div className="mx-auto mt-12 max-w-3xl divide-y divide-border/60 overflow-hidden rounded-3xl border border-border/60 bg-background/60 backdrop-blur-md">
                    {faqItems.map((item, idx) => {
                        const isOpen = open === idx;
                        return (
                            <button
                                key={item.q}
                                onClick={() => setOpen(isOpen ? null : idx)}
                                className="w-full px-6 py-5 text-left transition-colors hover:bg-background/80"
                            >
                                <div className="flex items-center justify-between gap-4">
                                    <span className="text-base font-medium md:text-lg">{item.q}</span>
                                    <ChevronDown
                                        className={cn(
                                            "h-5 w-5 flex-shrink-0 text-muted-foreground transition-transform duration-300",
                                            isOpen && "rotate-180 text-primary",
                                        )}
                                    />
                                </div>
                                <div
                                    className={cn(
                                        "grid overflow-hidden transition-all duration-300",
                                        isOpen ? "mt-3 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
                                    )}
                                >
                                    <p className="min-h-0 text-sm text-muted-foreground leading-relaxed">
                                        {item.a}
                                    </p>
                                </div>
                            </button>
                        );
                    })}
                </div>
            </Wrapper>
        </section>
    );
};

const FinalCtaSection = () => {
    const containerRef = React.useRef<HTMLDivElement>(null);
    const [dims, setDims] = React.useState({ w: 0, h: 0 });

    React.useEffect(() => {
        const el = containerRef.current;
        if (!el) return;
        const ro = new ResizeObserver(([entry]) => {
            setDims({ w: entry.contentRect.width, h: entry.contentRect.height });
        });
        ro.observe(el);
        return () => ro.disconnect();
    }, []);

    return (
    <section id="waitlist" className="pb-32 pt-12 scroll-mt-24">
        <Wrapper className="px-4 md:px-8">
            <div ref={containerRef} className="relative rounded-[2.5rem]">
                {dims.w > 0 && (() => {
                    const r = 39;
                    const w = dims.w - 4;
                    const h = dims.h - 4;
                    const perimeter = 2 * (w - 2 * r) + 2 * (h - 2 * r) + 2 * Math.PI * r;
                    const dashLen = perimeter * 0.18;
                    return (
                        <svg className="pointer-events-none absolute inset-0 w-full h-full overflow-visible" fill="none">
                            <rect x="2" y="2" width={w} height={h} rx={r}
                                stroke="rgba(255,255,255,0.08)" strokeWidth="2" />
                            <rect
                                key={`${dims.w}x${dims.h}-glow`}
                                x="2" y="2" width={w} height={h} rx={r}
                                stroke="#DC1612" strokeWidth="8"
                                strokeOpacity="0.35"
                                strokeDasharray={`${dashLen} ${perimeter - dashLen}`}
                                strokeLinecap="round"
                                style={{ filter: 'blur(6px)' }}
                            >
                                <animate attributeName="stroke-dashoffset" from="0" to={-perimeter} dur="4s" repeatCount="indefinite" />
                            </rect>
                            <rect
                                key={`${dims.w}x${dims.h}`}
                                x="2" y="2" width={w} height={h} rx={r}
                                stroke="#DC1612" strokeWidth="3"
                                strokeDasharray={`${dashLen} ${perimeter - dashLen}`}
                                strokeLinecap="round"
                            >
                                <animate attributeName="stroke-dashoffset" from="0" to={-perimeter} dur="4s" repeatCount="indefinite" />
                            </rect>
                        </svg>
                    );
                })()}
                <div className="relative rounded-[2.5rem] bg-background p-10 text-center md:p-20">
                <div className="relative mx-auto max-w-2xl">
                    <h2 className="text-balance text-4xl font-semibold leading-tight md:text-6xl">
                        Be on the field{" "}
                        <span className="bg-gradient-to-r from-primary to-[#ff5a55] bg-clip-text text-transparent">
                            on day one
                        </span>
                    </h2>
                    <p className="mx-auto mt-6 max-w-md text-base text-muted-foreground md:text-lg">
                        Drop your email. We&apos;ll send your invite the moment your wave opens.
                    </p>
                    <div className="mx-auto mt-8 max-w-md">
                        <WaitlistForm
                            cta="Get my invite"
                            helper="iOS &amp; Android · launching summer 2026"
                        />
                    </div>
                    <div className="mt-8 flex justify-center">
                        <Link
                            href="/features"
                            className="group inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                        >
                            Or browse the feature tour
                            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                        </Link>
                    </div>
                </div>
                </div>
            </div>
        </Wrapper>
    </section>
    );
};

/* -------------------------------------------------------------------------- */
/*  Bits                                                                      */
/* -------------------------------------------------------------------------- */

const SectionHeading = ({
    eyebrow,
    title,
    description,
}: {
    eyebrow: string;
    title: React.ReactNode;
    description?: React.ReactNode;
}) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-3xl text-center"
    >
        <span className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/40 px-3 py-1 text-xs font-medium uppercase tracking-widest text-muted-foreground backdrop-blur-md">
            {eyebrow}
        </span>
        <h2 className="mt-5 text-balance text-3xl font-semibold leading-tight md:text-5xl">{title}</h2>
        {description && (
            <p className="mx-auto mt-5 max-w-xl text-balance text-base text-muted-foreground md:text-lg">
                {description}
            </p>
        )}
    </motion.div>
);

"use client";

import * as React from "react";
import Link from "next/link";
import { MotionConfig, motion } from "framer-motion";
import {
    Activity,
    ArrowRight,
    BadgeCheck,
    CalendarCheck,
    ChevronDown,
    Languages,
    ListChecks,
    LogIn,
    MessageSquareText,
    ScanLine,
    ShieldCheck,
    Smartphone,
    Swords,
    Timer,
    Trophy,
    UserPlus,
    Zap,
} from "lucide-react";
import Wrapper from "@/components/global/wrapper";
import { GooglePlayBadge } from "@/components/site/brand";
import { RichText } from "@/components/site/rich-text";
import { PhoneFrame } from "@/components/ui/phone-frame";
import { cn } from "@/lib/utils";
import { localePath, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/types";

type Home = Dictionary["home"];

interface Props {
    locale: Locale;
    home: Home;
    common: Dictionary["common"];
}

// The exercise demos shipped in public/images/exercises, in the order of showcase.library.exercises.
const LIBRARY_DEMOS = ["squat", "push-up", "lunge", "plank", "shoulder-press", "warrior-two"] as const;

const fadeUp = {
    hidden: { opacity: 0, y: 24, filter: "blur(8px)" },
    visible: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
    },
} as const;

export function HomePage({ locale, home, common }: Props) {
    return (
        // Visitors who ask for reduced motion get fades without movement.
        <MotionConfig reducedMotion="user">
            <main id="main" className="relative w-full overflow-hidden">
                <BackgroundGlow />
                <HeroSection locale={locale} hero={home.hero} common={common} />
                <TrustRibbon items={home.ribbon} />
                <ShowcaseSection locale={locale} showcase={home.showcase} />
                <FeatureGridSection features={home.features} />
                <PrivacySection locale={locale} privacy={home.privacy} />
                <HowItWorksSection steps={home.steps} />
                <FaqSection locale={locale} faq={home.faq} />
                <FinalCtaSection locale={locale} cta={home.cta} common={common} />
            </main>
        </MotionConfig>
    );
}

export default HomePage;

/* -------------------------------------------------------------------------- */
/*  Sections                                                                  */
/* -------------------------------------------------------------------------- */

const BackgroundGlow = () => (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-12rem] h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-primary/10 blur-[10rem]" />
        <div className="absolute right-[-10rem] top-[40rem] h-[28rem] w-[28rem] rounded-full bg-primary/15 blur-[10rem]" />
        <div className="absolute left-[-12rem] top-[80rem] h-[28rem] w-[28rem] rounded-full bg-primary/15 blur-[10rem]" />
        <div className="dotPattern absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)]" />
    </div>
);

const HeroSection = ({ locale, hero, common }: { locale: Locale; hero: Home["hero"]; common: Props["common"] }) => (
    <section className="relative pt-32 md:pt-40">
        <Wrapper className="px-4 md:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
                    className="text-center lg:text-left"
                >
                    <motion.span
                        variants={fadeUp}
                        className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-[11px] font-medium uppercase tracking-wider text-primary sm:text-xs sm:tracking-widest"
                    >
                        <ScanLine className="size-3.5" />
                        {hero.eyebrow}
                    </motion.span>

                    <motion.h1
                        variants={fadeUp}
                        className="mt-6 text-balance text-5xl font-semibold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl"
                    >
                        {hero.titleLead}{" "}
                        <span className="bg-gradient-to-r from-primary via-[#ff5a55] to-primary bg-clip-text text-transparent">
                            {hero.titleAccent}
                        </span>
                    </motion.h1>

                    <motion.p
                        variants={fadeUp}
                        className="mx-auto mt-6 max-w-xl text-balance text-base text-muted-foreground md:text-lg lg:mx-0"
                    >
                        {hero.subtitle}
                    </motion.p>

                    <motion.div variants={fadeUp} className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
                        <GooglePlayBadge locale={locale} alt={common.googlePlayAlt} className="-m-1.5" />
                        <Link
                            href="#how-it-works"
                            className="group inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                        >
                            {hero.secondaryCta}
                            <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
                        </Link>
                    </motion.div>
                    {/* Not uppercased: Turkish casing would turn "Android" into "ANDROİD". */}
                    <motion.p variants={fadeUp} className="mt-4 text-sm text-muted-foreground">
                        {common.availability}
                    </motion.p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 40, rotate: -2 }}
                    animate={{ opacity: 1, y: 0, rotate: 0 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                    className="relative mx-auto w-fit"
                >
                    <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 6, ease: "easeInOut", repeat: Infinity }}>
                        <PhoneFrame className="w-[300px] max-w-[80vw]">
                            <CameraMock hud={hero.hud} />
                        </PhoneFrame>
                    </motion.div>

                    <FloatingStat
                        className="-left-6 top-24 md:-left-14"
                        delay={0.6}
                        from={-40}
                        icon={<Zap className="size-5" />}
                        label={hero.hud.full}
                        value="12"
                    />
                    <FloatingStat
                        className="-right-4 bottom-28 md:-right-12"
                        delay={0.75}
                        from={40}
                        tone="success"
                        icon={<Timer className="size-5" />}
                        label={hero.hud.time}
                        value="00:42"
                    />
                </motion.div>
            </div>
        </Wrapper>
    </section>
);

/** A still of the app's camera screen: the exercise demo with the live counters on top. */
const CameraMock = ({ hud }: { hud: Home["hero"]["hud"] }) => (
    <div className="relative h-full w-full bg-[#7a0d0b]">
        <img
            src="/images/exercises/squat-man.webp"
            alt=""
            width={1280}
            height={720}
            className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-black/60 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/70 to-transparent" />

        <div className="absolute inset-x-3 top-10 flex items-center justify-center text-white">
            <span className="flex items-center gap-1.5 rounded-full bg-black/40 px-3 py-1 text-xs font-semibold backdrop-blur-md">
                <span className="size-1.5 animate-pulse rounded-full bg-primary" />
                {hud.exercise}
            </span>
        </div>

        <div className="absolute inset-x-3 bottom-16 grid grid-cols-3 gap-2 text-center text-white">
            {[
                { label: hud.full, value: "12" },
                { label: hud.half, value: "1" },
                { label: hud.time, value: "00:42" },
            ].map((stat) => (
                <div key={stat.label} className="rounded-2xl bg-black/45 px-2 py-2 backdrop-blur-md">
                    <p className="text-lg font-semibold leading-none">{stat.value}</p>
                    <p className="mt-1 truncate text-[10px] uppercase tracking-wider text-white/70">{stat.label}</p>
                </div>
            ))}
        </div>

        <div className="absolute inset-x-6 bottom-5 flex items-center justify-center gap-2 rounded-full bg-success/90 px-3 py-1.5 text-xs font-semibold text-white shadow-lg">
            <BadgeCheck className="size-3.5" />
            {hud.cue}
        </div>
    </div>
);

const FloatingStat = ({
    className,
    delay,
    from,
    icon,
    label,
    value,
    tone = "primary",
}: {
    className: string;
    delay: number;
    from: number;
    icon: React.ReactNode;
    label: string;
    value: string;
    tone?: "primary" | "success";
}) => (
    <motion.div
        initial={{ opacity: 0, x: from, y: 20 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.8, delay }}
        className={cn(
            "absolute hidden rounded-2xl border border-border/60 bg-background/70 p-3 shadow-2xl backdrop-blur-xl sm:flex",
            className,
        )}
    >
        <div className="flex items-center gap-3">
            <div
                className={cn(
                    "flex size-10 items-center justify-center rounded-xl",
                    tone === "primary" ? "bg-primary/15 text-primary" : "bg-success/15 text-success",
                )}
            >
                {icon}
            </div>
            <div className="text-left">
                <p className="text-xs text-muted-foreground">{label}</p>
                <p className="text-sm font-semibold">{value}</p>
            </div>
        </div>
    </motion.div>
);

const RIBBON_ICONS = [ListChecks, Activity, ShieldCheck, Languages];

const TrustRibbon = ({ items }: { items: string[] }) => (
    <section className="mb-32 mt-20 border-y border-border/40 bg-background/40 py-6 backdrop-blur-md">
        <Wrapper className="px-4 md:px-8">
            <ul className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-sm text-muted-foreground md:justify-between">
                {items.map((label, idx) => {
                    const Icon = RIBBON_ICONS[idx % RIBBON_ICONS.length];
                    return (
                        <li key={label} className="flex items-center gap-2">
                            <Icon className="size-4 text-primary/80" />
                            <span>{label}</span>
                        </li>
                    );
                })}
            </ul>
        </Wrapper>
    </section>
);

const ShowcaseSection = ({ locale, showcase }: { locale: Locale; showcase: Home["showcase"] }) => (
    <section id="features" className="scroll-mt-24 py-24 md:py-32">
        <Wrapper className="px-4 md:px-8">
            <SectionHeading
                eyebrow={showcase.eyebrow}
                title={
                    <>
                        {showcase.titleLead} <span className="text-primary">{showcase.titleAccent}</span>
                    </>
                }
                description={showcase.description}
            />

            <div className="mt-16 grid gap-5 md:grid-cols-6">
                <BentoCard className="md:col-span-4 md:row-span-2">
                    <div className="grid h-full gap-6 p-6 md:grid-cols-[1.2fr_0.8fr] md:p-10">
                        <div className="flex flex-col justify-between gap-8">
                            <div>
                                <p className="text-xs uppercase tracking-widest text-primary">{showcase.tracking.tag}</p>
                                <h3 className="mt-2 text-2xl font-semibold md:text-3xl">{showcase.tracking.title}</h3>
                                <p className="mt-3 max-w-md text-sm text-muted-foreground md:text-base">{showcase.tracking.body}</p>
                            </div>
                            <div className="flex flex-wrap gap-3">
                                {showcase.tracking.chips.map((chip, idx) => (
                                    <span
                                        key={chip}
                                        className={cn(
                                            "rounded-2xl border border-border/60 bg-gradient-to-b px-4 py-3 text-sm font-semibold",
                                            idx === 0 && "from-primary/20 to-transparent text-foreground",
                                            idx === 1 && "from-amber-500/15 to-transparent",
                                            idx === 2 && "from-success/15 to-transparent",
                                        )}
                                    >
                                        {chip}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <SceneImage src="/images/scenes/tripod.webp" className="min-h-[18rem] md:min-h-0" position="center 62%" />
                    </div>
                </BentoCard>

                <BentoCard className="md:col-span-2">
                    <SmallCard icon={<Swords className="mt-0.5 size-6 flex-shrink-0 text-primary" />} card={showcase.battle} />
                </BentoCard>

                <BentoCard className="md:col-span-2">
                    <div className="flex h-full flex-col">
                        <SceneImage src="/images/scenes/throne.webp" className="h-44 shrink-0 rounded-none" position="center 46%" />
                        <SmallCard icon={<Trophy className="mt-0.5 size-6 flex-shrink-0 text-primary" />} card={showcase.leaderboard} />
                    </div>
                </BentoCard>

                <BentoCard className="md:col-span-3">
                    <div className="flex h-full flex-col gap-5 p-6">
                        <div className="flex items-start gap-3">
                            <ListChecks className="mt-0.5 size-6 flex-shrink-0 text-primary" />
                            <div>
                                <h3 className="text-lg font-semibold">{showcase.library.title}</h3>
                                <p className="mt-2 text-sm text-muted-foreground">{showcase.library.body}</p>
                            </div>
                        </div>
                        <ul className="grid grid-cols-3 gap-2">
                            {LIBRARY_DEMOS.map((demo, idx) => (
                                <li key={demo} className="overflow-hidden rounded-xl border border-border/60 bg-[#7a0d0b]">
                                    <img
                                        src={`/images/exercises/${demo}-${idx % 2 === 0 ? "man" : "woman"}.webp`}
                                        alt={showcase.library.exercises[idx]}
                                        width={1280}
                                        height={720}
                                        loading="lazy"
                                        className="aspect-[4/3] w-full object-cover"
                                    />
                                    <p className="truncate px-2 py-1.5 text-center text-[11px] font-medium text-muted-foreground">
                                        {showcase.library.exercises[idx]}
                                    </p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </BentoCard>

                <BentoCard className="md:col-span-3">
                    <div className="grid h-full grid-cols-[1fr_0.8fr]">
                        <SmallCard icon={<CalendarCheck className="mt-0.5 size-6 flex-shrink-0 text-primary" />} card={showcase.progress} />
                        <SceneImage src="/images/scenes/progress.webp" className="rounded-none" position="center 50%" />
                    </div>
                </BentoCard>
            </div>
        </Wrapper>
    </section>
);

const SmallCard = ({ icon, card }: { icon: React.ReactNode; card: { title: string; body: string } }) => (
    <div className="flex h-full flex-col gap-2 p-6">
        <div className="flex items-start gap-3">
            {icon}
            <h3 className="text-lg font-semibold">{card.title}</h3>
        </div>
        <p className="text-sm text-muted-foreground">{card.body}</p>
    </div>
);

/** One of the app's 3D scenes on its red backdrop, cropped to the card. */
const SceneImage = ({ src, className, position }: { src: string; className?: string; position: string }) => (
    <div className={cn("relative overflow-hidden rounded-2xl bg-[#9e130e]", className)}>
        <img
            src={src}
            alt=""
            width={1575}
            height={3410}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover"
            style={{ objectPosition: position }}
        />
    </div>
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
        <div className="pointer-events-none absolute -right-24 -top-24 h-48 w-48 rounded-full bg-primary/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />
        {children}
    </motion.div>
);

const FEATURE_ICONS = [ShieldCheck, MessageSquareText, ScanLine, BadgeCheck, Languages, LogIn];

const FeatureGridSection = ({ features }: { features: Home["features"] }) => (
    <section className="py-24 md:py-32">
        <Wrapper className="px-4 md:px-8">
            <SectionHeading
                eyebrow={features.eyebrow}
                title={
                    <>
                        {features.titleLead} <span className="text-primary">{features.titleAccent}</span>
                    </>
                }
                description={features.description}
            />

            <div className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-border/60 bg-border/60 md:grid-cols-2 lg:grid-cols-3">
                {features.items.map((feature, idx) => {
                    const Icon = FEATURE_ICONS[idx % FEATURE_ICONS.length];
                    return (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: idx * 0.05 }}
                            className="group relative bg-background/80 p-8 transition-colors hover:bg-background"
                        >
                            <div className="mb-5 inline-flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform duration-300 group-hover:-translate-y-1">
                                <Icon className="size-5" />
                            </div>
                            <h3 className="text-lg font-semibold">{feature.title}</h3>
                            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{feature.body}</p>
                        </motion.div>
                    );
                })}
            </div>
        </Wrapper>
    </section>
);

const PrivacySection = ({ locale, privacy }: { locale: Locale; privacy: Home["privacy"] }) => {
    const [glow, setGlow] = React.useState({ x: 50, y: 0, on: false });
    const borderRef = React.useRef<HTMLDivElement>(null);

    const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
        const rect = event.currentTarget.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        if (borderRef.current) {
            borderRef.current.style.background = `radial-gradient(200px circle at ${x}px ${y}px, #DC1612, transparent 70%)`;
        }
        setGlow({ x: (x / rect.width) * 100, y: (y / rect.height) * 100, on: true });
    };

    const handleMouseLeave = () => {
        setGlow((current) => ({ ...current, on: false }));
        if (borderRef.current) borderRef.current.style.background = "rgba(255,255,255,0.06)";
    };

    return (
        <section className="py-24 md:py-32">
            <Wrapper className="px-4 md:px-8">
                <div
                    ref={borderRef}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                    className="relative rounded-[2.5rem] p-[1.5px]"
                    style={{ background: "rgba(255,255,255,0.06)" }}
                >
                    <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-b from-background/90 to-background/60 p-8 backdrop-blur-md md:p-16">
                        <div
                            className="pointer-events-none absolute inset-0"
                            style={{
                                background: `radial-gradient(600px circle at ${glow.x}% ${glow.y}%, rgba(220,22,18,0.12), transparent 60%)`,
                                transition: "background 0.8s ease, opacity 0.4s ease",
                                opacity: glow.on ? 1 : 0,
                            }}
                        />

                        <div className="relative grid items-center gap-12 lg:grid-cols-2">
                            <div>
                                <p className="flex items-center gap-2 text-sm uppercase tracking-widest text-primary">
                                    <ShieldCheck className="size-4" />
                                    {privacy.eyebrow}
                                </p>
                                <h2 className="mt-3 text-3xl font-semibold leading-tight md:text-5xl">{privacy.title}</h2>
                                <p className="mt-6 max-w-md text-muted-foreground">{privacy.body}</p>
                                <Link
                                    href={localePath(locale, "privacy")}
                                    className="group mt-6 inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-primary"
                                >
                                    {privacy.link}
                                    <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
                                </Link>
                            </div>

                            <dl className="grid gap-4 sm:grid-cols-2">
                                {privacy.stats.map((stat) => (
                                    <div key={stat.label} className="rounded-2xl border border-border/60 bg-background/60 p-5">
                                        <dt className="sr-only">{stat.label}</dt>
                                        <dd>
                                            <p className="text-3xl font-semibold">{stat.value}</p>
                                            <p className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{stat.label}</p>
                                        </dd>
                                    </div>
                                ))}
                            </dl>
                        </div>
                    </div>
                </div>
            </Wrapper>
        </section>
    );
};

const STEP_ICONS = [UserPlus, Smartphone, Activity];

const HowItWorksSection = ({ steps }: { steps: Home["steps"] }) => (
    <section id="how-it-works" className="relative scroll-mt-24 py-24 md:py-32">
        <Wrapper className="px-4 md:px-8">
            <SectionHeading
                eyebrow={steps.eyebrow}
                title={
                    <>
                        {steps.titleLead} <span className="text-primary">{steps.titleAccent}</span>
                    </>
                }
                description={steps.description}
            />

            <ol className="relative mt-16 grid gap-8 lg:grid-cols-3 lg:gap-12">
                {steps.items.map((step, idx) => {
                    const Icon = STEP_ICONS[idx % STEP_ICONS.length];
                    return (
                        <motion.li
                            key={step.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: idx * 0.1 }}
                            className="relative rounded-3xl border border-border/60 bg-background/60 p-8 backdrop-blur-md"
                        >
                            <span className="absolute -top-4 left-8 rounded-full border border-primary/40 bg-background px-3 py-1 text-xs font-semibold text-primary">
                                {steps.stepLabel} {idx + 1}
                            </span>
                            <div className="mb-5 inline-flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                                <Icon className="size-6" />
                            </div>
                            <h3 className="text-xl font-semibold">{step.title}</h3>
                            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.body}</p>
                        </motion.li>
                    );
                })}
            </ol>
        </Wrapper>
    </section>
);

const FaqSection = ({ locale, faq }: { locale: Locale; faq: Home["faq"] }) => {
    const [open, setOpen] = React.useState<number | null>(0);

    return (
        <section id="faq" className="scroll-mt-24 py-24 md:py-32">
            <Wrapper className="px-4 md:px-8">
                <SectionHeading
                    eyebrow={faq.eyebrow}
                    title={
                        <>
                            {faq.titleLead} <span className="text-primary">{faq.titleAccent}</span>
                        </>
                    }
                />

                <div className="mx-auto mt-12 max-w-3xl divide-y divide-border/60 overflow-hidden rounded-3xl border border-border/60 bg-background/60 backdrop-blur-md">
                    {faq.items.map((item, idx) => {
                        const isOpen = open === idx;
                        const panelId = `faq-panel-${idx}`;
                        return (
                            <div key={item.q}>
                                <h3>
                                    <button
                                        type="button"
                                        onClick={() => setOpen(isOpen ? null : idx)}
                                        aria-expanded={isOpen}
                                        aria-controls={panelId}
                                        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left text-base font-medium transition-colors hover:bg-background/80 md:text-lg"
                                    >
                                        {item.q}
                                        <ChevronDown
                                            className={cn(
                                                "size-5 flex-shrink-0 text-muted-foreground transition-transform duration-300",
                                                isOpen && "rotate-180 text-primary",
                                            )}
                                        />
                                    </button>
                                </h3>
                                <div
                                    id={panelId}
                                    className={cn(
                                        "grid overflow-hidden px-6 transition-all duration-300",
                                        isOpen ? "grid-rows-[1fr] pb-5 opacity-100" : "grid-rows-[0fr] opacity-0",
                                    )}
                                >
                                    <p className="min-h-0 text-sm leading-relaxed text-muted-foreground">
                                        <RichText text={item.a} locale={locale} />
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </Wrapper>
        </section>
    );
};

const FinalCtaSection = ({ locale, cta, common }: { locale: Locale; cta: Home["cta"]; common: Props["common"] }) => {
    const containerRef = React.useRef<HTMLDivElement>(null);
    const [dims, setDims] = React.useState({ w: 0, h: 0 });

    React.useEffect(() => {
        const el = containerRef.current;
        if (!el) return;
        const observer = new ResizeObserver(([entry]) => {
            setDims({ w: entry.contentRect.width, h: entry.contentRect.height });
        });
        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    const border = (() => {
        if (dims.w === 0) return null;
        const r = 39;
        const w = dims.w - 4;
        const h = dims.h - 4;
        const perimeter = 2 * (w - 2 * r) + 2 * (h - 2 * r) + 2 * Math.PI * r;
        const dashLen = perimeter * 0.18;
        return (
            <svg aria-hidden className="pointer-events-none absolute inset-0 h-full w-full overflow-visible" fill="none">
                <rect x="2" y="2" width={w} height={h} rx={r} stroke="rgba(255,255,255,0.08)" strokeWidth="2" />
                {[
                    { width: 8, opacity: 0.35, blur: true },
                    { width: 3, opacity: 1, blur: false },
                ].map((line) => (
                    <rect
                        key={`${dims.w}x${dims.h}-${line.width}`}
                        x="2"
                        y="2"
                        width={w}
                        height={h}
                        rx={r}
                        stroke="#DC1612"
                        strokeWidth={line.width}
                        strokeOpacity={line.opacity}
                        strokeDasharray={`${dashLen} ${perimeter - dashLen}`}
                        strokeLinecap="round"
                        style={line.blur ? { filter: "blur(6px)" } : undefined}
                    >
                        <animate attributeName="stroke-dashoffset" from="0" to={-perimeter} dur="4s" repeatCount="indefinite" />
                    </rect>
                ))}
            </svg>
        );
    })();

    return (
        <section id="download" className="scroll-mt-24 pb-32 pt-12">
            <Wrapper className="px-4 md:px-8">
                <div ref={containerRef} className="relative rounded-[2.5rem]">
                    {border}
                    <div className="relative rounded-[2.5rem] bg-background p-10 text-center md:p-20">
                        <div className="relative mx-auto max-w-2xl">
                            <img src="/images/app-icon.png" alt="" width={72} height={72} className="mx-auto mb-8 size-[72px] rounded-[18px] shadow-[0_20px_50px_-12px_rgba(220,22,18,0.6)]" />
                            <h2 className="text-balance text-4xl font-semibold leading-tight md:text-6xl">
                                {cta.titleLead}{" "}
                                <span className="bg-gradient-to-r from-primary to-[#ff5a55] bg-clip-text text-transparent">{cta.titleAccent}</span>
                            </h2>
                            <p className="mx-auto mt-6 max-w-md text-base text-muted-foreground md:text-lg">{cta.body}</p>
                            <div className="mt-8 flex justify-center">
                                <GooglePlayBadge locale={locale} alt={common.googlePlayAlt} />
                            </div>
                            <div className="mt-6 flex justify-center">
                                <Link
                                    href={localePath(locale, "support")}
                                    className="group inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                                >
                                    {cta.secondary}
                                    <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
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

const SectionHeading = ({ eyebrow, title, description }: { eyebrow: string; title: React.ReactNode; description?: string }) => (
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
        {description && <p className="mx-auto mt-5 max-w-xl text-balance text-base text-muted-foreground md:text-lg">{description}</p>}
    </motion.div>
);

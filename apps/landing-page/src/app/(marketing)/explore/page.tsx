"use client";

import { motion } from "framer-motion";
import { Apple, Calendar, Smartphone } from "lucide-react";

import { Wrapper } from "@/components";
import { HeroHeader } from "@/components/ui/hero-section";
import { PhoneFrame } from "@/components/ui/phone-frame";
import { WaitlistForm } from "@/components/ui/waitlist-form";

const ExplorePage = () => {
    return (
        <>
            <HeroHeader />

            <main className="relative w-full overflow-hidden">
                <BackgroundGlow />

                <section className="relative pt-32 md:pt-40 pb-32">
                    <Wrapper className="px-4 md:px-8">
                        <div className="grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
                            <motion.div
                                initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
                                animate={{ opacity: 1, y: 0, filter: "blur(0)" }}
                                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                                className="text-center lg:text-left"
                            >
                                <span className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/40 px-3 py-1 text-xs font-medium uppercase tracking-widest text-muted-foreground backdrop-blur-md">
                                    <Calendar className="h-3.5 w-3.5" /> Launching summer 2026
                                </span>
                                <h1 className="mt-6 text-balance text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl">
                                    The app drops{" "}
                                    <span className="bg-gradient-to-r from-primary to-[#ff5a55] bg-clip-text text-transparent">
                                        in waves.
                                    </span>
                                </h1>
                                <p className="mx-auto mt-6 max-w-xl text-balance text-base text-muted-foreground md:text-lg lg:mx-0">
                                    Stores aren&apos;t open yet. Join the waitlist and we&apos;ll send your invite the moment your wave is up — iOS first, Android right after.
                                </p>

                                <div className="mt-8 max-w-md mx-auto lg:mx-0">
                                    <WaitlistForm cta="Get my invite" helper="No spam, unsubscribe anytime." />
                                </div>

                                <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
                                    <div className="inline-flex items-center gap-3 rounded-2xl border border-border/60 bg-background/40 px-5 py-3 backdrop-blur-md opacity-70">
                                        <Apple className="h-6 w-6" />
                                        <div className="text-left">
                                            <p className="text-[10px] uppercase tracking-widest text-muted-foreground">
                                                Coming soon
                                            </p>
                                            <p className="text-sm font-semibold">App Store</p>
                                        </div>
                                    </div>
                                    <div className="inline-flex items-center gap-3 rounded-2xl border border-border/60 bg-background/40 px-5 py-3 backdrop-blur-md opacity-70">
                                        <Smartphone className="h-6 w-6" />
                                        <div className="text-left">
                                            <p className="text-[10px] uppercase tracking-widest text-muted-foreground">
                                                Coming soon
                                            </p>
                                            <p className="text-sm font-semibold">Google Play</p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, scale: 0.92, rotate: -3 }}
                                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                                className="relative mx-auto"
                            >
                                <PhoneFrame>
                                    <div className="flex h-full flex-col items-center justify-center gap-3 bg-gradient-to-b from-primary/20 via-background to-background p-6 text-center">
                                        <span className="rounded-full border border-border/60 bg-background/60 px-3 py-1 text-[10px] uppercase tracking-widest text-muted-foreground">
                                            On the way
                                        </span>
                                        <h2 className="text-2xl font-semibold leading-tight">Your invite is being staged.</h2>
                                        <p className="text-xs text-muted-foreground">
                                            Waves open every two weeks. Earlier you&apos;re in, earlier you train.
                                        </p>
                                        <div className="mt-4 grid w-full grid-cols-3 gap-2 text-center">
                                            {[
                                                { l: "Wave", v: "03" },
                                                { l: "Spots", v: "412" },
                                                { l: "ETA", v: "~14d" },
                                            ].map((s) => (
                                                <div
                                                    key={s.l}
                                                    className="rounded-xl border border-border/60 bg-background/60 p-2.5"
                                                >
                                                    <p className="text-[9px] uppercase tracking-widest text-muted-foreground">
                                                        {s.l}
                                                    </p>
                                                    <p className="mt-1 text-sm font-semibold">{s.v}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </PhoneFrame>
                            </motion.div>
                        </div>
                    </Wrapper>
                </section>
            </main>
        </>
    );
};

export default ExplorePage;

const BackgroundGlow = () => (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-12rem] h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-primary/20 blur-[10rem]" />
        <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)] dotPattern opacity-40" />
    </div>
);

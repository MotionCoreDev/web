"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Check, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

interface WaitlistFormProps {
    className?: string;
    variant?: "hero" | "inline" | "stacked";
    placeholder?: string;
    cta?: string;
    helper?: React.ReactNode;
}

export function WaitlistForm({
    className,
    variant = "hero",
    placeholder = "your@email.com",
    cta = "Join the waitlist",
    helper,
}: WaitlistFormProps) {
    const [email, setEmail] = React.useState("");
    const [status, setStatus] = React.useState<"idle" | "loading" | "success">("idle");

    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email || status !== "idle") return;
        setStatus("loading");
        await new Promise((r) => setTimeout(r, 700));
        setStatus("success");
    };

    const isStacked = variant === "stacked";

    return (
        <form onSubmit={onSubmit} className={cn("w-full", className)}>
            <div
                className={cn(
                    isStacked ? "flex flex-col gap-3" : "flex flex-col gap-2 sm:flex-row sm:items-stretch",
                )}
            >
                <div className="group relative flex-1 min-w-0">
                    <div className="pointer-events-none absolute -inset-px rounded-xl bg-gradient-to-r from-primary/40 via-primary/10 to-transparent opacity-0 blur-md transition-opacity duration-500 group-focus-within:opacity-100" />
                    <Input
                        type="email"
                        required
                        value={email}
                        disabled={status !== "idle"}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder={placeholder}
                        className="relative h-12 w-full rounded-[10px] border-border/60 bg-background/80 px-4 text-base shadow-sm backdrop-blur-md transition-colors placeholder:text-muted-foreground/70 focus-visible:border-primary/60 focus-visible:ring-2 focus-visible:ring-primary/25 focus-visible:ring-offset-0"
                    />
                </div>

                <Button
                    type="submit"
                    size="lg"
                    disabled={status !== "idle"}
                    className={cn(
                        "h-12 shrink-0 rounded-[15px] px-6 text-base shadow-[0_8px_30px_-8px_rgba(220,22,18,0.6)]",
                        isStacked ? "w-full" : "w-full sm:w-auto",
                    )}
                >
                    <AnimatePresence mode="wait" initial={false}>
                        {status === "idle" && (
                            <motion.span
                                key="idle"
                                initial={{ opacity: 0, y: 6 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -6 }}
                                className="flex items-center"
                            >
                                {cta}
                            </motion.span>
                        )}
                        {status === "loading" && (
                            <motion.span
                                key="loading"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="flex items-center"
                            >
                                Saving
                            </motion.span>
                        )}
                        {status === "success" && (
                            <motion.span
                                key="ok"
                                initial={{ opacity: 0, y: 6 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -6 }}
                                className="flex items-center"
                            >
                                You&apos;re in
                            </motion.span>
                        )}
                    </AnimatePresence>
                </Button>
            </div>

            {helper && (
                <p className="mt-3 text-center text-xs text-muted-foreground sm:text-left">{helper}</p>
            )}
        </form>
    );
}

export default WaitlistForm;

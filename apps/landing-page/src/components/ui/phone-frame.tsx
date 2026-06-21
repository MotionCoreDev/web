import * as React from "react";
import { cn } from "@/lib/utils";

interface PhoneFrameProps {
    className?: string;
    innerClassName?: string;
    children?: React.ReactNode;
}

export function PhoneFrame({ className, innerClassName, children }: PhoneFrameProps) {
    return (
        <div
            className={cn(
                "relative mx-auto aspect-[9/19] w-[280px] rounded-[2.6rem] border border-border/70 bg-gradient-to-b from-foreground/10 via-background to-background p-[6px] shadow-[0_30px_80px_-20px_rgba(220,22,18,0.45)]",
                className,
            )}
        >
            {/* outer glow */}
            <div className="pointer-events-none absolute -inset-px rounded-[2.6rem] bg-gradient-to-b from-primary/30 via-transparent to-transparent opacity-60 blur-md" />

            {/* notch */}
            <div className="absolute left-1/2 top-[10px] z-20 h-5 w-24 -translate-x-1/2 rounded-full bg-background/95 ring-1 ring-border/60" />

            {/* side buttons */}
            <div className="absolute -left-[2px] top-24 h-10 w-[3px] rounded-l bg-border/80" />
            <div className="absolute -left-[2px] top-40 h-16 w-[3px] rounded-l bg-border/80" />
            <div className="absolute -right-[2px] top-32 h-20 w-[3px] rounded-r bg-border/80" />

            <div
                className={cn(
                    "relative h-full w-full overflow-hidden rounded-[2.2rem] bg-background",
                    innerClassName,
                )}
            >
                {children}
            </div>
        </div>
    );
}

export default PhoneFrame;

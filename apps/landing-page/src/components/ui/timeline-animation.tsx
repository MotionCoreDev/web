"use client";

import { motion } from "framer-motion";
import React from "react";
import { cn } from "@/lib/utils";

interface TimelineContentProps {
    children: React.ReactNode;
    className?: string;
    timelineRef?: React.RefObject<HTMLDivElement>;
    animationNum?: number;
    customVariants?: any;
    as?: React.ElementType;
}

export const TimelineContent = ({
    children,
    className,
    timelineRef,
    animationNum = 0,
    customVariants,
    as = "div",
}: TimelineContentProps) => {
    const Component = motion(as as any);

    // Custom implementation to support the reveal effect properly
    // Since we don't have the original code, we simulate the stagger using InView

    const defaultVariants = {
        hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
        visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.5 } }
    };

    const variants = customVariants || defaultVariants;

    return (
        <Component
            className={className}
            variants={variants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            custom={animationNum}
        >
            {children}
        </Component>
    );
};

"use client";

import Link from "next/link";
const TwitterIcon = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
);

const LinkedinIcon = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
        <path fillRule="evenodd" d="M20.33 2c.922 0 1.67.748 1.67 1.67v16.66A1.67 1.67 0 0 1 20.33 22H3.67A1.67 1.67 0 0 1 2 20.33V3.67C2 2.749 2.748 2 3.67 2zm-4.811 7.5c-1.42 0-2.39.627-2.823 1.356l-.071.13V9.625H9.917v9.583h2.916v-4.642c0-1.556.573-2.545 1.95-2.545.95 0 1.349.84 1.381 2.337l.003.208v4.642h2.916v-5.293c0-2.857-.683-4.415-3.564-4.415m-7.686 0H4.917v9.583h2.916zm-1.458-5a1.875 1.875 0 1 0 0 3.75 1.875 1.875 0 0 0 0-3.75"/>
    </svg>
);

const InstagramIcon = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
        <path d="M17.34 5.46a1.2 1.2 0 1 0 1.2 1.2 1.2 1.2 0 0 0-1.2-1.2m4.6 2.42a7.6 7.6 0 0 0-.46-2.43 4.9 4.9 0 0 0-1.16-1.77 4.7 4.7 0 0 0-1.77-1.15 7.3 7.3 0 0 0-2.43-.47C15.06 2 14.72 2 12 2s-3.06 0-4.12.06a7.3 7.3 0 0 0-2.43.47 4.8 4.8 0 0 0-1.77 1.15 4.7 4.7 0 0 0-1.15 1.77 7.3 7.3 0 0 0-.47 2.43C2 8.94 2 9.28 2 12s0 3.06.06 4.12a7.3 7.3 0 0 0 .47 2.43 4.7 4.7 0 0 0 1.15 1.77 4.8 4.8 0 0 0 1.77 1.15 7.3 7.3 0 0 0 2.43.47C8.94 22 9.28 22 12 22s3.06 0 4.12-.06a7.3 7.3 0 0 0 2.43-.47 4.7 4.7 0 0 0 1.77-1.15 4.85 4.85 0 0 0 1.16-1.77 7.6 7.6 0 0 0 .46-2.43c0-1.06.06-1.4.06-4.12s0-3.06-.06-4.12M20.14 16a5.6 5.6 0 0 1-.34 1.86 3.06 3.06 0 0 1-.75 1.15 3.2 3.2 0 0 1-1.15.75 5.6 5.6 0 0 1-1.86.34c-1 .05-1.37.06-4 .06s-3 0-4-.06a5.7 5.7 0 0 1-1.94-.3 3.3 3.3 0 0 1-1.1-.75 3 3 0 0 1-.74-1.15 5.5 5.5 0 0 1-.4-1.9c0-1-.06-1.37-.06-4s0-3 .06-4a5.5 5.5 0 0 1 .35-1.9A3 3 0 0 1 5 5a3.1 3.1 0 0 1 1.1-.8A5.7 5.7 0 0 1 8 3.86c1 0 1.37-.06 4-.06s3 0 4 .06a5.6 5.6 0 0 1 1.86.34 3.06 3.06 0 0 1 1.19.8 3.1 3.1 0 0 1 .75 1.1 5.6 5.6 0 0 1 .34 1.9c.05 1 .06 1.37.06 4s-.01 3-.06 4M12 6.87A5.13 5.13 0 1 0 17.14 12 5.12 5.12 0 0 0 12 6.87m0 8.46A3.33 3.33 0 1 1 15.33 12 3.33 3.33 0 0 1 12 15.33"/>
    </svg>
);

import { AppStoreButton } from "@/components/ui/app-store-button";
import { PlayStoreButton } from "@/components/ui/play-store-button";

const footerLinks = [
    {
        title: "App",
        links: [
            { href: "/features", label: "Features" },
            { href: "/product", label: "The app tour" },
            { href: "/#waitlist", label: "Join the waitlist" },
            { href: "/explore", label: "Launch waves" },
            { href: "/resources", label: "Press kit" },
        ],
    },
    {
        title: "Community",
        links: [
            { href: "#", label: "Beta diaries" },
            { href: "#", label: "Athlete stories" },
            { href: "#", label: "Coach mode" },
            { href: "#", label: "Affiliate program" },
            { href: "#", label: "Refer a friend" },
        ],
    },
    {
        title: "Support",
        links: [
            { href: "#", label: "Help center" },
            { href: "#", label: "Getting started" },
            { href: "#", label: "Pro plan" },
            { href: "/contact", label: "Contact us" },
            { href: "#", label: "System status" },
        ],
    },
    {
        title: "Legal",
        links: [
            { href: "/terms", label: "Terms of service" },
            { href: "/privacy", label: "Privacy policy" },
            { href: "#", label: "Cookie notice" },
            { href: "#", label: "Trust center" },
            { href: "#", label: "Cookie preferences" },
        ],
    },
];

const socialLinks = [
    { icon: LinkedinIcon, href: "#", label: "LinkedIn" },
    { icon: InstagramIcon, href: "#", label: "Instagram" },
    { icon: TwitterIcon, href: "#", label: "X" },
];

export function Footer2() {
    return (
        <footer className="relative w-full overflow-hidden border-t border-border bg-card/60 backdrop-blur-md">
            <div className="relative mx-auto max-w-6xl px-4 lg:px-6">
                {/* Brand row */}
                <div className="flex flex-col gap-4 py-10 md:flex-row md:items-center md:justify-between">
                    <div className="flex items-center gap-3">
                        <img
                            src="/images/App_Icon.png"
                            alt="MotionCore App Icon"
                            className="h-[48px] w-auto rounded-[10px] shrink-0"
                        />
                        <div>
                            <Link href="/" className="inline-flex items-center">
                                <span style={{ fontFamily: "GothamUltraItalic, sans-serif", color: "#DC1612", fontSize: "1.1rem" }}>
                                    MotionCore
                                </span>
                            </Link>
                            <p className="mt-0 max-w-md text-sm text-muted-foreground">
                                The adaptive training app for people who actually show up.
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-3 md:shrink-0 md:justify-end">
                        <Link href="/#waitlist" aria-label="Join waitlist for App Store">
                            <img src="/images/App_Store.png" alt="Download on the App Store" className="h-[48px] w-auto" />
                        </Link>
                        <Link href="/#waitlist" aria-label="Join waitlist for Google Play">
                            <img src="/images/Google_Play_Store.png" alt="Get it on Google Play" className="h-[48px] w-auto" />
                        </Link>
                    </div>
                </div>

                <div className="h-px bg-border" />

                {/* Link grid */}
                <div className="grid grid-cols-2 gap-8 py-10 md:grid-cols-4">
                    {footerLinks.map((section) => (
                        <div key={section.title}>
                            <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-foreground">
                                {section.title}
                            </h3>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                                {section.links.map((link) => (
                                    <li key={link.label}>
                                        <Link href={link.href} className="transition-colors hover:text-foreground">
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="h-px bg-border" />

                <div className="flex flex-wrap items-center justify-between gap-4 py-5">
                    <p className="text-xs text-muted-foreground">
                        © 2026 MotionCore. Train smarter - show up daily.
                    </p>
                    <div className="flex items-center gap-4">
                        {socialLinks.map(({ icon: Icon, href, label }, i) => (
                            <Link
                                key={i}
                                href={href}
                                aria-label={label}
                                className="text-muted-foreground transition-colors hover:text-foreground"
                            >
                                <Icon className="size-4" />
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer2;

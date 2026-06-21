import { Footer, Navbar, Providers } from "@/components";
import { cn } from "@/lib/utils";
import "@/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { createMetadata } from "@startup/config";
import { Metadata } from "next";

const baseMetadata = createMetadata("landing");

export const metadata: Metadata = {
    ...baseMetadata,
    icons: {
        icon: [
            { rel: "icon", url: "/favicon.ico" },
            { rel: "icon", type: "image/svg+xml", url: "/icon0.svg" },
            { rel: "icon", type: "image/png", url: "/icon1.png" },
        ],
        apple: "/apple-icon.png",
    },
    appleWebApp: {
        capable: true,
        statusBarStyle: "default",
        title: "MotionCore",
    },
    manifest: "/manifest.json",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body
                className={cn(
                    "min-h-screen bg-background text-foreground antialiased max-w-full overflow-x-hidden",
                    GeistSans.variable,
                    GeistMono.variable
                )}
            >
                <Providers>
                    {children}
                </Providers>
            </body>
        </html>
    );
};

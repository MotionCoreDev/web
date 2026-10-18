import localFont from "next/font/local";

// The app's own typefaces, self-hosted: General Sans for text, Gotham Ultra Italic for the wordmark.
export const generalSans = localFont({
    src: [
        { path: "../fonts/GeneralSans-Regular.otf", weight: "400", style: "normal" },
        { path: "../fonts/GeneralSans-Medium.otf", weight: "500", style: "normal" },
        { path: "../fonts/GeneralSans-Semibold.otf", weight: "600", style: "normal" },
        { path: "../fonts/GeneralSans-Bold.otf", weight: "700", style: "normal" },
    ],
    variable: "--font-sans",
    display: "swap",
});

export const gotham = localFont({
    src: [{ path: "../fonts/Gotham-UltraItalic.ttf", weight: "900", style: "italic" }],
    variable: "--font-brand",
    display: "swap",
    preload: false,
});

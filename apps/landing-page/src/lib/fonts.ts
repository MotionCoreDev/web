import localFont from "next/font/local";
import { Montserrat } from "next/font/google";

// The app's own typefaces, self-hosted: General Sans for text, Montserrat Black Italic for the wordmark.
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

// Downloaded from Google Fonts at build time and served from this site (SIL Open Font License).
export const brandFont = Montserrat({
    weight: "900",
    style: "italic",
    subsets: ["latin"],
    variable: "--font-brand",
    display: "swap",
    preload: false,
});

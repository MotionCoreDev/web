import { Figtree, Montserrat } from "next/font/google";

// Both fonts are under the SIL Open Font License. next/font downloads them at build time and the
// site serves them itself, so no font files live in this public repository.
// (The app's text font, General Sans, may not be redistributed, so the site uses Figtree.)

export const textFont = Figtree({
    weight: ["400", "500", "600", "700"],
    subsets: ["latin", "latin-ext"],
    variable: "--font-sans",
    display: "swap",
});

// Montserrat Black Italic, for the MotionCore wordmark only.
export const brandFont = Montserrat({
    weight: "900",
    style: "italic",
    subsets: ["latin"],
    variable: "--font-brand",
    display: "swap",
    preload: false,
});

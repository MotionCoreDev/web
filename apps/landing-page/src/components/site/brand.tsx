import Link from "next/link";
import { STORE_LINKS } from "@startup/config";
import { cn } from "@/lib/utils";
import { localePath, type Locale } from "@/i18n/config";

/** The MotionCore wordmark, set in the app's Gotham Ultra Italic. */
export function Wordmark({ locale, className }: { locale: Locale; className?: string }) {
    return (
        <Link href={localePath(locale)} aria-label="MotionCore" className={cn("inline-flex items-center gap-2", className)}>
            <span className="font-brand text-[1.35rem] italic leading-none text-primary">MotionCore</span>
        </Link>
    );
}

/** Google's official, localized "Get it on Google Play" badge, linked to the store listing. */
export function GooglePlayBadge({ locale, alt, className }: { locale: Locale; alt: string; className?: string }) {
    return (
        <a
            href={STORE_LINKS.googlePlay}
            target="_blank"
            rel="noopener noreferrer"
            className={cn("inline-block rounded-xl transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring", className)}
        >
            {/* The badge art has transparent padding of its own, so the visible pill is a bit smaller. */}
            <img src={`/images/google-play-${locale}.png`} alt={alt} width={646} height={250} className="h-[62px] w-auto" />
        </a>
    );
}

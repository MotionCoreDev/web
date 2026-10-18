/*
 * The shape every language file fills in. Strings may use two inline marks, rendered by RichText:
 *   **bold**            -> <strong>
 *   [label](/support)   -> a link; paths starting with "/" stay inside the current language
 *   {email}             -> the contact address, as a mailto link
 */

export type LegalBlock =
    | { type: "p"; text: string }
    | { type: "list"; items: string[] }
    | { type: "table"; head: [string, string]; rows: [string, string][] }
    | { type: "callout"; text: string };

export interface LegalSection {
    id: string;
    title: string;
    blocks: LegalBlock[];
}

export interface LegalDoc {
    title: string;
    /** Shown under the title, already formatted for the language ("18 October 2026"). */
    effective: string;
    intro: string;
    sections: LegalSection[];
}

export interface TitledText {
    title: string;
    body: string;
}

export interface PageMeta {
    title: string;
    description: string;
}

export interface Dictionary {
    meta: {
        siteName: string;
        home: PageMeta;
        support: PageMeta;
        deleteAccount: PageMeta;
        privacy: PageMeta;
        terms: PageMeta;
    };
    nav: {
        features: string;
        howItWorks: string;
        faq: string;
        support: string;
        download: string;
        openMenu: string;
        closeMenu: string;
        language: string;
        skipToContent: string;
    };
    common: {
        googlePlayAlt: string;
        availability: string;
        effectiveLabel: string;
        contents: string;
        backToTop: string;
        emailUs: string;
    };
    home: {
        hero: {
            eyebrow: string;
            titleLead: string;
            titleAccent: string;
            subtitle: string;
            secondaryCta: string;
            hud: { full: string; half: string; time: string; cue: string; exercise: string };
        };
        ribbon: string[];
        showcase: {
            eyebrow: string;
            titleLead: string;
            titleAccent: string;
            description: string;
            tracking: { tag: string; title: string; body: string; chips: string[] };
            battle: TitledText;
            leaderboard: TitledText;
            library: TitledText & { exercises: string[] };
            progress: TitledText;
        };
        features: {
            eyebrow: string;
            titleLead: string;
            titleAccent: string;
            description: string;
            items: TitledText[];
        };
        privacy: {
            eyebrow: string;
            title: string;
            body: string;
            link: string;
            stats: { value: string; label: string }[];
        };
        steps: {
            eyebrow: string;
            titleLead: string;
            titleAccent: string;
            description: string;
            stepLabel: string;
            items: TitledText[];
        };
        faq: {
            eyebrow: string;
            titleLead: string;
            titleAccent: string;
            items: { q: string; a: string }[];
        };
        cta: {
            titleLead: string;
            titleAccent: string;
            body: string;
            secondary: string;
        };
    };
    footer: {
        tagline: string;
        columns: { app: string; help: string; legal: string };
        links: {
            features: string;
            howItWorks: string;
            faq: string;
            support: string;
            deleteAccount: string;
            privacy: string;
            terms: string;
        };
        rights: string;
    };
    support: {
        title: string;
        intro: string;
        contact: TitledText & { note: string };
        inApp: TitledText;
        topics: { title: string; items: TitledText[] };
        deletion: TitledText & { cta: string };
    };
    deletion: {
        title: string;
        intro: string;
        app: string;
        inApp: { title: string; badge: string; steps: string[] };
        form: {
            title: string;
            intro: string;
            email: string;
            emailHelp: string;
            scope: string;
            scopeAccount: string;
            scopeAccountHelp: string;
            scopeData: string;
            scopeDataHelp: string;
            dataItems: string[];
            details: string;
            detailsPlaceholder: string;
            confirm: string;
            submit: string;
            submitting: string;
            successTitle: string;
            successBody: string;
            again: string;
            errorGeneric: string;
            errorEmail: string;
            errorConfirm: string;
            errorData: string;
            privacyNote: string;
        };
        email: TitledText;
        deleted: { title: string; items: string[]; note: string };
    };
    legal: {
        privacy: LegalDoc;
        terms: LegalDoc;
    };
}

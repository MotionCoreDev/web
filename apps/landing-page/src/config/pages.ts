import { Metadata } from "next";

export const PAGES_METADATA = {
    auth: {
        signIn: {
            title: "Sign In",
            description: "Sign in to your account",
        } as Metadata,
        signUp: {
            title: "Sign Up",
            description: "Create your account",
        } as Metadata,
        forgotPassword: {
            title: "Forgot Password",
            description: "Reset your password",
        } as Metadata,
        twoFactor: {
            title: "Two-Factor Authentication",
            description: "Verify your identity with two-factor authentication",
        } as Metadata,
    },
    marketing: {
        about: {
            title: "About Us",
            description: "About MotionCore",
        } as Metadata,
        privacy: {
            title: "Privacy Policy",
            description: "Privacy Policy",
        } as Metadata,
        terms: {
            title: "Terms of Use",
            description: "Terms & Conditions",
        } as Metadata,
        pricing: {
            title: "Pricing",
            description: "Use MotionCore for free. Upgrade for more features.",
        } as Metadata,
        contact: {
            title: "Contact Us",
            description: "Get in touch with us",
        } as Metadata,
        features: {
            title: "Features",
            description: "Features",
        } as Metadata,
        resources: {
            title: "Resources",
            description: "Resources",
        } as Metadata,
        company: {
            title: "Company",
            description: "Company Information",
        } as Metadata,
        product: {
            title: "Product",
            description: "Our Product",
        } as Metadata,
        explore: {
            title: "Explore",
            description: "Explore MotionCore",
        } as Metadata,
        home: {
            title: "Home",
            description: "The adaptive training app for people who actually show up",
        } as Metadata,
    },
} as const;

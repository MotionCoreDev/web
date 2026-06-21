import { Icons } from "@/components";
import {
    Bell,
    BarChart3,
    Brain,
    Compass,
    Dumbbell,
    Flame,
    HeartPulse,
    Repeat,
    Shield,
    Sparkles,
    Timer,
    Trophy,
} from "lucide-react";

export const perks = [
    {
        icon: Compass,
        title: "Set your goal",
        info: "Pick what you want to train — strength, endurance, mobility — and your level.",
    },
    {
        icon: Sparkles,
        title: "Get a plan",
        info: "MotionCore builds an adaptive plan that matches your week, not the other way around.",
    },
    {
        icon: Trophy,
        title: "Show up. Track. Win.",
        info: "Log sessions in seconds, watch streaks build, beat last week's you.",
    },
];

export const features = [
    {
        icon: Brain,
        title: "Adaptive AI coach",
        info: "Your plan adjusts every session based on RPE, recovery and what you actually finished.",
    },
    {
        icon: Timer,
        title: "Frictionless logging",
        info: "Tap to log a set, swipe to swap an exercise. Designed for one hand and a sweaty grip.",
    },
    {
        icon: HeartPulse,
        title: "Recovery aware",
        info: "Pulls sleep, HRV and steps from Apple Health & Google Fit to dial intensity up or down.",
    },
    {
        icon: BarChart3,
        title: "Real progress, no fluff",
        info: "Volume, PRs, consistency — surfaced clearly. No vanity charts, no leaderboards you'll never beat.",
    },
    {
        icon: Repeat,
        title: "Routines that flex",
        info: "Travel, sick, busy week? Tell the app. It re-flows the rest of your block automatically.",
    },
    {
        icon: Bell,
        title: "Smart reminders",
        info: "Nudges that learn your real schedule. Quiet on rest days, sharp on session days.",
    },
];

export const trustBadges = [
    { label: "Built with athletes", icon: Dumbbell },
    { label: "Privacy first", icon: Shield },
    { label: "Built for streaks", icon: Flame },
];

export const faqItems = [
    {
        q: "When does MotionCore launch?",
        a: "We're rolling out to waitlist members in waves starting this summer. Earlier you join, earlier you get in.",
    },
    {
        q: "Which platforms will it support?",
        a: "iOS first, Android right after. The waitlist counts for both — pick your platform when we send your invite.",
    },
    {
        q: "Will it be free?",
        a: "There's a generous free tier for tracking and basic plans. Adaptive coaching and analytics live in MotionCore Pro.",
    },
    {
        q: "Do I need a wearable?",
        a: "No. MotionCore works great solo, but if you have an Apple Watch, Garmin or Whoop we'll use that data to coach smarter.",
    },
    {
        q: "What happens after I join the waitlist?",
        a: "You'll get an email confirming your spot, occasional progress notes, and your invite link the moment your wave opens.",
    },
];

export const showcaseCards = [
    {
        title: "Today",
        subtitle: "Push · Upper",
        meta: "52 min",
        accent: "from-primary/30 to-primary/5",
    },
    {
        title: "Streak",
        subtitle: "21 days",
        meta: "PR week",
        accent: "from-orange-500/30 to-orange-500/5",
    },
    {
        title: "Recovery",
        subtitle: "Ready",
        meta: "HRV +6",
        accent: "from-emerald-500/30 to-emerald-500/5",
    },
];

export const pricingCards = [
    {
        title: "Free",
        description: "Track your training, no strings",
        price: "$0",
        duration: "forever",
        highlight: "Includes",
        buttonText: "Join waitlist",
        features: ["Unlimited workout logging", "Built-in exercise library", "Streaks & basic stats"],
        priceId: "",
    },
    {
        title: "Pro",
        description: "Adaptive coaching that gets you",
        price: "$8",
        duration: "month",
        highlight: "Everything in Free, plus",
        buttonText: "Get early access",
        features: ["Adaptive AI plans", "Recovery-aware loading", "Advanced analytics", "Apple Health & Wear OS sync"],
        priceId: "",
    },
    {
        title: "Team",
        description: "Coaches & training squads",
        price: "$24",
        duration: "month",
        highlight: "Everything in Pro, plus",
        buttonText: "Talk to us",
        features: ["Up to 10 athletes", "Coach dashboard", "Shared programs", "Priority support"],
        priceId: "",
    },
];

export const bentoCards = [
    {
        title: "Start in 30 seconds",
        info: "Pick a goal, set your days, get a plan. No 14-screen onboarding.",
        imgSrc: "/assets/bento-1.svg",
        alt: "Quick onboarding",
    },
    {
        title: "Coach in your pocket",
        info: "Adaptive AI rewrites tomorrow's session based on how today went.",
        imgSrc: "/assets/bento1.svg",
        alt: "AI coach",
    },
    {
        title: "Built for the gym floor",
        info: "Big tap targets, glanceable timers, swipe-to-log. One hand, every time.",
        imgSrc: "/assets/bento1.svg",
        alt: "Gym-friendly UI",
    },
    {
        title: "Your data stays yours",
        info: "Export anytime. End-to-end encryption on personal metrics.",
        imgSrc: "/assets/bento1.svg",
        alt: "Privacy first",
    },
];

export const reviews = [
    {
        name: "Mira",
        username: "@mira.lifts",
        body: "Logged a full session without unlocking my phone twice. This is the bar.",
    },
    {
        name: "Deniz",
        username: "@denizruns",
        body: "Adjusted my whole week after a bad sleep score. Felt like a real coach moved in.",
    },
    {
        name: "Jordan",
        username: "@jordan.b",
        body: "Finally an app that doesn't gamify my recovery into the ground.",
    },
    {
        name: "Aylin",
        username: "@aylin.fit",
        body: "I deleted three other trackers the week I got my MotionCore invite.",
    },
    {
        name: "Sam",
        username: "@samgrips",
        body: "Streak view is borderline addictive. Hit 60 days, didn't notice.",
    },
    {
        name: "Kai",
        username: "@kai.training",
        body: "The plan flex on travel weeks alone is worth it.",
    },
];

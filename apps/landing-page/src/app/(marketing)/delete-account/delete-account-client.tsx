"use client";

import * as React from "react";
import { Container } from "@/components";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { HeroHeader } from "@/components/ui/hero-section";
import {
    Activity,
    AlertCircle,
    AlertTriangle,
    CheckCircle2,
    Clock,
    CreditCard,
    FileText,
    HeartPulse,
    HelpCircle,
    Mail,
    Send,
    Shield,
    ShieldAlert,
    Smartphone,
    Trash2,
    UserX,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export const DeleteAccountClient = () => {
    const [email, setEmail] = React.useState("");
    const [reason, setReason] = React.useState("");
    const [confirmed, setConfirmed] = React.useState(false);
    const [status, setStatus] = React.useState<"idle" | "submitting" | "submitted">("idle");
    const [errorMessage, setErrorMessage] = React.useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setErrorMessage(null);

        if (!email.trim()) {
            setErrorMessage("Please enter a valid email address.");
            return;
        }

        if (!confirmed) {
            setErrorMessage("Please check the confirmation box before submitting.");
            return;
        }

        setStatus("submitting");
        // Simulate sending deletion request
        await new Promise((resolve) => setTimeout(resolve, 900));
        setStatus("submitted");
    };

    return (
        <div className="flex flex-col min-h-screen relative bg-background">
            <HeroHeader />

            {/* Hero Section */}
            <section className="relative pt-24 pb-14 md:pt-32 md:pb-20 overflow-hidden">
                <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-destructive/10 via-background to-background" />
                <Container>
                    <div className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-6">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <Badge variant="outline" className="px-4 py-1.5 text-sm rounded-full border-destructive/30 text-destructive bg-destructive/5 mb-4">
                                <UserX className="w-3.5 h-3.5 mr-2" />
                                Google Play &amp; Data Compliance
                            </Badge>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-4xl md:text-6xl font-bold tracking-tight text-foreground"
                        >
                            Delete Your Account &amp; Data
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto"
                        >
                            You have full control over your personal information. In compliance with Google Play Developer Policies,
                            you can submit an account and data erasure request directly from this web page without needing the MotionCore app installed.
                        </motion.p>
                    </div>
                </Container>
            </section>

            {/* Main Content */}
            <section className="py-12 md:py-20">
                <Container>
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 max-w-6xl mx-auto">

                        {/* Left Column: Form (7 cols) */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="lg:col-span-7 space-y-6"
                        >
                            <Card className="border-border/60 bg-card/60 backdrop-blur-sm shadow-md">
                                <CardHeader className="space-y-2">
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 bg-destructive/10 text-destructive rounded-lg">
                                            <Trash2 className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <CardTitle className="text-xl">Account Deletion Request</CardTitle>
                                            <CardDescription>
                                                Submit your account email below to initiate permanent data erasure.
                                            </CardDescription>
                                        </div>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <AnimatePresence mode="wait">
                                        {status === "submitted" ? (
                                            <motion.div
                                                key="success"
                                                initial={{ opacity: 0, scale: 0.95 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                className="p-6 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-center space-y-4"
                                            >
                                                <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 mx-auto flex items-center justify-center">
                                                    <CheckCircle2 className="w-6 h-6" />
                                                </div>
                                                <h3 className="text-lg font-semibold text-foreground">Deletion Request Received</h3>
                                                <p className="text-sm text-muted-foreground leading-relaxed">
                                                    We have received the deletion request for{" "}
                                                    <strong className="text-foreground font-medium">{email}</strong>.
                                                    A verification email has been dispatched to confirm account ownership.
                                                </p>
                                                <div className="p-3 bg-background rounded-lg border border-border/50 text-xs text-muted-foreground text-left space-y-1">
                                                    <p>• <strong>Timeline:</strong> Once verified, your account and associated records will be permanently erased within 30 calendar days.</p>
                                                    <p>• <strong>Subscriptions:</strong> If you have an active Google Play subscription, remember to cancel it in the Google Play Store app.</p>
                                                </div>
                                                <Button
                                                    variant="outline"
                                                    size="sm"
                                                    onClick={() => {
                                                        setStatus("idle");
                                                        setEmail("");
                                                        setReason("");
                                                        setConfirmed(false);
                                                    }}
                                                    className="mt-2 text-xs"
                                                >
                                                    Submit Another Request
                                                </Button>
                                            </motion.div>
                                        ) : (
                                            <form onSubmit={handleSubmit} className="space-y-6">
                                                <div className="space-y-2">
                                                    <Label htmlFor="account-email" className="text-sm font-medium">
                                                        MotionCore Account Email <span className="text-destructive">*</span>
                                                    </Label>
                                                    <Input
                                                        id="account-email"
                                                        type="email"
                                                        required
                                                        value={email}
                                                        onChange={(e) => setEmail(e.target.value)}
                                                        placeholder="athlete@example.com"
                                                        disabled={status === "submitting"}
                                                        className="h-11 bg-background/80"
                                                    />
                                                    <p className="text-xs text-muted-foreground">
                                                        Enter the exact email address linked to your MotionCore mobile or web account.
                                                    </p>
                                                </div>

                                                <div className="space-y-2">
                                                    <Label htmlFor="reason" className="text-sm font-medium">
                                                        Reason for Deletion <span className="text-xs text-muted-foreground">(Optional)</span>
                                                    </Label>
                                                    <Textarea
                                                        id="reason"
                                                        rows={3}
                                                        value={reason}
                                                        onChange={(e) => setReason(e.target.value)}
                                                        placeholder="Let us know why you're leaving or if you experienced any issues..."
                                                        disabled={status === "submitting"}
                                                        className="resize-none bg-background/80"
                                                    />
                                                </div>

                                                <div className="p-4 rounded-lg bg-destructive/5 border border-destructive/20 space-y-3">
                                                    <div className="flex items-start gap-3">
                                                        <input
                                                            id="confirm-deletion"
                                                            type="checkbox"
                                                            checked={confirmed}
                                                            onChange={(e) => setConfirmed(e.target.checked)}
                                                            className="h-4 w-4 rounded border-border text-destructive focus:ring-destructive mt-1 cursor-pointer"
                                                        />
                                                        <label htmlFor="confirm-deletion" className="text-xs text-muted-foreground leading-relaxed cursor-pointer">
                                                            <strong className="text-foreground font-semibold">I understand this action is permanent:</strong> All of my personal profile data, workout histories, repetition records, pose estimation statistics, and account access will be permanently deleted and cannot be recovered.
                                                        </label>
                                                    </div>
                                                </div>

                                                {errorMessage && (
                                                    <div className="flex items-center gap-2 text-xs text-destructive bg-destructive/10 p-3 rounded-md">
                                                        <AlertCircle className="w-4 h-4 shrink-0" />
                                                        <span>{errorMessage}</span>
                                                    </div>
                                                )}

                                                <Button
                                                    type="submit"
                                                    variant="destructive"
                                                    size="lg"
                                                    disabled={status === "submitting" || !confirmed}
                                                    className="w-full h-11 text-sm font-medium"
                                                >
                                                    {status === "submitting" ? (
                                                        <span className="flex items-center gap-2">
                                                            <Clock className="w-4 h-4 animate-spin" /> Processing Request...
                                                        </span>
                                                    ) : (
                                                        <span className="flex items-center gap-2">
                                                            <Trash2 className="w-4 h-4" /> Request Permanent Account Deletion
                                                        </span>
                                                    )}
                                                </Button>

                                                <p className="text-xs text-center text-muted-foreground">
                                                    You can also email our privacy desk directly at{" "}
                                                    <a
                                                        href={`mailto:support@motioncore.com?subject=Account%20Deletion%20Request&body=Please%20permanently%20delete%20my%20MotionCore%20account%20and%20associated%20data.%20My%20registered%20email%20is:%20`}
                                                        className="font-medium text-foreground hover:underline"
                                                    >
                                                        support@motioncore.com
                                                    </a>
                                                </p>
                                            </form>
                                        )}
                                    </AnimatePresence>
                                </CardContent>
                            </Card>

                            {/* Mobile In-App Alternative */}
                            <Card className="border-border/50 bg-muted/20">
                                <CardContent className="p-4 flex items-start gap-3">
                                    <Smartphone className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                                    <div className="space-y-1 text-xs text-muted-foreground">
                                        <p className="font-medium text-foreground text-sm">Have the app installed?</p>
                                        <p>
                                            You can also delete your account instantly from within the MotionCore Android app:
                                            Open <strong className="text-foreground">Profile &gt; Settings &gt; Account &gt; Delete Account</strong>.
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>

                        {/* Right Column: Policies & Disclosures (5 cols) */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="lg:col-span-5 space-y-6"
                        >
                            {/* What Data is Deleted */}
                            <Card className="border-border/60 bg-card/60 backdrop-blur-sm">
                                <CardHeader className="pb-3">
                                    <div className="flex items-center gap-2">
                                        <Shield className="w-4 h-4 text-primary" />
                                        <CardTitle className="text-base">What Data Will Be Deleted</CardTitle>
                                    </div>
                                    <CardDescription className="text-xs">
                                        The following data is permanently purged from active databases upon confirmation:
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-3 pt-0 text-xs text-muted-foreground">
                                    <div className="flex items-start gap-2.5">
                                        <div className="h-1.5 w-1.5 rounded-full bg-destructive mt-1.5 shrink-0" />
                                        <span><strong>Profile &amp; Authentication:</strong> Name, email address, password hash, OAuth tokens, and avatar.</span>
                                    </div>
                                    <div className="flex items-start gap-2.5">
                                        <div className="h-1.5 w-1.5 rounded-full bg-destructive mt-1.5 shrink-0" />
                                        <span><strong>Workout History:</strong> Complete logs of completed sessions, exercises, sets, reps, and durations.</span>
                                    </div>
                                    <div className="flex items-start gap-2.5">
                                        <div className="h-1.5 w-1.5 rounded-full bg-destructive mt-1.5 shrink-0" />
                                        <span><strong>Pose Statistics &amp; Analytics:</strong> Joint angle metrics, form accuracy scores, cadence, and training streaks.</span>
                                    </div>
                                    <div className="flex items-start gap-2.5">
                                        <div className="h-1.5 w-1.5 rounded-full bg-destructive mt-1.5 shrink-0" />
                                        <span><strong>Preferences &amp; Customizations:</strong> Personal exercise targets, routine schedules, and app settings.</span>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Google Play Subscription Notice */}
                            <Card className="border-amber-500/30 bg-amber-500/5">
                                <CardHeader className="pb-3">
                                    <div className="flex items-center gap-2 text-amber-600 dark:text-amber-400">
                                        <CreditCard className="w-4 h-4" />
                                        <CardTitle className="text-base">Important Subscription Notice</CardTitle>
                                    </div>
                                    <CardDescription className="text-xs">
                                        Canceling automatic renewals on Google Play:
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-2 pt-0 text-xs text-muted-foreground leading-relaxed">
                                    <p>
                                        Deleting your MotionCore account permanently revokes access to premium features and internal subscription records.
                                    </p>
                                    <p className="font-medium text-foreground">
                                        However, account deletion does <u>not</u> automatically cancel third-party subscriptions billed through Google Play.
                                    </p>
                                    <p>
                                        To avoid subsequent charges, please cancel recurring subscriptions directly:
                                    </p>
                                    <ol className="list-decimal list-inside space-y-1 bg-background/50 p-2.5 rounded-md border border-border/50 text-[11px]">
                                        <li>Open the <strong className="text-foreground">Google Play Store</strong> app</li>
                                        <li>Tap your <strong className="text-foreground">Profile Icon</strong> (top right)</li>
                                        <li>Select <strong className="text-foreground">Payments &amp; subscriptions &gt; Subscriptions</strong></li>
                                        <li>Select <strong className="text-foreground">MotionCore</strong> and tap <strong className="text-foreground">Cancel subscription</strong></li>
                                    </ol>
                                </CardContent>
                            </Card>

                            {/* Processing Timeframe & Legal Basis */}
                            <Card className="border-border/60 bg-card/60 backdrop-blur-sm">
                                <CardHeader className="pb-3">
                                    <div className="flex items-center gap-2">
                                        <Clock className="w-4 h-4 text-primary" />
                                        <CardTitle className="text-base">Processing Timeframe</CardTitle>
                                    </div>
                                </CardHeader>
                                <CardContent className="space-y-2 pt-0 text-xs text-muted-foreground leading-relaxed">
                                    <p>
                                        All verified deletion requests are completely executed within <strong>30 calendar days</strong>,
                                        satisfying Google Play Developer Policy guidelines and global data protection standards (GDPR, CCPA).
                                    </p>
                                    <p className="text-[11px]">
                                        <em>Legal retention exception:</em> Anonymized error telemetry and statutory tax/accounting records are retained strictly as required by applicable commercial and tax law.
                                    </p>
                                </CardContent>
                            </Card>

                            {/* Additional Links */}
                            <div className="flex items-center justify-between text-xs text-muted-foreground px-2">
                                <Link href="/privacy" className="hover:text-foreground transition-colors underline underline-offset-4">
                                    Privacy Policy
                                </Link>
                                <Link href="/terms" className="hover:text-foreground transition-colors underline underline-offset-4">
                                    Terms of Service
                                </Link>
                                <Link href="/contact" className="hover:text-foreground transition-colors underline underline-offset-4">
                                    Contact Support
                                </Link>
                            </div>
                        </motion.div>

                    </div>
                </Container>
            </section>
        </div>
    );
};

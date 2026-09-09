"use client";

import { Container } from "@/components";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { HeroHeader } from "@/components/ui/hero-section";

import {
    Activity,
    AlertTriangle,
    Camera,
    CheckCircle2,
    Cpu,
    FileText,
    HeartPulse,
    Lock,
    Mail,
    Shield,
    ShieldCheck,
    Trash2,
    UserCheck,
} from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const tableOfContents = [
    { id: "section-1", title: "Introduction" },
    { id: "section-2", title: "Data We Collect" },
    { id: "section-3", title: "Camera Usage & On-Device Vision" },
    { id: "section-4", title: "How We Use Your Data" },
    { id: "section-5", title: "Fitness & Medical Disclaimer" },
    { id: "section-6", title: "Data Sharing & Infrastructure" },
    { id: "section-7", title: "Account Deletion & Data Retention" },
    { id: "section-8", title: "Your Legal Rights" },
    { id: "section-9", title: "Cookie Policy" },
    { id: "section-10", title: "Contact Us" },
];

export const PrivacyClient = () => {
    const lastUpdated = new Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });

    return (
        <div className="flex flex-col min-h-screen relative bg-background">
            <HeroHeader />

            {/* Header Section */}
            <section className="relative pt-24 pb-14 md:pt-32 md:pb-20 overflow-hidden">
                <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />
                <Container>
                    <div className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-6">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <Badge variant="outline" className="px-4 py-1.5 text-sm rounded-full border-primary/20 text-primary bg-primary/5 mb-4">
                                <ShieldCheck className="w-3.5 h-3.5 mr-2" />
                                Trust & Security
                            </Badge>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-4xl md:text-6xl font-bold tracking-tight text-foreground"
                        >
                            Privacy Policy
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto"
                        >
                            We value your trust and are committed to protecting your personal information.
                            Transparency, privacy by design, and user ownership are at the core of everything we do.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="text-sm text-muted-foreground pt-2"
                        >
                            Last Updated: <span className="font-medium text-foreground">{lastUpdated}</span>
                        </motion.div>
                    </div>
                </Container>
            </section>

            {/* Detailed Content */}
            <section className="py-20">
                <Container>
                    <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">

                        {/* Sidebar Navigation (Sticky) */}
                        <div className="hidden lg:block w-64 shrink-0 sticky top-28 self-start h-fit">
                            <div className="space-y-1">
                                <h4 className="font-semibold mb-4 px-3 text-sm uppercase tracking-wider text-muted-foreground">Contents</h4>
                                <nav className="flex flex-col space-y-1">
                                    {tableOfContents.map((item, i) => (
                                        <a
                                            key={item.id}
                                            href={`#${item.id}`}
                                            className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-md transition-colors text-left"
                                        >
                                            {i + 1}. {item.title}
                                        </a>
                                    ))}
                                </nav>
                                <div className="pt-8 space-y-3">
                                    <Card className="bg-primary/5 border-primary/10">
                                        <CardContent className="p-4 space-y-3">
                                            <p className="text-sm font-medium">Account & Data Deletion</p>
                                            <p className="text-xs text-muted-foreground">Request complete deletion of your account and data at any time without the app installed.</p>
                                            <Button variant="destructive" size="sm" className="w-full text-xs h-8" asChild>
                                                <Link href="/delete-account">Delete Account</Link>
                                            </Button>
                                        </CardContent>
                                    </Card>

                                    <Card className="bg-muted/30 border-border/50">
                                        <CardContent className="p-4 space-y-3">
                                            <p className="text-sm font-medium">Have questions?</p>
                                            <p className="text-xs text-muted-foreground">Our support team is here to help with any privacy questions.</p>
                                            <Button variant="outline" size="sm" className="w-full text-xs h-8" asChild>
                                                <Link href="/contact">Contact Support</Link>
                                            </Button>
                                        </CardContent>
                                    </Card>
                                </div>
                            </div>
                        </div>

                        {/* Main Text Content */}
                        <div className="flex-1 prose prose-slate dark:prose-invert prose-headings:scroll-mt-28 max-w-none">
                            <div className="bg-card border border-border/50 rounded-2xl p-8 md:p-12 shadow-sm space-y-12">

                                {/* Section 1 */}
                                <section id="section-1" className="scroll-mt-28">
                                    <h2 className="text-2xl font-bold m-0 mb-6">1. Introduction</h2>
                                    <p className="text-muted-foreground leading-relaxed">
                                        Welcome to MotionCore (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;). MotionCore develops adaptive mobile fitness applications
                                        and connected web services that utilize cutting-edge on-device computer vision and artificial intelligence to deliver
                                        exercise coaching, movement analysis, rep counting, and personalized workout planning.
                                    </p>
                                    <p className="text-muted-foreground leading-relaxed mt-4">
                                        This Privacy Policy describes how MotionCore collects, protects, uses, and shares information about you when you use
                                        our mobile application (available on the Google Play Store and Apple App Store) and our website at motioncore.com
                                        (collectively, the &quot;Services&quot;).
                                    </p>
                                    <p className="text-muted-foreground leading-relaxed mt-4">
                                        By creating an account or using our Services, you consent to the collection and handling of your information as described
                                        in this Privacy Policy. If you do not agree with this policy, please refrain from using our Services.
                                    </p>
                                </section>

                                <div className="h-px bg-border/50 w-full" />

                                {/* Section 2 */}
                                <section id="section-2" className="scroll-mt-28">
                                    <h2 className="text-2xl font-bold m-0 mb-6">2. Data We Collect</h2>
                                    <p className="text-muted-foreground mb-4">
                                        We collect information to provide, personalize, and improve your training experience. The categories of personal data
                                        we handle include:
                                    </p>
                                    <div className="grid sm:grid-cols-2 gap-4 mt-6 not-prose">
                                        <div className="p-4 rounded-lg bg-muted/30 border border-border/50">
                                            <div className="flex items-center gap-2 mb-2">
                                                <UserCheck className="w-4 h-4 text-primary" />
                                                <h4 className="font-semibold text-sm text-foreground">Identity & Account Data</h4>
                                            </div>
                                            <p className="text-sm text-muted-foreground">
                                                Full name, email address, profile avatar, account identifier, password hash, or third-party sign-in tokens
                                                (such as Google Sign-In or Apple ID).
                                            </p>
                                        </div>
                                        <div className="p-4 rounded-lg bg-muted/30 border border-border/50">
                                            <div className="flex items-center gap-2 mb-2">
                                                <Activity className="w-4 h-4 text-primary" />
                                                <h4 className="font-semibold text-sm text-foreground">Profile & Fitness Attributes</h4>
                                            </div>
                                            <p className="text-sm text-muted-foreground">
                                                Self-reported age, gender, height, body weight, fitness experience level, weekly workout goals, target muscle groups,
                                                and training preferences.
                                            </p>
                                        </div>
                                        <div className="p-4 rounded-lg bg-muted/30 border border-border/50">
                                            <div className="flex items-center gap-2 mb-2">
                                                <CheckCircle2 className="w-4 h-4 text-primary" />
                                                <h4 className="font-semibold text-sm text-foreground">Workouts & Derived Performance</h4>
                                            </div>
                                            <p className="text-sm text-muted-foreground">
                                                Completed exercises, sets, repetitions, workout duration, consistency streaks, personal bests, and numerical
                                                posture/form accuracy scores computed during workouts.
                                            </p>
                                        </div>
                                        <div className="p-4 rounded-lg bg-muted/30 border border-border/50">
                                            <div className="flex items-center gap-2 mb-2">
                                                <Cpu className="w-4 h-4 text-primary" />
                                                <h4 className="font-semibold text-sm text-foreground">Technical & Diagnostic Data</h4>
                                            </div>
                                            <p className="text-sm text-muted-foreground">
                                                Device brand and model, operating system version, app version, unique device tokens, IP address, crash logs,
                                                and anonymized performance metrics.
                                            </p>
                                        </div>
                                    </div>
                                </section>

                                <div className="h-px bg-border/50 w-full" />

                                {/* Section 3 */}
                                <section id="section-3" className="scroll-mt-28">
                                    <h2 className="text-2xl font-bold m-0 mb-6">3. Camera Usage & On-Device Vision Processing</h2>
                                    <div className="p-5 rounded-xl bg-primary/5 border border-primary/20 not-prose mb-6">
                                        <div className="flex items-start gap-4">
                                            <div className="p-2.5 bg-primary/10 text-primary rounded-lg shrink-0 mt-0.5">
                                                <Camera className="w-6 h-6" />
                                            </div>
                                            <div className="space-y-2">
                                                <h4 className="font-semibold text-base text-foreground">On-Device Processing Only - Zero Cloud Video Storage</h4>
                                                <p className="text-sm text-muted-foreground leading-relaxed">
                                                    The MotionCore mobile application requires camera access exclusively to track your body posture and count repetitions
                                                    in real time during workout sessions. <strong>We do not record, store, or upload raw camera video or photos to our servers or any third parties.</strong>
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <p className="text-muted-foreground leading-relaxed">
                                        Here is how our computer vision technology operates to protect your privacy:
                                    </p>
                                    <ul className="list-none space-y-3 pl-0 text-muted-foreground mt-4">
                                        <li className="flex gap-3">
                                            <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                                            <span>
                                                <strong>Real-Time Local Execution:</strong> Camera frames are processed entirely on your physical smartphone inside
                                                volatile device memory (RAM) utilizing lightweight on-device neural network models.
                                            </span>
                                        </li>
                                        <li className="flex gap-3">
                                            <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                                            <span>
                                                <strong>Instant Frame Discard:</strong> As soon as mathematical keypoint coordinates (e.g., knee, elbow, or shoulder angles)
                                                are derived from a frame to evaluate movement, the visual frame is immediately discarded from memory. No visual pixels are saved to your device disk.
                                            </span>
                                        </li>
                                        <li className="flex gap-3">
                                            <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                                            <span>
                                                <strong>Only Aggregated Metrics Stored:</strong> Only high-level numeric workout results—such as repetition count,
                                                set completion time, and overall form score—are synchronized with your account profile to track your fitness progression.
                                            </span>
                                        </li>
                                        <li className="flex gap-3">
                                            <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                                            <span>
                                                <strong>Camera Permission Control:</strong> Camera access is optional and only initiated with your explicit operating
                                                system permission when you start a camera-assisted exercise. You may revoke camera permission at any time in your device settings.
                                            </span>
                                        </li>
                                    </ul>
                                </section>

                                <div className="h-px bg-border/50 w-full" />

                                {/* Section 4 */}
                                <section id="section-4" className="scroll-mt-28">
                                    <h2 className="text-2xl font-bold m-0 mb-6">4. How We Use Your Data</h2>
                                    <p className="text-muted-foreground mb-4">
                                        We use the data collected strictly for legitimate business and service delivery purposes:
                                    </p>
                                    <ul className="list-none space-y-3 pl-0 text-muted-foreground mt-4">
                                        <li className="flex gap-3">
                                            <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                                            <span><strong>Delivering Adaptive Training:</strong> Calculating real-time exercise feedback, repetition counts, and progression recommendations.</span>
                                        </li>
                                        <li className="flex gap-3">
                                            <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                                            <span><strong>Account & Subscription Management:</strong> Authenticating your account, syncing your workout history across devices, and verifying your Google Play subscription entitlement.</span>
                                        </li>
                                        <li className="flex gap-3">
                                            <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                                            <span><strong>App Stability & Diagnostics:</strong> Monitoring error logs, app crashes, and latency to ensure high availability and responsiveness.</span>
                                        </li>
                                        <li className="flex gap-3">
                                            <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                                            <span><strong>Customer Support & Notices:</strong> Responding to user inquiries, account deletion requests, and communicating service or policy changes.</span>
                                        </li>
                                    </ul>
                                </section>

                                <div className="h-px bg-border/50 w-full" />

                                {/* Section 5 */}
                                <section id="section-5" className="scroll-mt-28">
                                    <h2 className="text-2xl font-bold m-0 mb-6">5. Fitness & Medical Disclaimer</h2>
                                    <div className="p-5 rounded-xl bg-amber-500/10 border border-amber-500/25 not-prose mb-6">
                                        <div className="flex items-start gap-4">
                                            <div className="p-2.5 bg-amber-500/20 text-amber-600 dark:text-amber-400 rounded-lg shrink-0 mt-0.5">
                                                <HeartPulse className="w-6 h-6" />
                                            </div>
                                            <div className="space-y-2">
                                                <h4 className="font-semibold text-base text-foreground">MotionCore is Not a Medical Device</h4>
                                                <p className="text-sm text-muted-foreground leading-relaxed">
                                                    MotionCore provides interactive fitness tracking and exercise guidance.
                                                    <strong> MotionCore is not a certified medical device and does not provide medical diagnosis, clinical advice, physiotherapy, or treatment.</strong>
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-4 text-muted-foreground leading-relaxed">
                                        <p>
                                            The exercises, pose feedback, workouts, and educational information made available through MotionCore are intended solely
                                            for general fitness, athletic conditioning, and recreational purposes.
                                        </p>
                                        <p>
                                            <strong>Consult Your Physician:</strong> Prior to beginning any new exercise routine or if you have pre-existing cardiovascular,
                                            musculoskeletal, respiratory, spinal conditions, or are pregnant, you must consult a qualified doctor or healthcare practitioner.
                                        </p>
                                        <p>
                                            <strong>Assumption of Risk:</strong> Strenuous physical activity inherently carries risks of injury, including muscle strain,
                                            sprains, fractures, or cardiovascular complications. All exercises, workouts, and movements performed while using MotionCore
                                            are performed entirely at your own discretion and voluntary risk. If you experience discomfort, dizziness, acute pain, or shortness
                                            of breath, discontinue exercise immediately and seek emergency medical assistance.
                                        </p>
                                    </div>
                                </section>

                                <div className="h-px bg-border/50 w-full" />

                                {/* Section 6 */}
                                <section id="section-6" className="scroll-mt-28">
                                    <h2 className="text-2xl font-bold m-0 mb-6">6. Data Sharing & Infrastructure</h2>
                                    <p className="text-muted-foreground leading-relaxed">
                                        We do not sell, rent, or trade your personal information to third parties or advertising data brokers.
                                    </p>
                                    <p className="text-muted-foreground leading-relaxed mt-4">
                                        We only share data with trusted service providers who process information on our behalf under strict data processing agreements:
                                    </p>
                                    <ul className="list-none space-y-3 pl-0 text-muted-foreground mt-4">
                                        <li className="flex gap-3">
                                            <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                                            <span><strong>Cloud Storage & Compute:</strong> Secure cloud providers (e.g., Supabase / Google Cloud) with full encryption in transit (TLS 1.3) and at rest (AES-256).</span>
                                        </li>
                                        <li className="flex gap-3">
                                            <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                                            <span><strong>Payment Processing:</strong> Google Play In-App Billing handles subscription purchases. MotionCore does not collect or store your payment card numbers.</span>
                                        </li>
                                        <li className="flex gap-3">
                                            <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                                            <span><strong>Authentication:</strong> Secure authentication providers (Google Sign-In, Apple ID) to authenticate user identity securely.</span>
                                        </li>
                                    </ul>
                                </section>

                                <div className="h-px bg-border/50 w-full" />

                                {/* Section 7 */}
                                <section id="section-7" className="scroll-mt-28">
                                    <h2 className="text-2xl font-bold m-0 mb-6">7. Account Deletion & Data Retention</h2>
                                    <p className="text-muted-foreground leading-relaxed">
                                        In full compliance with Google Play Developer Policies and global privacy regulations (including GDPR and CCPA),
                                        MotionCore provides a clear, accessible mechanism to permanently delete your account and all associated data.
                                    </p>
                                    <div className="p-4 rounded-xl bg-destructive/5 border border-destructive/20 not-prose my-6">
                                        <div className="flex items-start gap-3">
                                            <Trash2 className="w-5 h-5 text-destructive shrink-0 mt-0.5" />
                                            <div>
                                                <h4 className="font-semibold text-sm text-foreground mb-1">Permanent Deletion Without App Installed</h4>
                                                <p className="text-sm text-muted-foreground">
                                                    You do not need to keep the MotionCore mobile app installed to delete your account. You can submit an account
                                                    deletion request at any time through our public web portal at{" "}
                                                    <Link href="/delete-account" className="text-destructive font-medium underline underline-offset-4">
                                                        motioncore.com/delete-account
                                                    </Link>{" "}
                                                    or from within the mobile app settings.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="text-muted-foreground leading-relaxed">
                                        When an account deletion is confirmed:
                                    </p>
                                    <ul className="list-none space-y-3 pl-0 text-muted-foreground mt-4">
                                        <li className="flex gap-3">
                                            <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                                            <span><strong>Deleted Data:</strong> Your account credentials, profile attributes, complete workout logs, exercise records, pose tracking analytics, and preferences are permanently wiped from active databases.</span>
                                        </li>
                                        <li className="flex gap-3">
                                            <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                                            <span><strong>Processing Timeframe:</strong> Account deletion requests are verified and completed within <strong>30 calendar days</strong>.</span>
                                        </li>
                                        <li className="flex gap-3">
                                            <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                                            <span><strong>Active Subscriptions Notice:</strong> Account deletion revokes app access and internal subscription records. However, recurring subscription billing must be canceled directly in your Google Play Store settings to avoid automatic store charges.</span>
                                        </li>
                                    </ul>
                                </section>

                                <div className="h-px bg-border/50 w-full" />

                                {/* Section 8 */}
                                <section id="section-8" className="scroll-mt-28">
                                    <h2 className="text-2xl font-bold m-0 mb-6">8. Your Legal Rights</h2>
                                    <p className="text-muted-foreground mb-4">
                                        Depending on your jurisdiction, you hold enforceable rights regarding your personal data:
                                    </p>
                                    <div className="grid gap-3 not-prose">
                                        {[
                                            "Right of Access: Request a copy of the personal data we maintain about you.",
                                            "Right to Erasure (Deletion): Request that we delete your account and personal history.",
                                            "Right to Rectification: Correct inaccurate or outdated profile information.",
                                            "Right to Data Portability: Receive your workout history in an open electronic format.",
                                            "Right to Restrict or Object: Restrict certain processing activities or revoke consent at any time.",
                                        ].map((right, idx) => (
                                            <div key={idx} className="flex items-center gap-3 p-3 rounded-md bg-muted/20 hover:bg-muted/40 transition-colors">
                                                <Shield className="w-4 h-4 text-primary shrink-0" />
                                                <span className="text-sm text-foreground/80">{right}</span>
                                            </div>
                                        ))}
                                    </div>
                                </section>

                                <div className="h-px bg-border/50 w-full" />

                                {/* Section 9 */}
                                <section id="section-9" className="scroll-mt-28">
                                    <h2 className="text-2xl font-bold m-0 mb-6">9. Cookie Policy</h2>
                                    <p className="text-muted-foreground leading-relaxed">
                                        Our marketing website utilizes necessary cookies and local browser storage to remember session states and theme preferences.
                                        We do not use invasive third-party cross-site advertising trackers. You can configure your browser to reject cookies,
                                        though some web features may experience reduced functionality.
                                    </p>
                                </section>

                                <div className="h-px bg-border/50 w-full" />

                                {/* Section 10 */}
                                <section id="section-10" className="scroll-mt-28">
                                    <h2 className="text-2xl font-bold m-0 mb-6">10. Contact Us</h2>
                                    <div className="bg-primary/5 rounded-xl p-6 border border-primary/10 not-prose">
                                        <p className="text-muted-foreground mb-6">
                                            If you have questions about this Privacy Policy, your personal data, or wish to submit a data inquiry, please contact our Privacy Team:
                                        </p>
                                        <div className="flex flex-col sm:flex-row gap-4">
                                            <div className="flex items-center gap-3 bg-background p-4 rounded-lg border border-border/50 shadow-sm flex-1">
                                                <div className="p-2 bg-primary/10 text-primary rounded-lg">
                                                    <Mail className="w-5 h-5" />
                                                </div>
                                                <div>
                                                    <p className="text-xs text-muted-foreground">Privacy & Support Email</p>
                                                    <a href="mailto:support@motioncore.com" className="font-medium text-foreground hover:text-primary transition-colors">
                                                        support@motioncore.com
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-3 bg-background p-4 rounded-lg border border-border/50 shadow-sm flex-1">
                                                <div className="p-2 bg-primary/10 text-primary rounded-lg">
                                                    <FileText className="w-5 h-5" />
                                                </div>
                                                <div>
                                                    <p className="text-xs text-muted-foreground">Mailing Address</p>
                                                    <p className="font-medium">Ankara, Türkiye</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
        </div>
    );
};

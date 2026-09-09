"use client";

import { Container } from "@/components";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { HeroHeader } from "@/components/ui/hero-section";
import {
    AlertCircle,
    AlertTriangle,
    CreditCard,
    FileText,
    Gavel,
    HeartPulse,
    HelpCircle,
    Scale,
    ShieldAlert,
    Trash2,
} from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const tableOfContents = [
    { id: "section-1", title: "Agreement to Terms" },
    { id: "section-2", title: "Fitness & Medical Disclaimer" },
    { id: "section-3", title: "User Representations & Eligibility" },
    { id: "section-4", title: "Intellectual Property Rights" },
    { id: "section-5", title: "Prohibited Activities" },
    { id: "section-6", title: "Subscriptions & Google Play Billing" },
    { id: "section-7", title: "Account Deletion & Termination" },
    { id: "section-8", title: "Limitation of Liability" },
    { id: "section-9", title: "Governing Law" },
    { id: "section-10", title: "Contact Us" },
];

export const TermsClient = () => {
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
                                <Scale className="w-3.5 h-3.5 mr-2" />
                                Legal Agreement
                            </Badge>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-4xl md:text-6xl font-bold tracking-tight text-foreground"
                        >
                            Terms & Conditions
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto"
                        >
                            Please read these terms carefully before using our services.
                            By using MotionCore, you agree to be bound by these conditions.
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
                                            <p className="text-sm font-medium">Delete Account</p>
                                            <p className="text-xs text-muted-foreground">Need to submit a data erasure request? Visit our public deletion page.</p>
                                            <Button variant="outline" size="sm" className="w-full text-xs h-8" asChild>
                                                <Link href="/delete-account">Account Deletion</Link>
                                            </Button>
                                        </CardContent>
                                    </Card>

                                    <Card className="bg-muted/30 border-border/50">
                                        <CardContent className="p-4 space-y-3">
                                            <p className="text-sm font-medium">Need Help?</p>
                                            <p className="text-xs text-muted-foreground">If you have questions about our terms, please feel free to reach out.</p>
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
                                    <h2 className="text-2xl font-bold m-0 mb-6">1. Agreement to Terms</h2>
                                    <p className="text-muted-foreground leading-relaxed">
                                        These Terms & Conditions constitute a legally binding agreement made between you, whether personally or on behalf of an entity (&quot;you&quot;)
                                        and MotionCore (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), concerning your access to and use of the MotionCore mobile applications
                                        (including our Android application distributed on the Google Play Store and iOS application on the Apple App Store) and the website at
                                        motioncore.com (collectively, the &quot;Service&quot;).
                                    </p>
                                    <p className="text-muted-foreground leading-relaxed mt-4">
                                        By accessing or using the Service, you represent that you have read, understood, and agreed to be bound by all of these Terms.
                                        If you do not agree with all of these Terms, you are expressly prohibited from using the Service and must discontinue use immediately.
                                    </p>
                                </section>

                                <div className="h-px bg-border/50 w-full" />

                                {/* Section 2 */}
                                <section id="section-2" className="scroll-mt-28">
                                    <h2 className="text-2xl font-bold m-0 mb-6">2. Fitness & Medical Disclaimer (Assumption of Risk)</h2>
                                    <div className="p-5 rounded-xl bg-amber-500/10 border border-amber-500/25 not-prose mb-6">
                                        <div className="flex items-start gap-4">
                                            <div className="p-2.5 bg-amber-500/20 text-amber-600 dark:text-amber-400 rounded-lg shrink-0 mt-0.5">
                                                <HeartPulse className="w-6 h-6" />
                                            </div>
                                            <div className="space-y-2">
                                                <h4 className="font-semibold text-base text-foreground">MotionCore is Not a Medical Device</h4>
                                                <p className="text-sm text-muted-foreground leading-relaxed">
                                                    <strong>MotionCore is not a medical device, and the Service does not provide medical diagnosis, clinical advice, physiotherapy, or treatment.</strong> All workouts, pose estimation feedback, and training programs are intended solely for general fitness and informational purposes.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-4 text-muted-foreground leading-relaxed">
                                        <p>
                                            <strong>Physician Consultation Required:</strong> Before starting any fitness routine, athletic program, or physical training provided through MotionCore, you must consult a licensed physician or healthcare professional. This is especially vital if you have cardiovascular history, joint or spinal problems, respiratory conditions, high blood pressure, or are pregnant.
                                        </p>
                                        <p>
                                            <strong>Voluntary Assumption of Risk:</strong> Engaging in physical exercise involves inherent risks of bodily injury, illness, strain, or cardiovascular event. You voluntarily choose to perform exercises suggested or analyzed by MotionCore. You explicitly acknowledge and agree that all exercises are performed entirely at your own risk.
                                        </p>
                                        <p>
                                            <strong>Immediate Cessation:</strong> If at any point during a workout session you feel dizzy, lightheaded, faint, nauseous, or experience sharp pain or shortness of breath, you must immediately stop exercising and seek emergency medical care.
                                        </p>
                                    </div>
                                </section>

                                <div className="h-px bg-border/50 w-full" />

                                {/* Section 3 */}
                                <section id="section-3" className="scroll-mt-28">
                                    <h2 className="text-2xl font-bold m-0 mb-6">3. User Representations & Eligibility</h2>
                                    <p className="text-muted-foreground mb-4">
                                        By using the Service, you represent and warrant that:
                                    </p>
                                    <ul className="list-none space-y-3 pl-0 text-muted-foreground mt-4">
                                        <li className="flex gap-3">
                                            <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                                            <span>You are at least 16 years of age or the age of legal majority in your jurisdiction.</span>
                                        </li>
                                        <li className="flex gap-3">
                                            <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                                            <span>All registration information you submit is accurate, truthful, and kept current.</span>
                                        </li>
                                        <li className="flex gap-3">
                                            <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                                            <span>You are physically capable of undertaking fitness exercises and have obtained any required medical clearance.</span>
                                        </li>
                                        <li className="flex gap-3">
                                            <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                                            <span>You will maintain the confidentiality of your account credentials and notify us immediately of any unauthorized access.</span>
                                        </li>
                                    </ul>
                                </section>

                                <div className="h-px bg-border/50 w-full" />

                                {/* Section 4 */}
                                <section id="section-4" className="scroll-mt-28">
                                    <h2 className="text-2xl font-bold m-0 mb-6">4. Intellectual Property Rights</h2>
                                    <p className="text-muted-foreground leading-relaxed">
                                        The Service, including its proprietary computer vision algorithms, pose estimation models, workout architectures,
                                        visual designs, software, trademarks, and logos (the &quot;Content&quot; and &quot;Marks&quot;), are owned by or licensed to MotionCore.
                                        We grant you a non-exclusive, non-transferable, revocable license to access and use the Service for your personal, non-commercial fitness training.
                                    </p>
                                </section>

                                <div className="h-px bg-border/50 w-full" />

                                {/* Section 5 */}
                                <section id="section-5" className="scroll-mt-28">
                                    <h2 className="text-2xl font-bold m-0 mb-6">5. Prohibited Activities</h2>
                                    <p className="text-muted-foreground leading-relaxed">
                                        You may not access or use the Service for any purpose other than that for which we make it available. Prohibited activities include:
                                    </p>
                                    <ul className="list-none space-y-3 pl-0 text-muted-foreground mt-4">
                                        <li className="flex gap-3">
                                            <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                                            <span>Reverse engineering, decompiling, or disassembling the mobile application or machine learning models.</span>
                                        </li>
                                        <li className="flex gap-3">
                                            <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                                            <span>Attempting to circumvent security measures or rate limits.</span>
                                        </li>
                                        <li className="flex gap-3">
                                            <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                                            <span>Using automated scripts or scraping software to extract data from our platform.</span>
                                        </li>
                                    </ul>
                                </section>

                                <div className="h-px bg-border/50 w-full" />

                                {/* Section 6 */}
                                <section id="section-6" className="scroll-mt-28">
                                    <h2 className="text-2xl font-bold m-0 mb-6">6. Subscriptions & Google Play Billing</h2>
                                    <div className="p-4 rounded-xl bg-muted/30 border border-border/50 not-prose mb-6">
                                        <div className="flex items-start gap-3">
                                            <CreditCard className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                                            <div>
                                                <h4 className="font-semibold text-sm text-foreground mb-1">In-App Purchases via Google Play Store</h4>
                                                <p className="text-sm text-muted-foreground">
                                                    All premium features, subscriptions, and digital products purchased on Android devices are processed through
                                                    Google Play In-App Billing and governed by Google Play Store terms and policies.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="text-muted-foreground leading-relaxed">
                                        <strong>Auto-Renewal & Cancellation:</strong> Subscriptions automatically renew at the end of each billing cycle unless canceled at least 24 hours prior to renewal. You can manage or cancel your subscription at any time directly through the Google Play Store app (go to <em>Google Play &gt; Profile &gt; Payments &amp; subscriptions &gt; Subscriptions</em>).
                                    </p>
                                    <p className="text-muted-foreground leading-relaxed mt-3">
                                        <strong>Refunds:</strong> Refund requests for purchases made through Google Play are subject to Google Play Refund Policies and should be submitted directly to Google Play.
                                    </p>
                                </section>

                                <div className="h-px bg-border/50 w-full" />

                                {/* Section 7 */}
                                <section id="section-7" className="scroll-mt-28">
                                    <h2 className="text-2xl font-bold m-0 mb-6">7. Account Deletion & Termination</h2>
                                    <p className="text-muted-foreground leading-relaxed">
                                        You may terminate your account and request complete erasure of your personal data at any time.
                                        In compliance with Google Play requirements, you do not need the mobile app installed to exercise this right:
                                    </p>
                                    <div className="p-4 rounded-xl bg-destructive/5 border border-destructive/20 not-prose my-6">
                                        <div className="flex items-start gap-3">
                                            <Trash2 className="w-5 h-5 text-destructive shrink-0 mt-0.5" />
                                            <div>
                                                <h4 className="font-semibold text-sm text-foreground mb-1">Public Deletion Request Portal</h4>
                                                <p className="text-sm text-muted-foreground">
                                                    You can initiate permanent account and data deletion via our web page at{" "}
                                                    <Link href="/delete-account" className="text-destructive font-medium underline underline-offset-4">
                                                        motioncore.com/delete-account
                                                    </Link>
                                                    . All personal data (profile, authentication, workout history, and pose statistics) will be permanently purged within 30 days.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="text-muted-foreground text-sm">
                                        <em>Important:</em> Deleting your account revokes your access to MotionCore services and historical data. Deletion does not automatically cancel third-party app store subscription renewals; you must cancel active subscriptions in the Google Play Store.
                                    </p>
                                </section>

                                <div className="h-px bg-border/50 w-full" />

                                {/* Section 8 */}
                                <section id="section-8" className="scroll-mt-28">
                                    <h2 className="text-2xl font-bold m-0 mb-6">8. Limitation of Liability & Warranty Disclaimer</h2>
                                    <p className="text-muted-foreground leading-relaxed italic">
                                        The Service is provided on an &quot;AS-IS&quot; and &quot;AS-AVAILABLE&quot; basis without warranties of any kind, whether express or implied.
                                        To the maximum extent permitted by applicable law, MotionCore disclaims all warranties, including merchantability, fitness for a particular
                                        purpose, and non-infringement.
                                    </p>
                                    <p className="text-muted-foreground leading-relaxed mt-4">
                                        Under no circumstances shall MotionCore, its founders, officers, employees, or agents be liable for any direct, indirect, incidental,
                                        special, consequential, or punitive damages, including personal injury, physical harm, pain and suffering, loss of profits, or data loss,
                                        resulting from your use or inability to use the Service.
                                    </p>
                                </section>

                                <div className="h-px bg-border/50 w-full" />

                                {/* Section 9 */}
                                <section id="section-9" className="scroll-mt-28">
                                    <h2 className="text-2xl font-bold m-0 mb-6">9. Governing Law</h2>
                                    <p className="text-muted-foreground leading-relaxed">
                                        These Terms shall be governed by and defined following the laws of Türkiye. MotionCore and yourself irrevocably consent that
                                        the competent courts of Ankara, Türkiye shall have exclusive jurisdiction to resolve any dispute which may arise in connection with these Terms.
                                    </p>
                                </section>

                                <div className="h-px bg-border/50 w-full" />

                                {/* Section 10 */}
                                <section id="section-10" className="scroll-mt-28">
                                    <h2 className="text-2xl font-bold m-0 mb-6">10. Contact Us</h2>
                                    <div className="bg-primary/5 rounded-xl p-6 border border-primary/10 not-prose">
                                        <div className="flex items-start gap-4">
                                            <div className="p-3 bg-background rounded-full border border-border shadow-sm">
                                                <HelpCircle className="w-6 h-6 text-primary" />
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-lg mb-2">Have questions about our Terms?</h4>
                                                <p className="text-muted-foreground mb-4">
                                                    If you have any questions or concerns regarding these Terms of Service, please reach out to us:
                                                </p>
                                                <div className="flex flex-wrap gap-4 items-center">
                                                    <a href="mailto:support@motioncore.com" className="inline-flex items-center text-sm font-medium text-primary hover:underline">
                                                        support@motioncore.com
                                                    </a>
                                                    <span className="text-muted-foreground">•</span>
                                                    <Link href="/contact" className="inline-flex items-center text-sm font-medium text-primary hover:underline">
                                                        Visit Contact Page
                                                    </Link>
                                                    <span className="text-muted-foreground">•</span>
                                                    <Link href="/delete-account" className="inline-flex items-center text-sm font-medium text-destructive hover:underline">
                                                        Account Deletion Page
                                                    </Link>
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

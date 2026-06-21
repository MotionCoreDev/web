"use client";

import { Container } from "@/components";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { HeroHeader } from "@/components/ui/hero-section";

import { ArrowRight, FileText, Mail, Shield, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

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
                            Transparency is at the core of everything we do.
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
                                    {[
                                        "Introduction",
                                        "Data We Collect",
                                        "How We Use Data",
                                        "Data Sharing",
                                        "Your Rights",
                                        "Cookie Policy",
                                        "Contact Us"
                                    ].map((item, i) => (
                                        <a
                                            key={i}
                                            href={`#section-${i + 1}`}
                                            className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-md transition-colors text-left"
                                        >
                                            {i + 1}. {item}
                                        </a>
                                    ))}
                                </nav>
                                <div className="pt-8">
                                    <Card className="bg-primary/5 border-primary/10">
                                        <CardContent className="p-4 space-y-3">
                                            <p className="text-sm font-medium">Have questions?</p>
                                            <p className="text-xs text-muted-foreground">Our support team is here to help with any privacy concerns.</p>
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

                                <section id="section-1" className="scroll-mt-28">
                                    <h2 className="text-2xl font-bold m-0 mb-6">1. Introduction</h2>
                                    <p className="text-muted-foreground leading-relaxed">
                                        Welcome to MotionCore. We respect your privacy and are committed to protecting your personal data.
                                        This privacy policy will inform you as to how we look after your personal data when you visit our website
                                        (regardless of where you visit it from) and tell you about your privacy rights and how the law protects you.
                                    </p>
                                    <p className="text-muted-foreground leading-relaxed mt-4">
                                        By accessing or using our Service, you agree to the collection and use of information in accordance with this policy.
                                    </p>
                                </section>

                                <div className="h-px bg-border/50 w-full" />

                                <section id="section-2" className="scroll-mt-28">
                                    <h2 className="text-2xl font-bold m-0 mb-6">2. Data We Collect</h2>
                                    <p className="text-muted-foreground mb-4">
                                        We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
                                    </p>
                                    <div className="grid sm:grid-cols-2 gap-4 mt-6 not-prose">
                                        <div className="p-4 rounded-lg bg-muted/30 border border-border/50">
                                            <h4 className="font-semibold text-sm mb-2 text-foreground">Identity Data</h4>
                                            <p className="text-sm text-muted-foreground">First name, last name, username or similar identifier, and date of birth.</p>
                                        </div>
                                        <div className="p-4 rounded-lg bg-muted/30 border border-border/50">
                                            <h4 className="font-semibold text-sm mb-2 text-foreground">Contact Data</h4>
                                            <p className="text-sm text-muted-foreground">Email address, telephone numbers, and billing address.</p>
                                        </div>
                                        <div className="p-4 rounded-lg bg-muted/30 border border-border/50">
                                            <h4 className="font-semibold text-sm mb-2 text-foreground">Technical Data</h4>
                                            <p className="text-sm text-muted-foreground">IP address, login data, browser type and version, time zone setting, operating system.</p>
                                        </div>
                                        <div className="p-4 rounded-lg bg-muted/30 border border-border/50">
                                            <h4 className="font-semibold text-sm mb-2 text-foreground">Usage Data</h4>
                                            <p className="text-sm text-muted-foreground">Information about how you use our website, products, and services.</p>
                                        </div>
                                    </div>
                                </section>

                                <div className="h-px bg-border/50 w-full" />

                                <section id="section-3" className="scroll-mt-28">
                                    <h2 className="text-2xl font-bold m-0 mb-6">3. How We Use Your Data</h2>
                                    <p className="text-muted-foreground mb-4">
                                        We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
                                    </p>
                                    <ul className="list-none space-y-3 pl-0 text-muted-foreground mt-4">
                                        <li className="flex gap-3">
                                            <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                                            <span>To register you as a new customer and manage our relationship with you.</span>
                                        </li>
                                        <li className="flex gap-3">
                                            <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                                            <span>To process and deliver your orders including managing payments, fees, and charges.</span>
                                        </li>
                                        <li className="flex gap-3">
                                            <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                                            <span>To manage our relationship with you which will include notifying you about changes to our terms or privacy policy.</span>
                                        </li>
                                        <li className="flex gap-3">
                                            <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                                            <span>To improve our website, products/services, marketing, customer relationships, and experiences.</span>
                                        </li>
                                    </ul>
                                </section>

                                <div className="h-px bg-border/50 w-full" />

                                <section id="section-4" className="scroll-mt-28">
                                    <h2 className="text-2xl font-bold m-0 mb-6">4. Data Sharing</h2>
                                    <p className="text-muted-foreground leading-relaxed">
                                        We may share your personal data with internal third parties and external third parties (such as service providers acting as processors who provide IT and system administration services).
                                        We require all third parties to respect the security of your personal data and to treat it in accordance with the law.
                                        We do not allow our third-party service providers to use your personal data for their own purposes and only permit them to process your personal data for specified purposes and in accordance with our instructions.
                                    </p>
                                </section>

                                <div className="h-px bg-border/50 w-full" />

                                <section id="section-5" className="scroll-mt-28">
                                    <h2 className="text-2xl font-bold m-0 mb-6">5. Your Legal Rights</h2>
                                    <p className="text-muted-foreground mb-4">
                                        Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to:
                                    </p>
                                    <div className="grid gap-3 not-prose">
                                        {["Request access to your personal data.", "Request correction of your personal data.", "Request erasure of your personal data.", "Object to processing of your personal data.", "Request restriction of processing your personal data.", "Request transfer of your personal data.", "Right to withdraw consent."].map((right, idx) => (
                                            <div key={idx} className="flex items-center gap-3 p-3 rounded-md bg-muted/20 hover:bg-muted/40 transition-colors">
                                                <Shield className="w-4 h-4 text-primary shrink-0" />
                                                <span className="text-sm text-foreground/80">{right}</span>
                                            </div>
                                        ))}
                                    </div>
                                </section>

                                <div className="h-px bg-border/50 w-full" />

                                <section id="section-6" className="scroll-mt-28">
                                    <h2 className="text-2xl font-bold m-0 mb-6">6. Cookie Policy</h2>
                                    <p className="text-muted-foreground leading-relaxed">
                                        Our website uses cookies to distinguish you from other users of our website. This helps us to provide you with a good experience when you browse our website and also allows us to improve our site.
                                        You can set your browser to refuse all or some browser cookies, or to alert you when websites set or access cookies.
                                    </p>
                                </section>

                                <div className="h-px bg-border/50 w-full" />

                                <section id="section-7" className="scroll-mt-28">
                                    <h2 className="text-2xl font-bold m-0 mb-6">7. Contact Us</h2>
                                    <div className="bg-primary/5 rounded-xl p-6 border border-primary/10 not-prose">
                                        <p className="text-muted-foreground mb-6">
                                            If you have any questions about this privacy policy or our privacy practices, please contact us at:
                                        </p>
                                        <div className="flex flex-col sm:flex-row gap-4">
                                            <div className="flex items-center gap-3 bg-background p-4 rounded-lg border border-border/50 shadow-sm flex-1">
                                                <div className="p-2 bg-primary/10 text-primary rounded-lg">
                                                    <Mail className="w-5 h-5" />
                                                </div>
                                                <div>
                                                    <p className="text-xs text-muted-foreground">Email us at</p>
                                                    <p className="font-medium">support@motioncore.com</p>
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

"use client";

import { Container } from "@/components";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { HeroHeader } from "@/components/ui/hero-section";
import { ArrowRight, Book, Scale, ShieldAlert, FileText, Gavel, AlertCircle, HelpCircle } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

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
                                    {[
                                        "Agreement to Terms",
                                        "Intellectual Property",
                                        "User Representations",
                                        "Prohibited Activities",
                                        "Disclaimer",
                                        "Governing Law",
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

                                <section id="section-1" className="scroll-mt-28">
                                    <h2 className="text-2xl font-bold m-0 mb-6">1. Agreement to Terms</h2>
                                    <p className="text-muted-foreground leading-relaxed">
                                        These Terms & Conditions constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you") and MotionCore ("we," "us" or "our"), concerning your access to and use of the MotionCore website as well as any other media form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto (collectively, the "Site").
                                    </p>
                                    <p className="text-muted-foreground leading-relaxed mt-4">
                                        You agree that by accessing the Site, you have read, understood, and agree to be bound by all of these Terms and Conditions. If you do not agree with all of these Terms and Conditions, then you are expressly prohibited from using the Site and you must discontinue use immediately.
                                    </p>
                                </section>

                                <div className="h-px bg-border/50 w-full" />

                                <section id="section-2" className="scroll-mt-28">
                                    <h2 className="text-2xl font-bold m-0 mb-6">2. Intellectual Property Rights</h2>
                                    <p className="text-muted-foreground mb-4">
                                        Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the "Content") and the trademarks, service marks, and logos contained therein (the "Marks") are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws and various other intellectual property rights.
                                    </p>
                                    <div className="p-4 rounded-lg bg-muted/30 border border-border/50 mt-4 not-prose">
                                        <div className="flex gap-3">
                                            <AlertCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                                            <div>
                                                <h4 className="font-semibold text-sm mb-1 text-foreground">Usage Restrictions</h4>
                                                <p className="text-sm text-muted-foreground">The Content and the Marks are provided on the Site "AS IS" for your information and personal use only. Except as expressly provided in these Terms of Use, no part of the Site and no Content or Marks may be copied, reproduced, aggregated, republished, uploaded, posted, publicly displayed, encoded, translated, transmitted, distributed, sold, licensed, or otherwise exploited for any commercial purpose whatsoever, without our express prior written permission.</p>
                                            </div>
                                        </div>
                                    </div>
                                </section>

                                <div className="h-px bg-border/50 w-full" />

                                <section id="section-3" className="scroll-mt-28">
                                    <h2 className="text-2xl font-bold m-0 mb-6">3. User Representations</h2>
                                    <p className="text-muted-foreground mb-4">
                                        By using the Site, you represent and warrant that:
                                    </p>
                                    <ul className="list-none space-y-3 pl-0 text-muted-foreground mt-4">
                                        <li className="flex gap-3">
                                            <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                                            <span>All registration information you submit will be true, accurate, current, and complete.</span>
                                        </li>
                                        <li className="flex gap-3">
                                            <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                                            <span>You will maintain the accuracy of such information and promptly update such registration information as necessary.</span>
                                        </li>
                                        <li className="flex gap-3">
                                            <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                                            <span>You have the legal capacity and you agree to comply with these Terms of Use.</span>
                                        </li>
                                        <li className="flex gap-3">
                                            <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                                            <span>You are not a minor in the jurisdiction in which you reside.</span>
                                        </li>
                                    </ul>
                                </section>

                                <div className="h-px bg-border/50 w-full" />

                                <section id="section-4" className="scroll-mt-28">
                                    <h2 className="text-2xl font-bold m-0 mb-6">4. Prohibited Activities</h2>
                                    <p className="text-muted-foreground leading-relaxed">
                                        You may not access or use the Site for any purpose other than that for which we make the Site available. The Site may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us.
                                    </p>
                                    <p className="text-muted-foreground leading-relaxed mt-4">
                                        Systematic retrieval of data or other content from the Site to create or compile, directly or indirectly, a collection, compilation, database, or directory without written permission from us is prohibited.
                                    </p>
                                </section>

                                <div className="h-px bg-border/50 w-full" />

                                <section id="section-5" className="scroll-mt-28">
                                    <h2 className="text-2xl font-bold m-0 mb-6">5. Disclaimer</h2>
                                    <p className="text-muted-foreground leading-relaxed italic">
                                        The site is provided on an "as-is" and "as-available" basis. You agree that your use of the site and our services will be at your sole risk. To the fullest extent permitted by law, we disclaim all warranties, express or implied, in connection with the site and your use thereof, including, without limitation, the implied warranties of merchantability, fitness for a particular purpose, and non-infringement.
                                    </p>
                                </section>

                                <div className="h-px bg-border/50 w-full" />

                                <section id="section-6" className="scroll-mt-28">
                                    <h2 className="text-2xl font-bold m-0 mb-6">6. Governing Law</h2>
                                    <p className="text-muted-foreground leading-relaxed">
                                        These Terms shall be governed by and defined following the laws of Turkey. MotionCore and yourself irrevocably consent that the courts of Turkey shall have exclusive jurisdiction to resolve any dispute which may arise in connection with these terms.
                                    </p>
                                </section>

                                <div className="h-px bg-border/50 w-full" />

                                <section id="section-7" className="scroll-mt-28">
                                    <h2 className="text-2xl font-bold m-0 mb-6">7. Contact Us</h2>
                                    <div className="bg-primary/5 rounded-xl p-6 border border-primary/10 not-prose">
                                        <div className="flex items-start gap-4">
                                            <div className="p-3 bg-background rounded-full border border-border shadow-sm">
                                                <HelpCircle className="w-6 h-6 text-primary" />
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-lg mb-2">Have questions about our Terms?</h4>
                                                <p className="text-muted-foreground mb-4">
                                                    If you have any questions or concerns regarding these Terms of Use, please contact us at:
                                                </p>
                                                <div className="flex flex-wrap gap-4">
                                                    <a href="mailto:support@motioncore.com" className="inline-flex items-center text-sm font-medium text-primary hover:underline">
                                                        support@motioncore.com
                                                    </a>
                                                    <span className="text-muted-foreground">•</span>
                                                    <Link href="/contact" className="inline-flex items-center text-sm font-medium text-primary hover:underline">
                                                        Visit Contact Page
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

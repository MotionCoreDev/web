"use client";

import { Container } from "@/components";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Mail, MessageSquare, MapPin, Send } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const ContactClient = () => {
    return (
        <div className="flex flex-col min-h-screen relative overflow-x-hidden">
            {/* Hero Section */}
            <section className="relative pt-24 pb-12 md:pt-32 md:pb-20 overflow-hidden z-10">
                <Container>
                    <div className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-6">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <Badge variant="secondary" className="px-4 py-1.5 text-sm rounded-full font-medium mb-4">
                                Contact Us
                            </Badge>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-4xl md:text-6xl font-bold tracking-tight text-foreground"
                        >
                            Get in touch with <br className="hidden md:block" /> our team
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto"
                        >
                            Have a question or want to work together? We'd love to hear from you.
                        </motion.p>
                    </div>
                </Container>
            </section>

            <section className="py-12 md:py-20 relative z-10">
                <Container>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                        >
                            <Card className="h-full border-border/50 bg-card/50 backdrop-blur-sm shadow-lg">
                                <CardHeader>
                                    <CardTitle>Send us a message</CardTitle>
                                    <CardDescription>Fill out the form below and we'll get back to you shortly.</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <form className="space-y-6">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div className="space-y-2">
                                                <Label htmlFor="first-name">First name</Label>
                                                <Input id="first-name" placeholder="John" />
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="last-name">Last name</Label>
                                                <Input id="last-name" placeholder="Doe" />
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="email">Email</Label>
                                            <Input id="email" type="email" placeholder="john@example.com" />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="message">Message</Label>
                                            <Textarea
                                                id="message"
                                                placeholder="How can we help you?"
                                                className="min-h-[150px] resize-none"
                                            />
                                        </div>
                                        <Button className="w-full" size="lg"> <Send className="w-4 h-4 mr-2" /> Send Message</Button>
                                    </form>
                                </CardContent>
                            </Card>
                        </motion.div>

                        {/* Contact Info */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="space-y-8"
                        >
                            <div className="grid gap-6">
                                <Card className="border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/20 transition-colors">
                                    <CardHeader className="flex flex-row items-center gap-4 space-y-0 pb-2">
                                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                                            <Mail className="h-6 w-6" />
                                        </div>
                                        <div>
                                            <CardTitle className="text-base">Email Us</CardTitle>
                                            <CardDescription>Our friendly team is here to help.</CardDescription>
                                        </div>
                                    </CardHeader>
                                    <CardContent>
                                        <Link href="mailto:support@motioncore.com" className="text-lg font-medium hover:text-primary transition-colors">
                                            support@motioncore.com
                                        </Link>
                                    </CardContent>
                                </Card>

                                <Card className="border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/20 transition-colors">
                                    <CardHeader className="flex flex-row items-center gap-4 space-y-0 pb-2">
                                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                                            <MapPin className="h-6 w-6" />
                                        </div>
                                        <div>
                                            <CardTitle className="text-base">Visit Us</CardTitle>
                                            <CardDescription>Come say hello at our office HQ.</CardDescription>
                                        </div>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-lg font-medium">
                                            123 Innovation Dr.<br />
                                            Tech City, TC 90210
                                        </p>
                                    </CardContent>
                                </Card>

                                <Card className="border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/20 transition-colors">
                                    <CardHeader className="flex flex-row items-center gap-4 space-y-0 pb-2">
                                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                                            <MessageSquare className="h-6 w-6" />
                                        </div>
                                        <div>
                                            <CardTitle className="text-base">Support</CardTitle>
                                            <CardDescription>24/7 Live Chat Support</CardDescription>
                                        </div>
                                    </CardHeader>
                                    <CardContent>
                                        <Button variant="link" className="p-0 h-auto text-lg font-medium">
                                            Start a chat
                                        </Button>
                                    </CardContent>
                                </Card>
                            </div>
                        </motion.div>
                    </div>
                </Container>
            </section>
        </div>
    )
}

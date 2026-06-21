import { Container, Icons, Wrapper } from "@/components";
import { Button } from "@/components/ui/button";
import SectionBadge from "@/components/ui/section-badge";
import { HeroHeader } from "@/components/ui/hero-section";
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Globe, Heart, Lightbulb, Shield, Target, Users } from "lucide-react";
import { PAGES_METADATA } from "@/config/pages";

export const metadata: Metadata = PAGES_METADATA.marketing.company;

const CompanyPage = () => {
    return (
        <section className="w-full relative flex flex-col items-center justify-center px-4 md:px-0 py-8">
            <HeroHeader />
            {/* Hero Section */}
            <Wrapper className="py-20 lg:py-32 relative">
                <Container>
                    <div className="flex flex-col items-center justify-center max-w-3xl mx-auto text-center space-y-8">
                        <SectionBadge title="About Us" />
                        <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/70 tracking-tight">
                            Building the future of <br /> digital experiences
                        </h1>
                        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
                            We are a team of passionate builders, designers, and engineers dedicated to simplifying the web for everyone. Our mission is to empower creators to bring their ideas to life.
                        </p>
                    </div>
                </Container>
            </Wrapper>

            {/* Stats Section */}
            <Wrapper className="py-12 border-y border-border/40 bg-card/50 backdrop-blur-sm">
                <Container>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
                        {[
                            { label: "Active Users", value: "10K+" },
                            { label: "Countries", value: "50+" },
                            { label: "Team Members", value: "25+" },
                            { label: "Uptime", value: "99.9%" },
                        ].map((stat, idx) => (
                            <div key={idx} className="flex flex-col items-center justify-center text-center space-y-2">
                                <span className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/70">
                                    {stat.value}
                                </span>
                                <span className="text-sm md:text-base text-muted-foreground font-medium">
                                    {stat.label}
                                </span>
                            </div>
                        ))}
                    </div>
                </Container>
            </Wrapper>

            {/* Mission & Vision */}
            <Wrapper className="py-20 lg:py-32">
                <Container>
                    <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <div className="relative group">
                            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-purple-500/20 rounded-3xl blur-xl opacity-50 group-hover:opacity-100 transition duration-500" />
                            <div className="relative aspect-square overflow-hidden rounded-2xl border border-border/50 shadow-2xl">
                                <Image
                                    src="/assets/dashboard.svg" // Placeholder, dashboard görselini kullanıyoruz
                                    alt="Our Mission"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
                                <div className="absolute bottom-6 left-6 right-6">
                                    <div className="flex items-center gap-2 text-primary font-medium mb-2">
                                        <Target className="w-5 h-5" />
                                        <span>Our Mission</span>
                                    </div>
                                    <p className="text-foreground/90 font-medium">
                                        To democratize web development and make high-quality digital presence accessible to everyone.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="space-y-8">
                            <div className="space-y-4">
                                <h2 className="text-3xl md:text-4xl font-bold">Driven by purpose, <br /> defined by values.</h2>
                                <p className="text-muted-foreground text-lg leading-relaxed">
                                    We believe that technology should be an enabler, not a barrier. Every line of code we write and every pixel we push is aimed at removing friction and unleashing creativity.
                                </p>
                            </div>
                            <div className="grid gap-6">
                                {[
                                    { icon: Globe, title: "Global Impact", desc: "Reaching users in every corner of the world." },
                                    { icon: Users, title: "Customer First", desc: "Your success is our obsession." },
                                    { icon: Lightbulb, title: "Innovation", desc: "Constantly pushing the boundaries of what's possible." },
                                ].map((item, idx) => (
                                    <div key={idx} className="flex gap-4 items-start">
                                        <div className="p-2 rounded-lg bg-primary/10 text-primary">
                                            <item.icon className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-foreground">{item.title}</h3>
                                            <p className="text-sm text-muted-foreground mt-1">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </Container>
            </Wrapper>

            {/* Values Section */}
            <Wrapper className="py-20 bg-secondary/20">
                <Container>
                    <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
                        <SectionBadge title="Our Values" />
                        <h2 className="text-3xl md:text-4xl font-bold">The principles that guide us</h2>
                        <p className="text-muted-foreground">
                            Our culture is built on a foundation of trust, transparency, and a relentless pursuit of excellence.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { icon: Heart, title: "Empathy", desc: "We design with the user in mind, understanding their needs and struggles." },
                            { icon: Shield, title: "Integrity", desc: "We do the right thing, even when no one is watching." },
                            { icon: Target, title: "Focus", desc: "We prioritize impact over activity and quality over quantity." },
                        ].map((value, idx) => (
                            <div key={idx} className="bg-background/50 backdrop-blur-sm border border-border/50 p-8 rounded-2xl hover:border-primary/50 transition duration-300 group">
                                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition duration-300">
                                    <value.icon className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    {value.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </Container>
            </Wrapper>

            {/* CTA Section */}
            <Wrapper className="py-20 lg:py-32">
                <Container>
                    <div className="bg-primary/5 border border-primary/10 rounded-3xl p-6 md:p-16 text-center space-y-8 relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
                        <div className="relative z-10 max-w-2xl mx-auto space-y-6">
                            <h2 className="text-3xl md:text-5xl font-bold">Join us on our journey</h2>
                            <p className="text-lg text-muted-foreground">
                                We are always looking for talented individuals to join our growing team. Exploring new possibilities together.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                                <Button size="lg" className="rounded-[15px]">
                                    View Open Positions
                                    <ArrowRight className="w-4 h-4 ml-2" />
                                </Button>
                                <Button size="lg" variant="outline" className="rounded-[15px]">
                                    Contact Us
                                </Button>
                            </div>
                        </div>
                    </div>
                </Container>
            </Wrapper>
        </section>
    );
};

export default CompanyPage;

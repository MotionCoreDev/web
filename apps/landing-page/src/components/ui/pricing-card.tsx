"use client"

import * as React from "react"
import { BadgeCheck, ArrowRight } from "lucide-react"
import NumberFlow from "@number-flow/react"

import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

import Link from "next/link"

export interface PricingTier {
    name: string
    price: Record<string, number | string>
    description: string
    features: string[]
    cta: string
    highlighted?: boolean
    popular?: boolean
    href?: string
    originalPrice?: Record<string, number | string>
}

interface PricingCardProps {
    tier: PricingTier
    paymentFrequency: string
}

export function PricingCard({ tier, paymentFrequency }: PricingCardProps) {
    const price = tier.price[paymentFrequency]
    const isHighlighted = tier.highlighted
    const isPopular = tier.popular
    const isCurrentPlan = tier.cta === "Current Plan"

    return (
        <Card
            className={cn(
                "relative flex flex-col gap-8 overflow-hidden p-6",
                isHighlighted
                    ? "bg-foreground text-background"
                    : "bg-card text-card-foreground",
                isPopular ? "ring-2 ring-primary border-primary" : "border-foreground/20"
            )}
        >
            {isHighlighted && <HighlightedBackground />}
            {isPopular && <PopularBackground />}

            <h2 className="relative z-10 flex items-center gap-3 text-xl font-medium capitalize">
                {tier.name}
                {isPopular && (
                    <Badge variant="secondary" className="mt-1">
                        Most Popular
                    </Badge>
                )}
            </h2>

            <div className="relative z-10 h-12">
                {typeof price === "number" ? (
                    <>
                        <div className="flex items-baseline gap-2">
                            <NumberFlow
                                format={{
                                    style: "currency",
                                    currency: "USD",
                                    trailingZeroDisplay: "stripIfInteger",
                                }}
                                value={price}
                                className="text-4xl font-medium"
                            />
                            {((tier.originalPrice && tier.originalPrice[paymentFrequency] && tier.originalPrice[paymentFrequency] !== price) || (
                                paymentFrequency === "yearly" &&
                                typeof tier.price.monthly === "number" &&
                                tier.price.monthly !== price
                            )) && (
                                    <span className="text-muted-foreground line-through">
                                        ${tier.originalPrice?.[paymentFrequency] ?? tier.price.monthly}
                                    </span>
                                )}
                        </div>
                        <p className="-mt-2 text-xs text-muted-foreground">
                            {paymentFrequency === "yearly" ? "Per year/user" : "Per month/user"}
                        </p>
                    </>
                ) : (
                    <h1 className="text-4xl font-medium">{price}</h1>
                )}
            </div>

            <div className="relative z-10 flex-1 space-y-2">
                <h3 className="text-sm font-medium">{tier.description}</h3>
                <ul className="space-y-2">
                    {tier.features.map((feature, index) => (
                        <li
                            key={index}
                            className={cn(
                                "flex items-center gap-2 text-sm font-medium",
                                isHighlighted ? "text-background" : "text-muted-foreground"
                            )}
                        >
                            <BadgeCheck className="h-4 w-4" />
                            {feature}
                        </li>
                    ))}
                </ul>
            </div>

            <Button
                variant={isHighlighted ? "secondary" : "default"}
                className={cn(
                    "w-full",
                    isCurrentPlan
                        ? "bg-transparent border border-foreground/20 text-foreground/50 shadow-none hover:bg-transparent cursor-default"
                        : (tier.name === "Professional" || tier.name === "Growth")
                            ? "bg-transparent border border-foreground/20 text-foreground hover:bg-foreground/5 shadow-none"
                            : ""
                )}
                asChild={!isCurrentPlan}
            >
                {isCurrentPlan ? (
                    tier.cta
                ) : (
                    <Link href={tier.href || "/sign-up"}>
                        {tier.cta}
                    </Link>
                )}
            </Button>
        </Card >
    )
}

const HighlightedBackground = () => (
    <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:45px_45px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)] pointer-events-none" />
)

const PopularBackground = () => (
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.1),rgba(255,255,255,0))] pointer-events-none" />
)

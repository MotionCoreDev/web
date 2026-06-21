"use client"

import * as React from "react"
import { PricingCard, type PricingTier } from "@/components/ui/pricing-card"
import { Tab } from "@/components/ui/pricing-tab"

interface PricingSectionProps {
    title: string
    subtitle: string
    tiers: PricingTier[]
    frequencies: string[] | readonly string[]
}

export function PricingSection({
    title,
    subtitle,
    tiers,
    frequencies,
}: PricingSectionProps) {
    const [selectedFrequency, setSelectedFrequency] = React.useState(frequencies[0])

    return (
        <section className="flex flex-col items-center gap-10 py-10 w-full">
            <div className="space-y-7 text-center px-4">
                <div className="space-y-4">
                    <h1 className="text-4xl font-medium md:text-5xl">{title}</h1>
                    <p className="text-muted-foreground">{subtitle}</p>
                </div>
                <div className="mx-auto flex w-fit rounded-full bg-muted p-1">
                    {frequencies.map((freq) => (
                        <Tab
                            key={freq}
                            text={freq}
                            selected={selectedFrequency === freq}
                            setSelected={setSelectedFrequency}
                            discount={freq === "yearly"}
                        />
                    ))}
                </div>
            </div>

            <div className="grid w-full max-w-6xl gap-6 px-4 md:gap-8 md:grid-cols-2 xl:grid-cols-4">
                {tiers.map((tier) => (
                    <div key={tier.name} className="w-full">
                        <PricingCard
                            tier={tier}
                            paymentFrequency={selectedFrequency}
                        />
                    </div>
                ))}
            </div>
        </section>
    )
}

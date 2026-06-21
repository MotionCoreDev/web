import React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

const cardVariants = cva(
    'rounded-lg bg-white text-text-primary',
    {
        variants: {
            variant: {
                elevated: 'shadow-md border border-transparent',
                outlined: 'border border-border shadow-none',
            },
            padding: {
                none: 'p-0',
                sm: 'p-4',
                md: 'p-6',
                lg: 'p-8',
            },
        },
        defaultVariants: {
            variant: 'elevated',
            padding: 'md',
        },
    }
)

export interface CardProps
    extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> { }

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
    ({ className, variant, padding, ...props }, ref) => {
        return (
            <div
                className={cn(cardVariants({ variant, padding, className }))}
                ref={ref}
                {...props}
            />
        )
    }
)
Card.displayName = 'Card'

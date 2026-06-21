import React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'


import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

const buttonVariants = cva(
    'inline-flex items-center justify-center rounded-[15px] text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50',
    {
        variants: {
            variant: {
                primary: 'bg-primary text-primary-foreground shadow hover:bg-primary/90',
                secondary: 'bg-background-secondary text-text-primary shadow-sm hover:bg-background-tertiary',
                outline: 'border border-border bg-transparent shadow-sm hover:bg-background-secondary hover:text-text-primary',
                ghost: 'hover:bg-background-secondary hover:text-text-primary',
            },
            size: {
                sm: 'h-8 rounded-[15px] px-3 text-xs',
                md: 'h-9 rounded-[15px] px-4 py-2',
                lg: 'h-10 rounded-[15px] px-8 text-md',
            },
        },
        defaultVariants: {
            variant: 'primary',
            size: 'md',
        },
    }
)

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> { }

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, ...props }, ref) => {
        return (
            <button
                className={cn(buttonVariants({ variant, size, className }))}
                ref={ref}
                {...props}
            />
        )
    }
)
Button.displayName = 'Button'

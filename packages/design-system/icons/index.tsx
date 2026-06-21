import React from 'react'
import { ArrowRight, X, Menu, Check, Loader2, type LucideProps, type LucideIcon } from 'lucide-react'

type IconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

interface IconProps extends Omit<LucideProps, 'size'> {
    size?: IconSize
}

const sizeMap: Record<IconSize, number> = {
    xs: 12,
    sm: 16,
    md: 24,
    lg: 32,
    xl: 48,
}

const withIconStyles = (IconComponent: LucideIcon) => {
    return ({ size = 'md', ...props }: IconProps) => {
        const Component = IconComponent as React.ElementType
        return <Component size={sizeMap[size]} {...props} />
    }
}

export const ArrowIcon = withIconStyles(ArrowRight)
export const CloseIcon = withIconStyles(X)
export const MenuIcon = withIconStyles(Menu)
export const CheckIcon = withIconStyles(Check)
export const LoadingIcon = ({ size = 'md', className, ...props }: IconProps) => {
    const Icon = withIconStyles(Loader2);
    return <Icon size={size} className={`animate-spin ${className || ''}`} {...props} />
}

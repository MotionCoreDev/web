import React from 'react'
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { Button } from './Button'
import { Card } from './Card'

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export interface ModalProps {
    isOpen: boolean
    onClose: () => void
    children: React.ReactNode
    title?: string
}

export const Modal = ({ isOpen, onClose, children, title }: ModalProps) => {
    if (!isOpen) return null

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
            <div className="absolute inset-0" onClick={onClose} />
            <Card className="relative z-10 w-full max-w-lg bg-background" variant="elevated" padding="md">
                {title && (
                    <div className="mb-4 flex items-center justify-between">
                        <h3 className="text-lg font-semibold">{title}</h3>
                        <Button variant="ghost" size="sm" onClick={onClose}>X</Button>
                    </div>
                )}
                <div>
                    {children}
                </div>
            </Card>
        </div>
    )
}

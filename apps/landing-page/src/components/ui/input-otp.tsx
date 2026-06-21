"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface InputOTPProps {
    length?: number
    value: string
    onChange: (value: string) => void
    disabled?: boolean
    className?: string
}

const InputOTP = React.forwardRef<HTMLDivElement, InputOTPProps>(
    ({ length = 6, value, onChange, disabled = false, className }, ref) => {
        const inputRefs = React.useRef<(HTMLInputElement | null)[]>([])

        const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
            if (e.key === "Backspace") {
                e.preventDefault()
                const newValue = value.split("")
                if (newValue[index]) {
                    newValue[index] = ""
                    onChange(newValue.join(""))
                } else if (index > 0) {
                    newValue[index - 1] = ""
                    onChange(newValue.join(""))
                    inputRefs.current[index - 1]?.focus()
                }
            } else if (e.key === "ArrowLeft" && index > 0) {
                inputRefs.current[index - 1]?.focus()
            } else if (e.key === "ArrowRight" && index < length - 1) {
                inputRefs.current[index + 1]?.focus()
            }
        }

        const handleChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
            const inputValue = e.target.value
            if (!/^\d*$/.test(inputValue)) return

            const newValue = value.split("")

            // Handle paste
            if (inputValue.length > 1) {
                const pasteValue = inputValue.slice(0, length)
                onChange(pasteValue.padEnd(length, "").slice(0, length))
                inputRefs.current[Math.min(pasteValue.length, length - 1)]?.focus()
                return
            }

            newValue[index] = inputValue.slice(-1)
            const newValueStr = newValue.join("")
            onChange(newValueStr)

            if (inputValue && index < length - 1) {
                inputRefs.current[index + 1]?.focus()
            }
        }

        const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
            e.preventDefault()
            const pasteData = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, length)
            onChange(pasteData.padEnd(length, "").slice(0, length))
            inputRefs.current[Math.min(pasteData.length, length - 1)]?.focus()
        }

        return (
            <div ref={ref} className={cn("flex items-center gap-2 justify-center", className)}>
                {Array.from({ length }).map((_, index) => (
                    <React.Fragment key={index}>
                        <input
                            ref={(el) => {
                                inputRefs.current[index] = el
                            }}
                            type="text"
                            inputMode="numeric"
                            autoComplete="one-time-code"
                            maxLength={length}
                            value={value[index] || ""}
                            onChange={(e) => handleChange(e, index)}
                            onKeyDown={(e) => handleKeyDown(e, index)}
                            onPaste={handlePaste}
                            disabled={disabled}
                            className={cn(
                                "flex h-14 w-12 items-center justify-center rounded-lg border border-input bg-background text-center text-xl font-semibold text-foreground transition-all duration-200",
                                "focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background focus:border-transparent",
                                "disabled:cursor-not-allowed disabled:opacity-50",
                                "placeholder:text-muted-foreground",
                                value[index] && "border-primary/50 bg-primary/5"
                            )}
                        />
                        {index === 2 && (
                            <span className="text-2xl text-muted-foreground font-light mx-1">-</span>
                        )}
                    </React.Fragment>
                ))}
            </div>
        )
    }
)
InputOTP.displayName = "InputOTP"

export { InputOTP }

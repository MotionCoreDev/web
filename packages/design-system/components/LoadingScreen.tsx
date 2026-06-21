"use client";

import React from "react";

export interface LoadingScreenProps {
    background?: string;
    spinnerColor?: string;
    showDotPattern?: boolean;
    showLogo?: boolean;
    logoUrl?: string;
    text?: string;
    fullScreen?: boolean;
}

export function LoadingScreen({
    background = "hsl(220, 65%, 3.52%)",
    spinnerColor = "hsl(240, 89%, 37%)",
    showDotPattern = true,
    showLogo = false,
    logoUrl,
    text,
    fullScreen = true,
}: LoadingScreenProps) {
    const containerClasses = fullScreen ? "fixed inset-0 z-50" : "absolute inset-0";

    return (
        <div
            className={`${containerClasses} flex flex-col items-center justify-center`}
            style={{ backgroundColor: background }}
        >
            {showDotPattern && (
                <div
                    className="absolute inset-0 opacity-30"
                    style={{
                        backgroundImage: "radial-gradient(rgb(35, 40, 68) 1px, transparent 1px)",
                        backgroundSize: "25px 25px",
                    }}
                />
            )}

            <div className="relative z-10 flex flex-col items-center gap-6">
                {showLogo && logoUrl && (
                    <img src={logoUrl} alt="Logo" className="h-12 w-auto animate-pulse" />
                )}

                <div className="relative">
                    <div
                        className="w-16 h-16 rounded-full border-4 border-transparent animate-spin"
                        style={{
                            borderTopColor: spinnerColor,
                            borderRightColor: `${spinnerColor}40`,
                            animationDuration: "1s",
                        }}
                    />
                    <div
                        className="absolute inset-2 rounded-full border-4 border-transparent animate-spin"
                        style={{
                            borderBottomColor: spinnerColor,
                            borderLeftColor: `${spinnerColor}60`,
                            animationDuration: "1.5s",
                            animationDirection: "reverse",
                        }}
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div
                            className="w-3 h-3 rounded-full animate-pulse"
                            style={{ backgroundColor: spinnerColor }}
                        />
                    </div>
                </div>

                {text && (
                    <p className="text-sm font-medium animate-pulse" style={{ color: "rgba(255, 255, 255, 0.7)" }}>
                        {text}
                    </p>
                )}
            </div>
        </div>
    );
}

export const LoadingPresets = {
    landing: { background: "hsl(220, 65%, 3.52%)", spinnerColor: "hsl(240, 89%, 37%)", showDotPattern: true },
    product: { background: "hsl(220, 65%, 3.52%)", spinnerColor: "hsl(240, 89%, 37%)", showDotPattern: true },
    admin: { background: "hsl(220, 65%, 3.52%)", spinnerColor: "hsl(240, 89%, 37%)", showDotPattern: true },
    light: { background: "hsl(216, 100%, 98.04%)", spinnerColor: "hsl(240, 89%, 37%)", showDotPattern: false },
} as const;

export type LoadingPreset = keyof typeof LoadingPresets;

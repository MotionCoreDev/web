"use client";

import { LoadingScreen } from "@startup/design-system";

export default function Loading() {
    return (
        <LoadingScreen
            background="hsl(220, 65%, 3.52%)"
            spinnerColor="hsl(240, 89%, 37%)"
            showDotPattern={true}
            showLogo={false}
        />
    );
}

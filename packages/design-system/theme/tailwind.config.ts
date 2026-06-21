import type { Config } from 'tailwindcss'
import { primitiveColors, semanticColors } from '../tokens/colors'
import { spacing } from '../tokens/spacing'
import { typography } from '../tokens/typography'

const config: Config = {
    content: [
        './src/**/*.{js,ts,jsx,tsx}',
        '../../packages/design-system/src/**/*.{js,ts,jsx,tsx}',
        './app/**/*.{js,ts,jsx,tsx}', // For Next.js apps
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                ...primitiveColors,
                ...semanticColors,
            },
            spacing: spacing,
            fontFamily: typography.fontFamily,
            fontSize: typography.fontSize,
            borderRadius: typography.borderRadius,
            boxShadow: typography.boxShadow,
        },
    },
    plugins: [],
}

export default config

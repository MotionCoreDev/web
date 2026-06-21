import { primitiveColors, semanticColors } from '../tokens/colors'
import { spacing } from '../tokens/spacing'
import { typography } from '../tokens/typography'

export const useTheme = () => {
    return {
        colors: {
            primitive: primitiveColors,
            semantic: semanticColors,
        },
        spacing,
        typography,
    }
}

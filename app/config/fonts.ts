/**
 * Font Configuration
 * Centralized typography settings for the entire application.
 * All font references should use these constants - NO hardcoding allowed.
 */

// Font Family Names
export const fontFamilies = {
    sans: 'var(--font-poppins)',
    mono: 'var(--font-geist-mono)',
    // Add more font families as needed
} as const;

// Font Sizes (in rem for accessibility)
export const fontSizes = {
    xs: '0.75rem',     // 12px
    sm: '0.875rem',    // 14px
    base: '1rem',      // 16px
    lg: '1.125rem',    // 18px
    xl: '1.25rem',     // 20px
    '2xl': '1.5rem',   // 24px
    '3xl': '1.875rem', // 30px
    '4xl': '2.25rem',  // 36px
    '5xl': '3rem',     // 48px
    '6xl': '3.75rem',  // 60px
    '7xl': '4.5rem',   // 72px
    '8xl': '6rem',     // 96px
    '9xl': '8rem',     // 128px
} as const;

// Font Weights
export const fontWeights = {
    thin: 100,
    extralight: 200,
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900,
} as const;

// Line Heights
export const lineHeights = {
    none: 1,
    tight: 1.25,
    snug: 1.375,
    normal: 1.5,
    relaxed: 1.625,
    loose: 2,
} as const;

// Letter Spacing
export const letterSpacing = {
    tighter: '-0.05em',
    tight: '-0.025em',
    normal: '0em',
    wide: '0.025em',
    wider: '0.05em',
    widest: '0.1em',
} as const;

// Typography Presets (common text styles)
export const typography = {
    h1: {
        fontFamily: fontFamilies.sans,
        fontSize: fontSizes['5xl'],
        fontWeight: fontWeights.bold,
        lineHeight: lineHeights.tight,
        letterSpacing: letterSpacing.tight,
    },
    h2: {
        fontFamily: fontFamilies.sans,
        fontSize: fontSizes['4xl'],
        fontWeight: fontWeights.semibold,
        lineHeight: lineHeights.tight,
        letterSpacing: letterSpacing.tight,
    },
    h3: {
        fontFamily: fontFamilies.sans,
        fontSize: fontSizes['3xl'],
        fontWeight: fontWeights.semibold,
        lineHeight: lineHeights.snug,
    },
    h4: {
        fontFamily: fontFamilies.sans,
        fontSize: fontSizes['2xl'],
        fontWeight: fontWeights.semibold,
        lineHeight: lineHeights.snug,
    },
    h5: {
        fontFamily: fontFamilies.sans,
        fontSize: fontSizes.xl,
        fontWeight: fontWeights.medium,
        lineHeight: lineHeights.normal,
    },
    h6: {
        fontFamily: fontFamilies.sans,
        fontSize: fontSizes.lg,
        fontWeight: fontWeights.medium,
        lineHeight: lineHeights.normal,
    },
    body1: {
        fontFamily: fontFamilies.sans,
        fontSize: fontSizes.base,
        fontWeight: fontWeights.normal,
        lineHeight: lineHeights.relaxed,
    },
    body2: {
        fontFamily: fontFamilies.sans,
        fontSize: fontSizes.sm,
        fontWeight: fontWeights.normal,
        lineHeight: lineHeights.relaxed,
    },
    caption: {
        fontFamily: fontFamilies.sans,
        fontSize: fontSizes.xs,
        fontWeight: fontWeights.normal,
        lineHeight: lineHeights.normal,
    },
    button: {
        fontFamily: fontFamilies.sans,
        fontSize: fontSizes.sm,
        fontWeight: fontWeights.medium,
        lineHeight: lineHeights.normal,
        letterSpacing: letterSpacing.wide,
    },
    code: {
        fontFamily: fontFamilies.mono,
        fontSize: fontSizes.sm,
        fontWeight: fontWeights.normal,
        lineHeight: lineHeights.normal,
    },
} as const;

// Type exports
export type FontFamilies = typeof fontFamilies;
export type FontSizes = typeof fontSizes;
export type FontWeights = typeof fontWeights;
export type Typography = typeof typography;

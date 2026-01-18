/**
 * Color Configuration - "Cyber Blue" Theme
 * Centralized color palette for the entire application.
 * All colors should be referenced from here - NO hardcoding allowed.
 * 
 * Primary Brand Color: #092963
 * Secondary Brand Color: #0272c2
 * Theme: Cyber Blue - Dark mode first, professional tech aesthetic
 */

export const colors = {
    // Primary Brand Colors - Based on #092963
    primary: {
        50: '#e6eef8',
        100: '#c0d4ed',
        200: '#96b8e0',
        300: '#6c9cd3',
        400: '#4d86c9',
        500: '#092963',  // Main primary (brand color)
        600: '#082457',
        700: '#071f4b',
        800: '#061a3f',
        900: '#041230',
        950: '#020a1c',
    },

    // Secondary Colors - Based on #eb7e2a (Orange)
    secondary: {
        50: '#fdfceb',
        100: '#fbedd6',
        200: '#f8d9b0',
        300: '#f4c085',
        400: '#f0a25a',
        500: '#eb7e2a',  // Main secondary (Orange)
        600: '#bd6522',
        700: '#8d4c19',
        800: '#5e3211',
        900: '#2f1908',
        950: '#170c04',
    },

    // Accent Colors - Cyber Blue Theme
    accent: {
        // Main Accent (Blue) - Previously Secondary
        main: '#0272c2',

        // Electric Blue - CTAs and highlights
        electricBlue: {
            light: '#4dc4f0',
            main: '#00A8E8',
            dark: '#0086ba',
        },
        // Neon Green - Innovation indicators, success states
        neonGreen: {
            light: '#7fff4d',
            main: '#39FF14',
            dark: '#2ecc10',
        },
        // Gold - Premium highlights, awards
        gold: {
            light: '#ffe34d',
            main: '#FFD700',
            dark: '#ccac00',
        },
        // Magenta - Urgent actions, special highlights
        magenta: {
            light: '#f06c7a',
            main: '#E63946',
            dark: '#b82d38',
        },
    },

    // Neutral/Gray Colors
    neutral: {
        50: '#fafafa',
        100: '#f5f5f5',
        200: '#e5e5e5',
        300: '#d4d4d4',
        400: '#a3a3a3',
        500: '#737373',
        600: '#525252',
        700: '#404040',
        800: '#262626',
        900: '#171717',
        950: '#0a0a0a',
    },

    // Semantic Colors
    success: {
        light: '#86efac',
        main: '#22c55e',
        dark: '#15803d',
    },
    warning: {
        light: '#fde047',
        main: '#eab308',
        dark: '#a16207',
    },
    error: {
        light: '#fca5a5',
        main: '#ef4444',
        dark: '#b91c1c',
    },
    info: {
        light: '#7dd3fc',
        main: '#0ea5e9',
        dark: '#0369a1',
    },

    // Background Colors - Cyber Blue Dark Theme
    background: {
        // Dark mode backgrounds
        dark: {
            primary: '#0A1128',     // Main dark background
            secondary: '#121212',   // Alternative dark sections
            elevated: '#1a1a2e',    // Cards on dark background
            surface: '#16213e',     // Elevated surfaces
        },
        // Light mode backgrounds
        light: {
            primary: '#ffffff',     // Main light background
            secondary: '#F7F8FA',   // Alternating sections
            paper: '#f9fafb',       // Cards on light background
        },
    },

    // Text Colors
    text: {
        // Dark mode text
        dark: {
            primary: '#ffffff',
            secondary: '#a3a3a3',
            disabled: '#525252',
            inverse: '#092963',
        },
        // Light mode text
        light: {
            primary: '#092963',
            secondary: '#525252',
            disabled: '#a3a3a3',
            inverse: '#ffffff',
        },
    },

    // Border Colors
    border: {
        light: '#e5e5e5',
        dark: '#404040',
        accent: 'rgba(2, 114, 194, 0.3)',
    },

    // Overlay Colors
    overlay: {
        dark: 'rgba(10, 17, 40, 0.8)',
        light: 'rgba(255, 255, 255, 0.9)',
        gradient: 'rgba(9, 41, 99, 0.7)',
    },
} as const;

// Gradient definitions
export const gradients = {
    // Hero gradient
    hero: 'linear-gradient(135deg, #092963 0%, #0272c2 50%, #4d86c9 100%)',
    // Cyber overlay gradient
    cyber: 'linear-gradient(180deg, rgba(9, 41, 99, 0.9) 0%, rgba(2, 114, 194, 0.7) 100%)',
    // Accent gradient (for special elements)
    accent: 'linear-gradient(90deg, #00A8E8 0%, #39FF14 100%)',
    // Dark overlay gradient
    darkOverlay: 'linear-gradient(180deg, rgba(10, 17, 40, 0.8) 0%, rgba(18, 18, 18, 0.95) 100%)',
    // Primary to secondary
    primaryToSecondary: 'linear-gradient(135deg, #092963 0%, #0272c2 100%)',
    // Radial glow
    radialGlow: 'radial-gradient(circle at center, rgba(2, 114, 194, 0.3) 0%, transparent 70%)',
} as const;

// CSS Variable names for use in globals.css
export const cssVariables = {
    background: '--background',
    foreground: '--foreground',
    primary: '--primary',
    secondary: '--secondary',
    accent: '--accent',
    border: '--border',
    surfaceDark: '--surface-dark',
    surfaceLight: '--surface-light',
} as const;

// Type exports for TypeScript
export type Colors = typeof colors;
export type ColorKeys = keyof Colors;
export type Gradients = typeof gradients;


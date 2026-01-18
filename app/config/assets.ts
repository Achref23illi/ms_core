/**
 * Assets Configuration
 * Centralized asset paths for the entire application.
 * All asset references should use these constants - NO hardcoding allowed.
 */

// Base paths
const PUBLIC_PATH = '/';
const IMAGES_PATH = `${PUBLIC_PATH}images/`;
const ICONS_PATH = `${PUBLIC_PATH}icons/`;
const LOGOS_PATH = `${PUBLIC_PATH}logos/`;

// Image Assets
export const images = {
    // Placeholder images - update with actual assets
    placeholder: `${IMAGES_PATH}placeholder.png`,
    hero: `${IMAGES_PATH}hero.png`,
    logo: `${PUBLIC_PATH}logo.png`,
    // Add more images as needed
} as const;

// Icon Assets (SVGs in public folder)
export const icons = {
    file: `${PUBLIC_PATH}file.svg`,
    globe: `${PUBLIC_PATH}globe.svg`,
    next: `${PUBLIC_PATH}next.svg`,
    vercel: `${PUBLIC_PATH}vercel.svg`,
    window: `${PUBLIC_PATH}window.svg`,
    // Add more icons as needed
} as const;

// Logo Assets
export const logos = {
    main: `${LOGOS_PATH}logo.svg`,
    light: `${LOGOS_PATH}logo-light.svg`,
    dark: `${LOGOS_PATH}logo-dark.svg`,
    icon: `${LOGOS_PATH}icon.svg`,
    // Add more logos as needed
} as const;

// Favicon
export const favicon = {
    ico: `${PUBLIC_PATH}favicon.ico`,
    // Add other favicon sizes if needed
    // apple: `${PUBLIC_PATH}apple-touch-icon.png`,
    // favicon16: `${PUBLIC_PATH}favicon-16x16.png`,
    // favicon32: `${PUBLIC_PATH}favicon-32x32.png`,
} as const;

// External URLs (external assets or CDN resources)
export const externalAssets = {
    // Add external asset URLs here
    // cdnImages: 'https://cdn.example.com/images/',
} as const;

// Video Assets
export const videos = {
    // Add video assets here
    // hero: `${PUBLIC_PATH}videos/hero.mp4`,
} as const;

// Audio Assets
export const audio = {
    // Add audio assets here
    // notification: `${PUBLIC_PATH}audio/notification.mp3`,
} as const;

// Document Assets (PDFs, etc.)
export const documents = {
    // Add document assets here
    // terms: `${PUBLIC_PATH}documents/terms.pdf`,
    // privacy: `${PUBLIC_PATH}documents/privacy.pdf`,
} as const;

// All assets combined for convenience
export const assets = {
    images,
    icons,
    logos,
    favicon,
    externalAssets,
    videos,
    audio,
    documents,
} as const;

// Type exports
export type Images = typeof images;
export type Icons = typeof icons;
export type Logos = typeof logos;
export type Assets = typeof assets;

export default assets;

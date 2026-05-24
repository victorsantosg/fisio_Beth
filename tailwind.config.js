/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#795558",
        "primary-container": "#dcaeb2",
        "on-primary-container": "#634044",
        "on-primary-fixed": "#2e1317",
        "primary-fixed-dim": "#eabbbf",
        "background": "#fcf9f8",
        "on-background": "#262626",
        "surface": "#fcf9f8",
        "on-surface": "#262626",
        "on-surface-variant": "#504445",
        "surface-white": "#FFFFFF",
        "surface-container": "#f0eded",
        "surface-container-low": "#f6f3f2",
        "surface-container-high": "#eae7e7",
        "surface-container-highest": "#e4e2e1",
        "surface-container-lowest": "#ffffff",
        "surface-dim": "#dcd9d9",
        "secondary": "#5f5e5e",
        "secondary-container": "#e5e2e2",
        "on-secondary": "#ffffff",
        "on-secondary-container": "#656464",
        "on-secondary-fixed": "#1c1b1c",
        "on-secondary-fixed-variant": "#484647",
        "secondary-fixed-dim": "#c9c6c6",
        "secondary-fixed": "#e5e2e2",
        "tertiary": "#4b6453",
        "tertiary-container": "#a4c0ab",
        "on-tertiary": "#ffffff",
        "on-tertiary-container": "#364f3e",
        "on-tertiary-fixed": "#072012",
        "on-tertiary-fixed-variant": "#334c3c",
        "tertiary-fixed-dim": "#b1cdb8",
        "tertiary-fixed": "#cdead3",
        "error": "#ba1a1a",
        "on-error": "#ffffff",
        "error-container": "#ffdad6",
        "on-error-container": "#93000a",
        "outline": "#827474",
        "outline-variant": "#d4c2c3",
        "surface-tint": "#795558",
        "inverse-surface": "#303030",
        "inverse-on-surface": "#f3f0ef",
        "inverse-primary": "#eabbbf",
        "soft-taupe": "#A68D85",
        "gentle-success": "#B2C8B2"
      },
      borderRadius: {
        "DEFAULT": "0.25rem",
        "lg": "0.5rem",
        "xl": "0.75rem",
        "full": "9999px"
      },
      spacing: {
        "base": "8px",
        "stack-sm": "12px",
        "stack-md": "24px",
        "stack-lg": "48px",
        "gutter": "24px",
        "margin-mobile": "16px",
        "container-max": "1200px"
      },
      fontFamily: {
        headline: ["'Plus Jakarta Sans'", "sans-serif"],
        body: ["'Source Sans 3'", "sans-serif"]
      }
    },
  },
  plugins: [],
}

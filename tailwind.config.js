/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary-container": "#0a192f",
        "on-background": "#e5e2e1",
        "surface-container-lowest": "#0e0e0e",
        "on-error": "#690005",
        "surface-variant": "#353534",
        "outline-variant": "#44474d",
        "surface-container": "#201f1f",
        "surface-container-low": "#1c1b1b",
        "surface-container-highest": "#353534",
        "on-primary": "#233148",
        "on-tertiary-fixed": "#002021",
        "inverse-surface": "#e5e2e1",
        "secondary": "#f4ffc9",
        "tertiary-fixed-dim": "#00dce5",
        "primary-fixed-dim": "#b9c7e4",
        "inverse-primary": "#515f78",
        "background": "#131313",
        "on-secondary-fixed": "#171e00",
        "outline": "#8f9097",
        "secondary-container": "#c1ed00",
        "on-secondary-fixed-variant": "#3d4d00",
        "error-container": "#93000a",
        "on-secondary-container": "#546900",
        "surface": "#131313",
        "secondary-fixed-dim": "#add500",
        "primary": "#b9c7e4",
        "on-primary-fixed": "#0d1c32",
        "surface-dim": "#131313",
        "inverse-on-surface": "#313030",
        "tertiary-container": "#001d1f",
        "on-tertiary-fixed-variant": "#004f53",
        "on-secondary": "#293500",
        "surface-bright": "#393939",
        "on-surface-variant": "#c5c6cd",
        "on-tertiary-container": "#009096",
        "tertiary": "#00dce5",
        "surface-tint": "#b9c7e4",
        "surface-container-high": "#2a2a2a",
        "on-surface": "#e5e2e1",
        "on-error-container": "#ffdad6",
        "error": "#ffb4ab",
        "secondary-fixed": "#c6f311",
        "primary-fixed": "#d6e3ff",
        "on-primary-fixed-variant": "#39475f",
        "tertiary-fixed": "#63f7ff",
        "on-primary-container": "#74829d",
        "on-tertiary": "#003739"
      },
      borderRadius: {
        "DEFAULT": "0.25rem",
        "lg": "0.5rem",
        "xl": "0.75rem",
        "full": "9999px"
      },
      spacing: {
        "margin-mobile": "20px",
        "gutter": "24px",
        "stack-sm": "24px",
        "stack-lg": "80px",
        "container-max": "1280px",
        "stack-md": "48px"
      },
      fontFamily: {
        "body-lg": ["Inter", "sans-serif"],
        "headline-md": ["Hanken Grotesk", "sans-serif"],
        "label-caps": ["Geist", "sans-serif"],
        "display-lg": ["Hanken Grotesk", "sans-serif"],
        "display-lg-mobile": ["Hanken Grotesk", "sans-serif"],
        "body-md": ["Inter", "sans-serif"]
      },
      fontSize: {
        "body-lg": ["18px", { lineHeight: "28px", fontWeight: "400" }],
        "headline-md": ["40px", { lineHeight: "48px", letterSpacing: "-0.01em", fontWeight: "700" }],
        "label-caps": ["12px", { lineHeight: "16px", letterSpacing: "0.1em", fontWeight: "600" }],
        "display-lg": ["72px", { lineHeight: "80px", letterSpacing: "-0.04em", fontWeight: "800" }],
        "display-lg-mobile": ["48px", { lineHeight: "52px", letterSpacing: "-0.02em", fontWeight: "800" }],
        "body-md": ["16px", { lineHeight: "24px", fontWeight: "400" }]
      }
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/container-queries")
  ],
}

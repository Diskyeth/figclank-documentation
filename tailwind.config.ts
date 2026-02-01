import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Background colors
        background: {
          primary: "var(--color-background-primary)",
          secondary: "var(--color-background-secondary)",
          tertiary: "var(--color-background-tertiary)",
          card: "var(--color-background-card)",
          dashboard: "var(--color-background-dashboard)",
          "card-primary": "var(--color-background-card-primary)",
        },
        // Brand colors
        brand: {
          orange: "#FF7B4F",
          purple: "#9871DD",
        },
        // Editor colors
        editor: {
          orange: "#FF7B4F",
          pink: "#fd46c3",
          blue: "#3369ff",
          component: "#c489f9",
          hover: "#e8815e",
        },
        // Grey scale
        grey: {
          100: "#232323",
          200: "#414141",
          300: "rgba(255, 255, 255, 0.6)",
          400: "rgba(255, 255, 255, 0.4)",
        },
        // Text colors
        foreground: {
          DEFAULT: "#ffffff",
          muted: "rgba(255, 255, 255, 0.6)",
          subtle: "rgba(255, 255, 255, 0.4)",
        },
      },
      fontFamily: {
        sans: ["Work Sans", "system-ui", "sans-serif"],
      },
      fontSize: {
        "2xs": ["0.625rem", { lineHeight: "0.75rem" }],
        xs: ["0.75rem", { lineHeight: "1rem" }],
        sm: ["0.875rem", { lineHeight: "1.25rem" }],
        base: ["1rem", { lineHeight: "1.5rem" }],
        lg: ["1.125rem", { lineHeight: "1.75rem" }],
        xl: ["1.25rem", { lineHeight: "1.75rem" }],
        "2xl": ["1.5rem", { lineHeight: "2rem" }],
        "3xl": ["2rem", { lineHeight: "2.25rem" }],
      },
      borderRadius: {
        sm: "0.5rem",
        DEFAULT: "0.75rem",
        lg: "1rem",
        xl: "1.5rem",
        "2xl": "2rem",
      },
      backdropBlur: {
        DEFAULT: "16px",
        lg: "24px",
      },
      boxShadow: {
        card: "0 4px 24px rgba(0, 0, 0, 0.25)",
        button: "3px 3px 0 rgba(0, 0, 0, 0.25)",
      },
      backgroundImage: {
        "brand-gradient": "linear-gradient(135deg, #FF7B4F 0%, #9871DD 100%)",
      },
    },
  },
  plugins: [],
};
export default config;

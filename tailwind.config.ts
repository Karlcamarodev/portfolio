import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Paleta principal de Karl (indigo → purple → pink)
        primary: {
          DEFAULT: "#6366f1", // Indigo
          dark: "#4f46e5",
          light: "#818cf8",
        },
        secondary: {
          DEFAULT: "#a855f7", // Purple
          dark: "#9333ea",
          light: "#c084fc",
        },
        accent: {
          DEFAULT: "#ec4899", // Pink
          dark: "#db2777",
          light: "#f472b6",
        },
        // Backgrounds y superficies
        background: {
          DEFAULT: "#0a0a0f",
          light: "#ffffff",
        },
        surface: {
          DEFAULT: "#1a1a2e",
          light: "#f8f9fa",
        },
      },
      backgroundImage: {
        "gradient-primary":
          "linear-gradient(135deg, #6366f1 0%, #a855f7 50%, #ec4899 100%)",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out",
        "slide-up": "slideUp 0.6s ease-out",
        "slide-down": "slideDown 0.6s ease-out",
        float: "float 3s ease-in-out infinite",
        glow: "glow 2s ease-in-out infinite alternate",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideDown: {
          "0%": { transform: "translateY(-20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        glow: {
          "0%": { opacity: "0.5" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
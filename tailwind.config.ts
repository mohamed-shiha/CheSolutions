import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.25rem",
        sm: "1.5rem",
        lg: "2rem",
        xl: "2.5rem",
      },
      screens: {
        "2xl": "1280px",
      },
    },
    extend: {
      colors: {
        background: "hsl(var(--background) / <alpha-value>)",
        foreground: "hsl(var(--foreground) / <alpha-value>)",
        muted: {
          DEFAULT: "hsl(var(--muted) / <alpha-value>)",
          foreground: "hsl(var(--muted-foreground) / <alpha-value>)",
        },
        card: {
          DEFAULT: "hsl(var(--card) / <alpha-value>)",
          foreground: "hsl(var(--card-foreground) / <alpha-value>)",
        },
        border: "hsl(var(--border) / <alpha-value>)",
        input: "hsl(var(--input) / <alpha-value>)",
        ring: "hsl(var(--ring) / <alpha-value>)",
        brand: {
          DEFAULT: "hsl(var(--brand) / <alpha-value>)",
          foreground: "hsl(var(--brand-foreground) / <alpha-value>)",
          glow: "hsl(var(--brand-glow) / <alpha-value>)",
        },
        accent: {
          DEFAULT: "hsl(var(--accent) / <alpha-value>)",
          foreground: "hsl(var(--accent-foreground) / <alpha-value>)",
        },
        steel: {
          50: "#f5f7fa",
          100: "#e7ebf2",
          200: "#c8d2e0",
          300: "#9aabc4",
          400: "#6b80a4",
          500: "#475d83",
          600: "#344668",
          700: "#283657",
          800: "#1c263c",
          900: "#111827",
          950: "#0a0f1c",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui"],
        display: ["var(--font-display)", "ui-sans-serif", "system-ui"],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular"],
      },
      borderRadius: {
        lg: "0.875rem",
        xl: "1.25rem",
        "2xl": "1.75rem",
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(255,176,32,0.15), 0 10px 40px -10px rgba(255,176,32,0.45)",
        card: "0 1px 0 0 rgba(255,255,255,0.04) inset, 0 8px 30px rgba(0,0,0,0.35)",
      },
      backgroundImage: {
        "grid-fade":
          "linear-gradient(to bottom, rgba(10,15,28,0) 0%, rgba(10,15,28,0.6) 80%, rgba(10,15,28,1) 100%), linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)",
        "radial-glow":
          "radial-gradient(60% 60% at 50% 0%, rgba(255,176,32,0.18) 0%, rgba(255,176,32,0) 60%)",
        "noise":
          "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.08 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
      },
      backgroundSize: {
        "grid-sm": "40px 40px",
        "grid-lg": "80px 80px",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.6" },
          "50%": { opacity: "1" },
        },
        scan: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100%)" },
        },
      },
      animation: {
        marquee: "marquee 40s linear infinite",
        "pulse-glow": "pulseGlow 3s ease-in-out infinite",
        scan: "scan 6s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;


import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";

export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        display: ["Playfair Display", "serif"],
      },
      colors: {
        primary: {
          DEFAULT: "hsl(180, 33%, 24%)",
          foreground: "hsl(0, 0%, 98%)",
        },
        accent: {
          DEFAULT: "hsl(16, 84%, 62%)",
          foreground: "hsl(0, 0%, 98%)",
        },
        brand: {
          deep: "hsl(180, 33%, 17%)",
          light: "hsl(180, 33%, 35%)",
        },
        background: "hsl(210, 40%, 98%)",
        foreground: "hsl(222, 47%, 11%)",
        card: "hsl(0, 0%, 100%)",
        border: "hsl(214, 32%, 91%)",
        muted: {
          DEFAULT: "hsl(210, 40%, 96%)",
          foreground: "hsl(215, 16%, 47%)",
        },
      },
      borderRadius: {
        lg: "0.75rem",
        md: "0.5rem",
        sm: "0.25rem",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "slide-up": {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.5s ease-out forwards",
        "slide-up": "slide-up 0.6s ease-out forwards",
      },
    },
  },
  plugins: [animate],
} satisfies Config;

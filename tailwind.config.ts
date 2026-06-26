import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#08080f",
        surface: "#0e0e1a",
        line: "#1c1c2e",
        indigo: "#4f46e5",
        violet: "#a855f7",
        signal: "#5eead4", // terminal "ok" teal
        haze: "#9a9ab0",
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      keyframes: {
        "fade-up": {
          from: { opacity: "0", transform: "translateY(16px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        blink: { "0%,49%": { opacity: "1" }, "50%,100%": { opacity: "0" } },
        "scan": { from: { transform: "translateY(-100%)" }, to: { transform: "translateY(100%)" } },
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.16,1,0.3,1) both",
        blink: "blink 1.1s step-end infinite",
        scan: "scan 6s linear infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;

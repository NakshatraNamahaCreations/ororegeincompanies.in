/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        background: "#ffffff",
        foreground: "#1a1a1a",
        muted: "#8a8a8a",
        border: "#e6e2d6",
        brand: { DEFAULT: "#b8860b", dark: "#8a6508" },
      },
      fontFamily: {
        sans: ['"Geist"', "ui-sans-serif", "system-ui", "sans-serif"],
      },
      // Call-to-action animations: light sweep, soft glow pulse, nudging arrow
      animation: {
        shine: "shine 2.8s ease-in-out infinite",
        glow: "glow 2s ease-in-out infinite",
        nudge: "nudge 1.2s ease-in-out infinite",
      },
      keyframes: {
        shine: {
          "0%": { transform: "translateX(-150%) skewX(-20deg)" },
          "60%, 100%": { transform: "translateX(350%) skewX(-20deg)" },
        },
        glow: {
          "0%, 100%": { boxShadow: "0 0 0 0 rgb(255 255 255 / 0.7), 0 10px 25px -8px rgb(120 60 10 / 0.5)" },
          "50%": { boxShadow: "0 0 0 10px rgb(255 255 255 / 0), 0 10px 25px -8px rgb(120 60 10 / 0.5)" },
        },
        nudge: {
          "0%, 100%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(4px)" },
        },
      },
    },
  },
  plugins: [],
};

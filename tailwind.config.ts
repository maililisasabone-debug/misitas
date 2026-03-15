import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        editorial: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-bebas)", "sans-serif"],
      },
      colors: {
        cream: "#FAF7F2",
        clay: "#C4956A",
        terracotta: "#D4714A",
        "soft-pink": "#F5E6E0",
        pink: "#E8C4B8",
        ink: "#1C1C1C",
        border: "#E8E0D4",
      },
    },
  },
  plugins: [],
};

export default config;

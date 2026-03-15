import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ["var(--font-heading)", "Georgia", "serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
        script: ["var(--font-script)", "cursive"],
        display: ["var(--font-display)", "sans-serif"],
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      colors: {
        cream: "#F5EFE6",
        sand: "#EDE4D8",
        blush: "#C9907A",
        terracotta: "#B5694A",
        caramel: "#C4956A",
        ink: "#2C2010",
        border: "#E0D5C8",
        "soft-gray": "#9A8A7A",
        "warm-white": "#FEFAF6",
      },
    },
  },
  plugins: [],
};

export default config;

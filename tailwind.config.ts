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
        cream: "#FAF7F2",
        pink: "#FF7BD6",
        orange: "#F86632",
        purple: "#A284C9",
        "light-purple": "#BF9ADD",
        lime: "#BAE033",
        ink: "#1C1C1C",
        border: "#E8E0D4",
        "soft-gray": "#8A8A8A",
      },
    },
  },
  plugins: [],
};

export default config;

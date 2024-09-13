import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      nuform: ["Nuform", "sans-serif"],
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        main: {
          100: "#F8E0BA",
          300: "#F6CA85",
          DEFAULT: "#F0A734",
          800: "#D88F1B",
        },
        secondary: {
          DEFAULT: "#D92B2B",
          800: "#B80E24",
        },
        beige: {
          DEFAULT: "#EAE8DA",
        },
        black: {
          DEFAULT: "#1E1E1E",
        },
      },
    },
  },
  plugins: [],
};
export default config;

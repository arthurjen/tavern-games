import type { Config } from "tailwindcss";
import withMT from "@material-tailwind/react/utils/withMT";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      "rubrik-bold": ["Rubrik New Edge Bold", "sans-serif"],
      rubrik: ["Rubrik New Edge", "sans-serif"],
      "rubrik-semibold": ["Rubrik New Edge SemiBold", "sans-serif"],
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        main: {
          100: "#F8E0BA",
          300: "#F6CA85",
          DEFAULT: "#FCB421",
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
export default withMT(config);

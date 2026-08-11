import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#eef1fd",
          100: "#d5dcfa",
          200: "#aab9f5",
          300: "#7f96f0",
          400: "#5473eb",
          500: "#1a3fd4",
          600: "#1535b3",
          700: "#102b92",
          800: "#0b2071",
          900: "#071550",
          950: "#040e38",
        },
        accent: {
          500: "#f47820",
          600: "#d4620f",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;

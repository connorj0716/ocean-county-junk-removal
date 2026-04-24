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
          50: "#eff9ff",
          100: "#def2ff",
          200: "#b6e7ff",
          300: "#75d4ff",
          400: "#2cbcff",
          500: "#00a2f0",
          600: "#0081cc",
          700: "#0066a4",
          800: "#065787",
          900: "#0b4871",
          950: "#072d4a",
        },
        accent: {
          500: "#ff7a1a",
          600: "#e55f00",
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

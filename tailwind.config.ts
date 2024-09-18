import type { Config } from "tailwindcss";
import { darkColors, lightColors } from "./constants/colors";
import daisyui from "daisyui";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/tailwind-datepicker-react/dist/**/*.js",
  ],
  theme: {
    extend: {
      boxShadow: {
        "custom-shadow": "4px 4px 20px 0px rgba(117, 197, 193, 0.2)",
      },
      colors: {
        light: { ...lightColors },
        dark: { ...darkColors },
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: ["light", "dark"],
  },
};
export default config;

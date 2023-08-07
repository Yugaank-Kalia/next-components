import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "very-dark-blue": "hsl(216, 12%, 8%)",
        "dark-blue": {
          dark: "hsl(213, 19%, 18%)",
          light: "hsl(213, 19%, 25%)",
        },
        grey: {
          dark: "hsl(216, 12%, 54%)",
          light: "hsl(217, 12%, 63%)",
        },
        orange: "hsl(25, 97%, 53%)",
      },
    },
  },
  plugins: [],
};
export default config;

// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-dm-sans)'],
        syne: ['var(--font-syne)'],
        outfit: ['var(--font-outfit)'],
        syncopate: ['var(--font-syncopate)'],
      },
    },
  },
  plugins: [],
};
export default config;
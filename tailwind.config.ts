import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        webtizen: {
          bg: "#2D3330",
          card: "#2E4541",
          accent: "#548062",
          muted: "#70A591",
          text: "#F0F7EE",
        },
      },
    },
  },
  plugins: [],
};

export default config;

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
        background: {
          primary: "#0A0A0A",
          secondary: "#111111",
        },
        lime: {
          primary: "#A3E635",
          hover: "#bef264",
        },
        dark: {
          bg: "#18181B",
          border: "#27272A",
          hover: "#3F3F46",
        },
        text: {
          heading: "#FFFFFF",
          body: "#A1A1AA",
          muted: "#71717A",
        }
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      borderRadius: {
        "card": "24px",
        "btn": "12px",
        "tag": "8px",
      },
    },
  },
  plugins: [],
};
export default config;

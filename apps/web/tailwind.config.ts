import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./ui/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgPrimary: "#212121",
        bgSecondary: "#303030",
        bgTertiary: "#414141",
        bgScrim: "#0d0d0d80",
        sidebar: "#0f1724",
        accent: "#10a37f",
      },
      spacing: {
        18: "4.5rem",
      },
      maxWidth: {
        chat: "70ch",
      },
      borderRadius: {
        xl2: "1rem",
      },
    },
  },
  plugins: [],
};
export default config;

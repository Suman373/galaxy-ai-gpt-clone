import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx,js,jsx}",
    "./apps/web/**/*.tsx",
    "./ui/**/*.{ts,tsx,js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        clone: {
          bg: "#f7f7fb",        // page bg
          surface: "#ffffff",   // main panels
          muted: "#f3f4f6",     // subtle grey panels
          line: "#e6e6ea",      // thin borders / separators
          text: "#111827",      // primary text
          dim: "#6b7280",       // secondary text
          sidebar: "#0f1724",   // dark sidebar bg
          accent: "#10a37f",    // small accent (if used)
          primary: "#7c3aed",   // alternative accent
        },
      },
      spacing: {
        18: "4.5rem",
      },
      maxWidth: {
        chat: "70ch", // control message width
      },
      borderRadius: {
        xl2: "1rem",
      },
    },
  },
  plugins: [],
};
export default config;

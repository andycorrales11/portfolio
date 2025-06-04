import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: { extend: {fontFamily: {
        mono: ["var(--font-press)", "monospace"],
      },} },
  plugins: [],
} satisfies Config;

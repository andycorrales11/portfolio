import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/content/**/*.mdx",
  ],
  theme: {
    extend: {
      fontFamily: {
        pixel: ["family-name:var(--font-pixel)", "monospace"],
      },
    },
  },
  plugins: [],
} satisfies Config;

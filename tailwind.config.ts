import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/layout.tsx",
    "./app/page.tsx"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
export default config;

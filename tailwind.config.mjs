/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        background: {
          primary: "hsl(var(--background-primary))",
          secondary: "hsl(var(--background-secondary))",
        },
        text: {
          primary: "hsl(var(--text-primary))",
          secondary: "hsl(var(--text-secondary))",
          tertiary: "hsl(var(--text-tertiary))",
        },
        accent: "hsl(var(--accent))",
      },
      fontFamily: {
        inter: ["Inter", ...defaultTheme.fontFamily.sans],
        firaCode: [
          "var(--font-firaCode)",
          "var(--font-firMono)",
          "var(--font-robotoMono)",
        ],
      },
      container: {
        center: true,
        padding: "1rem",
        screens: {
          sm: "100%",
          md: "100%",
          lg: "1000px",
        },
      },
    },
  },
  plugins: [],
};

import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-exo2)', 'Exo 2', 'sans-serif'],
        mono: ['var(--font-inter)', 'Inter', 'monospace'],
      },
      colors: {
        neuratek: {
          dark: '#14202C',
          primary: '#3CADBE',
          light: '#6FC9D6',
          deep: '#2A8E9E',
          'gray-dark': '#2F3E4A',
          'gray-medium': '#6B7C8A',
          'gray-light': '#C7D1D8',
        },
      },
    },
  },
  plugins: [],
} satisfies Config;

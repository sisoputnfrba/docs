/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./docs/.vitepress/theme/components/*.vue",
    "./docs/**/*.md",
  ],
  theme: {
    extend: {},
    screens: {
      'sm': '668px',
      'lg': '960px',
      'xl': '1280px',
      '2xl': '1440px',
    }
  },
  plugins: [],
}

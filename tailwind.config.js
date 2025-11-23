/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'easi-bg': '#120C3A',
        'easi-primary': '#60CAD8',
        'easi-secondary': '#FFA086',
        'easi-text': '#FFFFFF',
      }
    },
  },
  plugins: [],
}


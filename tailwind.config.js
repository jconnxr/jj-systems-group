/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Georgia', 'Cambria', 'Times New Roman', 'serif'],
        display: ['Georgia', 'Cambria', 'Times New Roman', 'serif'],
      },
      colors: {
        brand: {
          dark: '#1a1a1a',
          muted: '#4a4a4a',
          light: '#f5f5f0',
          accent: '#2c5282',
        },
      },
    },
  },
  plugins: [],
}

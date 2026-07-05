/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        elite: {
          gold: '#D4A853',
          'gold-light': '#E2C27C',
          'gold-dark': '#B8923E',
          dark: '#0A0A0A',
          'dark-light': '#1A1A1A',
          cream: '#F5F0E8',
          'cream-dark': '#D4C9B5',
        }
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'Helvetica', 'Arial', 'sans-serif'],
      },
      maxWidth: {
        'container': '500px',
      },
    },
  },
  plugins: [],
}

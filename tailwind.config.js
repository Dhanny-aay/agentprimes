/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Jost: ['Jost', 'sans-serif'],
        Onest: [ 'Onest', 'sans-serif'],
        Outfit: [ 'Outfit', 'sans-serif'],
      },
    },
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'bp': '1500px',
      'mob':'902px'
    },
    extend: {},
  },
  plugins: [],
}
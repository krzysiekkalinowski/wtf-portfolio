/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        backgroundColor: '#020916',
        accentColor: '#CEFF7E',
        textColors: '#fff',
        secondTextColor: '#9CA3AF',
      },
      fontFamily: {
        mainFontFamily: ['DM Sans', 'sans-serif'],
      },
      backgroundImage: {
        'hamburger': "url('img/hamburger.svg')",
      },
      spacing: {
        'contentWidth': '1312px',
      }
    },
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        backgroundColor: '#020916',
        primaryColor: '#CEFF7E',
        textColor: '#fff',
        secondTextColor: '#9CA3AF',
        buttonColor: '#020916',
        borderColor: '#1F2937',
      },
      fontFamily: {
        mainFontFamily: ['DM Sans', 'sans-serif'],
      },
      backgroundImage: {
        'hamburger': "url('img/hamburger.svg')",
      },
      spacing: {
        'contentWidth': '1312px',
      },
      borderRadius: {
        'imgRadius': '50%',
      },
      boxShadow: {
        'articleShadow': 'inset 0 2px 0 0 rgba(255, 255, 255, 0.15)',
      },
    },
  },
  plugins: [],
}


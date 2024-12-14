/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors:{
      "main":"#111215",
      "white":"#E5E5E5",
      "red":"#FF0000",
      "green": "#008000",
      "orange":"#FFA500"
    },
    extend: {
      spacing: {
        '97': '24.5rem',
        '98': '25rem',
        '128': '32rem',
        '144': '36rem',
        '160': '40rem',
        '176': '44rem',
        '192': '48rem',
        '208': '52rem',
        '224': '56rem',
        '240': '60rem',
        '256': '64rem',
        '272': '72rem',
        '288': '76rem',
        '304': '80rem',
        '320': '84rem',
        '336': '88rem',
        '352': '92rem',
        '368': '96rem',
        '384': '100rem',
      }
    },
  },
  plugins: [],
};



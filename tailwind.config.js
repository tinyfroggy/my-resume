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
        '128': '32rem',
        '144': '36rem',
        '160': '40rem',
        '176': '44rem',
        '192': '48rem',
      }
    },
  },
  plugins: [],
};



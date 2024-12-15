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
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
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
        '400': '104rem',
        '416': '108rem',
        '432': '112rem',
        '448': '116rem',
        '464': '120rem',
        '480': '124rem',
        '496': '128rem',
        '512': '132rem',
        '528': '136rem',
        '544': '140rem',
        '560': '144rem',
        '576': '148rem',
        '592': '152rem',
        '608': '156rem',
        '624': '160rem',
        '640': '164rem',
        '656': '168rem',
        '672': '172rem',
        '688': '176rem',
        '704': '180rem',
      }
    },
  },
  plugins: [],
};



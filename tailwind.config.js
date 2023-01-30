/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./local/**.html', './local/secure/admin/**.html'],
  theme: {
    screens: {
      'ph': '426px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        genos: ["Genos", "sans-serif"],
      },
      colors: {
        myrtle: '#17350d',
        blackfores: '#1c360c',
        christi: '#62ab22',
        conifer: '#b0e455',
        lemon: '#f7ff20',
        straw: '#d7be7b',
        primrose: '#e0da9a',
        alpine: '#9f7f3e',
        muesli: '#9c8850',
      },
      backgroundImage: {
        'home': "url('../img/home/index-bg.webp')",
        'page': "url('../img/part/bg.webp')",
      }
    },
  },
  plugins: [require('prettier-plugin-tailwindcss')],
}
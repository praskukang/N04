/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./local/**.html', './local/secure/admin/**.html'],
  theme: {
    screens: {
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
        harmattan: ["harmattan", "sans-serif"],
      },
      colors: {
        purple: '#5e18be',
        blueViolet: '#842aff',
        christalle: '#341066',
        dandelion: '#ffcd62',
      },
    },
  },
  plugins: [require('prettier-plugin-tailwindcss')],
}
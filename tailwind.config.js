/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {},
  },
  colors: {
    primary: '#FF8A00f',
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: ['light'],
  },
};

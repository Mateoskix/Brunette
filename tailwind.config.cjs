/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'bunya' : ['Bunya', 'sans-serif'],
        'bunya-bold' : ['Bunya-Bold', 'sans-serif'],
        'roulette': ['Roulette', 'sans-serif'],
        'lemon-bold': ['Lemon-Bold', 'sans-serif'],
        'lemon': ['Lemon', 'sans-serif'],
      },
      colors: {
      'custom-primary':'#B17F4A',
      'custom-secundary':'#E94E1B',
      'custom-variant1':'#683C11',
    },},
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
});

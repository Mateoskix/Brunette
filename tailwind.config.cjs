/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'bunya' : ['Bunya', 'sans-serif'],
        'bunya-bold' : ['Bunya-Bold', 'sans-serif'],
      },
      colors: {
      'custom-primary':'#B17F4A',
    },},
  },
  plugins: [],
});

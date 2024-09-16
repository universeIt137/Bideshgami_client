/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: '#0066ff',
        light_blue: '#80b3ff',
       
      },
    },
  },
  plugins: [require('daisyui'),],
  daisyui: {
    themes: ['light'],
  },
});

// 
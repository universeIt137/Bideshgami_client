/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      extend: {
        fontFamily: {
          inter: ['Inter', 'sans-serif'],
        },
        colors: {
          primary: '#0066FF',
          color_blue: '#0066ff',
          light_blue: '#80b3ff',
        }
      },
    },
  },
  plugins: [require('daisyui'),],
  daisyui: {
    themes: ['light'],
  },
}

// 
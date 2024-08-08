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
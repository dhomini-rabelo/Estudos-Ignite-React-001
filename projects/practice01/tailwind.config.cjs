/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pGray: {
          100: '#F2F2F2',
          200: '#D9D9D9',
          300: '#808080',
          400: '#333333',
          500: '#262626',
          600: '#1A1A1A',
          700: '#0D0D0D',
        },
        pPurple: {
          400: '#8284FA',
          800: '#5E60CE',
        },
        pBlue: {
          400: '#4EA8DE',
          800: '#1E6F9F',
        },
        pRed: {
          300: '#E25858',
        },
      }
    },
  },
  plugins: [],
}

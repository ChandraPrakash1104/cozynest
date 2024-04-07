/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './src/styles/customUtilities.css',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#B88E2F',
        'primary-dark': '#967426',
        'primary-light': '#c4a45a',
        'font-color1': '#333333',
        'font-color2': '#666666',
        'green-accents': '#2EC1AC',
        'red-accents': '#E97171',
        'light-bg': '#F4F5F7',
        'box-color': '#FFF3E3',
        'faded-font': '#666666',
        warning: {
          300: '#FFD2B2',
          500: '#F8816C',
          700: '#C84B31',
        },
        success: {
          300: '#A5D6A7',
          500: '#4CAF50',
          700: '#2E7D32',
        },
      },

      margin: {
        'side-gap': '1.5rem',
      },
    },
  },
  plugins: [],
};

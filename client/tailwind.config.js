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
        primary: '#27233A',
        secondary: {
          1: '#505168',
          2: '#DCC48E',
        },
        accent: '#B3C0A4',
        neutral: '#EAEFD3',
        hover: '#e5e7eb',
        click: '#d1d5db',
        font: {
          primary: '#333333',
          secondary: '#666666',
          accent: '#666666',
          inverted: '#dedede',
        },
        'font-color1': '#333333',
        'font-color2': '#666666',
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

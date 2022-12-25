const fontFamily = require('./src/theme/fontFamily');
const colors = require('./src/theme/colors');
const spacing = require('./src/theme/spacing');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      screens: {
        lg: '1140px',
        xl: '1140px',
        '2xl': '1140px',
      },
    },
    extend: {
      fontFamily,
      colors,
      spacing
    },
  },
  plugins: [],
};

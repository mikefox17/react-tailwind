const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./index.html', './src/**/*.{react,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        orange: colors.orange,
        lime: colors.lime,
        cyan: colors.cyan,
        teal: colors.teal,
      },
      fontFamily: {
        burtons: 'burtons',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

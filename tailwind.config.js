const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
     colors: {
       'idg-grey-light': '#E5E5E5',
       'idg-blue-light': '#E4EBF0',
       'idg-blue-mid': '#B0C4D2',
       'idg-black': '#424242',
       'idg-blue': '#003667',
       'idg-green': '#BED582',
      },
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      borderRadius: {
        '4xl': '3rem',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

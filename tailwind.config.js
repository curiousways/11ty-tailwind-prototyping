const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
     colors: {
       'idg-black': '#424242',
       'idg-blue': '#003667',
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

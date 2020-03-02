// tailwind.config.js
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  theme: {
    extend: {
      screens: defaultTheme.screens,
      colors: {
        // My Colors
        'blue-happy': '#2d6987',
        'extly': '#ff8900',
        'grey-dark': '#0d0d0d',
        'grey-light': '#f5f5f5',
        'grey': '#666',
        'link': '#ffa32b',
        'not-so-black': '#22292f',
        'oldlace': '#fff6e9',
        'orange-hot': '#9b6f37',
      },
      spacing: {
        '32-lite': '7rem',
      },
      fontFamily: {
        sans: [
          'muli',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif',

          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Noto Sans"',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
      opacity: {
        '0': '0',
        '25': '0.25',
        '50': '0.5',
        '75': '0.75',

        // One more ...
        '90': '0.90',

        '100': '1',
      },
    },
  },
  variants: {},
  plugins: [
    require('@tailwindcss/ui')({
      layout: 'sidebar',
    })
  ],
}


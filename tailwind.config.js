/**
 * @author     Extly, CB <team@extly.com>
 * @copyright  Copyright (c)2019-2022 Extly, CB All rights reserved.
 * @license    GNU General Public License version 3 or later; see LICENSE.txt
 *
 * @see       https://www.extly.com
 */

const aspectRatio = require('@tailwindcss/aspect-ratio');
const forms = require('@tailwindcss/forms');
const lineClamp = require('@tailwindcss/line-clamp');
const typography = require('@tailwindcss/typography');
// const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './dist/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],

  theme: {
    extend: {
      // screens: defaultTheme.screens,
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
      },
      colors: {
        // My Colors
        'blue-happy': '#2d6987',
        extly: '#ff8900',
        'grey-dark': '#0d0d0d',
        'grey-light': '#f5f5f5',
        grey: '#666',
        link: '#ffa32b',
        'not-so-black': '#22292f',
        oldlace: '#fff6e9',
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
        0: '0',
        25: '0.25',
        50: '0.5',
        75: '0.75',

        // One more ...
        90: '0.90',

        100: '1',
      },
    },
  },
  plugins: [
    aspectRatio,
    forms,
    lineClamp,
    typography,
  ],
};

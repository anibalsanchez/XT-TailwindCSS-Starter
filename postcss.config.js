/**
 * @author     Extly, CB <team@extly.com>
 * @copyright  Copyright (c)2007-2019 Extly, CB All rights reserved.
 * @license    GNU General Public License version 3 or later; see LICENSE.txt
 *
 * @see       https://www.extly.com
 */

const purgecss = require('@fullhuman/postcss-purgecss')({
  content: [
    './src/**/*.html',
  ],

  defaultExtractor: content => content.match(/[\w-/.:]+(?<!:)/g) || []
});

module.exports = {
  plugins: [
    require('postcss-import'),
    require('tailwindcss'),
    require('postcss-nested'),

    ...process.env.NODE_ENV === 'production' ? [purgecss] : [],
    require('cssnano')({
      preset: 'advanced',
    }),
  ],
};

/**
 * @author     Extly, CB <team@extly.com>
 * @copyright  Copyright (c)2012-2020 Extly, CB All rights reserved.
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

const nano = require('cssnano')({
  preset: 'advanced',
});

module.exports = {
  plugins: [
    require('postcss-import'),
    require('tailwindcss'),
    require('postcss-nested'),

    ...process.env.NODE_ENV === 'production' ? [purgecss, nano] : [],
  ],
};

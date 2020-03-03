/**
 * @author     Extly, CB <team@extly.com>
 * @copyright  Copyright (c)2012-2020 Extly, CB All rights reserved.
 * @license    GNU General Public License version 3 or later; see LICENSE.txt
 *
 * @see       https://www.extly.com
 */

const postcssImport = require('postcss-import');
const tailwindCss = require('tailwindcss');
const postcssNested = require('postcss-nested');

const autoprefixer = require('autoprefixer');

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
    postcssImport,
    tailwindCss,
    postcssNested,

    autoprefixer,
    ...process.env.NODE_ENV === 'production' ? [purgecss, nano] : [],
  ],
};

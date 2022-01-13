# Tailwind CSS Starter Project

A Tailwind CSS Starter. Based on Tailwind CSS, and PostCSS. Fully optimized for top performance.

- [Tailwind CSS](https://tailwindcss.com) - The Utility-First CSS Framework. A project by Adam Wathan (@adamwathan), Jonathan Reinink (@reinink), David Hemphill (@davidhemphill) and Steve Schoger (@steveschoger).
- [Parcel](https://parceljs.org/)
- [PostCSS](https://postcss.org/)

For future reference:

- [Tailwind CSS has arrived at the Joomla scene](https://blog.anibalhsanchez.com/en/10-blogging/lost-and-found/47-tailwind-css-has-arrived-at-the-joomla-scene.html)
- [anibalsanchez/XT-Tailwind-for-Joomla](https://github.com/anibalsanchez/XT-Tailwind-for-Joomla)

**Prerequisites**: Before you use this starter, you must install [Node.js](https://nodejs.org/).

To get started, clone the project (or download the ZIP file) and install the dependencies:

```sh
# Install dependencies
npm install
```

```
# Build with Tailwind CLI
npm run dev
```

```
# Serve with Parcel
npm run serve
```

The page is rendered here <http://localhost:8080/>.

The sample page renders [my blog](https://blog.anibalhsanchez.com) layout redesigned with Tailwind ;-)

To build a production bundle run:

```
npm run prod
```

After that you will have a ready to deploy bundle at `/dist`

## Changelog

### 5.0.0

- Upgrade to Tailwind CSS v3 - https://tailwindcss.com/docs/upgrade-guide
- Migrate `tailwind.config.js` from `purge` to `content`
- Migrate `tailwind.config.js` remove `variants`

```sh
npm install -D tailwindcss@latest \
  @tailwindcss/typography@latest \
  @tailwindcss/forms@latest \
  @tailwindcss/aspect-ratio@latest \
  @tailwindcss/line-clamp@latest \
  postcss@latest \
  autoprefixer@latest
```

- Migration to Tailwind CLI - https://tailwindcss.com/docs/installation
- Migrate from Webpack to Parcel

### 4.0.0

- Update to Tailwind CSS v2.0.2
- Clean dependencies to have Tailwind CSS and WebPack
- Purge with Tailwind CSS
- Remove @fullhuman/postcss-purgecss
- Remove @tailwindcss/custom-forms
- Integrate @tailwindcss/aspect-ratio
- Integrate @tailwindcss/forms
- Integrate @tailwindcss/line-clamp
- Usability improvements, optimizations and code styling

### 3.0.0

Update to Tailwind CSS v1.2.0, including Tailwind UI support.

- Tailwind CSS v1.2.0
- Support of [Tailwind UI](https://tailwindui.com/)
- Addition of PostCSS best practices, [postcss-import](https://www.npmjs.com/package/postcss-import) and [postcss-nested](https://www.npmjs.com/package/postcss-nested)
- Minimum tailwind.config.js

## Copyright & License

- Copyright (c)2019-2022 Extly, CB. All rights reserved.
- Distributed under the GNU General Public License version 3 or later; see LICENSE
- This project is dedicated to [Andrea Gentil](http://www.twitter.com/andreagentil) ;-D

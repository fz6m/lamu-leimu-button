import nodeResolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import babel from '@rollup/plugin-babel'
import alias from '@rollup/plugin-alias'
import replace from '@rollup/plugin-replace'

// https://github.com/TrySound/rollup-plugin-terser
import { terser } from "rollup-plugin-terser";

// https://github.com/saf33r/rollup-plugin-cleaner
import cleaner from 'rollup-plugin-cleaner'

// https://github.com/egoist/rollup-plugin-postcss
import postcss from 'rollup-plugin-postcss'

import pkg from './package.json'

import { cloneDeep, upperFirst } from 'lodash'
const path = require('path')

const filename = pkg.browser.slice(pkg.browser.indexOf('/') + 1, pkg.browser.indexOf('.'))

const out = [
  {
    file: pkg.main,
    format: 'cjs'
  },
  {
    file: pkg.module,
    format: 'esm'
  },
  {
    file: pkg.browser,
    format: 'umd',
    name: upperFirst(filename)
  },
  {
    file: pkg.browser.replace('-button.umd', ''),
    format: 'umd',
    name: upperFirst(filename)
  }
]

const banner =
  `/*!
 * ${pkg.name} v${pkg.version}
 * (c) 2020-2021 ${pkg.author}
 * Released under the MIT License.
 */
`;

const minimize = (obj) => {
  const minObj = cloneDeep(obj)
  minObj.file = minObj.file.slice(0, minObj.file.lastIndexOf('.js')) + '.min.js'
  minObj.plugins = [terser({ compress: { drop_console: true } })]
  minObj.banner = banner
  return minObj
}

const resolve = (dir) => {
  return path.join(__dirname, dir)
}

export default {
  input: resolve('src/index.js'),
  output: [
    ...out, ...out.map(type => {
      type.file = resolve(type.file)
      return minimize(type)
    })
  ],
  plugins: [
    cleaner({
      targets: [
        './dist'
      ]
    }),
    nodeResolve(),
    commonjs(),
    alias({
      entries: [
        { find: '@', replacement: resolve('src') },
      ]
    }),
    replace({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),
    babel({
      exclude: 'node_modules/**',
      babelHelpers: 'runtime'
    }),
    postcss()
  ]
};
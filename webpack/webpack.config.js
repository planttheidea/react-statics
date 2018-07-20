/* eslint-disable import/no-commonjs */

const path = require('path');
const webpack = require('webpack');

const ROOT = path.resolve(__dirname, '..');

const SASS_LOADER_INCLUDE_PATHS = [
  path.resolve(ROOT, 'node_modules', 'foundation-sites', 'scss'),
  path.resolve(ROOT, 'node_modules', 'rapid7-styles'),
  path.resolve(ROOT, 'node_modules', 'rapid7-styles', 'styles', 'scss'),
];

console.log(SASS_LOADER_INCLUDE_PATHS);

module.exports = {
  devtool: '#source-map',

  entry: path.join(ROOT, 'src/index.js'),

  mode: 'development',

  module: {
    rules: [
      {
        enforce: 'pre',
        include: [path.resolve(ROOT, 'src')],
        loader: 'eslint-loader',
        options: {
          emitError: true,
          failOnError: true,
          failOnWarning: true,
          formatter: require('eslint-friendly-formatter'),
        },
        test: /\.js$/,
      },
      {
        include: [path.resolve(ROOT, 'src'), /DEV_ONLY/],
        loader: 'babel-loader',
        test: /\.js$/,
      },
    ],
  },

  output: {
    filename: 'futz.js',
    library: 'futz',
    libraryTarget: 'umd',
    path: path.resolve(ROOT, 'dist'),
    umdNamedDefine: true,
  },

  plugins: [new webpack.EnvironmentPlugin(['NODE_ENV'])],
};

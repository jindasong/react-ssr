'use strict'
const webpack = require('webpack')
const merge = require('webpack-merge')
const utils = require('./utils')
const HTMLPlugin = require('html-webpack-plugin')

let config = merge(require('./webpack.config.base'), {
  output: {
    filename: '[name].[hash].js',
  },
  devtool: 'cheap-module-eval-source-map',
  plugins: [
    new HTMLPlugin({
      template: `!!ejs-compiled-loader!${ utils.resolve('src/index.server.ejs') }`,
      filename: 'index.ejs'
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
})

module.exports = config
'use strict'
const path = require('path')
const webpack = require('webpack')
const webpackMerge = require('webpack-merge')
const baseConfig = require('./webpack.base')
const HTMLPlugin = require('html-webpack-plugin')
let config = webpackMerge(baseConfig, {
  entry: {
    app: [
      'react-hot-loader/patch',
      path.join(__dirname, '../src/client-entry.js')
    ]
  },
  devServer: {
    host: '0.0.0.0',
    compress: true,
    port: '8888',
    contentBase: path.join(__dirname, '../dist'),
    hot: true,
    overlay: {
      errors: true
    },
    publicPath: '/public/',
    historyApiFallback: {
      index: '/public/index.html'
    }
  },
  plugins: [
    new HTMLPlugin({
      template: `!!ejs-compiled-loader!${path.resolve(__dirname, '../index.ejs')}`,
      filename: 'index.ejs'
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
})

module.exports = config
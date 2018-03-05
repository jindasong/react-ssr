const path = require('path')
const webpack = require('webpack')
const webpackMerge = require('webpack-merge')
const baseConfig = require('./webpack.base')
const HTMLPlugin = require('html-webpack-plugin')
const config = webpackMerge(baseConfig, {
  entry: {
    app: path.join(__dirname, '../src/client-entry.js'),
  },
  output: {
    filename: '[name].[hash].js',
  },
  plugins: [
    new HTMLPlugin({
      template: `!!ejs-compiled-loader!${path.resolve(__dirname, '../index.ejs')}`,
      filename: 'index.ejs'
    })
  ]
})

module.exports = config

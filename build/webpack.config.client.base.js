'use strict'
const webpack = require('webpack')
const merge = require('webpack-merge')
const utils = require('./utils')
const HTMLPlugin = require('html-webpack-plugin')

let config = merge(require('./webpack.config.base'), {
  output: {
    filename: '[name].[hash].js'
  },
  plugins: [
    new HTMLPlugin({
      template: `!!ejs-compiled-loader!${ utils.resolve('src/index.server.ejs') }`,
      filename: 'index.ejs',
      chunks: ['vendor', 'manifest', 'app']
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: function (module) {
        return (
          module.resource &&
          /\.js$/.test(module.resource) &&
          module.resource.indexOf(
            utils.resolve('node_modules')
          ) === 0
        )
      }
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest',
      minChunks: Infinity,
    })
  ]
})

module.exports = config
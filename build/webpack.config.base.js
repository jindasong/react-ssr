'use strict'
const path = require('path')
const utils = require('./utils')
const webpack = require('webpack')
const HappyPack = require('happypack');
const nodeModulesPath = utils.resolve('node_modules')
const srcPath = utils.resolve('src')


module.exports = {
  output: {
    path: path.join(__dirname, '../dist'),
    publicPath: '/public/'
  },
  resolve: {
    extensions: [
      '.js',
      '.jsx'
    ],
    modules: [
      nodeModulesPath
    ],
    alias: {
      '@components': utils.resolve('src/components'),
      '@assets': utils.resolve('src/assets'),
      '@routers': utils.resolve('src/routers'),
      '@store': utils.resolve('src/store'),
      '@views': utils.resolve('src/views')
    }
  },
  module: {
    rules: [
      {
        test: /.jsx?$/,
        loader: 'happypack/loader?id=babel',
        include: srcPath,
        exclude:  nodeModulesPath
      },
      {
        test: /\.otf|ttf|woff2?|eot(\?\S*)?$/,
        loader: 'url-loader',
        options: {
          limit: 2048,
          name: 'fonts/[name][hash:7].[ext]'
        }
      }
    ]
  },
  plugins: [
    new webpack.optimize.ModuleConcatenationPlugin(),
    new HappyPack({
      id: 'babel',
      loaders: [
        'babel-loader'
      ]
    })
  ]
}

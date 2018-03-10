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
    ]
  },
  module: {
    rules: [
      {
        test: /.jsx?$/,
        loader: 'happypack/loader?id=babel',
        include: srcPath,
        exclude:  nodeModulesPath
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

'use strict'
const path = require('path')
const HTMLPlugin = require('html-webpack-plugin')
const merge = require('webpack-merge')
const utils = require('./utils')
const HappyPack = require('happypack')
const nodeModulesPath = utils.resolve('node_modules')
const srcPath = utils.resolve('src')

let config = merge(require('./webpack.config.client.base'), {
  entry: {
    app: [
      'react-hot-loader/patch',
      path.join(__dirname, '../src/client-entry.js')
    ]
  },
  module: {
    rules: [
      {
        test: /.css$/,
        include: srcPath,
        exclude: nodeModulesPath,
        loader: 'happypack/loader?id=css'
      },
      {
        test: /.scss$/,
        include: srcPath,
        exclude: nodeModulesPath,
        loader: 'happypack/loader?id=scss'
      }
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
    new HappyPack({
      id: 'css',
      loaders: [
        {
          loader: 'style-loader',
          options: {
            sourceMap: true
          }
        },
        {
          loader: 'css-loader',
          options: {
            sourceMap: true
          }
        },
        {
          loader: 'postcss-loader',
          options: {
            sourceMap: true
          }
        },
        {
          loader: 'sass-loader',
          options: {
            sourceMap: true
          }
        }
      ]
    }),
    new HappyPack({
      id: 'scss',
      loaders: [
        {
          loader: 'style-loader',
          options: {
            sourceMap: true
          }
        },
        {
          loader: 'css-loader',
          options: {
            sourceMap: true
          }
        },
        {
          loader: 'postcss-loader',
          options: {
            sourceMap: true
          }
        },
        {
          loader: 'sass-loader',
          options: {
            sourceMap: true
          }
        }
      ]
    }),
    new HTMLPlugin({
      template: `!!ejs-compiled-loader!${ utils.resolve('src/index.client.ejs') }`,
      filename: 'index.html'
    })
  ]
})

module.exports = config
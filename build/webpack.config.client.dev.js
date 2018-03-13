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
        test: /.less$/,
        include: srcPath,
        exclude: nodeModulesPath,
        loader: 'happypack/loader?id=less'
      },
      {
        test: /\.(gif|png|jpe?g|svg)(\?\S*)?$/,
        include: srcPath,
        exclude: nodeModulesPath,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 2048,
              name: 'images/[name].[hash:7].[ext]'
            }
          }
        ]
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
        }
      ]
    }),
    new HappyPack({
      id: 'less',
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
          loader: 'less-loader',
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
const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const HappyPack = require('happypack')
const utils = require('./utils')
const nodeModulesPath = utils.resolve('node_modules')
const srcPath = utils.resolve('src')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const extractCss = new ExtractTextPlugin({
  filename: 'css/[name].[hash].css'
});

const config = merge(require('./webpack.config.client.base'), {
  entry: {
    app: path.join(__dirname, '../src/client-entry.js'),
  },
  resolve: {
    alias: {
      'react': utils.resolve('node_modules/react/cjs/react.production.min'),
      'react-dom': utils.resolve('node_modules/react-dom/cjs/react-dom.production.min'),
    }
  },
  module: {
    rules: [
      {
        test: /.css$/,
        include: srcPath,
        exclude: nodeModulesPath,
        loader: extractCss.extract({
          use: [
            'happypack/loader?id=css'
          ]
        })
      },
      {
        test: /.less/,
        include: srcPath,
        exclude: nodeModulesPath,
        loader: extractCss.extract({
          use: [
            'happypack/loader?id=less'
          ]
        })
      },
      {
        test: /\.(gif|png|jpe?g|svg)(\?\S*)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 2048,
              name: 'images/[name].[hash:7].[ext]'
            },
          },
          {
            loader: 'image-webpack-loader'
          }
        ]
      }
    ]
  },
  plugins: [
    extractCss,
    new HappyPack({
      id: 'css',
      loaders: [
        {
          loader: 'postcss-loader',
          options: {
            sourceMap: false
          }
        },
        {
          loader: 'css-loader',
          options: {
            sourceMap: false
          }
        }
      ]
    }),
    new HappyPack({
      id: 'less',
      loaders: [
        {
          loader: 'css-loader'
        },
        {
          loader: 'postcss-loader'
        },
        {
          loader: 'less-loader'
        }
      ]
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new webpack.optimize.UglifyJsPlugin()
  ]
})

module.exports = config

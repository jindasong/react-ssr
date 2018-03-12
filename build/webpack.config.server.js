const merge = require('webpack-merge')
const nodeExternals = require('webpack-node-externals');
const utils = require('./utils')
const nodeModulesPath = utils.resolve('node_modules')
const srcPath = utils.resolve('src')

module.exports = merge(require('./webpack.config.base'), {
  target: 'node',
  entry: {
    app: utils.resolve('src/server-entry.js'),
  },
  output: {
    filename: 'server-entry.js',
    libraryTarget: 'commonjs2'
  },
  externals: [
    nodeExternals()
  ],
  module: {
    rules: [
      {
        test: /\.(css|less)$/,
        include: srcPath,
        exclude: nodeModulesPath,
        loader: 'ignore-loader'
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
  }
})

const merge = require('webpack-merge')
const utils = require('./utils')
const nodeModulesPath = utils.resolve('node_modules')
const srcPath = utils.resolve('src')

module.exports = merge(require('./webpack.config.server.base'), {
  module: {
    rules: [
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
            },
          }
        ]
      }
    ]
  }
})

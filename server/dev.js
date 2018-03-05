'use strict'
const Axios = require('axios')
const path = require('path')
const proxy = require('http-proxy-middleware')
const serialize = require('serialize-javascript')
const vm = require('vm')
const asyncBootstrap = require('react-async-bootstrapper').default
const NativeModule = require('module')
const webpack = require('webpack')
const MemoryFs = require('memory-fs')
const webpackServerConfig = require('./../build/webpack.config.server')
const mfs = new MemoryFs
const { renderToString } = require('react-dom/server')
const serverCompiler = webpack(webpackServerConfig)
const getModuleFromString = (bundle, filename) => {
  const m = { exports: {} }
  const wrapper = NativeModule.wrap(bundle)
  const script = new vm.Script(wrapper, {
    filename: filename,
    displayErrors: true,
  })
  const result = script.runInThisContext()
  result.call(m.exports, m.exports, require, m)
  return m
}
const bundlePath = path.join(
  webpackServerConfig.output.path,
  webpackServerConfig.output.filename
)
let serverEntry = require(bundlePath)
// serverCompiler.outputFileSystem = mfs
serverCompiler.watch({}, (err, stats) => {
  if (err) throw err
  stats = stats.toJson()
  stats.errors.forEach(err => console.error(err))
  stats.warnings.forEach(warn => console.warn(warn))
  serverEntry = require(bundlePath)
})

const getStoreState = (stores) => {
  return Object.keys(stores).reduce((result, storeName) => {
    result[storeName] = stores[storeName].toJSON()
    return result
  }, {})
}

function getTemplate () {
  return new Promise((resolve, reject) => {
    Axios.get('http://localhost:8888/public/index.html')
      .then(data => {
        resolve(data.data)
      })
      .catch(reject)
  })
}

module.exports = function (app) {
  let stores = getStoreState(serverEntry.createStoreMap())
  let serverApp = serverEntry.default(stores)
  app.use('/public', proxy({
    target: 'http://localhost:8888'
  }))
  app.get('*', (req, res) => {
    asyncBootstrap(serverApp)
      .then(() => {
        getTemplate()
          .then(data => {
            let html = data.replace('<!-- app -->', renderToString(serverApp))
            html = html.replace('<!-- initState -->', `
            <script>
              window.__INIT_STATE__ = ${serialize(stores)}
            </script>
            `)
            res.end(html)
          })
          .catch(error => {
            res.end('渲染失败', error)
          })
      })
      .catch((error) => {
        console.warn(error)
      })

  })
}
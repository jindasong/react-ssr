'use strict'
const Axios = require('axios')
const path = require('path')
const proxy = require('http-proxy-middleware')
const serialize = require('serialize-javascript')
const ejs = require('ejs')
const Helmet = require('react-helmet').default
const asyncBootstrap = require('react-async-bootstrapper').default
const webpack = require('webpack')
const MemoryFs = require('memory-fs')
const webpackServerConfig = require('./../build/webpack.config.server')
const { renderToString } = require('react-dom/server')
const serverCompiler = webpack(webpackServerConfig)
const NativeModule = require('module')
const vm = require('vm')
const Module = module.constructor;
const mfs = new MemoryFs
let serverEntry

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

serverCompiler.outputFileSystem = mfs
serverCompiler.watch({}, (err, stats) => {
  if (err) throw err
  stats = stats.toJson()
  stats.errors.forEach(err => console.error(err))
  stats.warnings.forEach(warn => console.warn(warn))
  const bundlePath = path.join(
    webpackServerConfig.output.path,
    webpackServerConfig.output.filename
  )
  const bundle = mfs.readFileSync(bundlePath, 'utf-8')
  const m = getModuleFromString(bundle, 'server-entry.js')
  serverEntry = m.exports
})

const getStoreState = (stores) => {
  return Object.keys(stores).reduce((result, storeName) => {
    result[storeName] = stores[storeName].toJSON()
    return result
  }, {})
}

function getTemplate () {
  return new Promise((resolve, reject) => {
    Axios.get('http://localhost:8888/public/index.ejs')
      .then(data => {
        resolve(data.data)
      })
      .catch(reject)
  })
}

module.exports = function (app) {
  app.use('/public', proxy({
    target: 'http://localhost:8888'
  }))
  app.get('*', (req, res) => {
    if (!serverEntry) {
      return res.send('waiting for compile, refresh later')
    }
    let routerContext = {}
    let stores = getStoreState(serverEntry.createStoreMap())
    let serverApp = serverEntry.default(stores, routerContext, req.url)
    asyncBootstrap(serverApp)
      .then(() => {
        if (routerContext.url) {
          res.status(302).setHeader('Location', routerContext.url)
          return res.end()
        }
        getTemplate()
          .then(template => {
            let helmet = Helmet.rewind()
            let content = renderToString(serverApp)
            let initState = serialize(stores)
            let meta = helmet.meta.toString()
            let title = helmet.title.toString()
            let html = ejs.render(template, {
              content,
              initState,
              meta,
              title
            })
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
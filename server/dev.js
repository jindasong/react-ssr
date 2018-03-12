'use strict'
const Axios = require('axios')
const path = require('path')
const proxy = require('http-proxy-middleware')
const asyncBootstrap = require('react-async-bootstrapper').default
const webpack = require('webpack')
const MemoryFs = require('memory-fs')
const webpackServerConfig = require('./../build/webpack.config.server')
const utils = require('./utils')
const serverCompiler = webpack(webpackServerConfig)
const NativeModule = require('module')
const vm = require('vm')
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
      return res.send('等待编译中，请稍后刷新...')
    }
    let routerContext = {}
    let store = serverEntry.createStoreMap()
    let serverApp = serverEntry.default(store, routerContext, req.url)
    asyncBootstrap(serverApp)
      .then(() => {
        let initState = utils.getStoreState(store)
        if (routerContext.url) {
          res.status(302).setHeader('Location', routerContext.url)
          return res.end()
        }
        getTemplate()
          .then(template => {
            res.end(utils.getStaticContent(template, serverApp, initState))
          })
          .catch(error => {
            res.end('模板渲染失败', error)
          })
      })
      .catch((error) => {
        res.status(500).send(error)
      })
  })
}
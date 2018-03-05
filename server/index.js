const path = require('path')
const fs = require('fs')
const express = require('express')
const serverEntry = require('./../dist/server-entry').default
const { renderToString } = require('react-dom/server')
const ejs = require('ejs')
const Helmet = require('react-helmet').default
const asyncBootstrap = require('react-async-bootstrapper').default
const createStoreMap = require('./../dist/server-entry').createStoreMap
const serialize = require('serialize-javascript')
const app = express()
const isDev = process.env.NODE_ENV === 'development'
const getStoreState = (stores) => {
  return Object.keys(stores).reduce((result, storeName) => {
    result[storeName] = stores[storeName].toJSON()
    return result
  }, {})
}

if (!isDev) {
  app.use('/public', express.static(path.resolve(__dirname, '../dist')))
  app.get('*', (req, res) => {
    let template = fs.readFileSync(path.resolve(__dirname, '../dist/index.ejs'), 'utf-8')
    let stores = getStoreState(createStoreMap())
    let serverApp = serverEntry(stores)
    asyncBootstrap(serverApp)
      .then(() => {
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
      .catch((error) => {
        console.warn(error)
      })
  })
} else {
  require('./dev')(app)
}

app.listen(3333)
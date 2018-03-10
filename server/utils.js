'use strict'
const ejs = require('ejs')
const Helmet = require('react-helmet').default
const serialize = require('serialize-javascript')
const { renderToString } = require('react-dom/server')

function getStaticContent (template, serverApp, stores) {
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
  return html
}

function getStoreState (stores) {
  return Object.keys(stores).reduce((result, storeName) => {
    result[storeName] = stores[storeName].toJSON()
    return result
  }, {})
}

module.exports = {
  getStaticContent,
  getStoreState
}
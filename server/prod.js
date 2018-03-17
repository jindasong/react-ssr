'use strict'
const express = require('express')
const fs = require('fs')
const path = require('path')
const utils = require('./utils')
const createStoreMap = require('./../dist/server-entry').createStoreMap
const serverEntry = require('./../dist/server-entry').default
const asyncBootstrap = require('react-async-bootstrapper').default
const LRU = require('lru-cache')
const cache = LRU({
  max: 500,
  maxAge: 1000 * 60 * 10
})

module.exports = function (app) {
  app.use('/public', express.static(path.resolve(__dirname, '../dist')))
  app.use(express.static(path.resolve(__dirname, '../static')))
  app.get('*', (req, res) => {
    let template
    let store = createStoreMap()
    let routerContext = {}
    let serverApp = serverEntry(store, routerContext, req.url)
    asyncBootstrap(serverApp)
      .then(() => {
        let initState = utils.getStoreState(store)
        if (routerContext.url) {
          res.status(302).setHeader('Location', routerContext.url)
          return res.end()
        }
        // 模板缓存处理
        if (!cache.has('template')) {
          template = fs.readFileSync(path.resolve(__dirname, '../dist/index.ejs'), 'utf-8')
          cache.set('template', template)
        } else {
          template = cache.get('template')
        }
        res.end(utils.getStaticContent(template, serverApp, initState))
      })
      .catch((error) => {
        res.status(500).send(error)
      })
  })
}
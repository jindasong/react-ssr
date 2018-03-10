'use strict'
const express = require('express')
const fs = require('fs')
const path = require('path')
const utils = require('./utils')
const createStoreMap = require('./../dist/server-entry').createStoreMap
const serverEntry = require('./../dist/server-entry').default
const asyncBootstrap = require('react-async-bootstrapper').default

module.exports = function (app) {
  app.use('/public', express.static(path.resolve(__dirname, '../dist')))
  app.get('*', (req, res) => {
    let template = fs.readFileSync(path.resolve(__dirname, '../dist/index.ejs'), 'utf-8')
    let stores = utils.getStoreState(createStoreMap())
    let routerContext = {}
    let serverApp = serverEntry(stores, routerContext, req.url)

    asyncBootstrap(serverApp)
      .then(() => {
        if (routerContext.url) {
          res.status(302).setHeader('Location', routerContext.url)
          return res.end()
        }
        res.end(utils.getStaticContent(template, serverApp, stores))
      })
      .catch((error) => {
        console.warn(error)
      })
  })
}
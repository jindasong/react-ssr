const express = require('express')
const app = express()
const isDev = process.env.NODE_ENV === 'development'
const path = require('path')
const favicon = require('serve-favicon')

app.use(favicon(path.join(__dirname, '../favicon.ico')))

if (!isDev) {
  require('./prod')(app)
} else {
  require('./dev')(app)
}

app.use(function (error, req, res) {
  res.status(500).send('服务器错误!', error.stack)
})

app.listen(3333)
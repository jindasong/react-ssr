const express = require('express')
const app = express()
const isDev = process.env.NODE_ENV === 'development'

if (!isDev) {
  require('./prod')(app)
} else {
  require('./dev')(app)
}

app.listen(3333)
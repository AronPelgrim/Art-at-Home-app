const express = require('express')
const app = express()
const port = process.env.PORT || 4000
const ejs = require('ejs')
const router = require('./routes/router')
const compression = require('compression')
require('dotenv').config()

app.set('view engine', 'ejs')

app.set('views', './views/pages')

app.use(express.static('public'))

let setCache = function (req, res, next) {
  const period = 60 * 5 

  if (req.method == 'GET') {
    res.set('Cache-control', `public, max-age=${period}`)
  } else {
    res.set('Cache-control', `no-store`)
  }
  next()
}
app.use(setCache)

app.use(router)

app.use(compression())

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})
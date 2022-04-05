const express = require('express')
const app = express()
const port = process.env.PORT || 4000
const ejs = require('ejs')
const router = require('./routes/router')
const compression = require('compression')

app.set('view engine', 'ejs')

app.set('views', './views/pages')

app.use(express.static('public'))

app.use(router)

app.use(compression())

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})
const express = require('express')
const app = express()
const port = 3000
const ejs = require('ejs')

const router = require('./routes/router')
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args))

app.set('view engine', 'ejs')

app.set('views', './views/pages')

app.use(express.static('public'))

app.use(router)

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})
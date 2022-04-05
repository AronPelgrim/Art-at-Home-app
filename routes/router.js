const express = require('express')
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args))
const router = express.Router()

router.get('', (req, res) => {
    res.render('index')
})

router.get('/schilderijen', (req, res) => {
    const querySearch = req.query.search
    fetchJson(`https://www.rijksmuseum.nl/api/nl/collection?key=S0VK6DCj&q=${querySearch}`)
    .then(function (jsonData) {
    res.render('result', {
      title: querySearch,
      data: jsonData,
    })
  })
})

router.get('/schilderijen/:id', (req, res) => {
    const queryId = req.params.id
    fetchJson(`https://www.rijksmuseum.nl/api/nl/collection?key=S0VK6DCj&q=${queryId}`)
    .then(function (jsonData) {
    res.render('details', {
      data: jsonData,
    })
  })
})  

router.get('/offline', (req, res) => {
  res.render('offline', {
  })
})  

router.use((req, res) => {
    res.status(404).send('Sorry, deze pagina bestaat niet')
})

async function fetchJson(url) {
  return await fetch(url)
    .then((response) => response.json())
    .then((body) => body.artObjects) 
    .catch((error) => error)
}

module.exports = router
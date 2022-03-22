const express = require('express')
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args))

const router = express.Router()

router.get('', (req, res) => {
    res.render('index')
})

router.get('/schilderijen', (req, res) => {
    fetchJson('https://www.rijksmuseum.nl/api/nl/collection?key=S0VK6DCj&q=rembrandt')
    .then(function (jsonData) {
    res.render('result', {
      data: jsonData,
    })
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
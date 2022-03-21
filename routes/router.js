const express = require('express');

const router = express.Router();

router.get('', (req, res) => {
    res.send('Hello World!')
})

router.use((req, res) => {
    res.status(404).send('Sorry, deze pagina bestaat niet');
});

module.exports = router;
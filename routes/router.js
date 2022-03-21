const express = require('express');

const router = express.Router();

router.get('', (req, res) => {
    res.render('index');
});

router.use((req, res) => {
    res.status(404).send('Sorry, deze pagina bestaat niet');
});

module.exports = router;
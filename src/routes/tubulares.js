const express = require('express');
const router = express.Router();
//const pool = require('../database');


router.get('/agregar', (req, res) => {
    console.log('soy inicio');
    //res.send('yo soy usuario');
    res.render('tubulares/agregar');
});

module.exports = router;
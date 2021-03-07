const express = require('express');
const router = express.Router();
//const pool = require('../database');


router.get('/agregar', (req, res) => {
    console.log('soy inicio');
    //res.send('yo soy usuario');
    res.render('catalogo/agregar');
});

module.exports = router;
const express = require('express');
const { LocalStorage } = require('node-localstorage');
const router = express.Router();
const pool = require('../database');

router.get('/agregar', (req, res) => {
    console.log('yo soy agregar de estudiantes');
    //res.send('yo soy agregar de estudiantes');
    res.render('bolsos/agregar');


});

module.exports = router;
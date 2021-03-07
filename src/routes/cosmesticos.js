const express = require('express');
const router = express.Router();
const pool = require('../database');

router.get('/agregar', (req, res) => {
    console.log('yo soy agregar de estudiantes');
    //res.send('yo soy agregar de estudiantes');
    res.render('cosmestico/agregar');

});

router.get('/agregar', async(req, res) => {
    console.log('yo soy agregar de estudiantes');
    //res.send('y0o soy agregar de estudiantes');
    const cosme = await pool.query("SELECT * FROM producro");
    res.render('cosmesticos/agregar', { cosme });

});
router.get('/agregar', async(req, res) => {
    //console.log('yo soy agregar de estudiantes');
    //res.send('y0o soy agregar de estudiantes');
    // console.log(req.body);

    const { id, imagen, nombre, precio, cantidad, subtotal } = req.body;
    const cosme = { id, imagen, nombre, precio, cantidad, subtotal };
    await pool.query('insert into producto set ?', [cosme]);
    res.redirect('/cosmesticos/agregar');
    //const usua = await pool.query("SELECT * FROM usuarios");
    //res.render('productos/agregar', { usua });

});


module.exports = router;
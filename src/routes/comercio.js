const express = require('express');
const router = express.Router();
const comerController = require("../controller/comercontroller");
const pool = require('../database');

router.get('/agregar', comerController.listarcomercio);

/* async(req, res) => {
    console.log('yo soy agregar de estudiantes');
    //res.send('y0o soy agregar de estudiantes');
    const carr = await pool.query("SELECT * FROM carrito");
    res.render('carro/agregar', { carr });*/

router.post('/agregar',comerController.agregarcomercio);


router.get('/delete/:id', comerController.eliminarcomercio);





/*
async(req, res) => {
    const { id } = req.params;
    const usua = await pool.query('delete from carrito where id = ?', [id]);
    res.redirect('/carro/agregar');

*/

module.exports = router;
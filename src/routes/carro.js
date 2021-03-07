const express = require('express');
const router = express.Router();
const carroController = require("../controller/carroController");
const pool = require('../database');

router.get('/agregar', carroController.listarcompras);



/* async(req, res) => {
    console.log('yo soy agregar de estudiantes');
    //res.send('y0o soy agregar de estudiantes');
    const carr = await pool.query("SELECT * FROM carrito");
    res.render('carro/agregar', { carr });*/

router.post('/agregar', carroController.listarcompras);


router.get('/delete/:id', carroController.eliminarcarrito);





/*
async(req, res) => {
    const { id } = req.params;
    const usua = await pool.query('delete from carrito where id = ?', [id]);
    res.redirect('/carro/agregar');

*/

module.exports = router;
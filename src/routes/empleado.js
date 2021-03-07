const express = require('express');
const router = express.Router();
const emplecontroller = require("../controller/emplecontroller");
const pool = require('../database');

/*listar tabla*/
router.get('/agregar', emplecontroller.listarempleado);

/* async(req, res) => {
    console.log('yo soy agregar de estudiantes');
    //res.send('y0o soy agregar de estudiantes');
    const carr = await pool.query("SELECT * FROM carrito");
    res.render('carro/agregar', { carr });*/

/*agregar tabla*/
router.post('/agregar', emplecontroller.agregarempleado);

/*eliminaar tabla*/
router.get('/delete/:id', emplecontroller.eliminarempleado);


/*
async(req, res) => {
    const { id } = req.params;
    const usua = await pool.query('delete from carrito where id = ?', [id]);
    res.redirect('/carro/agregar');

*/

module.exports = router;
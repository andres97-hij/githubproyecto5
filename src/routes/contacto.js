const express = require('express');
const router = express.Router();
const contacontroller = require("../controller/contacontroller");
const pool = require('../database');

/*listar tabla*/
router.get('/agregar', contacontroller.listarcontacto);

/* async(req, res) => {
    console.log('yo soy agregar de estudiantes');
    //res.send('y0o soy agregar de estudiantes');
    const carr = await pool.query("SELECT * FROM carrito");
    res.render('carro/agregar', { carr });*/

/*agregar tabla*/
router.post('/agregar', contacontroller.agregarcontacto);

/*eliminaar tabla*/
router.get('/delete/:id', contacontroller.eliminarcontacto);


/*
async(req, res) => {
    const { id } = req.params;
    const usua = await pool.query('delete from carrito where id = ?', [id]);
    res.redirect('/carro/agregar');

*/

module.exports = router;
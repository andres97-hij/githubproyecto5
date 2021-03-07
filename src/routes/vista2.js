const express = require('express');
const router = express.Router();
const pool = require('../database');

router.get('/agregar', async(req, res) => {
    console.log('yo soy agregar de estudiantes');
    //res.send('y0o soy agregar de estudiantes');
    const vista = await pool.query("SELECT * FROM productos");
    res.render('vista2/agregar', { vista });

});
router.post('/agregar', async(req, res) => {
    //console.log('yo soy agregar de estudiantes');
    //res.send('y0o soy agregar de estudiantes');
    // console.log(req.body);

    const { id_producto, nombre } = req.body;
    const newUser = { id_producto, nombre };
    await pool.query('insert into productos set ?', [newUser]);
    res.redirect('/vista1/agregar');
    //const usua = await pool.query("SELECT * FROM pedidos");
    //res.render('productos/agregar', { usua });

});


router.get('/delete/:id', async(req, res) => {
    const { id } = req.params;
    const usua = await pool.query('delete from productos where id = ?', [id]);
    res.redirect('/vista2/agregar');
});
module.exports = router;
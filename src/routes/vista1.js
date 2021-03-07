const express = require('express');
const router = express.Router();
const pool = require('../database');

router.get('/agregar', async(req, res) => {
    console.log('yo soy agregar de estudiantes');
    //res.send('y0o soy agregar de estudiantes');
    const vista = await pool.query("SELECT * FROM pedidos");
    res.render('vista1/agregar', { vista });

});
router.post('/agregar', async(req, res) => {
    //console.log('yo soy agregar de estudiantes');
    //res.send('y0o soy agregar de estudiantes');
    // console.log(req.body);

    const { id_pedido, producto, usuario, cantidad, vunitario, vatotal } = req.body;
    const newUser = { id_pedido, producto, usuario, cantidad, vunitario, vatotal };
    await pool.query('insert into pedidos set ?', [newUser]);
    res.redirect('/vista1/agregar');
    //const usua = await pool.query("SELECT * FROM pedidos");
    //res.render('productos/agregar', { usua });

});


router.get('/delete/:id', async(req, res) => {
    const { id } = req.params;
    const usua = await pool.query('delete from pedidos where id = ?', [id]);
    res.redirect('/vista1/agregar');
});
module.exports = router;
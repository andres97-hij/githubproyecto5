const express = require('express');
const router = express.Router();
const pool = require('../database');

router.get('/agregar', async(req, res) => {
    console.log('yo soy agregar de estudiantes');
    //res.send('y0o soy agregar de estudiantes');
    const barrasformu = await pool.query("SELECT * FROM barrasformu");
    res.render('barrasformu/agregar', { barrasformu });

});
router.get('/agregar', async(req, res) => {
    //console.log('yo soy agregar de estudiantes');
    //res.send('y0o soy agregar de estudiantes');
    // console.log(req.body);

    const { id, nombre, referencia, precio, cantidad } = req.body;
    const newUser = { id, nombre, referencia, precio, cantidad };
    await pool.query('insert into barrasformu set ?', [newUser]);
    res.redirect('/barrasformu/agregar');
    //const usua = await pool.query("SELECT * FROM usuarios");
    //res.render('productos/agregar', { usua });

});

router.post('modificar/:id_usuario', async(req, res) => {
    const { id_usuario } = req.params;
    await pool.query('UPDATE productos set? WHERE id_usuario=?,[req.body,id_usuario]');
    res.redirect('producto/agregar');
});


router.get('/delete/:id', async(req, res) => {
    const { id } = req.params;
    const usua = await pool.query('delete from barrasformu where id = ?', [id]);
    res.redirect('/barrasformu/agregar');
});
module.exports = router;
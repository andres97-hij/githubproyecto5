const express = require('express');
const router = express.Router();
const pool = require('../database');

router.get('/agregar', async(req, res) => {
    console.log('yo soy agregar de estudiantes');
    //res.send('y0o soy agregar de estudiantes');
    const usua = await pool.query("SELECT * FROM usuarios");
    res.render('bato/agregar', { usua });

});
router.post('/agregar', async(req, res) => {
    //console.log('yo soy agregar de estudiantes');
    //res.send('y0o soy agregar de estudiantes');
    // console.log(req.body);

    const { id, nombre, referencia, precio, cantidad } = req.body;
    const newUser = { id, nombre, referencia, precio, cantidad };
    await pool.query('insert into usuarios set ?', [newUser]);
    res.redirect('/bato/agregar');
    //const usua = await pool.query("SELECT * FROM usuarios");
    //res.render('productos/agregar', { usua });

});


router.get('/delete/:id', async(req, res) => {
    const { id } = req.params;
    const usua = await pool.query('delete from usuarios where id = ?', [id]);
    res.redirect('/bato/agregar');
});



module.exports = router;
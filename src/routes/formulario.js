const express = require('express');
const router = express.Router();
const pool = require('../database');

router.get('/agregar', async(req, res) => {
    console.log('yo soy agregar de estudiantes');
    //res.send('y0o soy agregar de estudiantes');
    const formu = await pool.query("SELECT * FROM formulario");
    res.render('formulario/agregar', { formu });

});
router.post('/agregar', async(req, res) => {
    //console.log('yo soy agregar de estudiantes');
    //res.send('y0o soy agregar de estudiantes');
    //console.log(req.body);

    const { nombre, apellido, edad, } = req.body;
    const newUser = { nombre, apellido, edad, };
    await pool.query('insert into formulario set ?', [newUser]);
    res.redirect('/formulario/agregar');
    //const usua = await pool.query("SELECT * FROM formulario");
    //res.render('formulario/agregar', { usua });

});



module.exports = router;
const express = require('express');
const router = express.Router();
const pool = require('../database');

router.get('/agregar', async(req, res) => {
    console.log('yo soy agregar de estudiantes');
    //res.send('y0o soy agregar de estudiantes');
    res.render('productos/agregar', );

});
//router.post('/agregar', async(req, res) => {
//console.log('yo soy agregar de estudiantes');
//res.send('y0o soy agregar de estudiantes');
// console.log(req.body);

//const { nombre, apellido, edad, precio, vendidos } = req.body;
//const newUser = { nombre, apellido, edad, precio, vendidos };
//await pool.query('insert into usuarios set ?', [newUser]);
//res.redirect('/productos/agregar');
//const usua = await pool.query("SELECT * FROM usuarios");
//res.render('productos/agregar', { usua });

//});

//router.post('modificar/:id_usuario', async(req, res) => {
//const { id_usuario } = req.params;
//await pool.query('UPDATE productos set? WHERE id_usuario=?,[req.body,id_usuario]');
//res.redirect('producto/agregar');
//});


//router.get('/delete/:id', async(req, res) => {
//const { id } = req.params;
//const usua = await pool.query('delete from usuarios where id = ?', [id]);
//res.redirect('/productos/agregar');
//});
module.exports = router;
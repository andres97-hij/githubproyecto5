const express = require('express');
const router = express.Router();
//const pool = require('../database');
const mousecontrollers = require('../controller/mousecontrollers');
/*
router.post('/agregar', async(req, res) => {
    //console.log('yo soy agregar de estudiantes');
    //res.send('y0o soy agregar de estudiantes');
    //console.log(req.body);

    const { id, cliente, producto, precio, estado_del_producto } = req.body;
    const newUser = { id, cliente, producto, precio, estado_del_producto };
    await pool.query('insert into pedidos set ?', [newUser]);
    res.redirect('/mouse/agregar');
    //const usua = await pool.query("SELECT * FROM formulario");
    //res.render('formulario/agregar', { usua });

});*/

//controller  listar ruta//
router.get('/listar', async(req, res) => {
    const mous = await mousecontrollers.listar(req.body);
    res.render('mouse/agregar', { mous });

});

//agregar//
router.post('/agregar', async(req, res) => {
    await mousecontrollers.agregar(req);
    res.render('/mouse/listar');

});

//eliminar//
router.get('/delete/:id', async(req, res) => {
    const { id } = req.params;
    const usua = await pool.query('DELETE FROM pedidos WHERE id = ?', [id]);
    res.redirect('/mouse/agregar');
});


module.exports = router;
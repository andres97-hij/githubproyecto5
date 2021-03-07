const express = require('express');
const router = express.Router();
const pool = require('../database');

router.get('/agregar', async(req, res) => {
    console.log('yo soy agregar de estudiantes');
    //res.send('y0o soy agregar de estudiantes');
    const face = await pool.query("SELECT * FROM facebook");
    res.render('facebook/agregar', { face });

});
router.post('/agregar', async(req, res) => {
    //console.log('yo soy agregar de estudiantes');
    //res.send('y0o soy agregar de estudiantes');
    // console.log(req.body);

    const { id, id_usuario, nombre, comentario, } = req.body;
    const newUser = { id, id_usuario, nombre, comentario, };
    await pool.query('insert into facebook set ?', [newUser]);
    res.redirect('/facebook/agregar');
    //const usua = await pool.query("SELECT * FROM usuarios");
    //res.render('productos/agregar', { usua });

});


router.get('/delete/:id', async(req, res) => {
    const { id } = req.params;
    const usua = await pool.query('delete from facebook where id = ?', [id]);
    res.redirect('/facebook/agregar');
});





module.exports = router;
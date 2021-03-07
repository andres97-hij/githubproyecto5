const { response } = require("express");
const compramodel = require("../models/compramodel");
const controller = {};


//listar
controller.listarcomprando = async(req, res) => {
    const comp = await compramodel.listarcomprando()
    res.render('compra/agregar', { comp });
};

//agregar 
controller.agregarcompra = async(req, res) => {
    await compramodel.agregarcompra(req.body)
    res.redirect('/compra/agregar');
}

//eliminar
controller.eliminarcarrito = async(req, res) => {
    await compramodel.eliminarcarrito(req.params.id);
    res.redirect('/compra/agregar');
}

//modificar
controller.modificarcarrito = async(req, res) => {
    await compramodel.modificarcarrito(req.params.id);
    res.redirect('/compra/agregar');
}

module.exports = controller;
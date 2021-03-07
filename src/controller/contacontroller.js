const { response } = require("express");
const contatomodel = require("../models/contatomodel");
const controller = {};


//listar
controller.listarcontacto = async(req, res) => {
    const tato = await contatomodel.listarcontacto()
    res.render('contacto/agregar', { tato });
};

//agregar 
controller.agregarcontacto = async(req, res) => {
    await contatomodel.agregarcontacto(req.body)
    res.redirect('/contacto/agregar');
}

//eliminar
controller.eliminarcontacto = async(req, res) => {
    await contatomodel.eliminarcontacto(req.params.id);
    res.redirect('/contacto/agregar');
}

module.exports = controller;
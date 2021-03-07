const { response } = require("express");
const empledomodel = require("../models/empledomodel");
const controller = {};


//listar
controller.listarempleado = async(req, res) => {
    const edo = await empledomodel.listarempleado()
    res.render('empleado/agregar', { edo });
};

//agregar 
controller.agregarempleado = async(req, res) => {
    await empledomodel.agregarempleado(req.body)
    res.redirect('/empleado/agregar');
}

//eliminar
controller.eliminarempleado = async(req, res) => {
    await empledomodel.eliminarempleado(req.params.id);
    res.redirect('/empleado/agregar');
}

module.exports = controller;
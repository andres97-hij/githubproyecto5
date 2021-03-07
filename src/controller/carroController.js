const carroModel = require("../models/carromodel");
const controller = {};

controller.listarcompras = async(req, res) => {
    const carr = await carroModel.listarcompras()
    res.render('carro/agregar', { carr });
};

controller.eliminarcarrito = async(req, res) => {
    await carroModel.eliminarcarrito(req.params.id);
    res.redirect('/carro/agregar');
}
module.exports = controller;
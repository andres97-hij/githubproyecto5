const carroModel = require("../models/comermodel");
const controller = {};

controller.listarcomercio = async(req, res) => {
    const comer = await comermodel.listarcomercio()
    res.render('comercio/agregar', { comer });
};

controller.eliminarcomercio = async(req, res) => {
    await comermodel.eliminarcomercio(req.params.id);
    res.redirect('/comercio/agregar');
}
module.exports = controller;
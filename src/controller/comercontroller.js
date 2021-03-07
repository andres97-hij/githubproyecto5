const comermodel = require("../models/comermodel");
const controller = {};


//listar
controller.listarcomercio = async(req, res) => {
    const comer = await comermodel.listarcomercio()
    res.render('comercio/agregar', { comer });
};

//agregar 
controller.agregarcomercio  = async(req, res) => {
    await comermodel.agregarcomercio (req.body)
    res.redirect('comercio/agregar');
}

//eliminar
controller.eliminarcomercio = async(req, res) => {
    await comermodel.eliminarcomercio(req.params.id);
    res.redirect('comercio/agregar');
}
module.exports = controller;
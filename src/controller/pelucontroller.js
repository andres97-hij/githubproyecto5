const pelumodel = require("../models/pelumodel");
const controller = {};

controller.listarcita = async(req, res) => {
    const pelu = await pelumodel.listarcita()
    res.render('peluqueria/agregar', { pelu });
};

//agregar 
controller.agregarcita = async(req, res) => {
    await pelumodel.agregarcita(req.body)
    res.redirect('/peluqueria/agregar');
}

controller.eliminarcita = async(req, res) => {
    await pelumodel.eliminarcita(req.params.id);
    res.redirect('/peluqueria/agregar');
}
module.exports = controller;
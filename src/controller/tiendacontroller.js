const controller = {};

controller.tienda = async(req, res) => {

    res.render('tiendas/agregar');
}
module.exports = controller;
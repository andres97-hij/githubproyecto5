const { response } = require("express");
const compramodel = require("../models/compramodel");
const controller = {};


controller.edit = (req, res) => {
    const { id, cliente, correo, producto, precio, cantidad, subtotal } = req.params;
    req.getConnection((err, conn) => {
        conn.query("SELECT * FROM producto WHERE id = ?", [id], (err, rows) => {
            res.render('/compraeditar/agregar', {
                data: rows[0]
            })
        });
    });
};

controller.update = (req, res) => {
    const { id, } = req.params;
    const newCustomer = req.body;
    req.getConnection((err, conn) => {

        conn.query('UPDATE producto set ? where id = ?', [newCustomer, id], (err, rows) => {
            res.redirect('/compraeditar/agregar');
        });
    });
};
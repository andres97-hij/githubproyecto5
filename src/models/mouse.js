'use strict'
const pool = require('../database');


module.exports = function() {

    async function listar(req) {
        let query = ' SELECT * FROM pedidos';

        const data = await pool.query(query)
        return data
    }

    //agregar
    async function agregar(req) {
        await pool.query('INSERT INTO pedidos set ? ', [req.body]);

    }
    return {
        listar,
        agregar

    }





}
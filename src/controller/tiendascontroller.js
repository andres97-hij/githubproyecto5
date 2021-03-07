'use strict'

const tiendas = require('../models/tiendas')

//funcion llamando de la ruta 
async function tienda(req = null) {
    const product = await tiendas().tienda(req)
    return product
}


module.exports = {
    agregar,

}
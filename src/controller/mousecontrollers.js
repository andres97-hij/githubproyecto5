'use strict'

const mouse = require('../models/mouse')


//funcion llamando de la ruta 
async function listar(req = null) {
    const product = await mouse().listar(req)
    return product
}

//agregar 
async function agregar(req = null) {
    const agregar = await mouse().agregar(req)
    return agregar
}


module.exports = {
    listar,
    agregar
}
const express = require('express');
const router = express.Router();

const tiendaController = require("../controller/tiendacontroller");
/*const pool = require('../database
');*/

router.get('/agregar', tiendaController.tienda);

module.exports = router;
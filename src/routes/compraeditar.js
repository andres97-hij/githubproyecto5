const router = require('express').Router();

const customerController = require('../controllers/customerController');

router.get('/update/:id', compraeditarcontroller.edit);
router.post('/update/:id', customerController.update);
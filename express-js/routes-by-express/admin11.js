const admineController = require('../controllers/admine5');
const express = require('express');
const router = express.Router();
router.get('/add-product', admineController.getAddProduct);

router.get('/products', admineController.getProducts);

router.post('/add-product', admineController.postAddProduct);


module.exports = router;
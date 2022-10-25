

const productsController = require('../controllers/products3');
const express = require('express');
const router = express.Router();


router.get('/add-product', productsController.getAddProduct);

router.post('/add-product', productsController.postAddProduct);

module.exports = router;

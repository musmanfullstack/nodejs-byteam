const path = require('path');
const express = require('express');

const shopeController = require('../controllers/shope6');

const router = express.Router();
router.get('/add-student', shopeController.getIndex);

router.get('/products', shopeController.getProducts );

router.get('/products/:productId', shopeController.getProduct);

router.get('/cart',  shopeController.getCart);

router.get('/oders',  shopeController.getOders);

router.get('/checkout',  shopeController.getCheckout);

module.exports = router;


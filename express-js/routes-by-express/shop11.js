const path = require('path');
const express = require('express');

const shopeController = require('../controllers/shope5');

const router = express.Router();
router.get('/add-student', shopeController.getProducts);

router.get('/products');

router.get('/cart');

router.get('/checkout');

module.exports = router;


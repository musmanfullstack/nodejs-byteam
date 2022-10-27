const path = require('path');

const express = require('express');
const adminData = require('./admin21');

const router = express.Router();

router.get('/add-student', (req, res, next) => {
  const products = adminData.products;
  res.render('shop-2', {
    prods: products,
    pageTitle: 'Shop',
    hasProducts: products.length > 0,
  });
});

module.exports = router;
 
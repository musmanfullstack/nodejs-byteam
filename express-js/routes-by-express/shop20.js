const path = require('path');
const express = require('express');
const adminData = require('./admin20');

const router = express.Router();

router.get('/add-student', (req, res, next) => {
  const products = adminData.products;
  res.render('shop', {
    prods: products,
    pageTitle: 'Shop',
    hasProducts: products.length > 0
   });
});
 
module.exports = router;
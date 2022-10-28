const path = require('path');
const express = require('express');
const router = express.Router();
const products = [];

// /admin/add-product => GET
router.get('/add-product', (req, res, next) => {
<<<<<<< HEAD
  res.render('add-product-2', { pageTitle: 'Add Product'});
=======
  res.render('add-product-2', { pageTitle: 'Add Product',path: '/admin/add-product'});
>>>>>>> 7c80da9fd894bfe44a40cf53609d0ae435d80b62
});

// /admin/add-product => POST
router.post('/add-product', (req, res, next) => {
  products.push({ title: req.body.title });
  res.redirect('/add-student');
});

exports.routes = router;
exports.products = products;

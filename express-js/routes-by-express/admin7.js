

const productsController = require('../controllers/products');
const express = require('express');
const router = express.Router();//declaring router


router.get('/add-product', productsController.getAddProduct);
//in this admin file we are using the same url but they are not clashing with eachother because they are having different url hiting on different request js is that wise they know which request taking action and which url have to hit.
router.post('/add-product', productsController.postAddProduct);
 // res.render('add-product', {pageTitle: 'ADD PRODUCT' })
module.exports = router;

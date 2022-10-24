const path = require('path');

const express = require('express');
const router = express.Router();//declaring router
const products = [];//using product as a array.

router.get('/add-product', );
//in this admin file we are using the same url but they are not clashing with eachother because they are having different url hiting on different request js is that wise they know which request taking action and which url have to hit.
router.post('/add-product', (req, res, next)=>{    
   console.log(req.body)
    products.push({title: req.body.title});//concating data enter in the variable of javascript. 
    res.redirect('/add-student');
});
 // res.render('add-product', {pageTitle: 'ADD PRODUCT' })
exports.routes= router;
exports.products = products;0
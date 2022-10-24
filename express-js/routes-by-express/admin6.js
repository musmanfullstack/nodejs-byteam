const path = require('path');

const express = require('express');
const router = express.Router();
const products = [];

router.get('/add-product', (req, res, next)=>{
   res.render('add-product2',{ pageTitle : 'Add product', path: '/admin/add-product'});
});
router.post('/add-product', (req, res, next)=>{    
   console.log(req.body)
    products.push({title: req.body.title}); 
    res.redirect('/add-student');
});
exports.routes= router;
exports.products = products;
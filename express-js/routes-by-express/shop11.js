const path = require('path');
const express = require('express');


const adminData = require('./admin11');
const router = express.Router();
router.get('/add-student',(req, res, next)=>{
    console.log('shop.js',adminData.products);
     const products = adminData.products;
     res.render('shop',{prods: products, pageTitle: 'shop',path:'/add-student'});
});

exports.routes= router;

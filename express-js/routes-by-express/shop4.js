const path = require('path');
const express = require('express');


const adminData = require('./admin4');
const router = express.Router();//declaring routers
router.get('/add-student',(req, res, next)=>{
    console.log('shop.js',adminData.products);
     const products = adminData.products;
     res.render('shop',{prods: products, docTitle: 'shop'});
});

exports.routes= router;

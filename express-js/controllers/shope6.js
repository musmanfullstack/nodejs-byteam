const e = require('express');
const Product = require('../models/product5');//connect the files 


 exports.getProducts = (req, res, next)=>{
    Product.fetchAll((products)=>{
        res.render('shop/product-list2',{prods: products, pageTitle: 'All Products',path: '/products'});
    });
};
exports.getProduct = (req, res, next)=>{
    const prodId = req.params.productId;
    Product.findById(prodId, product =>{
        res.render('shop/product-detail2',{product: product,pageTitle: product.title, path:'/products'}
        )
    })
 };
exports.getIndex = (req, res, next) => {
    Product.fetchAll((products)=>{
        res.render('shop/index2',{prods: products, pageTitle: 'Shop',path: '/add-student'});
    });
}
exports.getCart = (req, res , next) => {
    res.render('shop/cart2', {path: '/cart', pageTitle: 'Your cart'})
}
exports.getOders = (req, res , next) => {
    res.render('shop/oders2', {path: '/oders', pageTitle: 'Your Oders'})
}

exports.getCheckout = (req, res , next) => {
    res.render('shop/checkout2',{path: '/checkout', pageTitle: 'Check Out'})
}
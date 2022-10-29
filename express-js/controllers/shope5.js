const Product = require('../models/product4');//connect the files 


 exports.getProducts = (req, res, next)=>{
    Product.fetchAll((products)=>{
        res.render('shop/product-list',{prods: products, pageTitle: 'All Products',path: '/products'});
    });
    
};
exports.getIndex = (req, res, next) => {
    Product.fetchAll((products)=>{
        res.render('shop/index',{prods: products, pageTitle: 'Shop',path: '/add-student'});
    });
}
exports.getCart = (req, res , next) => {
    res.render('shop/cart', {path: '/cart', pageTitle: 'Your cart'})
}
exports.getOders = (req, res , next) => {
    res.render('shop/oders', {path: '/oders', pageTitle: 'Your Oders'})
}

exports.getCheckout = (req, res , next) => {
    res.render('shop/checkout',{path: '/checkout', pageTitle: 'Check Out'})
}
const Product = require('../models/product4');//connect the files 


 exports.getProducts = (req, res, next)=>{
    Product.fetchAll((products)=>{
        res.render('shop/product-list',{prods: products, pageTitle: 'Shop',path: '/add-student'});
    });
    
};
exports.getIndex = (req, res, next) => {
    Product.fetchAll((products)=>{
        res.render('shop/index',{prods: products, pageTitle: 'Shop',path: '/add-student'});
    });
}
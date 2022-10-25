const Product = require('../models/product');//connect the files 
exports.getAddProduct = (req, res, next)=>{
    res.render('add-product',{ pageTitle : 'Add product'});
};

exports.postAddProduct = (req, res, next)=>{    
    const products = new Product(req.body.title)//creating new object
    products.save();//For save the product object.
     res.redirect('/add-student');
 };

 exports.getProducts = (req, res, next)=>{
    const products = Product.fetchAll();
    res.render('shop',{prods: products, docTitle: 'shop'});
};
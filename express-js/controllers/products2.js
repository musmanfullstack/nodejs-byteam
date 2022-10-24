const Product = require('../models/product');//connect the files 
exports.getAddProduct = (req, res, next)=>{
    res.render('add-product',{ pageTitle : 'Add product'});
};

exports.postAddProduct = (req, res, next)=>{    
    const product = new Product(req.body.title)//creating new object
    product.save();//For save the product object.
     products.push({title: req.body.title}); 
     res.redirect('/add-student');
 };

 exports.getProducts = (req, res, next)=>{
    const products = Product.fetchAll();
    res.render('shop',{prods: products, docTitle: 'shop'});
};
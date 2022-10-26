const Product = require('../models/product4');//connect the files 


exports.getAddProduct = (req, res, next)=>{
    res.render('admin/add-product',{ pageTitle : 'Add product', path: '/admin/add-product'});
};

exports.postAddProduct = (req, res, next)=>{    
    const products = new Product(req.body.title)
    products.save();
     res.redirect('/add-student');
 };
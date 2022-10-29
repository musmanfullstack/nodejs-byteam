const Product = require('../models/product5');//connect the files 


exports.getAddProduct = (req, res, next)=>{
    res.render('admin/add-product2',{ pageTitle : 'Add product', path: '/admin/add-product'});
};

exports.postAddProduct = (req, res, next)=>{    
    const title = req.body.title;
    const imageUrl = req.body.imageUrl;
    const price = req.body.price;
    const description = req.body.description;



    const products = new Product(title, imageUrl, description, price);
    products.save();
     res.redirect('/add-student');
 };

exports.getProducts = (req, res, next) => {
    Product.fetchAll((products)=>{
        res.render('admin/products2',{prods: products, pageTitle: 'Admin Product',path: '/admin/products'});
    });
}

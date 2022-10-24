const products = [];//we call array in controller in it because it is working with the controller
exports.getAddProduct = (req, res, next)=>{
    res.render('add-product',{ pageTitle : 'Add product'});
};

exports.postAddProduct = (req, res, next)=>{    
    console.log(req.body)
     products.push({title: req.body.title}); 
     res.redirect('/add-student');
 };

 exports.getProducts = (req, res, next)=>{

     res.render('shop',{prods: products, docTitle: 'shop'});
};
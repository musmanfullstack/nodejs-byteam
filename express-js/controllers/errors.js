

exports.get404 = (req, res, next)=>{
    res.render('404');
    // res.status(404).sendFile(path.join(__dirname,'views','404.html'));
};
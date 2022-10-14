

const express = require('express');

const app = express ();

app.use('/add-student',(req, res, next)=>{
    console.log('in another middleware!');
    res.send('<h1>Add-student</h1>');
});

app.use('/add-product',(req, res, next)=>{
    console.log('in the middleware!');
    res.send('<h1>The ADD Product</h1>');
});
// Routes are those we can say that when this url hit then this middleware show. ROutues are basically gives us path or we can also say that they show us way that this way goes to that side of it.
// In the routes we give routes in the middleware. for that we dont need next method. it can automatically hit that url. But if we need to use for some of time for example if we give default url on the top that is singal back line" / "then you write add-product in it. It dont recognize it. It just simple hit the default url but if you write product on the top and the default url down then it recognize the both. If you want to give default url on the top then just add next function in it. It automatically check the next url and active on it.
//This is the method with which give routes with the help of url.


app.listen(3000);
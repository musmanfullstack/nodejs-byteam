const express = require('express');
const bodyParser = require('body-parser');// passing body parser as a object in the constant. 
const app = express ();

app.use(bodyParser.urlencoded());//you can say that passing bodyparser as a use middleware without giving request response to it.

app.use('/add-student',(req, res, next)=>{
    console.log('in another middleware!');
    res.send('<h1>Add-student</h1>');
});

app.use('/add-product',(req, res, next)=>{
    res.send('<form action="/product" method="POST"><input  type="text" name="title"> <button type="submit">Add product </button></form>');
});

app.post('/product', (req, res, next)=>{//in it we use post method
    console.log(req.body);
    res.redirect('/add-student');

});


app.listen(3000);
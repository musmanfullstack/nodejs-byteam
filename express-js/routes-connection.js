const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const adminRoutes = require('./routes-by-express/admin');//link the admin folder
const shopRoutes = require('./routes-by-express/shop');//link the shop folder

app.use(bodyParser.urlencoded({extended: false}));

app.use(shopRoutes);    //declare the contant paths
app.use(adminRoutes);   //declare the constant paths

app.use((req, res, next)=>{//for show page not found error if any other url is enter.
    res.status(404).send('<h1>Page not found</h1>');
});
app.listen(3000);
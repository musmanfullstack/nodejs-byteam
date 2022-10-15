const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const adminRoutes = require('./routes-by-express/admin2');
const shopRoutes = require('./routes-by-express/shop2');

app.use(bodyParser.urlencoded({extended: false}));

app.use(shopRoutes);    
app.use('/admin',adminRoutes);   //in this we declare that in every link belongs to admin have to show the admin before every link.

app.use((req, res, next)=>{
    res.status(404).send('<h1>Page not found</h1>');
});
app.listen(3000);
const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');
const adminData = require('./routes-by-express/admin11');
const shopData = require('./routes-by-express/shop11');

app.use(bodyParser.urlencoded({extended: false}));

app.use(shopData.routes);    
app.use('/admin',adminData.routes);  

app.use((req, res, next)=>{
    res.status(404).render('404',{ pageTitle: 'Page Not Found', path : ''});
});
app.listen(3000);
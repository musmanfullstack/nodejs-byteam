const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'pug');
app.set('views', 'views');
const adminData = require('./routes-by-express/admin5');
const shopData = require('./routes-by-express/shop5');

app.use(bodyParser.urlencoded({extended: false}));

app.use(shopData.routes);    
app.use('/admin',adminData.routes);   //in this we declare that in every link belongs to admin have to show the admin before every link.

app.use((req, res, next)=>{
    res.status(404).render('404');
});
app.listen(3000);
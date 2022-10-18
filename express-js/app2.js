const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'pug');
app.set('views', 'views');
const adminData = require('./routes-by-express/admin4');
const shopData = require('./routes-by-express/shop4');

app.use(bodyParser.urlencoded({extended: false}));

app.use(shopData.routes);    
app.use('/admin',adminData.routes);   //in this we declare that in every link belongs to admin have to show the admin before every link.

app.use((req, res, next)=>{
    res.status(404).sendFile(path.join(__dirname,'views','404.html'));
});
app.listen(3000);
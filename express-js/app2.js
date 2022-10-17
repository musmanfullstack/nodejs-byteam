const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'pug');
app.set('views', 'views');
const adminRoutes = require('./routes-by-express/admin3');
const shopRoutes = require('./routes-by-express/shop3');

app.use(bodyParser.urlencoded({extended: false}));

app.use(shopRoutes);    
app.use('/admin',adminRoutes);   //in this we declare that in every link belongs to admin have to show the admin before every link.

app.use((req, res, next)=>{
    res.status(404).sendFile(path.join(__dirname,'views','404.html'));
});
app.listen(3000);
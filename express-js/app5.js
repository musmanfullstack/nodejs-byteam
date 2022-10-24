const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const errorController = require('./controllers/errors');
const app = express();

app.set('view engine', 'pug');
app.set('views', 'views');
const adminRoutes = require('./routes-by-express/admin7');
const shopRoutes = require('./routes-by-express/shop7');

app.use(bodyParser.urlencoded({extended: false}));

app.use(shopRoutes);    
app.use('/admin',adminRoutes);   //in this we declare that in every link belongs to admin have to show the admin before every link.

app.use(errorController.get404);
app.listen(3000);
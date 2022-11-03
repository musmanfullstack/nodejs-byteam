const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const errorController = require('./controllers/error5');
const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');
const adminRoutes = require('./routes-by-express/admin12');
const shopRoutes = require('./routes-by-express/shop12');

app.use(bodyParser.urlencoded({extended: false}));

app.use(shopRoutes);    
app.use('/admin',adminRoutes);

app.use(errorController.get404);
app.listen(3000);
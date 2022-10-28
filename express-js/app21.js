const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminData = require('./routes-by-express/admin21');
const shopData = require('./routes-by-express/shop21');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminData.routes);
app.use(shopRoutes); 

app.use((req, res, next) => {
  res.status(404).render('404-2', { pageTitle: 'Page Not Found' });
});

app.listen(3000);

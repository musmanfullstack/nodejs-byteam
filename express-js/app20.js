const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const {engine} = require('express-handlebars');

const app = express();

app.engine(
  'hbs',
  engine({
    layoutsDir: 'views/layouts/',
    defaultLayout: 'main-layout',
    extname: 'hbs'
  })
);
app.set('view engine', 'hbs');
app.set('views', 'views');


const adminData = require('./routes-by-express/admin20');
const shopData = require('./routes-by-express/shop20');


app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminData.routes);
app.use(shopData);

app.use((req, res, next) => {
  res.status(404).render('404', { pageTitle: 'Page Not Found' });
});

app.listen(3000);

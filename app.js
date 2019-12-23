const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// setting what dynamic HTML template to use, where to find => views(file)
app.set('view engine', 'pug');
app.set('views', 'views');

const adminData = require('./routes/admin.routes');
const shopRoutes = require('./routes/shop.routes');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
  // keep __dirname. because no ../ => app.js is top level so..
  res.status(404).render('404');
});

app.listen(3000);

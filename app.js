const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const errorController = require('./controllers/error.controller');
const mongoConnect = require('./utils/database').mongoConnect;

const app = express();

// setting what dynamic HTML template to use, where to find => views(file)
app.set('view engine', 'pug');
app.set('views', 'views');

const adminRoutes = require('./routes/admin.routes');
const shopRoutes = require('./routes/shop.routes');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
  // UserFindById(1)
  // .then(user => {
  //   req.user = user;
  //   next();
  // })
  // .catch(err => console.log(err));
  next();
});

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

mongoConnect(() => {
  app.listen(3000);
});

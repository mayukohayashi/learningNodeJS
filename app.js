const express = require('express');

const app = express();

app.use('/', (req, res, next) => {
  console.log('This is always running💫');
  next();
});

app.use('/product', (req, res, next) => {
  console.log('IN the next middleware❗');
  res.send('<h1>PRODUCT PAGE</h1>');
});

app.use('/', (req, res, next) => {
  console.log('IN the next middleware❗');
  res.send('<h1>Hello from Express</h1>');
});

app.listen(3000);

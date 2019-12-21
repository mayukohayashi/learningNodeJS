const http = require('http');

const express = require('express');

const app = express();

app.use((req, res, next) => {
  console.log('IN the middleware🙏');
  next(); // Allows the request to continue to the next middleware in line
});

app.use((req, res, next) => {
  console.log('IN the next middleware❗');
  res.send('<h1>Hello from Express</h1>');
});

app.listen(3000);

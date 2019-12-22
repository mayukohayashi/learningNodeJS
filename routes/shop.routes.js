const path = require('path');

const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, '../', 'views', 'shop.html'));
  // want to get => res.sendFile('../views/shop.html')
  // => USE GLOBAL PATH MADE BY NODE.JS
});

module.exports = router;

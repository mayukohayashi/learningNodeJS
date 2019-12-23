const path = require('path');

const express = require('express');

const rootDir = require('../utils/path.util');
const adminData = require('./admin.routes');

const router = express.Router();

router.get('/', (req, res, next) => {
  const products = adminData.products;
  res.render('shop', { prods: products, docTitle: 'Shop' });
});

module.exports = router;

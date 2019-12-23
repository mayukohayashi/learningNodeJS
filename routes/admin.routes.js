const path = require('path');

const express = require('express');

const rootDir = require('../utils/path.util');

const router = express.Router();

const products = [];

// /admin/app-product => GET
router.get('/add-product', (req, res, next) => {
  res.render('add-product', { pageTitle: 'ADD PRODUCT' });

});

// /admin/app-product => POST
router.post('/add-product', (req, res, next) => {
  products.push({ title: req.body.title });
  res.redirect('/');
});

exports.routes = router;
exports.products = products;

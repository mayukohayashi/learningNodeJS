const path = require('path');

const express = require('express');

const productsController = require('../controllers/products.controller');

const router = express.Router();

// /admin/app-product => GET
router.get('/add-product', productsController.getAddProduct);

// /admin/app-product => POST
router.post('/add-product', productsController.postAddProduct);

module.exports = router;

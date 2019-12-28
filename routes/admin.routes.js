const path = require('path');

const express = require('express');

const adminController = require('../controllers/admin.controller');

const router = express.Router();

// /admin/app-product => GET
router.get('/add-product', adminController.getAddProduct);

// /admin/products => GET
router.get('/products', adminController.getProducts);

router.get('/edit-product/:productId', adminController.getEditProduct);

// /admin/app-product => POST
router.post('/add-product', adminController.postAddProduct);

module.exports = router;

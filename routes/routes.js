const express = require('express');
const userController = require('../controllers/userController');
const productController = require('../controllers/productController');
const invoiceController = require('../controllers/invoiceController');
const purchaseHistoryController = require('../controllers/purchaseHistoryController');

const router = express.Router();

// User Routes
router.post('/users', userController.createUser);

// Product Routes
router.post('/products', productController.createProduct);

// Invoice Routes
router.post('/invoices', invoiceController.createInvoice);

// Purchase History Routes
router.post('/purchaseHistory', purchaseHistoryController.createPurchaseHistory);

module.exports = router;

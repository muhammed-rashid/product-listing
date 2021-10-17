const express = require('express');
const router = express.Router();

const productController = require('../controller/productController');

router.post('/product',productController.addProduct);
router.get('/product',productController.getProduct);



module.exports = router;
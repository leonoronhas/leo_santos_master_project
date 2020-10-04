const router = require('express').Router();

const productController = require('../../controllers/project/product');

router.get('/store', productController.getProducts);

router.get('/product-detail/:productId', productController.getDetail);

module.exports = router;
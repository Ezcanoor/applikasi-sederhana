const express = require('express')
const ProductController = require('../controllers/product.controller')
const router = express.Router()

router.get('/product', ProductController.getAllProduct)
router.post('/product', ProductController.createProduct)

module.exports = router
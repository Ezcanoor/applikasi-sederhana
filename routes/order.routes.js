const express = require('express')
const OrderController = require('../controllers/order.controller')
const router = express.Router()

router.get('/order', OrderController.getAllOrder)
router.get('/order/:invoiceNumber', OrderController.orderByInvoiceNumber)
router.post('/order', OrderController.createOrder)

module.exports = router
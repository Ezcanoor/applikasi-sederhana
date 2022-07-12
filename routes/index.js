const express = require('express')
const router = express.Router()
const orderRouter = require('./order.routes')
const productRouter = require('./product.routes')
const customerRouter = require('./customer.routes')

router.get('/', (req, res) => {
  res.send('app Home')
})

router.use(orderRouter)
router.use(productRouter)
router.use(customerRouter)


module.exports = router
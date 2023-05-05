const express = require('express');
const { createOrder } = require('../controller/createOrder.js');
const { getOrder } = require('../controller/getOrders.js');
const { getPayment } = require('../controller/getpayment.js');



const router = express.Router()
router.post('/createOrder', createOrder)
router.get('/orders', getOrder)
router.get("/payments",getPayment)


module.exports = router;
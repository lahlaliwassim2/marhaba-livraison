const express = require('express');
const Order = require('../controllers/OrderControllers');
const OrderRouter = express.Router();


OrderRouter.get('/getOrders', verify, Order.getOrdersByVille );


module.exports = OrderRouter;
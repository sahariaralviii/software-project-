const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');
const authMiddleware = require('../middleware/authMiddleware');

// @route   POST api/orders/checkout
// @desc    Create a new order from user's cart
router.post('/checkout', authMiddleware, orderController.checkout);

module.exports = router;

const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cartController');
const authMiddleware = require('../middleware/authMiddleware');

// Shob cart route protected thakbe
router.use(authMiddleware);

// @route   GET api/cart
// @desc    Get user's cart
router.get('/', cartController.getCart);

// @route   POST api/cart
// @desc    Add book to cart (using SKU)
router.post('/', cartController.addToCart);

// @route   DELETE api/cart/:bookId (Using MongoDB _id)
// @desc    Remove book from cart
router.delete('/:bookId', cartController.removeFromCart);

// @route   DELETE api/cart
// @desc    Clear entire cart
router.delete('/', cartController.clearCart);

module.exports = router;

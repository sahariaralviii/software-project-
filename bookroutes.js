const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');

// @route   POST api/books/seed
// @desc    (Optional) Add all 26 books to the DB
router.post('/seed', bookController.seedBooks);

// @route   GET api/books
// @desc    Get all books
router.get('/', bookController.getAllBooks);

// @route   GET api/books/sku/:sku
// @desc    Get book by its SKU (for QR code)
router.get('/sku/:sku', bookController.getBookBySku);

// @route   GET api/books/category/:categoryName
// @desc    Get books by category
router.get('/category/:categoryName', bookController.getBooksByCategory);

module.exports = router;

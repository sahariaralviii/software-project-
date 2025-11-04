const mongoose = require('mongoose');

// Frontend-e _id '1', '2' etc. string hishebe ache.
// Tai amra `sku` name ekta field use korbo oi '1', '2' store korar jonno
// Ebong MongoDB-r nijer default _id (ObjectId) o thakbe.
const BookSchema = new mongoose.Schema({
  sku: { type: String, required: true, unique: true }, // '1', '2', '3' etc. for QR code
  title: { type: String, required: true },
  author: { type: String, required: true },
  category: { type: String, required: true },
  rating: { type: Number, default: 0 },
  reviews: { type: Number, default: 0 },
  price: { type: Number, required: true },
  oldPrice: { type: Number },
  discount: { type: Number, default: 0 },
  image: { type: String, required: true },
  description: { type: String, required: true },
});

module.exports = mongoose.model('Book', BookSchema);

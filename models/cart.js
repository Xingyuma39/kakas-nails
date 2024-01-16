// Require the Mongoose package
const mongoose = require('mongoose');
const productSchema = require('./product.js')

const cartSchema = new mongoose.Schema({
    products: [productSchema],
    price: { type: Number, Step: 0.01 },
    quantity: Number
});

// Export the schema as a Mongoose model. 
// The Mongoose model will be accessed in `models/index.js`
module.exports = mongoose.model('Cart', cartSchema);
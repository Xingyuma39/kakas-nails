// Require the Mongoose package
const mongoose = require('mongoose');
// const cartSchema = require('./cart.js')

// Create a schema to define the properties of the products collection
const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    type: String,
    description: String,
    rating: Number,
    size: { type: String, default: "Standard"},
    price: { type: Number, Step: 0.01 },
    quantity: Number,
    photo: String,
    isFeatured: { type: Boolean, default: false }
});

// Export the schema as a Monogoose model. 
// The Mongoose model will be accessed in `models/index.js`
module.exports = mongoose.model('Product', productSchema);

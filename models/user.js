// Require the Mongoose package
const mongoose = require('mongoose');

// Create a schema to define the properties of the products collection
const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true }
});

// Export the schema as a Monogoose model. 
// The Mongoose model will be accessed in `models/index.js`
module.exports = mongoose.model('User', userSchema);

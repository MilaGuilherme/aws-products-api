const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    id: { type: Number, required:true},
    name: { type: String, required:true },
    description: { type: String, required:true },
    category: { type: String, required:true },
    price: { type: String, required:true },
    url: { type: String }
});

const Product = mongoose.model('Products', productSchema)

module.exports = Product;


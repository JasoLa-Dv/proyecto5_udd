const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name: String ,
    image: String,
    price: Number,
    brand: String,
    inStock: Boolean 
})

const Product = mongoose.model('product', productSchema)

module.exports = Product
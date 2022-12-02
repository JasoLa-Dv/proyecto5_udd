const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name: String ,
    image: String,
    description: String,
    price: Number,
    countInStock: Number
})

const Product = mongoose.model('product', productSchema)

module.exports = Product
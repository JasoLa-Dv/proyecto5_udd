const Product = require('../models/Product')

const createProduct = async (req, res) => {
    try{
        const newProduct = new Product(req.body)
        await newProduct.save()
        res.json({success:true, message: 'Product created', productId: newProduct._id })

    } catch (error){
        res.json({success:false, message:error.message})
    }
}

const obtenerProduct =  async (req, res) => {
    try{
        const Products = await Product.find()
        res.json({success:true, Products})

    } catch (error){
        res.json({success:false, message:error.message})
    }
}


module.exports = { createProduct, obtenerProduct }
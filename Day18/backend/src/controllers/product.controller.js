const productModel = require("../models/product.models");

async function createProduct(req,res) {
    console.log("api call");
    const {image, title,description,price:{amount,currency}} = req.body;

    try{
        const product = await productModel.create({
            image, title , description, price: {amount, currency}
        })
        return res.status(201).json({
            message:"Product created successfully",
            product
        })
    }catch (error){
        return res.status(500).json({
            message:"Somthing went wrong",
            error:error.message
        })
    }
}

async function getItem(req,res){
    try{
        const products = await productModel.findOne();
        return res.status(200).json({
            messsage:"Product fetched successfully",
            products
        })
    }
    catch(error){
        return res.status(500).json({
            message:"Somthing went wrong",
            error: error.message
        })
    }
}

module.exports = { 
    createProduct,
    getItem
};
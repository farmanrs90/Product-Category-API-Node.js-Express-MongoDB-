const ProductModel = require('../models/productModel')
const getAllProducts = async (req, res) => {
    try {

        const { search, sort } = req.query
        let query = {}
        if (search) {
            query.title = { $regex: search, $options: "i" }
        }
        let products = ProductModel.find(query).populate('category', 'name')

        if (sort) {
            products = products.sort(sort)
        }
        products = await products
        res.status(200).json({
            success: true,
            data: products
        })

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        })

    }
}

const getProductById = async (req, res) => {

    try {

        const { id } = req.params

        const product = await ProductModel.findById(id)

        if (!product) {

            return res.status(404).json({
                success: false,
                message: "Product not found"
            })

        }

        res.status(200).json({
            success: true,
            data: product
        })

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        })

    }

}

const deleteProductById = async (req, res) => {

    try {

        const { id } = req.params

        const deletedProduct = await ProductModel.findByIdAndDelete(id)

        if (!deletedProduct) {

            return res.status(404).json({
                success: false,
                message: "Product not found"
            })

        }

        res.status(200).json({
            success: true,
            message: "Product deleted successfully",
            data: deletedProduct
        })

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        })

    }

}

const addNewProduct = async (req, res) => {

    try {

        const newProduct = new ProductModel(req.body)

        await newProduct.save()

        res.status(201).json({
            success: true,
            data: newProduct
        })

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        })

    }

}

const updateProductById = async (req, res) => {

    try {

        const { id } = req.params

        const updatedProduct = await ProductModel.findByIdAndUpdate(
            id,
            req.body,
            { new: true }
        )

        if (!updatedProduct) {

            return res.status(404).json({
                success: false,
                message: "Product not found"
            })

        }

        res.status(200).json({
            success: true,
            data: updatedProduct
        })

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        })

    }

}

const ProductsController = {
    getAllProducts,
    getProductById,
    deleteProductById,
    updateProductById,
    addNewProduct
}

module.exports = ProductsController
const mongoose = require('mongoose')


const productSchema = new mongoose.Schema({
    title: {
        type: String,
        trim: true,
        required: true
    },
    description: {
        type: String

    },
    price: {
        type: Number,
        required: true
    },
    stock: {
        type: Number,
        default: 0
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: true
    }
}, { timestamps: true, versionKey: false })
const ProductModel = mongoose.model('Product', productSchema

)

module.exports = ProductModel


// : String (Məcburi / Required)
// description: String
// price: Numbertitle (Məcburi / Required)
// stock: Number (Default: 0)
// category: ObjectId (Ref: "Category" - Məcburi)
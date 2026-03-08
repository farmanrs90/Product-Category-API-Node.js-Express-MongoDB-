const express = require('express')

const router = express.Router()

const productController = require('../controllers/productController')
const productValidator=require('../middlewares/productValidator')

router.get('/', productController.getAllProducts)

router.get('/:id', productController.getProductById)

router.post('/',productValidator, productController.addNewProduct)

router.put('/:id',productValidator, productController.updateProductById)

router.delete('/:id', productController.deleteProductById)

module.exports = router
const express=require('express')
const router=express.Router()
const categoryController=require('../controllers/categoryControllers')
const categoryValidator=require('../middlewares/categoryValidator')


router.get('/', categoryController.getAllCategories)

router.get('/:id', categoryController.getCategoryById)

router.post('/',categoryValidator, categoryController.addNewCategory)

router.put('/:id',categoryValidator, categoryController.updateCategory)

router.delete('/:id', categoryController.deleteCategoryById)

module.exports = router
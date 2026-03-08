const CategoryModel = require('../models/categoryModel')


const categoryController = {
     getAllCategories : async (req, res) => {
        try {
            const categories = await CategoryModel.find({})
            res.status(
                200
            ).json({
                message: 'success',
                data: categories
            })
        } catch (error) {
            res.status(500).json({
                success: false,
                message: error.message
            })
        }
    },
     getCategoryById :async (req, res) => {
        try {
            const { id } = req.params
            const category = await CategoryModel.findById(id)
            if (!category) {
                return res.status(404).json({
                    success: false,
                    message: "Category not found"
                })
            }
            res.status(200).json({
                data:category,
                message:"category successfully get"
            })
        } catch (error) {
            res.status(500).json({
                success: false,
                message: error.message
            })
        }
    }
    ,
     deleteCategoryById : async (req, res) => {
        try {
            const { id } = req.params
            const deletedCategory = await CategoryModel.findByIdAndDelete(id)
            const categories = await CategoryModel.find({})
            if (!deletedCategory) {
                return res.status(404).json({
                    message: 'category not found',
                    success: false,
                    allCategories: categories

                })
            }
            res.status(200).json({
                data: deletedCategory,
                status: "success",

            })

        } catch (error) {
            res.status(500).json({
                success: false,
                message: error.message
            })
        }

    },
     addNewCategory : async (req, res) => {
        try {
            const newCategory = new CategoryModel(req.body )
            await newCategory.save()
            res.status(201).json({
                data: newCategory,
                message: "category created successsfully"
            })


        } catch (error) {
            res.status(500).json({
                success: false,
                message: error.message
            })
        }
        
    }
    ,
     updateCategory : async (req, res) => {
            try {
                const { id } = req.params
                const updatedCategory = await CategoryModel.findByIdAndUpdate(id, { ...req.body }, { new: true })
                if (!updatedCategory) {
                    return res.status(404).json({
                        message: "category not found",
                        success: false
                    })
                }
                res.status(
                    200
                ).json({
                    data: updatedCategory,
                    message: "category updated successfully"
                })

            } catch (error) {
                res.status(500).json({
                    success: false,
                    message: error.message
                })
            }
        }
}

module.exports = categoryController
const mongoose=require('mongoose')
const categorySchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true

    },
    description:{
        type:String,
        trim:true
    }

},{timestamps:true,wersionKey:false})



const CategoryModel=mongoose.model('Category',categorySchema)
// name: String (Məcburi / Required)
// description: String
module.exports=CategoryModel
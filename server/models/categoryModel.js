const mongoose=require('mongoose')
const categorySchema=new mongoose.Schema({
    name:{
        type:string,
        required:true,
        trim:true

    },
    description:{
        type:string,
        trim:true
    }

},{timestamps:true,wersionKey:false})



const CategoryModel=mongoose.model('Category',categorySchema)
// name: String (Məcburi / Required)
// description: String
module.exports=CategoryModel
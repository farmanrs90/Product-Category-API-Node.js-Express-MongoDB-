
const categoryValidator=(req,res,next)=>{
    const {name,description}=req.body
    if(!name||!description){
        return res.status(400).json({
            message:"All fields are required",
            success:false
        })
    }
    next()
}
module.exports=categoryValidator
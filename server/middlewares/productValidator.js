const productValidator=(req,res,next)=>{
    const{
       title ,description, price ,stock,category
    }=req.body
    if ( !title||! description|| !price ||!stock||!category) {
        return res.status(400).json({
            message:"All fields are required",
            success:false
        })
        
    }
    next()
}
module.exports=productValidator
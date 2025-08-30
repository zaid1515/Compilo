const { CustomApiError } = require("../errors/custom-error")

var errorHandler=(err,req,res,next)=>{
     if(err instanceof CustomApiError){
          return res.status(err.statusCode).json({success:false,message:err.message})
     }
     console.log(err)
     return res.status(500).json({success:false,message:err.message})
}

module.exports=errorHandler   
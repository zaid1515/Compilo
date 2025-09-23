const { CustomApiError } = require("../errors/custom-error");
const asyncWrap = require("../middlewares/asyncWrap");
const User = require("../models/user");


const getUser=asyncWrap(async(req,res)=>{
     console.log("getuser")
     console.log(req.user);
     const user=await User.findById(req?.user?.id)
     console.log(user);
     if(!req.user || !user){
          throw new CustomApiError("User does not exist",404);
     }
     res.status(200).json({
          success:"true",
          data:user,
          message:"User fetched successfully"
     })

})

module.exports={getUser}
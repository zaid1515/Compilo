const { CustomApiError } = require("../errors/custom-error");
const asyncWrap = require("../middlewares/asyncWrap")

const createProject=asyncWrap(async(req,res)=>{
     const {name,description}=req.body;
     if(!name || !description){
          throw new CustomApiError("All fields are required",400)
     }
})

module.exports={createProject}


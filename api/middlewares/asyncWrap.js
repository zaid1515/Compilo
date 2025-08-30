const asyncWrap=(asyncFunction)=>{
     return async function(req,res,next){
          try {
               asyncFunction(req,res,next)
          } catch (error) {
               next(error.message)
          }
     }
}

module.exports=asyncWrap
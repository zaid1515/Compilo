const mongoose=require('mongoose')

const connectDB=async(url)=>{
     try {
          await mongoose.connect(url);
          console.log("Connected to the Database")
     } catch (error) {
          console.log(error.message)
     }
}

module.exports={connectDB}
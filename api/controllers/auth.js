const { CustomApiError } = require("../errors/custom-error");
const asyncWrap = require("../middlewares/asyncWrap");
const validator=require('validator');
const User = require("../models/user");
const jwt=require('jsonwebtoken')

const register=asyncWrap(async(req,res)=>{
     const {name,email,password}=req.body
     if(!email || !name || !password){
          throw new CustomApiError("All fields are required",400)
     }
     if(!validator.isEmail(email)){
          throw new CustomApiError("Invalid Email format",400)
     }

     const userExists=await User.findOne({email:email})
     if(userExists){
          throw new CustomApiError(`User already exits with email ${email}`,409)
     }
     
     const newUser=await User.create({email,name,password})
     if(!newUser){
          throw new CustomApiError("Failed to create new user",)
     }

     res.status(201).json({
          success:true,
          message:"User created successfully.",
          data:newUser
     })
})

const login=asyncWrap(async(req,res)=>{
     const {email,password}=req.body
     if(!email || !password){
          throw new CustomApiError("All fields are required",400)
     }
     if(!validator.isEmail(email)){
          throw new CustomApiError("Invalid Email format",401)
     }

     const user=await User.findOne({email:email}).select("+password")
     if(!user){
          throw new CustomApiError("User does not exist.",404)
     }
     const checkPassword=await user.comparePassword(password);
     if(!checkPassword){
          throw new CustomApiError("Invalid Credentials",401)
     }

     const jwtToken = await  jwt.sign({id:user._id},process.env.JWT_SECRET,{expiresIn:'1h'})

     res.status(200).json({
          success:true,
          message:"User logged in successfully.",
          data:{
               email:user.email
          },
          token:jwtToken
     })
     
})

module.exports={register,login}
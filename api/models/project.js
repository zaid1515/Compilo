const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    files: {
      type: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "File",
        },
      ],
      default:[]
    },
    collaborators:{
      type:[
        {
          user:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"User"
          },
          role:{
            type:String,
            enum:['view','edit'],
            default:'view',
          }
        }
      ]
    },
  },{ timestamps: true });

const Project=mongoose.model('Project',projectSchema)
module.exports=Project
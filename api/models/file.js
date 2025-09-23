const mongoose = require("mongoose");

const fileSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    content: {
      type: String,
    },
    projectId: {
      type: String,
      ref: "Project",
      required: true,
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    language:{
     type:String,
     enum:["cpp","c","java","python","js","txt","go","ts"],
     default:"txt",
    },
    collaborators: {
      type: [
        {
          user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
          },
          role: {
            type: String,
            enum: ["view", "edit"],
            default: "view",
          },
        },
      ],
    },
  },
  { timestamps: true }
);

const File = mongoose.model("File", fileSchema);
module.exports = File;

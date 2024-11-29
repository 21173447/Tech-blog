import mongoose from "mongoose";

const blogSchema = mongoose.Schema(
  {
    image: {
      type: String,
      required: true,
    },
    name: {
      //  userId:
      type: String,
      required: true,
    },

    // Title of the blog post
    title: {
      type: String,
      required: true,
      trim: true,
    },

    userId:{
      type: mongoose.Schema.Types.ObjectId,
      required:true,
      ref:"User"
    },

  
    content: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    // createAt, updateAt
  }
);

const blog = mongoose.model("Blog", blogSchema);
export default blog;
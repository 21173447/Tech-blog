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

    // Content of the blog post
    content: {
      type: String,
      required: true,
    },
  },
  {
    Timestamp: true,
    // createAt, updateAt
  }
);

const blog = mongoose.model("Blog", blogSchema);
export default blog;

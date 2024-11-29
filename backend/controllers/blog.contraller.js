import Blog from '../models/blog.model.js'
import mongoose from 'mongoose';

export const getBlogs =  async(req,res) =>{
    try {
      const blogs = await Blog.find({});
      res.status(200).json({success:true, data : blogs});
    } catch (error) {
      console.log("error in fetching the blog", error.message)
      res.status(500).json({success: false, message: "server Error"});
    }

  };

 export const createBlog =  async (req,res) => {
    const blog =req.body
    const userid = req.user._Id
  
    if( !blog.userId || !blog.image  ||! blog.name || !blog.title || !blog.content){
      return res.status(400).json({success: false , message: "please provide all fields "})
    }
    // create a new product from a user it got a title,...
    const newBlog = new Blog(blog)
  
    try {
        await newBlog.save();
        res.status(201).json({success:true, data: newBlog})
    } catch (error) {
      console.error("Error in creating a blog:", error.message);
      res.status(500).json({success:false , message:"server Error"});
    }
  
  };

  export const deleteBlog = async (req, res) => {
    const {id} = req.params;
  
    if(!mongoose.Types.ObjectId.isValid(id)){
      return res.status(404).json({success: false, message: "Invalid blog ID"});
  
    }
  
    try {
      await Blog.findByIdAndDelete(id);
      res.status(200).json({success:true, message: "Block delete successfully."})
      
    } catch (error) {
      console.log("Error in deleting a block", error.message);
      res.status(404).json({success:true, message: "Block not found"})
    }
  
  };

  export const updateBlog = async (req,res)=>{
    const {id} =req.params;
  
    const product = req.body;
    if(!mongoose.Types.ObjectId.isValid(id)){
      return res.status(404).json({success: false, message: "Invalid blog ID"});
    }


    try {
      const updatesBlog = await Blog.findByIdAndUpdate(id, product, {new:true});
      res.status(200).json({success:true, data: updatesBlog });
    } catch (error) {
      console.log("Error in updating a block",error.message);
      res.status(500).json({success:false, message: "Server Error"});    
    }
  
  };



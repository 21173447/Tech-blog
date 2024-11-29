import express from "express";
import mongoose from "mongoose";
import Blog from '../models/blog.model.js';
import { createBlog,deleteBlog,getBlogs,updateBlog } from "../controllers/blog.contraller.js";




const router = express.Router();

router.get("/",getBlogs); 
router.post("/",createBlog);
router.delete("/:id",deleteBlog );
router.put("/:id",updateBlog );
  
export default router;
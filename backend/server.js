import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import Blog from './models/blog.model.js';
import blog from "./models/blog.model.js";

import blogRoutes from './routes/blog.route.js'

const app = express();
dotenv.config();


// to be able to use this api you must this..it allows us to accept JSON data in the req.body  we call middleware
app.use(express.json());

app.use("/api/blogs",blogRoutes)
const PORT = process.env.PORT || 5000;

app.listen(PORT, async () => {
  try {
    await connectDB();
    console.log(`Server started at http://localhost:${PORT}`);
  } catch (error) {
    console.error("Failed to connect to DB", error);
    process.exit(1);
  }
});


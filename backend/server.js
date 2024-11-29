import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";



import blogRoutes from './routes/blog.route.js'
import userRoutes from "./routes/userRoutes.js"
import cookieParser from "cookie-parser";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";

dotenv.config();
const app = express();



// to be able to use this api you must this..it allows us to accept JSON data in the req.body  we call middleware
app.use(express.json());

app.use("/api/blogs",blogRoutes)
const PORT = process.env.PORT || 5000;
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/users", userRoutes);
app.use(notFound);
app.use(errorHandler);

app.get("/", (req, res) => res.send("Server is ready"));

app.listen(PORT, async () => {
  try {
    await connectDB();
    console.log(`Server started at http://localhost:${PORT}`);
  } catch (error) {
    console.error("Failed to connect to DB", error);
    process.exit(1);
  }
});


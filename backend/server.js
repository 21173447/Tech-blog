import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";

const app = express();
dotenv.config();

app.get("/", (req,res) => {
  res.send("YOUT ALL GOOD");
});

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


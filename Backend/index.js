//index.js
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import { Book } from "./models/bookmodel.js";
import booksRoute from "./routes/booksRoute.js";
import { PORT, mongoDBURL } from "./config.js";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

// Default route
app.get("/", (req, res) => {
  res.status(200).send("Welcome Anas");
});

// Books route
app.use("/books", booksRoute);

// Connect to MongoDB
mongoose
  .connect(mongoDBURL)
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch((error) => console.error("❌ MongoDB connection error:", error));

// ✅ Start the server locally only (not on Vercel)
if (process.env.NODE_ENV !== "production") {
  app.listen(PORT, () => {
    console.log(`🚀 Server running locally on port ${PORT}`);
  });
}

// ✅ Export the app for Vercel to handle
export default app;

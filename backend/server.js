import express from "express";
import { connectDB } from "./config/db.js";
import bookRoutes from "./routes/book.route.js";
import path from "path";

import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();
app.use(cors());

app.use(express.json());

const __dirname = path.dirname(new URL(import.meta.url).pathname);

app.use("/api/books", bookRoutes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/build")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
  });
}

app.listen(3500, () => {
  connectDB();
  console.log("Server started at http://localhost:3500");
});

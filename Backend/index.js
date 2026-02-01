import express from "express";
import dotenv from "dotenv";
import connectDb from "./config/connectDb.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import authRouter from "./routes/authRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use(cookieParser());

app.use(
  cors({
    origin: process.env.CLIENT_URL || "http://localhost:5173",
    credentials: true,
  })
);

app.use("/api/auth", authRouter);

app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
  connectDb();
});

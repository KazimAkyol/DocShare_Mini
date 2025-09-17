import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./configs/dbConnection";
import authRoutes from "./routes/authRoutes";
import documentRoutes from "./routes/documentRoutes";

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/documents", documentRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
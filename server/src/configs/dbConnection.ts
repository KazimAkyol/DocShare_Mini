import mongoose, { mongo } from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI || "mongodb://127.0.0.1:27017/docs_app");
        console.log("MongoDB connected");
    } catch (err) {
        console.log("MongoDB connection error:", err);
        process.exit(1);
    }
}

export default connectDB;
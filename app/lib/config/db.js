import mongoose from "mongoose";

const connectDB = async () => { 
  const MONGO_URI = process.env.MONGO_URI; 
  if (!MONGO_URI) {
    throw new Error("MongoDB URI is not defined in environment variables");
  }

  try {
    // Hapus opsi usang
    await mongoose.connect(MONGO_URI);
    console.log("Database connected successfully");
  } catch (error) {
    console.error("Database connection error:", error.message);
    throw new Error("Failed to connect to MongoDB");
  }
};

export default connectDB;

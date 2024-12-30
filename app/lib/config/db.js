import mongoose from "mongoose";

const connectDB = async () => {
  if (mongoose.connection.readyState >= 1) {
    console.log("MongoDB is already connected.");
    console.log("Connected to database:", mongoose.connection.name);
    return;
  }

  try {
    console.log("Connecting to MongoDB...");
    console.log("MongoDB URI:", process.env.MONGO_URI);

    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`MongoDB connected: ${conn.connection.host}`);
    console.log("Connected to database:", conn.connection.name);
  } catch (error) {
    console.error("MongoDB connection error:", error);
    throw new Error("MongoDB connection failed.");
  }
};

export default connectDB;

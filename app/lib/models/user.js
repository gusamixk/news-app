// app/lib/models/user.js
import mongoose from "mongoose";
import bcrypt from "bcryptjs";

// Define the user schema
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true, // Ensure the email is unique
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

// Hash the password before saving
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next(); // Skip if the password is not modified
  
  try {
    const salt = await bcrypt.genSalt(10); // Create a salt
    this.password = await bcrypt.hash(this.password, salt); // Hash the password
    next(); // Proceed to save the user
  } catch (error) {
    next(error); // Pass the error to the next middleware
  }
});

// Method to compare passwords
userSchema.methods.matchPassword = async function (password) {
  return await bcrypt.compare(password, this.password); // Compare the hashed password with the stored hash
};

// Create or retrieve the User model
const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;

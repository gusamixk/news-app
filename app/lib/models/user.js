import mongoose from "mongoose";

// Skema untuk User
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true, // Pastikan email unik
  },
  password: {
    type: String,
    required: true,
  },
}, { timestamps: true });

// Membuat model User
const User = mongoose.models.User || mongoose.model('User', userSchema);

export default User;


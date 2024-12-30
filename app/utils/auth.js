import jwt from "jsonwebtoken";

// Secret key untuk JWT
const JWT_SECRET = process.env.JWT_SECRET || "your_secret_key";

// Fungsi untuk membuat token
export function generateToken(user) {
  return jwt.sign(
    { id: user._id, email: user.email },
    JWT_SECRET,
    { expiresIn: "1h" } // Token valid selama 1 jam
  );
}

// Fungsi untuk memverifikasi token
export function verifyToken(token) {
  return jwt.verify(token, JWT_SECRET);
}

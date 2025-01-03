// app/api/protected.js
import { verifyToken } from "@/app/utils/jwt";
import connectDB from "@/app/lib/config/db";

export async function GET(req) {
  const token = req.headers.authorization?.split(" ")[1];  // "Bearer token"

  if (!token) {
    return new Response(
      JSON.stringify({ error: "No token provided" }),
      { status: 401 }
    );
  }

  try {
    // Verify token
    const decoded = verifyToken(token);

    if (!decoded) {
      return new Response(
        JSON.stringify({ error: "Invalid or expired token" }),
        { status: 401 }
      );
    }

    // Token is valid, return protected data
    await connectDB();
    return new Response(
      JSON.stringify({ message: "Protected data", user: decoded }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Token verification error:", error);
    return new Response(
      JSON.stringify({ error: "Server error" }),
      { status: 500 }
    );
  }
}

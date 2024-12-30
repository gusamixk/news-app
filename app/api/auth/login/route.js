import connectDB from "@/app/lib/config/db";
import User from "@/app/lib/models/user";
import { generateToken } from "@/app/utils/jwt";

export async function POST(req) {
  const { email, password } = await req.json();

  // Validasi input
  if (!email || !password) {
    return new Response(
      JSON.stringify({ error: "Please fill in all fields" }),
      { status: 400 }
    );
  }

  try {
    // Koneksi ke database
    await connectDB();

    // Cari user berdasarkan email
    const user = await User.findOne({ email });
    if (!user || user.password !== password) {
      return new Response(
        JSON.stringify({ error: "Invalid email or password" }),
        { status: 401 }
      );
    }

    // Buat token JWT
    const token = generateToken({ id: user._id, email: user.email }); 

    return new Response(
      JSON.stringify({
        message: "Login successful",
        user: { name: user.name, email: user.email },
        token,
      }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Login Error:", error);
    return new Response(
      JSON.stringify({ error: "Internal Server Error" }),
      { status: 500 }
    );
  }
}

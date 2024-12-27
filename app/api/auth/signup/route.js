import connectDB from "@/app/lib/config/db"; 
import User from "@/app/lib/models/user";

export async function POST(req) {
  const { name, email, password } = await req.json();

  // Validasi input
  if (!name || !email || !password) {
    return new Response(
      JSON.stringify({ error: "Please fill in all fields" }),
      { status: 400 }
    );
  }

  try {
    // Koneksi ke database
    await connectDB();

    // Cek apakah email sudah digunakan
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return new Response(
        JSON.stringify({ error: "User already exists" }),
        { status: 400 }
      );
    }

    // Simpan user ke database tanpa hashing password
    const newUser = await User.create({
      name,
      email,
      password, // Simpan password dalam plaintext
    });

    return new Response(
      JSON.stringify({
        message: "User created successfully",
        user: { name: newUser.name, email: newUser.email },
      }),
      { status: 201 }
    );
    
  } catch (error) {
    console.error("Signup Error:", error);
    return new Response(
      JSON.stringify({ error: "Internal Server Error" }),
      { status: 500 }
    );
  }
}

import { ConnectDB } from "@/app/lib/config/db"; // Koneksi MongoDB
import User from "@/app/lib/models/user"; // Model User
import bcrypt from "bcrypt";

export async function POST(req) {
  const { name, email, password } = await req.json();

  // Validasi input
  if (!name || !email || !password) {
    return new Response(
      JSON.stringify({ error: "Please fill in all fields" }),
      { status: 400 }
    );
  }

  // Cek format email
  const emailRegex = /\S+@\S+\.\S+/;
  if (!emailRegex.test(email)) {
    return new Response(
      JSON.stringify({ error: "Invalid email format" }),
      { status: 400 }
    );
  }

  try {
    // Connect to database
    await ConnectDB();

    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return new Response(
        JSON.stringify({ error: "User already exists" }),
        { status: 400 }
      );
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    // Respond with success
    return new Response(
      JSON.stringify({
        message: "User created successfully",
        user: { name: newUser.name, email: newUser.email }, // Only return essential user data
      }),
      { status: 201 }
    );
  } catch (error) {
    console.error("Signup error:", error);
    return new Response(
      JSON.stringify({ error: "Internal Server Error" }),
      { status: 500 }
    );
  }
}

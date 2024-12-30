import connectDB from "@/app/lib/config/db"; // Koneksi MongoDB
import Message from "@/app/lib/models/messages"; // Model pesan
import mongoose from "mongoose"; // Untuk validasi ObjectId

// API Endpoint untuk mendapatkan semua pesan
export async function GET() {
  try {
    // Koneksi ke database
    await connectDB();
    console.log("GET: Connected to MongoDB");

    // Ambil semua pesan dari database
    const messages = await Message.find({});
    console.log("Messages retrieved:", messages);

    // Respons sukses
    return new Response(
      JSON.stringify({ messages }),
      { status: 200 }
    );
  } catch (error) {
    console.error("GET: Error retrieving messages:", error);
    return new Response(
      JSON.stringify({ error: "Internal Server Error" }),
      { status: 500 }
    );
  }
}

// API Endpoint untuk mengirim pesan (POST)
export async function POST(req) {
  try {
    // Ambil data dari request body
    const { name, email, message } = await req.json();

    // Validasi input
    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: "Please fill in all fields" }),
        { status: 400 }
      );
    }

    // Koneksi ke database
    await connectDB();
    console.log("POST: Connected to MongoDB");

    // Simpan pesan baru ke database
    const newMessage = await Message.create({
      name,
      email,
      message,
      status: "new", // Status default untuk pesan baru
    });

    // Respons sukses
    return new Response(
      JSON.stringify({
        message: "Message successfully saved!",
        newMessage,
      }),
      { status: 201 }
    );
  } catch (error) {
    console.error("POST: Error saving message:", error);
    return new Response(
      JSON.stringify({ error: "Internal Server Error" }),
      { status: 500 }
    );
  }
}

// API Endpoint untuk menghapus pesan (DELETE)
export async function DELETE(req) {
  try {
    // Ambil ID dari URL
    const id = new URL(req.url).searchParams.get("id");

    // Validasi ID
    if (!id || !mongoose.Types.ObjectId.isValid(id)) {
      return new Response(
        JSON.stringify({ error: "Invalid ID" }),
        { status: 400 }
      );
    }

    // Koneksi ke database
    await connectDB();
    console.log("DELETE: Connected to MongoDB");

    // Hapus pesan berdasarkan ID
    const deletedMessage = await Message.findByIdAndDelete(id);

    // Cek apakah pesan ditemukan dan berhasil dihapus
    if (!deletedMessage) {
      return new Response(
        JSON.stringify({ error: "Message not found" }),
        { status: 404 }
      );
    }

    // Respons sukses
    return new Response(
      JSON.stringify({
        message: "Message successfully deleted!",
        deletedMessage,
      }),
      { status: 200 }
    );
  } catch (error) {
    console.error("DELETE: Error deleting message:", error);
    return new Response(
      JSON.stringify({ error: "Internal Server Error" }),
      { status: 500 }
    );
  }
}


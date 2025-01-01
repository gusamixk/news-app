// app/api/artikel/route.js

import connectDB from "../../lib/config/db"; // Koneksi MongoDB
import Article from "../../lib/models/artikel"; // Model artikel
import mongoose from "mongoose"; // Untuk validasi ObjectId

// API Endpoint untuk mendapatkan semua artikel
export async function GET() {
  try {
    // Koneksi ke database
    await connectDB();
    console.log("GET: Connected to MongoDB");

    // Ambil semua artikel dari database
    const articles = await Article.find({});
    console.log("Articles retrieved:", articles);

    // Respons sukses
    return new Response(
      JSON.stringify({ articles }),
      { status: 200 }
    );
  } catch (error) {
    console.error("GET: Error retrieving articles:", error);
    return new Response(
      JSON.stringify({ error: "Internal Server Error" }),
      { status: 500 }
    );
  }
}

// API Endpoint untuk mengirim artikel baru (POST)
export async function POST(req) {
  try {
    // Ambil data dari request body
    const { title, content, author } = await req.json();

    // Validasi input
    if (!title || !content || !author) {
      return new Response(
        JSON.stringify({ error: "Please fill in all fields" }),
        { status: 400 }
      );
    }

    // Koneksi ke database
    await connectDB();
    console.log("POST: Connected to MongoDB");

    // Simpan artikel baru ke database
    const newArticle = await Article.create({
      title,
      content,
      author,
      status: "draft", // Status default untuk artikel baru
    });

    // Respons sukses
    return new Response(
      JSON.stringify({
        message: "Artikel berhasil di-upload!",
        newArticle,
      }),
      { status: 201 }
    );
  } catch (error) {
    console.error("POST: Error saving article:", error);
    return new Response(
      JSON.stringify({ error: "Internal Server Error" }),
      { status: 500 }
    );
  }
}

// API Endpoint untuk menghapus artikel (DELETE)
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

    // Hapus artikel berdasarkan ID
    const deletedArticle = await Article.findByIdAndDelete(id);

    // Cek apakah artikel ditemukan dan berhasil dihapus
    if (!deletedArticle) {
      return new Response(
        JSON.stringify({ error: "Article not found" }),
        { status: 404 }
      );
    }

    // Respons sukses
    return new Response(
      JSON.stringify({
        message: "Artikel berhasil dihapus!",
        deletedArticle,
      }),
      { status: 200 }
    );
  } catch (error) {
    console.error("DELETE: Error deleting article:", error);
    return new Response(
      JSON.stringify({ error: "Internal Server Error" }),
      { status: 500 }
    );
  }
}

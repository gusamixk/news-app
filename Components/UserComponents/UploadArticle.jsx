'use client';

import { useState } from "react";

const UploadArticle = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [responseMessage, setResponseMessage] = useState("");

  // Link WhatsApp admin untuk menerima foto
  const adminWhatsappNumber = "62xxxxxxxxxx"; // Ganti dengan nomor WhatsApp admin
  const whatsappLink = `https://wa.me/${adminWhatsappNumber}?text=Halo%20Admin%2C%20saya%20ingin%20mengirimkan%20foto%20untuk%20artikel%20"${title}"`;

  // Fungsi untuk menangani pengiriman formulir
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Kirim data artikel ke API
    const res = await fetch("/api/artikel", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, content, author: authorName }), // Mengirim data artikel
    });

    const data = await res.json();

    // Tanggapan dari API
    if (res.ok) {
      setResponseMessage("Artikel berhasil di-upload!");
      setTitle(""); // Reset form fields setelah artikel di-upload
      setContent("");
      setAuthorName("");
    } else {
      setResponseMessage(`Gagal meng-upload artikel: ${data.message}`);
    }
  };

  return (
    <div className="py-3 px-5 md:px-12 lg:px-28">
      {/* Upload Artikel Section */}
      <div className="text-center my-4">
        <h1 className="text-5xl sm:text-7xl font-medium mt-4">Upload Artikel Anda</h1>
        <p className="mt-4 max-w-[740px] m-auto text-xs sm:text-base">
          Kirimkan artikel Anda di sini dengan mengisi formulir di bawah ini.
        </p>
      </div>

      {/* WhatsApp Link */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-700">Sebelum Anda meng-upload artikel:</h3>
        <p className="text-sm text-gray-600 mt-2">
          Kirimkan foto terkait artikel Anda ke admin melalui WhatsApp. 
          Klik link di bawah ini untuk mengirim foto ke admin:
        </p>
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block bg-blue-500 text-white py-2 px-4 rounded-md"
        >
          Kirim Foto ke Admin via WhatsApp
        </a>
      </div>

      {/* Contact Form */}
      <div className="max-w-4xl mx-auto">
        <form onSubmit={handleSubmit} className="bg-white shadow-lg p-8 rounded-lg">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col">
              <label htmlFor="title" className="text-sm font-medium text-gray-700">Judul Artikel</label>
              <input
                id="title"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:border-stone-700"
                placeholder="Judul artikel"
                required
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="content" className="text-sm font-medium text-gray-700">Konten Artikel</label>
              <textarea
                id="content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                rows="6"
                className="mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:border-stone-700"
                placeholder="Tulis artikel Anda di sini..."
                required
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="authorName" className="text-sm font-medium text-gray-700">Nama Penulis</label>
              <input
                id="authorName"
                type="text"
                value={authorName}
                onChange={(e) => setAuthorName(e.target.value)}
                className="mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:border-stone-700"
                placeholder="Nama penulis"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="mt-6 py-3 px-6 bg-stone-700 text-white font-medium rounded-md shadow-md hover:bg-stone-600"
          >
            Upload Artikel
          </button>
        </form>

        {responseMessage && <p className="mt-4 text-sm">{responseMessage}</p>}
      </div>
    </div>
  );
};

export default UploadArticle;

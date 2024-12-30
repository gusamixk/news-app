import { useState } from "react";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [responseMessage, setResponseMessage] = useState("");

  // Fungsi untuk menangani pengiriman formulir
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Kirim data ke API
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, message }), // Mengirim data formulir
    });

    const data = await res.json();

    // Tanggapan dari API
    if (res.ok) {
      setResponseMessage("Pesan berhasil dikirim!");
      setName(""); // Reset form fields setelah pesan dikirim
      setEmail("");
      setMessage("");
    } else {
      setResponseMessage(`Gagal mengirim pesan: ${data.message}`);
    }
  };

  return (
    <div className="py-3 px-5 md:px-12 lg:px-28">
      {/* Contact Us Section */}
      <div className="text-center my-4">
        <h1 className="text-5xl sm:text-7xl font-medium mt-4">Hubungi Kami</h1>
        <p className="mt-4 max-w-[740px] m-auto text-xs sm:text-base">
          Kami senang mendengar dari Anda! Isi formulir di bawah ini atau hubungi kami melalui email.
        </p>
      </div>

      {/* Contact Form */}
      <div className="max-w-4xl mx-auto">
        <form onSubmit={handleSubmit} className="bg-white shadow-lg p-8 rounded-lg">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col">
              <label htmlFor="name" className="text-sm font-medium text-gray-700">Nama</label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:border-stone-700"
                placeholder="Nama Anda"
                required
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="email" className="text-sm font-medium text-gray-700">Email</label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:border-stone-700"
                placeholder="Email Anda"
                required
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="message" className="text-sm font-medium text-gray-700">Pesan</label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows="6"
                className="mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:border-stone-700"
                placeholder="Tulis pesan Anda di sini..."
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="mt-6 py-3 px-6 bg-stone-700 text-white font-medium rounded-md shadow-md hover:bg-stone-600"
          >
            Kirim Pesan
          </button>
        </form>

        {responseMessage && <p className="mt-4 text-sm">{responseMessage}</p>}
      </div>
    </div>
  );
};

export default ContactUs;

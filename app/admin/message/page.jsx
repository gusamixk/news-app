'use client'; // Mark component as a client component

import { useState, useEffect } from 'react';

const AdminMessages = () => {
  const [messages, setMessages] = useState([]);
  const [status, setStatus] = useState('');

  useEffect(() => {
    // Ambil pesan dari API /api/contact
    const fetchMessages = async () => {
      try {
        const response = await fetch('/api/contact');
        const result = await response.json();

        if (response.ok) {
          setMessages(result.messages);
        } else {
          setStatus(result.message);
        }
      } catch (error) {
        setStatus('Gagal mengambil pesan');
      }
    };

    fetchMessages();
  }, []);

  // Fungsi untuk menghapus pesan
  const handleDelete = async (id) => {
    try {
      const response = await fetch(`/api/contact?id=${id}`, {
        method: 'DELETE',
      });

      const result = await response.json();
      
      if (response.ok) {
        // Menghapus pesan yang telah dihapus dari state
        setMessages((prevMessages) => prevMessages.filter((msg) => msg._id !== id));
        alert(result.message);  // Menampilkan pesan sukses
      } else {
        alert(result.error || "Gagal menghapus pesan!");
      }
    } catch (error) {
      console.error("Delete error:", error);
      alert("Gagal menghapus pesan!");
    }
  };

  return (
    <div className="max-w-4xl mx-auto mt-8">
      <h2 className="text-2xl font-semibold mb-4">Pesan yang Masuk</h2>
      {status && <p className="text-red-500">{status}</p>}
      <table className="min-w-full table-auto border-collapse">
        <thead>
          <tr>
            <th className="border-b p-2">Nama</th>
            <th className="border-b p-2">Email</th>
            <th className="border-b p-2">Pesan</th>
            <th className="border-b p-2">Status</th>
            <th className="border-b p-2">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {messages.map((msg) => (
            // Pastikan msg._id atau msg.id ada dan unik
            <tr key={msg._id || msg.id || msg.name}> 
              <td className="border-b p-2">{msg.name}</td>
              <td className="border-b p-2">{msg.email}</td>
              <td className="border-b p-2">{msg.message}</td>
              <td className="border-b p-2">{msg.status}</td>
              <td className="border-b p-2">
                <button 
                  onClick={() => handleDelete(msg._id)} 
                  className="text-red-500 hover:text-red-700"
                >
                  Hapus
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminMessages;

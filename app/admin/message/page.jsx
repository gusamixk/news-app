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
        alert(result.message); // Menampilkan pesan sukses
      } else {
        alert(result.error || 'Gagal menghapus pesan!');
      }
    } catch (error) {
      console.error('Delete error:', error);
      alert('Gagal menghapus pesan!');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-5xl">
        <h2 className="text-2xl font-bold mb-6">Pesan yang Masuk</h2>
        {status && <p className="text-red-500 mb-4">{status}</p>}
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300 rounded-lg">
            <thead className="bg-gray-100 text-gray-700 uppercase text-sm">
              <tr>
                <th className="py-3 px-6 text-left">Nama</th>
                <th className="py-3 px-6 text-left">Email</th>
                <th className="py-3 px-6 text-left">Pesan</th>
                <th className="py-3 px-6 text-left">Status</th>
                <th className="py-3 px-6 text-center">Aksi</th>
              </tr>
            </thead>
            <tbody className="text-gray-600 text-sm">
              {messages.length > 0 ? (
                messages.map((msg) => (
                  <tr
                    key={msg._id || msg.id || msg.name}
                    className="border-b border-gray-200 hover:bg-gray-50"
                  >
                    <td className="py-3 px-6">{msg.name}</td>
                    <td className="py-3 px-6">{msg.email}</td>
                    <td className="py-3 px-6">{msg.message}</td>
                    <td className="py-3 px-6">
                      <span
                        className={`py-1 px-3 rounded-full text-xs ${
                          msg.status === 'read'
                            ? 'bg-green-100 text-green-600'
                            : 'bg-yellow-100 text-yellow-600'
                        }`}
                      >
                        {msg.status || 'Unread'}
                      </span>
                    </td>
                    <td className="py-3 px-6 text-center">
                      <button
                        onClick={() => handleDelete(msg._id)}
                        className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-400 transition duration-200"
                      >
                        Hapus
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="py-6 text-center text-gray-500">
                    Tidak ada pesan masuk
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminMessages;

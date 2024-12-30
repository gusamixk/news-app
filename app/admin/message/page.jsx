// /app/admin/message/page.jsx

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
          </tr>
        </thead>
        <tbody>
          {messages.map((msg) => (
            <tr key={msg.id}>
              <td className="border-b p-2">{msg.name}</td>
              <td className="border-b p-2">{msg.email}</td>
              <td className="border-b p-2">{msg.message}</td>
              <td className="border-b p-2">{msg.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminMessages;

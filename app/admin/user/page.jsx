'use client'; // Mark component as a client component

import { useState, useEffect } from 'react';

const AdminMessages = () => {
  const [messages, setMessages] = useState([]);
  const [status, setStatus] = useState('');
  const [user, setUser] = useState(null); // State for storing the user data

  // Fetch user data and messages
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch user data
        const userResponse = await fetch('/api/auth/login', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('authToken')}`, // Assuming JWT is stored in localStorage
          },
        });

        if (!userResponse.ok) {
          throw new Error('Failed to fetch user data');
        }

        const userResult = await userResponse.json();
        setUser(userResult.user); // Save user data to state

        // Fetch messages only if user is found
        if (userResult.user) {
          const messagesResponse = await fetch('/api/login');
          const messagesResult = await messagesResponse.json();

          if (messagesResponse.ok) {
            setMessages(messagesResult.messages);
          } else {
            setStatus(messagesResult.message);
          }
        }

      } catch (error) {
        setStatus('Failed to fetch user or messages');
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  // Function to delete a message
  const handleDelete = async (id) => {
    try {
      const response = await fetch(`/api/messages?id=${id}`, {
        method: 'DELETE',
      });

      const result = await response.json();

      if (response.ok) {
        // Remove deleted message from state
        setMessages((prevMessages) => prevMessages.filter((msg) => msg._id !== id));
        alert(result.message);  // Show success message
      } else {
        alert(result.error || "Failed to delete message!");
      }
    } catch (error) {
      console.error("Delete error:", error);
      alert("Failed to delete message!");
    }
  };

  return (
    <div className="max-w-4xl mx-auto mt-8">
      <h2 className="text-2xl font-semibold mb-4">Pesan yang Masuk</h2>

      {status && <p className="text-red-500">{status}</p>}

      {user ? (
        <div className="mb-4">
          <p className="font-semibold">Logged in as: {user.name}</p>
          <p>Email: {user.email}</p>
        </div>
      ) : (
        <p className="text-gray-500">Loading user data...</p>
      )}

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

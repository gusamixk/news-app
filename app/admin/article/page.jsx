'use client'; // Ensure this is at the top of your file

import { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation'; // Use next/navigation if using Next.js 13+ routing

const AdminArticles = () => {
  const [articles, setArticles] = useState([]);
  const [status, setStatus] = useState('');
  const router = useRouter(); // Ensure this is within a client-side component

  // Hook to fetch articles when the component mounts
  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get('/api/artikel');
        setArticles(response.data.articles || []);
      } catch (error) {
        console.error('Error fetching articles:', error);
        setStatus('Failed to fetch articles');
      }
    };

    fetchArticles();
  }, []);

  // Function to delete an article
  const handleDelete = async (id) => {
    if (!id) {
      toast.error('Invalid article ID!');
      return;
    }

    try {
      const response = await axios.delete(`/api/artikel?id=${id}`);
      if (response.status === 200) {
        setArticles((prevArticles) => prevArticles.filter((article) => article._id !== id));
        toast.success('Article successfully deleted!');
      } else {
        toast.error('Failed to delete article!');
      }
    } catch (error) {
      console.error('Delete error:', error);
      toast.error('Failed to delete article!');
    }
  };

  // Function to navigate to the edit page
  const handleEdit = (id) => {
    if (!id) {
      toast.error('Invalid article ID!');
      return;
    }

    // Use Next.js Router to navigate
    router.push(`/admin/edit_article?id=${id}`);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-5xl">
        <h2 className="text-2xl font-bold mb-6">Article List</h2>
        {status && <p className="text-red-500 mb-4">{status}</p>}
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300 rounded-lg">
            <thead className="bg-gray-100 text-gray-700 uppercase text-sm">
              <tr>
                <th className="py-3 px-6 text-left">Article Title</th>
                <th className="py-3 px-6 text-left">Content</th>
                <th className="py-3 px-6 text-left">Author</th>
                <th className="py-3 px-6 text-left">Status</th>
                <th className="py-3 px-6 text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="text-gray-600 text-sm">
              {articles.length > 0 ? (
                articles.map((article) => (
                  <tr key={article._id} className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="py-3 px-6">{article.title}</td>
                    <td className="py-3 px-6">{article.content}</td>
                    <td className="py-3 px-6">{article.author}</td>
                    <td className="py-3 px-6">
                      <span
                        className={`py-1 px-3 rounded-full text-xs ${
                          article.status === 'approved'
                            ? 'bg-green-100 text-green-600'
                            : article.status === 'pending'
                            ? 'bg-yellow-100 text-yellow-600'
                            : 'bg-red-100 text-red-600'
                        }`}
                      >
                        {article.status}
                      </span>
                    </td>
                    <td className="py-3 px-6 text-center">
                      <button
                        onClick={() => handleEdit(article._id)}
                        className="bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-400 transition duration-200 mr-2"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(article._id)}
                        className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-400 transition duration-200"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="py-6 text-center text-gray-500">
                    No articles available
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

export default AdminArticles;

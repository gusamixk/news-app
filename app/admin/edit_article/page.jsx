'use client';

import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import axios from 'axios';
import { toast } from 'react-toastify';

const EditArticle = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const id = searchParams.get('id');

  const [article, setArticle] = useState({
    title: '',
    content: '',
    author: '',
    status: '',
  });

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await axios.get(`/api/artikel?id=${id}`);
        setArticle(response.data.articles[0]);
      } catch (error) {
        console.error('Error fetching article:', error);
        toast.error('Gagal mengambil artikel!');
      }
    };

    if (id) fetchArticle();
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setArticle((prevArticle) => ({ ...prevArticle, [name]: value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.put(`/api/artikel/${id}`, article);
      if (response.data.success) {
        router.replace('/admin/article');
      } else {
        toast.error(response.data.message || 'Gagal memperbarui artikel');
      }
    } catch (error) {
      toast.error(error.response?.data?.message || 'Gagal memperbarui artikel');
      console.error('Error:', error.response?.data);
    }
  };
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-2xl">
        <h2 className="text-2xl font-bold mb-6">Edit Artikel</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Judul Artikel</label>
            <input
              type="text"
              name="title"
              value={article.title}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Konten</label>
            <textarea
              name="content"
              value={article.content}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
              rows="4"
            ></textarea>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Penulis</label>
            <input
              type="text"
              name="author"
              value={article.author}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Status</label>
            <select
              name="status"
              value={article.status}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
            >
              <option value="approved">Approved</option>
              <option value="pending">Pending</option>
              <option value="rejected">Rejected</option>
            </select>
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-400 transition duration-200"
          >
            Simpan
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditArticle;

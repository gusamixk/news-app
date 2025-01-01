'use client';

import BlogTableItem from '@/Components/AdminComponents/BlogTableItem';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';

const Page = () => {
  const [blogs, setBlogs] = useState([]);
  const router = useRouter();

  // Fetch blogs
  const fetchBlogs = async () => {
    try {
      const response = await axios.get('/api/blog');
      setBlogs(response.data.blogs);
    } catch (error) {
      toast.error('Failed to load blogs');
    }
  };

  // Handle Edit
  const handleEdit = (id) => {
    router.push(`/admin/edit-blog?id=${id}`);
  };

  // Handle Delete
  const deleteBlog = async (id) => {
    if (window.confirm("Are you sure you want to delete this blog?")) {
      try {
        const response = await axios.delete(`/api/blog/${id}`);
        toast.success(response.data.msg);
        fetchBlogs(); // Refresh the blog list
      } catch (error) {
        toast.error('Failed to delete blog');
      }
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-bold mb-6">Pending Blogs</h1>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300 rounded-lg">
            <thead className="bg-gray-100 text-gray-700 uppercase text-sm leading-normal">
              <tr>
                <th scope="col" className="py-3 px-6 text-left">Author Name</th>
                <th scope="col" className="py-3 px-6 text-left">Blog Title</th>
                <th scope="col" className="py-3 px-6 text-left">Date</th>
                <th scope="col" className="py-3 px-6 text-center">Action</th>
              </tr>
            </thead>
            <tbody className="text-gray-600 text-sm">
              {blogs.length > 0 ? (
                blogs.map((item) => (
                  <BlogTableItem
                    key={item._id}
                    mongoId={item._id}
                    title={item.title}
                    author={item.author}
                    authorImg={item.authorImg}
                    date={item.date}
                    deleteBlog={deleteBlog}  // Pass delete function
                    onEdit={handleEdit}      // Pass edit function
                  />
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="py-6 text-center text-gray-500">No blogs found</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Page;

'use client';

import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import axios from 'axios';
import { toast } from 'react-toastify';

const EditBlog = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const id = searchParams.get('id');  // Ensure you're getting the ID from the URL

  const [blog, setBlog] = useState({
    author: '',
    title: '',      // Make sure title is included in the state
    description: '',    // Include content
    status: 'approved', // Default status to approved
  });

  // Fetch blog data on mount
  useEffect(() => {
    if (!id) return; // Return early if ID is not found

    const fetchBlog = async () => {
      try {
        const response = await axios.get(`/api/blog/${id}`);
        console.log('Fetched Blog:', response.data); // Log the response for debugging

        if (response.data.success) {
          setBlog(response.data.blog); // Populate the form with fetched blog data
        } else {
          toast.error(response.data.message || 'Failed to fetch blog');
        }
      } catch (error) {
        console.error('Error fetching blog:', error); // Log any errors
        toast.error('Failed to fetch blog');
      }
    };

    fetchBlog(); // Call the fetchBlog function
  }, [id]);

  // Handle form input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBlog((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission to update the blog
  const handleSubmit = async (e) => {
    e.preventDefault();  // Prevent default form submission

    try {
      const response = await axios.put(`/api/blog/${id}`, blog);
      console.log(response.data); // Log the response for debugging

      if (response.data.success) {
        toast.success('Blog updated successfully!');
        router.replace('/admin/blogList'); // Redirect after successful update
      } else {
        toast.error(response.data.message || 'Failed to update blog');
      }
    } catch (error) {
      console.error('Error during update:', error); // Log any errors during submission
      toast.error(error.response?.data?.message || 'Failed to update blog');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-2xl">
        <h2 className="text-2xl font-bold mb-6">Edit Blog</h2>
        <form onSubmit={handleSubmit}>
          {/* Title Input */}
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Title</label>
            <input
              type="text"
              name="title"
              value={blog.title}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>
          {/* Content Input */}
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Deskcription</label>
            <textarea
              name="description"
              value={blog.description}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
              rows="4"
            ></textarea>
          </div>
          {/* Author Input */}
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Author</label>
            <input
              type="text"
              name="author"
              value={blog.author}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>
          {/* Status Dropdown */}
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Status</label>
            <select
              name="status"
              value={blog.status}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
            >
              <option value="approved">Approved</option>
              <option value="pending">Pending</option>
              <option value="rejected">Rejected</option>
            </select>
          </div>
          {/* Submit Button */}
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-400 transition duration-200"
          >
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditBlog;

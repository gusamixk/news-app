import { assets } from '@/Assets/assets';
import Image from 'next/image';
import React from 'react';

const BlogTableItem = ({ authorImg, title, author, date, mongoId, description, deleteBlog, onEdit }) => {
  const BlogDate = new Date(date);

  return (
    <tr className="bg-white border-b">
    <th>
      <Image
        width={40}
        height={40}
        src={authorImg ? authorImg : assets.profile_icon} // Display author image or default if missing
        alt="Author"
        className="rounded-full"
      />
      <p>{author ? author : 'No author'}</p>
    </th>
    <td>{title ? title : 'No title'}</td>
    <td>{description ? description : 'No description available'}</td>
    <td>{BlogDate.toDateString()}</td>
    <td className="px-6 py-4 flex gap-2">
      {/* Edit button */}
      <button
        onClick={() => onEdit(mongoId)} // Function to edit blog
        className="px-3 py-1 text-white bg-blue-600 rounded hover:bg-blue-500"
      >
        Edit
      </button>
      {/* Delete button */}
      {deleteBlog && (
        <button
          onClick={() => deleteBlog(mongoId)} // Function to delete blog
          className="px-3 py-1 text-white bg-gray-600 rounded hover:bg-gray-500"
        >
          Delete
        </button>
      )}
    </td>
  </tr>
  
  );
};

export default BlogTableItem;

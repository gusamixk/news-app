import { assets } from '@/Assets/assets';
import Image from 'next/image';
import React from 'react';

const BlogTableItem = ({ authorImg, title, author, date, mongoId, deleteBlog, onEdit }) => {
  const BlogDate = new Date(date);

  return (
    <tr className="bg-white border-b">
      <th
        scope="row"
        className="items-center gap-3 hidden sm:flex px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
      >
        <Image
          width={40}
          height={40}
          src={authorImg ? authorImg : assets.profile_icon} // Menampilkan gambar penulis atau default jika tidak ada
          alt="Author"
          className="rounded-full"
        />
        <p>{author ? author : 'No author'}</p>
      </th>
      <td className="px-6 py-4">{title ? title : 'No title'}</td>
      <td className="px-6 py-4">{BlogDate.toDateString()}</td>
      <td className="px-6 py-4 flex gap-2">
        {/* Tombol Edit */}
        <button
          onClick={() => onEdit(mongoId)} // Fungsi untuk mengedit blog
          className="px-3 py-1 text-white bg-blue-600 rounded hover:bg-blue-500"
        >
          Edit
        </button>
        {/* Tombol Delete */}
        {deleteBlog && ( // Tombol Delete hanya muncul jika fungsi deleteBlog diteruskan sebagai prop
          <button
            onClick={() => deleteBlog(mongoId)} // Fungsi untuk menghapus blog
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

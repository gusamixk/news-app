import React from "react";
import { assets } from "@/Assets/assets";
import Image from "next/image";
import Link from "next/link";

const Sidebar = () => {
  return (
    <div className="flex flex-col bg-gray text-gray-800 min-h-screen shadow-lg">
      {/* Logo Section */}
      <div className="px-6 py-6 border-b border-gray-200 flex justify-center items-center">
        <Image src={assets.logo} width={150} alt="Logo" />
      </div>

      {/* Sidebar Links Section */}
      <div className="flex flex-col py-6 space-y-4 flex-grow">
        <div className="space-y-2">
          {/* Add Blog */}
          <Link
            href="/admin/addProduct"
            className="flex items-center gap-3 px-6 py-3 rounded-md hover:bg-gray-100 transition-colors duration-300"
          >
            <Image src={assets.add_icon} alt="Add Blog Icon" width={24} />
            <p className="text-base font-medium">Add Blog</p>
          </Link>

          {/* Blog List */}
          <Link
            href="/admin/blogList"
            className="flex items-center gap-3 px-6 py-3 rounded-md hover:bg-gray-100 transition-colors duration-300"
          >
            <Image src={assets.blog_icon} alt="Blog List Icon" width={24} />
            <p className="text-base font-medium">Blog List</p>
          </Link>

          {/* User */}
          <Link
            href="/admin/user"
            className="flex items-center gap-3 px-6 py-3 rounded-md hover:bg-gray-100 transition-colors duration-300"
          >
            <Image src={assets.blog_icon} alt="User Icon" width={24} />
            <p className="text-base font-medium">User</p>
          </Link>

          {/* Messages */}
          <Link
            href="/admin/message"
            className="flex items-center gap-3 px-6 py-3 rounded-md hover:bg-gray-100 transition-colors duration-300"
          >
            <Image src={assets.email_icon} alt="Messages Icon" width={24} />
            <p className="text-base font-medium">Messages</p>
          </Link>
          <Link
            href="/admin/article"
            className="flex items-center gap-3 px-6 py-3 rounded-md hover:bg-gray-100 transition-colors duration-300"
          >
            <Image src={assets.email_icon} alt="Messages Icon" width={24} />
            <p className="text-base font-medium">Artikel User</p>
          </Link>
        </div>
      </div>

      {/* Footer Section */}
      <div className="px-6 py-4 border-t border-gray-200 text-sm text-gray-500 text-center">
        © 2024 Your Company
      </div>
    </div>
  );
};

export default Sidebar;

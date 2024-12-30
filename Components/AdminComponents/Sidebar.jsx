import React from "react";
import { assets } from "@/Assets/assets";
import Image from "next/image";
import Link from "next/link";

const Sidebar = () => {
  return (
    <div className="flex flex-col bg-slate-100 min-h-screen shadow-lg">
      {/* Logo Section */}
      <div className="px-4 sm:px-14 py-6 border-b border-gray-300 flex justify-center items-center">
        <Image src={assets.logo} width={120} alt="Logo" />
      </div>

      {/* Sidebar Links Section */}
      <div className="flex flex-col w-28 sm:w-80 py-6 space-y-4 flex-grow">
        <div className="space-y-4">
          <Link
            href="/admin/addProduct"
            className="flex items-center gap-3 px-4 py-3 rounded-md hover:bg-gray-200 transition-colors duration-300 shadow-md border border-gray-300 text-gray-700 font-medium"
          >
            <Image src={assets.add_icon} alt="Add Blog Icon" width={28} />
            <p>Add Blog</p>
          </Link>

          <Link
            href="/admin/blogList"
            className="flex items-center gap-3 px-4 py-3 rounded-md hover:bg-gray-200 transition-colors duration-300 shadow-md border border-gray-300 text-gray-700 font-medium"
          >
            <Image src={assets.blog_icon} alt="Blog List Icon" width={28} />
            <p>Blog List</p>
          </Link>
          <Link
            href="/admin/user"
            className="flex items-center gap-3 px-4 py-3 rounded-md hover:bg-gray-200 transition-colors duration-300 shadow-md border border-gray-300 text-gray-700 font-medium"
          >
            <Image src={assets.email_icon} alt="Subscription Icon" width={28} />
            <p>User</p>
          </Link>

          <Link
            href="/admin/subscription"
            className="flex items-center gap-3 px-4 py-3 rounded-md hover:bg-gray-200 transition-colors duration-300 shadow-md border border-gray-300 text-gray-700 font-medium"
          >
            <Image src={assets.email_icon} alt="Subscription Icon" width={28} />
            <p>Subscription</p>
          </Link>
          <Link
            href="/admin/message"
            className="flex items-center gap-3 px-4 py-3 rounded-md hover:bg-gray-200 transition-colors duration-300 shadow-md border border-gray-300 text-gray-700 font-medium"
          >
            <Image src={assets.email_icon} alt="Subscription Icon" width={28} />
            <p>Messages</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

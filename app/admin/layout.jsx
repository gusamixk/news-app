import Sidebar from './../../Components/AdminComponents/Sidebar';
import { assets } from '@/Assets/assets';
import Image from 'next/image';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Layout({ children }) {
  return (
    <>
      <div className="flex min-h-screen bg-gray-100">
        {/* Toast Notification */}
        <ToastContainer theme="dark" />

        {/* Sidebar */}
        <div className="shadow-lg">
          <Sidebar />
        </div>

        {/* Main Content */}
        <div className="flex flex-col w-full">
          {/* Header */}
          <div className="flex items-center justify-between w-full py-4 px-6 sm:px-12 bg-white shadow-md">
            <h3 className="text-lg font-semibold text-gray-700">Admin Panel</h3>
            <Image src={assets.profile_icon} width={40} height={40} alt="Profile Icon" className="rounded-full" />
          </div>

          {/* Dynamic Children */}
          <div className="flex-1 p-6 sm:p-12 bg-gray-50">
            {children}
          </div>
        </div>
      </div>
    </>
  );
}

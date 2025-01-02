'use client';
import Sidebar from './../../Components/AdminComponents/Sidebar';
import { assets } from '@/Assets/assets';
import Image from 'next/image';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/navigation';

export default function Layout({ children }) {
  const router = useRouter();

  // Logout handler
  const handleLogout = () => {
    // You can also clear any auth tokens or session data here
    localStorage.removeItem('authToken');  // Example: clear the stored token
    router.push('/auth/login/');  // Redirect to login page
  };

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
            
            {/* Logout Button */}
            <button
              onClick={handleLogout}
              className="text-white bg-blue-500 hover:bg-red-600 px-4 py-2 rounded-md text-sm font-semibold"
            >
              Logout
            </button>
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

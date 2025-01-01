import React from 'react';

const Page = () => {
  return (
    <div className="flex flex-col justify-center items-center p-8">
      <div className="bg-white p-8 rounded shadow-lg w-full max-w-3xl">
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-4">
          Selamat Datang, Admin!
        </h1>
        <p className="text-gray-600 text-center mb-6">
          Berikan layanan terbaik untuk para Jurnalis di Indonesia dengan
          menyajikan berita aktual dan terpercaya.
        </p>
      </div>
    </div>
  );
};

export default Page;

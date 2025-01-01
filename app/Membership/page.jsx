"use client";

import Navbar from "@/components/Navbar"; // Path untuk Navbar
import Footer from "@/components/Footer"; // Path untuk Footer
import Image from "next/image";
import { products } from "../lib/product"; // Import list produk
import Checkout from "../subscribe/subscribe"; // Komponen checkout
import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

export default function Membership() {
  const searchParams = useSearchParams();
  const status = searchParams.get("status");

  useEffect(() => {
    // Tambahkan script Snap Midtrans
    const snapScript = "https://app.sandbox.midtrans.com/snap/snap.js";
    const clientKey = process.env.NEXT_PUBLIC_CLIENT;
    const script = document.createElement("script");
    script.src = snapScript;
    script.setAttribute("data-client-key", clientKey);
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  // Menangani status transaksi dari query parameter
  useEffect(() => {
    if (status === "success") {
      alert("Pembayaran berhasil! Terima kasih.");
    } else if (status === "pending") {
      alert("Pembayaran Anda sedang diproses.");
    } else if (status === "error") {
      alert("Pembayaran gagal. Silakan coba lagi.");
    }
  }, [status]);

  return (
    <div className="bg-gray-200 min-h-screen flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow max-w-6xl mx-auto sm:p-16">
      <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-indigo-600">Paket Berlangganan</h1>
          <p className="text-xl text-gray-700 mt-2">Blog Jurnalight - Solusi Informasi Terkini</p>
          <p className="text-md text-gray-500 mt-1">
            Pilih paket terbaik dan nikmati akses eksklusif ke berita premium kami.
          </p>
        </header>
        <div className="flex flex-wrap justify-center gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="w-64 border border-gray-200 rounded-lg bg-white shadow-md overflow-hidden"
            >
              <Image
                src={product.image}
                alt={product.name}
                width={256}
                height={256}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-medium text-gray-900">{product.name}</h3>
                <p className="mt-2 text-sm text-gray-700">Rp {product.price.toLocaleString()}</p>
                <p className="py-4 text-sm text-gray-700 text-justify">{product.description}</p>
                <Checkout product={product} />
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

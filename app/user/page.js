'use client';

import BlogList from "@/Components/BlogList";
import Footer from "@/Components/Footer";
import Header from "@/Components/Navbar";
import Navbar from "@/Components/Header";



export default function Home() {
  return (
    <div className="bg-gray-200">
      <Header />
      <Navbar/>
      <BlogList />
      <Footer />
    </div>
  );
}

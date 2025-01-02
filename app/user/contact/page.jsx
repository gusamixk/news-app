"use client"; 

import Footer from "@/Components/Footer";
import ContactUs from "@/Components/Contact"; 
import Header from "@/Components/UserComponents/Navbar";

export default function ContactPage() {
  return (
    <div className="bg-gray-200">
      <Header />
      <ContactUs />
      <Footer />
    </div>
  );
}

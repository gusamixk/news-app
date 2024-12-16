import { assets } from '@/Assets/assets'
import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-stone-800 text-white">
      <div className="flex flex-col sm:flex-row justify-around items-center py-8 gap-6 sm:gap-0">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Image src={assets.logo} alt="Logo" width={200} className="hover:scale-105 transition-transform duration-300" />
        </div>

        {/* Subscribe Form */}
        <form
          className="flex justify-between items-center max-w-[500px] border border-white shadow-lg hover:shadow-[-7px_7px_0px_#44403c] transition-shadow duration-300"
          action=""
        >
          <input
            type="email"
            placeholder="Enter Your Email"
            className="pl-4 py-2 outline-none text-black flex-grow"
          />
          <button
            type="submit"
            className="border-l border-white py-2 px-4 sm:px-8 bg-white text-black font-semibold hover:bg-red-600 hover:text-white transition-colors duration-300"
          >
            Subscribe
          </button>
        </form>

        {/* Copyright & Social Icons */}
        <div className="text-center">
          <p className="text-sm">&copy; 2024 All Rights Reserved</p>
          <div className="flex justify-center gap-4 mt-3">
            {/* Social Icons */}
            <div className="flex items-center gap-4">
              <a href="#" aria-label="Twitter">
                <Image src={assets.twitter_icon} alt="Twitter" width={40} height={40} className="hover:scale-110 transition-transform duration-300" />
              </a>
              <a href="#" aria-label="Facebook">
                <Image src={assets.facebook_icon} alt="Facebook" width={40} height={40} className="hover:scale-110 transition-transform duration-300" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

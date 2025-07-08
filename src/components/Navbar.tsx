'use client';

import React from 'react';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="fixed top-0 z-50 w-full bg-white/90 backdrop-blur-md shadow-md px-8 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image
            src="/images/navbar_logo.png"
            alt="STEMzLearning Logo"
            width={160}
            height={40}
            priority
          />
        </div>

        {/* Navigation Links */}
        <ul className="hidden md:flex gap-8 text-gray-800 font-medium">
          <li className="cursor-pointer hover:text-green-700">Home</li>
          <li className="cursor-pointer hover:text-green-700">About Us</li>
          <li className="cursor-pointer hover:text-green-700">Services</li>
          <li className="cursor-pointer hover:text-green-700">Media</li>
        </ul>

        {/* Dashboard Button */}
        <button className="hidden md:block bg-green-700 text-white px-5 py-2 rounded-lg shadow hover:bg-green-800 transition">
          Dashboard
        </button>
      </div>
    </nav>
  );
}

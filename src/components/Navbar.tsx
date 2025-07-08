'use client';

import React from 'react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 z-50 w-full bg-white/90 backdrop-blur-md shadow-md px-8 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Placeholder Logo */}
        <div className="text-2xl font-extrabold text-green-700">
          STEM<span className="text-gray-700">Z</span>LEARNING
        </div>

        {/* Navigation Links */}
        <ul className="hidden md:flex gap-8 text-gray-800 font-medium">
          <li className="cursor-pointer hover:text-green-700">Home</li>
          <li className="cursor-pointer hover:text-green-700">About Us</li>
          <li className="cursor-pointer hover:text-green-700">Services ⌄</li>
          <li className="cursor-pointer hover:text-green-700">Media ⌄</li>
        </ul>

        {/* Dashboard Button */}
        <button className="hidden md:block bg-green-700 text-white px-5 py-2 rounded-lg shadow hover:bg-green-800 transition">
          Dashboard
        </button>
      </div>
    </nav>
  );
}

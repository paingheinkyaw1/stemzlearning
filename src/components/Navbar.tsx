'use client';

import Image from 'next/image';
import React from 'react';
import { UserCircle } from 'lucide-react'; // Optional icon, or use another

export default function Navbar() {
  return (
    <nav className="fixed top-0 z-50 w-full bg-white/90 backdrop-blur-md shadow-md px-8 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Image
            src="/images/navbar_logo.png"
            alt="STEMzLearning Logo"
            width={180}
            height={40}
            priority
          />
        </div>

        {/* Right section: nav links + button */}
        <div className="flex items-center gap-6">
          <ul className="hidden md:flex gap-6 text-gray-800 font-medium">
            <li className="cursor-pointer hover:text-green-700">Home</li>
            <li className="cursor-pointer hover:text-green-700">About Us</li>
            <li className="cursor-pointer hover:text-green-700 flex items-center gap-1">
              Services <span className="text-sm">▼</span>
            </li>
            <li className="cursor-pointer hover:text-green-700 flex items-center gap-1">
              Media <span className="text-sm">▼</span>
            </li>
          </ul>

          <button className="hidden md:flex items-center gap-2 bg-green-700 text-white px-5 py-2 rounded-md shadow hover:bg-green-800 transition">
            <UserCircle size={18} /> Dashboard
          </button>
        </div>
      </div>
    </nav>
  );
}

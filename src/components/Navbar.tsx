'use client';

import Image from 'next/image';
import React from 'react';
import { ChevronDown, UserCircle } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 z-50 w-full bg-white/90 backdrop-blur-md shadow-md px-8 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Image
            src="/images/navbar_logo.png"
            alt="STEMzLearning Logo"
            width={300}
            height={100}
            priority
          />
        </div>

        {/* Right section: nav links + button */}
        <div className="flex items-center gap-10">
          <ul className="font-[--font-poppins] hidden md:flex gap-10 text-gray-800 font-normal">
            <li className="cursor-pointer hover:text-green-700">Home</li>
            <li className="cursor-pointer hover:text-green-700">About Us</li>
            <li className="cursor-pointer hover:text-green-700 flex items-center gap-1">
              Services <ChevronDown size={16} strokeWidth={2} />
            </li>
            <li className="cursor-pointer hover:text-green-700 flex items-center gap-1">
              Media <ChevronDown size={16} strokeWidth={2} />
            </li>
          </ul>

          <button className="font-[--font-poppins] hidden md:flex items-center gap-2 bg-green-700 text-white px-5 py-2 rounded-md shadow hover:bg-green-800 transition font-normal">
            <UserCircle size={18} /> Dashboard
          </button>
        </div>
      </div>
    </nav>
  );
}

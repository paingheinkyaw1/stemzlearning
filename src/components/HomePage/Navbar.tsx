'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { ChevronDown, UserCircle } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 z-50 w-full bg-white/80 backdrop-blur-md shadow-md px-8 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/">
            <Image
              src="/images/navbar_logo.png"
              alt="STEMzLearning Logo"
              width={300}
              height={100}
              priority
              className="cursor-pointer"
            />
          </Link>
        </div>

        {/* Right section: nav links + button */}
        <div className="flex items-center gap-10">
          <ul className="font-[--font-poppins] hidden md:flex gap-13 text-gray-800 font-normal">
            <li>
              <Link href="/" className="hover:text-green-700">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-green-700">
                About Us
              </Link>
            </li>
            <li className="cursor-pointer hover:text-green-700 flex items-center gap-1">
              Services <ChevronDown size={16} strokeWidth={2} />
            </li>
            <li className="cursor-pointer hover:text-green-700 flex items-center gap-1">
              Media <ChevronDown size={16} strokeWidth={2} />
            </li>
          </ul>

          <button
            style={{ backgroundColor: '#357717' }}
            className="font-[--font-poppins] hidden md:flex items-center gap-2 text-white px-5 py-2 rounded-md shadow hover:brightness-110 transition font-normal"
          >
            <UserCircle size={18} /> Dashboard
          </button>
        </div>
      </div>
    </nav>
  );
}

'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

export default function HomeFooter() {
  return (
    <footer className="bg-[#3A8610] py-30">
      <div className="w-[1240px] mx-auto px-4 flex flex-col md:flex-row justify-between items-start font-[--font-poppins] text-white text-sm">
        
        {/* Left Column: Logo & Contact */}
        <div className="flex flex-col gap-3 -mt-6">
          <Image
            src="/images/HomePage/footerlogo.png"
            alt="STEMzLearning Logo"
            width={300}
            height={40}
          />
          <div className="px-9">
            <p>+1 999 888-76-54</p>
            <p>hello@designcompany.com</p>
          </div>
        </div>

        {/* Services */}
        <div className="flex flex-col gap-2 -ml-30">
          <h4 className="font-semibold text-base">Services</h4>
          <Link href="#"><p>For students</p></Link>
          <Link href="#"><p>For teachers</p></Link>
        </div>

        {/* About Us */}
        <div className="flex flex-col gap-2">
          <h4 className="font-semibold text-base">About Us</h4>
          <Link href="#"><p>Our Story</p></Link>
          <Link href="#"><p>Our Team</p></Link>
          <Link href="#"><p>Careers</p></Link>
        </div>

        {/* Media */}
        <div className="flex flex-col gap-2">
          <h4 className="font-semibold text-base">Media</h4>
          <Link href="#"><p>YouTube</p></Link>
          <Link href="#"><p>Substack</p></Link>
          <Link href="#"><p>Podcasts</p></Link>
        </div>

        {/* Social + Address */}
        <div className="flex flex-col items-end gap-3 text-right">
        <div className="flex gap-3">
            <Link href="#">
            <div className="w-10 h-10 bg-[#F5BA00] rounded-full flex items-center justify-center text-white text-lg">
                <FaFacebookF />
            </div>
            </Link>
            <Link href="#">
            <div className="w-10 h-10 bg-[#F5BA00] rounded-full flex items-center justify-center text-white text-lg">
                <FaTwitter />
            </div>
            </Link>
            <Link href="#">
            <div className="w-10 h-10 bg-[#F5BA00] rounded-full flex items-center justify-center text-white text-lg">
                <FaInstagram />
            </div>
            </Link>
        </div>
        <p className="leading-tight">
            2972 Westheimer Rd. Santa Ana<br />
            Illinois 85486
        </p>
        <p>From 10 a.m. to 6 p.m.<br /><span className="text-xs">All days</span></p>
        </div>

      </div>
    </footer>
  );
}

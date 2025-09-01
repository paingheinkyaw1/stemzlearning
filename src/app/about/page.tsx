'use client';

import React from 'react';
import HomeFooter from '@/components/HomePage/HomeFooter';
import Navbar from '@/components/HomePage/Navbar';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen flex flex-col">
      <Navbar/>
      
      
      <HomeFooter />
    </div>
  );
}

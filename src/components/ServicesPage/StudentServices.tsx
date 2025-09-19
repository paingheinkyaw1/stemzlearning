'use client';

import Image from 'next/image';
import React from 'react';

export default function StudentServices() {
  

  return (
    <section className="w-full">
      <div className="mx-auto px-4 md:px-6 py-12 pt-40">
        {/* Title */}
        <h2 className="text-[32px] leading-[1] font-bold [font-family:var(--font-nunito)] text-[#4E4E4E] text-center">
          Student Services
        </h2>

        {/* Body */}
        <div className="mx-auto mt-4 w-[826px] h-[48px] max-w-full">
          <p className="text-[16px] leading-[1] font-[var(--font-poppins)] text-black text-center">
            Empowering learners with flexible, engaging STEM education
          </p>
        </div>

      </div>
    </section>
  );
}

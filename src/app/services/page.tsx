'use client';

import React from 'react';
import Navbar from '@/components/HomePage/Navbar';
import HomeFooter from '@/components/HomePage/HomeFooter';
import Image from 'next/image';
import HolisticServices from '@/components/ServicesPage/HolisticServices';
import StudentServices from '@/components/ServicesPage/StudentServices';


export default function ServicesPage() {
  return (
    <div className="bg-white min-h-screen flex flex-col">
      <Navbar />

      <main className="pt-16 md:pt-50 flex-1">
        {/* HERO */}
        <section className="relative">
          {/* Decorations */}

          <Image
            src="/images/ServicesPage/pieborder.png"      
            alt=""
            width={150}
            height={200}
            className="pointer-events-none select-none hidden md:block absolute left-1 top-2"
          />

          <Image
            src="/images/ServicesPage/pie.png"      
            alt=""
            width={150}
            height={150}
            className="pointer-events-none select-none hidden md:block absolute -left-1"
          />

          <Image
            src="/images/ServicesPage/starborder.png"     
            alt=""
            width={105}
            height={150}
            className="pointer-events-none select-none hidden md:block absolute -right-1 top-30"
          />

          <Image
            src="/images/ServicesPage/star.png"     
            alt=""
            width={100}
            height={150}
            className="pointer-events-none select-none hidden md:block absolute -right-1 top-28"
          />



          <div className="relative max-w-[1074px] mx-auto px-4 md:px-6">
            <div
              className="grid pr-10"
              style={{ gridTemplateColumns: '539.46px 434.55px', columnGap: '60px', height: 400 }}
            >
              {/* Video */}
              <div className="flex items-center">
                <video
                  src="/images/ServicesPage/services.mp4" 
                  className="w-[539.46px] h-[400px] rounded-xl object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              </div>

              {/* Text block */}
              <div className="flex flex-col justify-center gap-8" style={{ width: 434.55 }}>
                <p className="text-[20px] leading-[1] font-[var(--font-poppins)] text-[#1f2937]">
                  OUR SERVICES
                </p>

                <h1 className="text-[48px] leading-[1] font-semibold [font-family:var(--font-nunito)] text-black">
                  Complex concepts
                  <br /> made easy
                </h1>

                <p className="text-[20px] leading-[1] font-[var(--font-poppins)] text-[#1f2937]">
                  We provide services for both students and teachers to make learning more
                  palatable, intuitive and engaging.
                </p>

                {/* Buttons */}
                <div className="flex items-center gap-5">
                  <button
                    className="w-[203px] h-[54px] rounded-[12px] bg-[#F5BA00] text-white font-medium shadow-[0_4px_4px_rgba(0,0,0,0.15)] px-6 py-3"
                    type="button"
                  >
                    Join our waitlist
                  </button>

                  <button
                    className="w-[212px] h-[54px] rounded-[12px] border-2 border-[#357717] bg-white/75 backdrop-blur-sm shadow-[0_4px_4px_rgba(0,0,0,0.15)] px-6 py-[10px]"
                    type="button"
                  >
                    Request Sample
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <HolisticServices />
      
      <Image
            src="/images/ServicesPage/ourmission.png"      
            alt=""
            width={2000}
            height={300}
            className="mt-40"
          />

      <StudentServices />
      <HomeFooter />
    </div>
  );
}

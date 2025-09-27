'use client';

import React from 'react';
import Navbar from '@/components/HomePage/Navbar';
import HomeFooter from '@/components/HomePage/HomeFooter';
import Image from 'next/image';
import OnlinePresence from '@/components/MediaPage/OnlinePresence';


export default function MediaPage() {
  return (
    <div className="bg-white min-h-screen flex flex-col">
      <Navbar />

      <main className="pt-16 md:pt-20 flex-1">
        {/* HERO */}
        <section className="relative pt-30">
          {/* Decorations */}
          <div className="pointer-events-none select-none hidden md:block absolute -left-1 top-80">
            <Image src="/images/MediaPage/star.png" alt="" width={150} height={150} />
          </div>
          <div className="pointer-events-none select-none hidden md:block absolute -right-1 top-16">
            <Image src="/images/MediaPage/spiral.png" alt="" width={150} height={150} />
          </div>

          <div className="relative max-w-[1074px] mx-auto px-4 md:px-6">
            {/* 1074w x 409.774h, gap 60 */}
            <div
              className="grid pl-10"
              style={{
                gridTemplateColumns: '434.9453125px 519.95703125px',
                columnGap: '60px',
                height: '409.77423095703125px',
              }}
            >
              {/* Text column (left) */}
              <div
                className="flex flex-col justify-center gap-8"
                style={{ width: '434.9453125px' }}
              >
                <p className="text-[20px] leading-[1] font-[var(--font-poppins)] text-[#1f2937]">
                  WHAT ARE WE UP TO
                </p>

                <h1 className="text-[48px] leading-[1] font-semibold [font-family:var(--font-nunito)] text-black">
                  Media
                </h1>

                {/* Text body constrained to 434.9453 × 90 */}
                <div style={{ width: '434.9453125px', height: '90px' }}>
                  <p className="text-[20px] leading-[1] font-[var(--font-poppins)] text-[#1f2937]">
                    Transforming how STEM subjects are taught with interactive lessons and
                    powerful analytics
                  </p>
                </div>
              </div>

              {/* Video (right) 519.957 × 409.774 */}
              <div className="flex items-center">
                <video
                  src="/images/MediaPage/media.mp4"
                  className="rounded-xl object-cover"
                  style={{ width: '519.95703125px', height: '409.77423095703125px' }}
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <OnlinePresence />
      <HomeFooter />
    </div>
  );
}

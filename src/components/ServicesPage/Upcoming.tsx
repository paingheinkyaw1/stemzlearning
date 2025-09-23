'use client';

import Image from 'next/image';
import React from 'react';

export default function Upcoming() {
  const items = [
    {
      title: 'Student Tracking',
      body:
        'Real-time analytics to monitor student progress, identify learning gaps, and celebrate achievements',
      video: '/images/ServicesPage/upcomingvideo1.mp4',
    },
    {
      title: 'Student Tracking',
      body:
        'Real-time analytics to monitor student progress, identify learning gaps, and celebrate achievements',
      video: '/images/ServicesPage/upcomingvideo2.mp4',
    },
    {
      title: 'Student Tracking',
      body:
        'Real-time analytics to monitor student progress, identify learning gaps, and celebrate achievements',
      video: '/images/ServicesPage/upcomingvideo3.mp4',
    },
  ];

  return (
    <section className="relative w-full isolate overflow-hidden pt-30">
      {/* Full background behind everything */}
      <Image
        src="/images/ServicesPage/upcomingbackground.png"
        alt=""
        fill
        className="object-cover z-0 pointer-events-none select-none opacity-2 pt-30"
        priority={false}
      />

      <div className="relative z-10 max-w-[1074px] mx-auto px-4 md:px-6 py-16">
        {/* Title */}
        <h2 className="text-[32px] leading-[1] font-bold [font-family:var(--font-nunito)] text-[#4E4E4E] text-center">
          Upcoming Features and Services
        </h2>

        {/* Body copy */}
        <p className="mt-4 text-center text-[18px] md:text-[20px] font-[var(--font-poppins)] text-black max-w-[980px] mx-auto">
          At Stemz Learning, we are continuously innovating to enhance the teaching and
          learning experience—exploring new features and services that support engagement,
          accessibility, and meaningful growth for both educators and students.
        </p>

        {/* Videos + text: width 1087, height 325.812..., gap 50px */}
        <div
          className="mx-auto mt-12 grid justify-items-center"
          style={{
            width: '1087px',
            height: '325.81243896484375px',
            maxWidth: '100%',
            gridTemplateColumns: 'repeat(3, 329px)',
            gap: '50px',
          }}
        >
          {items.map((it) => (
            <div key={it.video} className="w-[329px] h-full flex flex-col">
              {/* Stacked card / offset outline effect */}
              <div className="relative w-full h-[200px]">
                {/* behind outline */}
                <div
                  className="
                    absolute -left-3 top-3 w-full h-full
                    rounded-[18px] border border-black
                    bg-white/0 pointer-events-none
                  "
                  aria-hidden
                />
                {/* front card */}
                <div className="absolute inset-0 rounded-[14px] overflow-hidden border border-black bg-white shadow-[0_10px_30px_rgba(0,0,0,0.10)]">
                  <video
                    src={it.video}
                    className="w-full h-full object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                  />
                </div>
              </div>

              {/* Text under video */}
              <div className="mt-10">
                <h3 className="w-[330px] h-[30px] text-[#357717] text-[20px] leading-[1] font-semibold font-[var(--font-poppins)]">
                  {it.title}
                </h3>
                <p className="mt-2 w-[330px] h-[72px] text-[16px] leading-[1] font-[var(--font-poppins)] text-black">
                  {it.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

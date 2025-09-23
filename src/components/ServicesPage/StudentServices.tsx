'use client';

import Image from 'next/image';
import React from 'react';

export default function StudentServices() {
  const cards = [
    {
      title: 'Online Courses',
      body:
        'Live, interactive sessions with expert instructors covering all STEM subjects',
      video: '/images/ServicesPage/student1.mp4',
    },
    {
      title: 'Self-Paced Courses',
      body:
        'Learn at your own speed with personalized learning paths and adaptive content',
      video: '/images/ServicesPage/student2.mp4',
    },
    {
      title: 'Course Box',
      body:
        'Physical STEM kits delivered to your door with hands-on experiments and materials',
      video: '/images/ServicesPage/student3.mp4',
    },
  ];

  return (
    <section className="relative w-full pt-25">
      {/* background hash image */}
      <Image
        src="/images/ServicesPage/studenthash.png"
        alt=""
        width={150}
        height={220}
        className="pointer-events-none select-none hidden md:block absolute top-10 opacity-90"
        priority={false}
      />

      <div className="mx-auto px-4 md:px-6 py-16">
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

        {/* Cards frames */}
        <div
          className="mx-auto mt-16 grid justify-items-center"
          style={{ width: '1087px', maxWidth: '100%', gridTemplateColumns: 'repeat(3, 329px)', gap: '50px' }}
        >
          {cards.map((c) => (
            <div
              key={c.title}
              className="w-[329px] h-[382px] rounded-[16px] border border-black/20 bg-white pt-7 pr-8 pb-7 pl-8 shadow-[0_10px_30px_rgba(0,0,0,0.08)]"
            >
              {/* Title */}
              <h3 className="w-[265px] h-[30px] text-[#357717] text-[20px] leading-[1] font-semibold font-[var(--font-poppins)]">
                {c.title}
              </h3>

              {/* Body text */}
              <p className="mt-3 w-[265px] h-[72px] text-[16px] leading-[1] font-[var(--font-poppins)] text-black">
                {c.body}
              </p>

              {/* Video */}
              <div className="mt-6 w-full h-[190px] rounded-[12px] overflow-hidden border border-black/10">
                <video
                  src={c.video}
                  className="w-full h-full object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

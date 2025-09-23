'use client';

import Image from 'next/image';
import React from 'react';

export default function TeacherServices() {
  const cards = [
    {
      title: 'Student Tracking',
      body:
        'Real-time analytics to monitor student progress, identify learning gaps, and celebrate achievements',
      video: '/images/ServicesPage/teacherservices1.mp4',
    },
    {
      title: 'Teaching Guidance',
      body:
        'Intelligent lesson planning, curriculum alignment, and teaching recommendations based on student needs',
      video: '/images/ServicesPage/teacherservices2.mp4',
    },
  ];

  return (
    <section className="relative w-full pt-20">
      {/* decorative background on the left */}
      <Image
        src="/images/ServicesPage/teacherservices.png"
        alt=""
        width={150}
        height={220}
        className="pointer-events-none select-none hidden md:block absolute top-15"
        priority={false}
      />

      <div className="mx-auto px-4 md:px-6 py-16">
        {/* Title */}
        <h2 className="text-[32px] leading-[1] font-bold [font-family:var(--font-nunito)] text-[#4E4E4E] text-center">
          Teacher Services
        </h2>

        {/* Body */}
        <div className="mx-auto mt-4 w-[826px] h-[48px] max-w-full">
          <p className="text-[16px] leading-[1] font-[var(--font-poppins)] text-black text-center">
            Replacing manual teaching, tracking, and management methods for teachers
          </p>
        </div>

        {/* Cards frame */ }
        <div
          className="mx-auto mt-16 grid justify-items-center"
          style={{
            width: '1087px',
            maxWidth: '100%',
            gridTemplateColumns: 'repeat(2, 518.5px)',
            gap: '50px',
          }}
        >
          {cards.map((c) => (
            <div
              key={c.title}
              className="w-[518.5px] h-[382px] rounded-[16px] border border-black/20 bg-white pt-7 pr-8 pb-7 pl-8 shadow-[0_10px_30px_rgba(0,0,0,0.08)]"
            >
              {/* Title */}
              <h3 className="text-[#357717] text-[20px] leading-[1] font-semibold font-[var(--font-poppins)]">
                {c.title}
              </h3>

              {/* Body text */}
              <p className="mt-3 w-[454.5px] h-[72px] text-[16px] leading-[1] font-[var(--font-poppins)] text-black">
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

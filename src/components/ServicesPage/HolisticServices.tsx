'use client';

import Image from 'next/image';
import React from 'react';

export default function HolisticServices() {
  const left = [
    '/images/ServicesPage/Left1.png',
    '/images/ServicesPage/Left2.png',
    '/images/ServicesPage/Left3.png',
    '/images/ServicesPage/Left4.png',
  ];
  const right = [
    '/images/ServicesPage/Right1.png',
    '/images/ServicesPage/Right2.png',
    '/images/ServicesPage/Right3.png',
    '/images/ServicesPage/Right4.png',
  ];

  // Horizontal nudges in pixels (match array lengths)
  const leftDx  = [ -22,  100, -4,  70 ];
  const rightDx = [  22, -100,  -70,  -2 ];

  return (
    <section className="w-full">
      <div className="mx-auto px-4 md:px-6 py-12 pt-40">
        {/* Title */}
        <h2 className="text-[32px] leading-[1] font-bold [font-family:var(--font-nunito)] text-[#4E4E4E] text-center">
          Holistic Services for All
        </h2>

        {/* Body */}
        <div className="mx-auto mt-4 w-[826px] h-[48px] max-w-full">
          <p className="text-[16px] leading-[1] font-[var(--font-poppins)] text-black text-center">
            STEMz Learning combines comprehensive student engagement with powerful teacher tools for a
            complete STEM education ecosystem.
          </p>
        </div>

        {/* Frame */}
        <div
          className="mx-auto mt-10 max-w-full grid items-center justify-items-center"
          style={{ gridTemplateColumns: '130px auto 130px', columnGap: '32px' }}
        >
          {/* Left stack (horizontal nudge per item) */}
          <div className="flex flex-col items-end gap-6">
            {left.map((src, i) => (
              <div key={src} style={{ transform: `translateX(${leftDx[i] ?? 0}px)` }}>
                <Image
                  src={src}
                  alt={`Left item ${i + 1}`}
                  width={130}
                  height={130}
                  className="w-[130px] h-auto object-contain"
                />
              </div>
            ))}
          </div>

          {/* Center tree  */}
          <div className="flex items-center justify-center">
            <Image
              src="/images/ServicesPage/tree.png"
              alt="Service branches"
              width={1000}
              height={850}
              className="max-h-full object-contain"
              priority
            />
          </div>

          {/* Right stack (horizontal nudge per item) */}
          <div className="flex flex-col items-start gap-6">
            {right.map((src, i) => (
              <div key={src} style={{ transform: `translateX(${rightDx[i] ?? 0}px)` }}>
                <Image
                  src={src}
                  alt={`Right item ${i + 1}`}
                  width={130}
                  height={130}
                  className="w-[130px] h-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

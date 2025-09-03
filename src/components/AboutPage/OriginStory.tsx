'use client';

import Image from 'next/image';
import React from 'react';

export default function OriginStory() {
  return (
    <section className="w-full">
      <div className="max-w-[1074px] mx-auto rounded-[12px] border border-black/10 pt-9 px-16 pb-0 bg-white overflow-hidden">
        <div className="pb-9">
          {/* Title */}
          <div className="flex justify-center">
            <h3 className="text-2xl md:text-[28px] leading-tight font-semibold text-zinc-800 text-center w-[247px]">
              Our Origin Story
            </h3>
          </div>

          {/* Paragraph */}
          <div className="mt-5 flex justify-center">
            <p className="text-center text-[15px] md:text-[16px] leading-relaxed w-[946px] max-w-full">
              During the COVID-19 pandemic, we saw a gap in accessible, engaging education for kids.
              Many lacked structured, enjoyable learning opportunities that didn’t feel like extra
              stress. That’s why we created STEMz Learning, a platform built on nontraditional,
              experiment-driven courses students can access from home. As students ourselves, we
              believe learning should be fun and inspiring and so our courses are designed to spark
              curiosity, not mark the end of it.
            </p>
          </div>

          {/* Small divider */}
          <div className="mt-4 flex justify-center">
            <div className="h-[4px] w-16 rounded-full bg-zinc-800/70" />
          </div>
        </div>

        <div className="relative mt-20 -mx-16">
          {/* logos that overlap the table top */}
          <Image
            src="/images/AboutPage/originimage1.png"
            alt="Left large icon"
            width={100}
            height={100}
            className="absolute -top-20 left-1/4 -translate-x-1/2 z-10"
          />
          <Image
            src="/images/AboutPage/originimage2.png"
            alt="Right large icon"
            width={100}
            height={100}
            className="absolute -top-20 left-3/4 -translate-x-1/2 z-10"
          />

          {/* Row 1 */}
          <div className="relative grid grid-cols-2">
            <div className="bg-[#FFF9F9] border-b border-zinc-300/60 flex items-center justify-center py-7">
              <p className="text-[15px] md:text-[16px] text-center">
                Limited engaging opportunities
              </p>
            </div>
            <div className="bg-[#EDF3EA] border-b border-l border-zinc-300/60 flex items-center justify-center py-7">
              <p className="text-[15px] md:text-[16px] text-center">
                Non-traditional, experiment-driven courses
              </p>
            </div>

            {/* Middle icon on the divider */}
            <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="rounded-xl bg-white shadow-sm ring-1 ring-black/10 p-1">
                <Image src="/images/AboutPage/originimage3.png" alt="Row 1 icon" width={56} height={56} />
              </div>
            </div>
          </div>

          {/* Row 2 */}
          <div className="relative grid grid-cols-2">
            <div className="bg-[#FFF9F9] border-b border-zinc-300/60 flex items-center justify-center py-7">
              <p className="text-zinc-800 text-[15px] md:text-[16px] text-center">
                Gap in accessible education
              </p>
            </div>
            <div className="bg-[#EDF3EA] border-b border-l border-zinc-300/60 flex items-center justify-center py-7">
              <p className="text-zinc-800 text-[15px] md:text-[16px] text-center">Home-based access</p>
            </div>

            <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="rounded-xl bg-white shadow-sm ring-1 ring-black/10 p-1">
                <Image src="/images/AboutPage/originimage4.png" alt="Row 2 icon" width={56} height={56} />
              </div>
            </div>
          </div>

          {/* Row 3 */}
          <div className="relative grid grid-cols-2">
            <div className="bg-[#FFF9F9] border-b border-zinc-300/60 flex items-center justify-center py-7">
              <p className="text-zinc-800 text-[15px] md:text-[16px] text-center">Lack of structure</p>
            </div>
            <div className="bg-[#EDF3EA] border-b border-l border-zinc-300/60 flex items-center justify-center py-7">
              <p className="text-zinc-800 text-[15px] md:text-[16px] text-center">Fun and inspiring learning</p>
            </div>

            <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="rounded-xl bg-white shadow-sm ring-1 ring-black/10 p-1">
                <Image src="/images/AboutPage/originimage5.png" alt="Row 3 icon" width={56} height={56} />
              </div>
            </div>
          </div>

          {/* Row 4 */}
          <div className="relative grid grid-cols-2">
            <div className="bg-[#FFF9F9] rounded-bl-[12px] flex items-center justify-center py-7">
              <p className="text-zinc-800 text-[15px] md:text-[16px] text-center">
                Learning felt like extra stress
              </p>
            </div>
            <div className="bg-[#EDF3EA] rounded-br-[12px] border-l border-zinc-300/60 flex items-center justify-center py-7">
              <p className="text-zinc-800 text-[15px] md:text-[16px] text-center">Designed to spark curiosity</p>
            </div>

            <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="rounded-xl bg-white shadow-sm ring-1 ring-black/10 p-1">
                <Image src="/images/AboutPage/originimage6.png" alt="Row 4 icon" width={56} height={56} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

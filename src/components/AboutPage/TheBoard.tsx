'use client';

import Image from 'next/image';
import React from 'react';

type BoardCardProps = {
  imgSrc: string;
  name: string;
  role: string;
  blurb: string;
};

function BoardCard({ imgSrc, name, role, blurb }: BoardCardProps) {
  return (
    <div className="relative inline-block w-[329px] h-[500px]">
      {/* subtle offset border (left & bottom) */}
      <div
        aria-hidden
        className="absolute -left-2 -bottom-2 w-full h-full rounded-[16px] border border-black/10"
      />
      {/* main card */}
      <div className="relative z-10 h-full rounded-[16px] border border-black/20 bg-white overflow-hidden">
        {/* image */}
        <Image
          src={imgSrc}
          alt={name}
          width={666} height={590} 
          className="w-full h-[294.44px] object-cover"
          priority={false}
        />
        {/* text block (padding: 28/32/28/32) */}
        <div className="pt-7 pr-8 pb-7 pl-8">
          <h4 className="text-[20px] font-semibold text-[#357717] leading-tight">
            {name}
          </h4>
          <p className="mt-1 text-[15px] text-zinc-800"> {role} </p>
          <p className="mt-4 text-[15px] leading-relaxed text-zinc-700">
            {blurb}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function TheBoard() {
  const people: BoardCardProps[] = [
    {
      imgSrc: '/images/AboutPage/theboard1.png',
      name: 'Sri Chandrasekaran',
      role: 'Chief Executive Officer',
      blurb:
        'We equip teachers with cutting-edge tools, curriculum resources, and professional development',
    },
    {
      imgSrc: '/images/AboutPage/theboard2.png',
      name: 'Sri Chandrasekaran',
      role: 'Chief Executive Officer',
      blurb:
        'We equip teachers with cutting-edge tools, curriculum resources, and professional development',
    },
    {
      imgSrc: '/images/AboutPage/theboard3.png',
      name: 'Sri Chandrasekaran',
      role: 'Chief Executive Officer',
      blurb:
        'We equip teachers with cutting-edge tools, curriculum resources, and professional development',
    },
  ];

  return (
    <section className="relative w-full">
      {/* left background graphic */}
      <Image
        src="/images/AboutPage/theboardbackground.png"
        alt=""
        width={200}
        height={200}
        aria-hidden
        className="
          pointer-events-none select-none
          absolute left-0 top-70
          hidden sm:block
        "
      />

      {/* content container */}
      <div className="max-w-[1074px] mx-auto px-4 md:px-6">
        {/* title */}
        <h3 className="text-2xl md:text-[28px] font-semibold text-[#357717] mt-50">
          The Board
        </h3>

        {/* cards */}
        <div className="mt-15 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:gap-20">
          {people.map((p) => (
            <BoardCard key={p.imgSrc} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
}

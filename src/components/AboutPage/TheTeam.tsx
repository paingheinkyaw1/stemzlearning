'use client';

import Image from 'next/image';
import React from 'react';

type Member = {
  img: string;
  name: string;
  role: string;
};

const members: Member[] = [
  { img: '/images/AboutPage/team1.png', name: 'Emily Puthur Simon', role: 'Volunteer Program Director' },
  { img: '/images/AboutPage/team2.png', name: 'Avery Dance', role: 'Head of Curriculum Development' },
  { img: '/images/AboutPage/team3.png', name: 'Steven Biji', role: 'Head of Teaching' },
  { img: '/images/AboutPage/team4.png', name: 'Maanya Shukla', role: 'Co-Head of Outreach\n& Recruitment' },
  { img: '/images/AboutPage/team5.png', name: 'Sudhit Ganguly', role: 'Co-Head of Outreach\n& Recruitment' },
];

export default function TheTeam() {
  return (
    <section className="w-full">
      <div className="max-w-[1074px] mx-auto px-4 md:px-6 pt-40">
        {/* Title */}
        <h3 className="text-2xl md:text-[28px] font-semibold text-[#357717]">The Team</h3>

        {/* Row of images with text */}
        <div className="mt-20 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-11 justify-items-center">
          {members.map((m) => (
            <div key={m.name} className="w-[188px]">
              <Image
                src={m.img}
                alt={m.name}
                width={376}
                height={480}
                className="block w-full h-[240px] object-cover"
                priority={false}
              />
              <h4 className="mt-4 text-[20px] font-semibold text-[#357717] leading-tight">
                {m.name}
              </h4>
              <p className="mt-1 text-[15px] text-zinc-800 whitespace-pre-line">
                {m.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

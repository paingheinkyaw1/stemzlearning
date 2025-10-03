'use client';

import Image from 'next/image';
import React from 'react';

export default function JoinTeam() {
  return (
    <section className="relative w-full isolate overflow-hidden mt-30">
      <Image
        src="/images/AboutPage/joinbackground.jpg" 
        alt=""
        fill
        className="object-cover z-0 opacity-3 pointer-events-none"
        priority={false}
      />

      {/* Content above bg */}
      <div className="relative z-10 max-w-[1074px] mx-auto px-4 md:px-6 py-16">
        <div className="grid grid-cols-1 md:[grid-template-columns:497px_497px] md:[column-gap:80px] gap-y-8">
          <div className="h-[156px] flex flex-col gap-4 justify-center">
            <h3 className="text-3xl md:text-[40px] font-semibold text-[#4E4E4E]">
              Join Our Team
            </h3>
            <p className="text-[16px] leading-relaxed text-black">
              We’re always looking for passionate individuals to be part of our mission.
              If you’re excited about making a meaningful impact through education, we’d
              love to have you on board. Let’s shape the future of learning, together.
            </p>
          </div>

          {/* Right form block */}
          <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-5 min-h-[226px]">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <label className="sr-only" htmlFor="jt-name">Name</label>
              <input
                id="jt-name"
                type="text"
                placeholder="Enter your Name"
                className="h-12 w-full rounded-[10px] bg-[#FDF4D8] px-4 text-[15px] placeholder-zinc-500 outline-none focus:ring-2 focus:ring-[#F5BA00]/40"
              />

              <label className="sr-only" htmlFor="jt-email">Email</label>
              <input
                id="jt-email"
                type="email"
                placeholder="Enter your email"
                className="h-12 w-full rounded-[10px] bg-[#FDF4D8] px-4 text-[15px] placeholder-zinc-500 outline-none focus:ring-2 focus:ring-[#F5BA00]/40"
              />
            </div>

            <label className="sr-only" htmlFor="jt-message">Message</label>
            <textarea
              id="jt-message"
              placeholder="Anything you would like to tell us ...."
              className="h-[126px] w-full rounded-[10px] bg-[#FDF4D8] p-4 text-[15px] placeholder-zinc-500 outline-none focus:ring-2 focus:ring-[#F5BA00]/40"
            />

            <button
              type="submit"
              className="w-fit rounded-[10px] bg-[#F5BA00] px-6 py-2 text-white font-medium shadow-md hover:bg-[#E0AA00] active:translate-y-[1px]"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

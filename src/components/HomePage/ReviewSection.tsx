'use client';

import Image from 'next/image';
import React from 'react';

export default function ReviewSection() {
  return (
    <section className="bg-white py-20 px-4 text-black">
      <div className="relative mx-auto font-[var(--font-poppins)]" style={{ width: 1381, height: 940 }}>
        {/* Heading */}
        <div className=" w-[1074px] mx-auto">
          <h2 className="text-green-800 text-[24px] font-bold">Don’t Take Our word for it</h2>
          <p className="text-[14px] mt-8">Read about what others have to say about us</p>
        </div>

        {/* ---------------- ROW 1 ---------------- */}

        {/* Card 1 (w:284 x h:147, pt:10 pr:24 pl:16, top:250, left:58.5) */}
        <div
          className="absolute rounded-[12px] border border-gray-200 bg-white shadow-[0_8px_24px_rgba(0,0,0,0.08)]"
          style={{ width: 284, height: 147, top: 150, left: 58.5, paddingTop: 10, paddingRight: 24, paddingLeft: 16 }}
        >
          <p className="text-sm leading-5">
            We’re always looking for passionate individuals to be part of our mission. passionate
            individuals to be part of our
          </p>
          <p className="font-bold mt-3">
            Ishita Kohli, <span className="font-normal">XYZ company</span>
          </p>

          {/* Avatar centered on right border */}
          <div className="absolute top-1/2 -right-[28px] -translate-y-1/2">
            <Image
              src="/images/HomePage/ReviewSection/ReviewImage1.png"
              alt="Reviewer"
              width={72}
              height={72}
              className="rounded-full ring-4 ring-white shadow-md"
            />
          </div>
        </div>

        {/* Card 2 (w:253.693 x h:373.58, pt:100 pr:24 pl:24, top:250, left:390.68) */}
        <div
          className="absolute rounded-[12px] border-gray-200 bg-white shadow-[0_10px_28px_rgba(0,0,0,0.08)]"
          style={{ width: 253.693359375, height: 373.580078125, top: 150, left: 390.68, paddingTop: 100, paddingRight: 24, paddingLeft: 24 }}
        >
          {/* Avatar centered in the top border */}
          <div className="absolute -top-11 left-1/2 -translate-x-1/2">
            <Image
              src="/images/HomePage/ReviewSection/ReviewImage2.png"
              alt="Reviewer"
              width={92}
              height={92}
              className="rounded-full ring-4 ring-white shadow-md"
            />
          </div>

          <p className="text-[18px]">I love their work!</p>
          <p className="text-sm mt-7">
            We’re always looking for passionate individuals to be part of our mission.
          </p>
          <p className="mt-8 font-bold">
            Ishita Kohli<br />
            <span className="font-normal">XYZ company</span>
          </p>
        </div>

        {/* Card 3 (w:250 x h:329.154, p:10, radius:12, border:1, top:250, left:672.5) */}
        <div
          className="absolute rounded-[12px] border bg-white overflow-hidden shadow-[0_10px_28px_rgba(0,0,0,0.08)]"
          style={{ width: 250, height: 329.154296875, top: 150, left: 672.5, padding: 10 }}
        >
          <div className="overflow-hidden rounded-[8px]">
            <Image
              src="/images/HomePage/ReviewSection/ReviewImage3.png"
              alt="Reviewer"
              width={230}
              height={180}
              className="h-[180px] w-full object-cover"
            />
          </div>
          <div className="pt-3 px-1">
            <p className="text-sm leading-5">
              We’re always looking for passionate individuals to be part of our mission.
            </p>
            <p className="mt-3 font-bold">
              Ishita Kohli<br />
              <span className="font-normal">XYZ company</span>
            </p>
          </div>
        </div>

        {/* Card 4 (w:429.694 x h:212.539) — top-right long bar with avatar on top center */}
        <div
          className="absolute rounded-[12px] border border-gray-200 bg-white text-center shadow-[0_10px_28px_rgba(0,0,0,0.08)]"
          style={{ width: 429.6936340332031, height: 147, top: 150, left: 950.64 }}
        >
          <div className="absolute -top-11 left-1/2 -translate-x-1/2">
            <Image
              src="/images/HomePage/ReviewSection/ReviewImage4.png"
              alt="Reviewer"
              width={92}
              height={92}
              className="rounded-full ring-4 ring-white shadow-md"
            />
          </div>
          <div className="px-8 pt-15">
            <p className="font-semibold">I love their work!</p>
            <p className="text-sm mt-2">
              We’re always looking for passionate individuals to be part of our mission. passionate
              individuals to be part of our
            </p>
          </div>
        </div>

        {/* ---------------- ROW 2 ---------------- */}

        {/* Card 5 (w:276 x h:231, radius:12, border:1, top:438.29, left:58.5) */}
        <div
          className="absolute rounded-[12px] border bg-white shadow-[0_10px_28px_rgba(0,0,0,0.08)] overflow-hidden"
          style={{ width: 276, height: 231, top: 350, left: 58.5 }}
        >
          <div className="p-5">
            <p className="text-sm leading-5">
              We’re always looking for passionate individuals to be part of our mission.
              passionate individuals to be part of our. passionate individuals to be part of our and
              always looking.
            </p>
          </div>
          <div className="flex items-center justify-between bg-gray-50 px-5 py-7">
            <div>
              <p className="font-bold">Ishita Kohli</p>
              <p className="text-sm">XYZ company</p>
            </div>
            <Image
              src="/images/HomePage/ReviewSection/ReviewImage5.png"
              alt="Reviewer"
              width={66}
              height={66}
              className="rounded-full -mt-23"
            />
          </div>
        </div>

        {/* Card 6 (w:430 x h:210, radius:12, p:10, top:447.79, left:950.64) */}
        <div
          className="absolute rounded-[12px] border border-gray-200 bg-white shadow-[0_10px_28px_rgba(0,0,0,0.08)]"
          style={{ width: 430, height: 210, top: 350, left: 950.64, padding: 10 }}
        >
          <div className="h-full w-full flex">
            <Image
              src="/images/HomePage/ReviewSection/ReviewImage6.png"
              alt="Reviewer"
              width={180}
              height={190}
              className="h-full w-[190px] rounded-[8px] object-cover"
            />
            <div className="px-4 py-3">
              <p className="font-extrabold text-[18px] mb-2">I love their work!</p>
              <p className="text-sm">
                We’re always looking for passionate individuals to be part of our mission.
              </p>
              <p className="mt-3 font-bold">
                Ishita Kohli<br />
                <span className="font-normal">XYZ company</span>
              </p>
            </div>
          </div>
        </div>

        {/* ---------------- ROW 3 ---------------- */}

        {/* Card 7 (w:586 x h:146, radius:12, p:12, top:705.44, left:58.64) */}
        <div
          className="absolute rounded-[12px] border border-gray-200 bg-white shadow-[0_10px_28px_rgba(0,0,0,0.08)] text-center"
          style={{ width: 586, height: 170, top: 600, left: 58.64, padding: 12 }}
        >
          <p className="font-extrabold text-[18px]">I love their work!</p>
          <p className="mt-2 text-sm">
            We’re always looking for passionate individuals to be part of our mission. passionate
            individuals to be part of our
          </p>
          <p className="mt-3 font-bold">
            Ishita Kohli<br />
            <span className="font-normal">XYZ company</span>
          </p>

          {/* tail */}
          <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-6 h-6 rotate-45 bg-white border-b border-r border-gray-200" />
        </div>

        {/* The three avatars under Card 7 (aligned roughly under the tail) */}
        <Image
          src="/images/HomePage/ReviewSection/ReviewImage9.png"
          alt="Reviewer"
          width={64}
          height={64}
          className="absolute"
          style={{ top: 800, left: 220 }}
        />
        <Image
          src="/images/HomePage/ReviewSection/ReviewImage10.png"
          alt="Reviewer"
          width={100}
          height={100}
          className="absolute"
          style={{ top: 800, left: 300 }}
        />
        <Image
          src="/images/HomePage/ReviewSection/ReviewImage11.png"
          alt="Reviewer"
          width={80}
          height={80}
          className="absolute"
          style={{ top: 780, left: 410 }}
        />

        {/* Card 8 (w:250 x h:295, pt:24 pr:10 pb:24 pl:10, radius:12, top:607.44, left:672.64) */}
        <div
          className="absolute rounded-[12px] border border-gray-200 bg-white text-center shadow-[0_10px_28px_rgba(0,0,0,0.08)]"
          style={{ width: 250, height: 295, top: 500, left: 672.64, paddingTop: 24, paddingRight: 10, paddingBottom: 24, paddingLeft: 10 }}
        >
          <Image
            src="/images/HomePage/ReviewSection/ReviewImage8.png"
            alt="Reviewer"
            width={86}
            height={86}
            className="mx-auto rounded-full shadow"
          />
          <div className="mt-3 text-[18px] tracking-widest">★ ★ ★ ★ ☆</div>
          <p className="mt-3 text-sm">
            We’re always looking for passionate individuals to be part of our mission.
          </p>
          <p className="mt-4 font-bold">
            Ishita Kohli<br />
            <span className="font-normal">XYZ company</span>
          </p>

          {/* speech tail */}
          <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-6 h-6 rotate-45 border-b border-r  border-gray-200 bg-white " />
        </div>

        {/* Card 9 (w:416 x h:210, pt:10 pr:24 pb:10 pl:24, radius:12, border:1, top:697.44, left:964.71) */}
        <div
          className="absolute rounded-[12px] border bg-gray-50 shadow-[0_10px_28px_rgba(0,0,0,0.08)] overflow-hidden"
          style={{ width: 416, height: 210, top: 590, left: 964.71, paddingTop: 10, paddingRight: 24, paddingBottom: 10, paddingLeft: 24 }}
        >
          <div className="grid grid-cols-5 h-full">
            <div className="col-span-3 pr-4">
              <p className="font-extrabold text-[18px] mb-2">I love their work!</p>
              <p className="text-sm">
                We’re always looking for passionate individuals to be part of our mission.
              </p>
              <p className="mt-4 font-bold">
                Ishita Kohli<br />
                <span className="font-normal">XYZ company</span>
              </p>
            </div>
            <div className="col-span-2 flex items-center justify-center bg-white rounded-[10px]">
              <div className="size-[150px] rounded-full overflow-hidden shadow-inner">
                <Image
                  src="/images/HomePage/ReviewSection/ReviewImage7.png"
                  alt="Reviewer"
                  width={300}
                  height={300}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        {/* ------------- END CARDS ------------- */}
      </div>
    </section>
  );
}

'use client';

import Image from 'next/image';
import React from 'react';

export default function HeroHome() {
  return (
    <section className="relative min-h-screen px-8 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12 overflow-hidden">
      {/* Decorative: top left math symbol */}
      <Image
        src="/images/home_math.png"
        alt="Math graphic"
        width={140}
        height={140}
        className="absolute top-40 left-4 opacity-30 rotate-[15deg]"
        priority
      />

      {/* Main content (text block) */}
      <div className="absolute left-50 top-1/2 -translate-y-1/2 space-y-6 z-10">
        <h1 className="text-5xl font-bold text-gray-900 leading-tight">
          Rethinking STEM<br />Education
        </h1>
        <p className="text-lg text-gray-700 max-w-md">
          Transforming how STEM subjects are taught with interactive lessons and powerful analytics.
        </p>
        <button className="bg-yellow-400 text-white px-6 py-3 font-semibold rounded-md shadow hover:bg-yellow-500 transition">
          Join our waitlist
        </button>
      </div>

      {/* Decorative: red-tinted atom */}
      <Image
        src="/images/home_atom.png"
        alt="Atom graphic"
        width={150}
        height={100}
        className="absolute bottom-6 right-6 opacity-100 filter brightness-0 saturate-100 invert-0 sepia-100 hue-rotate-[320deg] saturate-[800%] contrast-100"
      />

      {/* Decorative: student video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute right-50 top-1/2 -translate-y-1/2 w-[400px] pointer-events-none z-0 scale-x-[-1]"
      >
        <source src="/images/home_video_1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </section>
  );
}

'use client';

import Image from 'next/image';
import React from 'react';

export default function HeroHome() {
  return (
    <section className="min-h-screen bg-white px-8 mx-auto grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-12 md:gap-0 overflow-hidden">
      {/* Decorative: top left math symbol */}
      <Image
        src="/images/HomePage/HeroSection/home_math.png"
        alt="Math graphic"
        width={140}
        height={140}
        className="absolute top-40 left-4"
        priority
      />

      {/* Main content (text block) */}
      <div className="relative z-10 flex flex-col justify-center items-center md:items-start text-center md:text-left space-y-6 md:ml-60">
        <p className="font-[var(--font-poppins)] text-lg text-black max-w-md">
          THE PLATFORM
        </p>
        <h1 className="font-[--font-nunito-sans] text-5xl font-semibold text-black leading-tight">
          Rethinking STEM<br />Education
        </h1>
        <p className="font-[var(--font-poppins)] text-lg text-black max-w-md">
          Transforming how STEM subjects are taught with interactive lessons and powerful analytics.
        </p>
        <button
          style={{ backgroundColor: '#F5BA00' }}
          className="font-[var(--font-poppins)] text-white px-6 py-3 font-semibold rounded-md shadow hover:brightness-90 transition"
        >
          Join our waitlist
        </button>

      </div>

      {/* Video */}
      <div className="relative z-0 flex justify-center md:justify-end items-center md:mr-60">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-[300px] md:w-[400px] scale-x-[-1] pointer-events-none"
        >
          <source src="/images/HomePage/HeroSection/home_video_1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Decorative: red-tinted atom */}
      <Image
        src="/images/HomePage/HeroSection/home_atom.png"
        alt="Atom graphic"
        width={150}
        height={100}
        className="absolute bottom-6 -right-7"
      />
    </section>
  );
}

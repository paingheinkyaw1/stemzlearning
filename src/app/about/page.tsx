'use client';

import React from 'react';
import Image from 'next/image';
import Navbar from '@/components/HomePage/Navbar';
import HomeFooter from '@/components/HomePage/HomeFooter';
import OriginStory from '@/components/AboutPage/OriginStory';
import TheBoard from '@/components/AboutPage/TheBoard';
import TheTeam from '@/components/AboutPage/TheTeam';
import JoinTeam from '@/components/AboutPage/JoinTeam';

export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen flex flex-col">
      {/* Navbar */}
      <Navbar />

      <main className="pt-16 md:pt-27">
        {/* Hero Section */}
        <section className="relative w-full">
          <Image
            src="/images/AboutPage/aboutPage.png"
            alt="Teacher guiding students with a tablet"
            priority
            width={1440}
            height={900}
            className="w-full h-[1440px] md:h-[660px] object-cover"
          />

          {/* Overlay text aligned with container */}
          <div className="absolute bottom-25 left-0 right-0">
            <div className="max-w-[1074px] mx-auto px-4 md:px-6">
              <h1 className="text-white drop-shadow text-3xl md:text-5xl font-semibold">
                About Us
              </h1>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="w-full">
          <div className="max-w-[1074px] mx-auto px-4 md:px-6 py-10 md:py-30">
            <h2 className="text-2xl md:text-3xl leading-snug font-semibold text-[#357717]">
              We reimagine how students experience holistic
              <br className="hidden md:block" />
              STEM education.
            </h2>

            <p className="mt-4 md:mt-5 leading-relaxed md:text-[17px]">
              At STEMZ Learning, we go beyond traditional STEM instruction by integrating
              creativity, critical thinking, and real-world application into every lesson.
              Our holistic approach nurtures the whole student—empowering them not just to
              learn, but to connect, explore, and thrive in an ever-evolving world.
            </p>
          </div>
        </section>
      </main>

      <OriginStory />
      <TheBoard />
      <TheTeam />
      <JoinTeam />
      <HomeFooter />
    </div>
  );
}

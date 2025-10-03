'use client';

import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

const images = [
  '/images/HomePage/MissionSection/missionpic1.png',
  '/images/HomePage/MissionSection/missionpic2.png',
  '/images/HomePage/MissionSection/missionpic3.png',
  '/images/HomePage/MissionSection/missionpic4.png',
  '/images/HomePage/MissionSection/missionpic5.png',
  '/images/HomePage/MissionSection/missionpic6.png',
  '/images/HomePage/MissionSection/missionpic7.png',
  '/images/HomePage/MissionSection/missionpic8.png',
  '/images/HomePage/MissionSection/missionpic9.png',
  '/images/HomePage/MissionSection/missionpic10.png',
  '/images/HomePage/MissionSection/missionpic11.png',
];

export default function MissionSection() {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const getSlideStyle = (index: number) => {
    const diff = Math.abs(current - index);
    if (index === current) {
      return 'w-[518px] h-[350px] z-10';
    } else if (diff === 1 || diff === images.length - 1) {
      return 'w-[90px] h-[200px] opacity-70';
    } else if (diff === 2 || diff === images.length - 2) {
      return 'w-[50px] h-[150px] opacity-40';
    } else {
      return 'hidden';
    }
  };

  return (
    <section className="bg-white py-20">
      <Image
        src="/images/HomePage/MissionSection/Our Mission.png"
        alt="Stats"
        width={1800}
        height={400}
      />

      {/* Title + Description */}
      <div className="w-[1074px] h-[166px] px-4 md:px-10 mx-auto mt-30">
        <h3 className="font-[--font-nunito-sans] font-bold text-3xl md:text-4xl text-green-800 mb-8">
          Our Mission
        </h3>
        <p className="font-[--font-poppins] text-black">
          STEMz Learning strives to provide elementary school students with curriculum centered around experiments and hands-on learning.
          Our main goal is to introduce complex topics in palatable, engaging ways that inspire kids to learn more.
        </p>
      </div>

      {/* Image Slider */}
      <div className="relative w-[1074px] h-[440.36px] mx-auto mt-16 flex items-center justify-center overflow-hidden">
        {/* Images */}
        <div className="flex items-center justify-center gap-3 w-full">
          {images.map((img, i) => {
            const pos = (i - current + images.length) % images.length;
            const show = pos <= 3 || pos >= images.length - 3;
            if (!show) return null;

            return (
              <div
                key={i}
                className={`relative rounded-[42px] overflow-hidden transition-all duration-300 ease-in-out ${getSlideStyle(i)}`}
              >
                <Image
                  src={img}
                  alt={`Mission ${i}`}
                  fill
                  className="object-cover"
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="mt-6 flex justify-center gap-8">
        <button
          onClick={prevSlide}
          className="rounded-full w-[58px] h-[59px] flex items-center justify-center"
          style={{
            backgroundColor: 'rgba(41, 45, 50, 0.4)',
            boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.25)',
          }}
          aria-label="Previous Slide"
        >
          <ChevronLeft size={28} className="text-black" />
        </button>

        <button
          onClick={nextSlide}
          className="rounded-full w-[58px] h-[59px] flex items-center justify-center"
          style={{
            backgroundColor: 'rgba(41, 45, 50, 0.4)',
            boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.25)',
          }}
          aria-label="Next Slide"
        >
          <ChevronRight size={28} className="text-black" />
        </button>
      </div>
    </section>
  );
}

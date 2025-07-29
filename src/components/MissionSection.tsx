'use client';

import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

const images = [
  '/images/missionpic1.png',
  '/images/missionpic2.png',
  '/images/missionpic3.png',
  '/images/missionpic4.png',
  '/images/missionpic5.png',
  '/images/missionpic6.png',
  '/images/missionpic7.png',
  '/images/missionpic8.png',
  '/images/missionpic9.png',
  '/images/missionpic10.png',
  '/images/missionpic11.png',
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
      {/* Title + Description */}
      <div className="w-[1074px] h-[166px] px-4 md:px-10 mx-auto">
        <h3 className="font-[--font-nunito-sans] font-bold text-3xl md:text-4xl text-green-800 mb-8">
          Our Mission
        </h3>
        <p className="font-[--font-poppins] text-black">
          STEMz Learning strives to provide elementary school students with curriculum centered around experiments and hands-on learning.
          Our main goal is to introduce complex topics in palatable, engaging ways that inspire kids to learn more.
        </p>
      </div>

      {/* Stats Bar */}
      <div className="px-4 md:px-10 max-w-7xl mx-auto">
        <div
          className="rounded-xl flex flex-col md:flex-row justify-between items-center text-center gap-6"
          style={{
            backgroundColor: '#35771721',
            paddingTop: '25px',
            paddingBottom: '25px',
            paddingLeft: '50px',
            paddingRight: '50px',
            maxWidth: '908px',
            height: '123px',
            margin: '0 auto',
          }}
        >
          {[
            ['10k+', 'Active Students'],
            ['500+', 'Educators'],
            ['93%', 'Engagement Rate'],
            ['50+', 'Interactive Lessons'],
          ].map(([number, label], i) => (
            <div key={i}>
              <h3
                className="font-[--font-nunito-sans] font-bold"
                style={{ color: '#F5BA00', fontSize: '28px', fontWeight: 700 }}
              >
                {number}
              </h3>
              <p
                className="font-[--font-poppins]"
                style={{ color: '#000000', fontSize: '16px', fontWeight: 400 }}
              >
                {label}
              </p>
            </div>
          ))}
        </div>
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

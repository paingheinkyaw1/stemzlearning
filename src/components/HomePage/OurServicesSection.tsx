'use client';

import Image from 'next/image';
import React from 'react';

export default function OurServicesSection() {
  return (
    <section className="bg-white py-20">
      <div className="w-[1074px] px-4 md:px-10 mx-auto">
        <div className="w-full md:w-1/2">
            <p className="font-[--font-poppins] text-[16px] text-black">
              WHAT WE OFFER
            </p>
          </div>
        
        {/* Title */}
        <h3 className="font-[--font-nunito-sans] text-[32px] font-bold text-green-800 mb-6 mt-6">
          Our Services
        </h3>

        {/* Side-by-side Content */}
        <div className="flex flex-col md:flex-row gap-8 items-start">
          {/* Left Text Block */}
          <div className="w-full md:w-1/2">
            <p className="font-[--font-poppins] text-[16px] text-black">
              We provide innovative, student and teacher–focused STEM solutions designed to meet the evolving needs of today’s classrooms and online learning spaces. Our services are built to empower educators and engage students through hands-on, technology–driven resources that foster curiosity, critical thinking, and real-world problem-solving skills.
            </p>
          </div>

          {/* Right Feature Cards */}
          <div className="w-full md:w-1/2 flex flex-col gap-[20px]">
            {/* Card 1 */}
            <div className="w-[517px] bg-white rounded-[20px] shadow-lg px-[48px] pt-[28px] pb-[28px]">
              <div className="w-[421px] h-[115px] relative mb-4 rounded-[20px] overflow-hidden">
                <Image
                  src="/images/HomePage/OurServicesSection/servicespic1.png"
                  alt="For Educators"
                  fill
                  className="object-cover rounded-[20px]"
                />
              </div>
              <p className="font-bold font-[--font-poppins] text-black mb-2">For Educators</p>
              <p className="font-[--font-poppins] text-black text-[16px]">
                We equip teachers with cutting-edge tools, curriculum resources, and professional development to create dynamic, interactive STEM learning experiences.
              </p>
              <button className="mt-4 font-[--font-poppins] text-sm px-4 py-2 border border-green-700 text-green-700 rounded shadow hover:bg-green-50 transition">
                Learn More
              </button>
            </div>

            {/* Card 2 */}
            <div className="w-[517px] bg-white rounded-[20px] shadow-lg px-[48px] pt-[28px] pb-[28px]">
              <div className="w-[421px] h-[115px] relative mb-4 rounded-[20px] overflow-hidden">
                <Image
                  src="/images/HomePage/OurServicesSection/servicespic2.png"
                  alt="For Students"
                  fill
                  className="object-cover rounded-[20px]"
                />
              </div>
              <p className="font-bold font-[--font-poppins] text-black mb-2">For Students</p>
              <p className="font-[--font-poppins] text-black text-[16px]">
                We equip students with engaging activities, real-world projects, and intuitive tools to build foundational STEM skills through exploration and creativity.
              </p>
              <button className="mt-4 font-[--font-poppins] text-sm px-4 py-2 border border-green-700 text-green-700 rounded shadow hover:bg-green-50 transition">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

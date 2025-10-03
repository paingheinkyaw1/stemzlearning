'use client';

import Image from 'next/image';
import React from 'react';

export default function OurServicesSection() {
  return (
    <section className="bg-white py-20">
      <div className="w-[1074px] mx-auto">
        
        {/* Heading Section with Bottom Border */}
        <div className="border border-gray-300 px-[48px] pt-[28px] pb-[28px] rounded-[20px]">
          <p className="font-[var(--font-poppins)] text-[16px] text-black">
            WHAT WE OFFER
          </p>

          <h3 className="font-[--font-nunito-sans] text-[32px] font-bold text-green-800 mt-6 mb-6">
            Our Services
          </h3>

          <p className="font-[var(--font-poppins)] text-[16px] text-black">
            We provide innovative, student and teacher–focused STEM solutions designed to meet the evolving needs of today’s classrooms and online learning spaces. Our services are built to empower educators and engage students through hands-on, technology–driven resources that foster curiosity, critical thinking, and real-world problem-solving skills.
          </p>
        </div>

        {/* Side-by-side Feature Cards with Borders */}
        <div className="flex flex-col md:flex-row">
          {/* Card 1 */}
          <div className="w-[537px] bg-white rounded-[20px] border border-gray-300 px-[48px] pt-[28px] pb-[28px]">
            <p className="font-bold font-[var(--font-poppins)] text-black mb-2">For Educators</p>
            <p className="font-[var(--font-poppins)] text-black text-[16px]">
              We equip teachers with cutting-edge tools, curriculum resources, and professional development to create dynamic, interactive STEM learning experiences.
            </p>
            <button className="mt-4 mb-4 font-[var(--font-poppins)] text-sm px-4 py-2 border border-green-700 text-green-700 rounded hover:bg-green-50 transition">
              Learn More
            </button>
            <div className="w-[421px] h-[115px] relative rounded-[20px] overflow-hidden">
              <Image
                src="/images/HomePage/OurServicesSection/servicespic1.png"
                alt="For Educators"
                fill
                className="object-cover rounded-[20px]"
              />
            </div>
          </div>

          {/* Card 2 */}
          <div className="w-[537px] bg-white rounded-[20px] border border-gray-300 px-[48px] pt-[28px] pb-[28px]">
            <p className="font-bold font-[var(--font-poppins)] text-black mb-2">For Students</p>
            <p className="font-[var(--font-poppins)] text-black text-[16px]">
              We equip students with engaging activities, real-world projects, and intuitive tools to build foundational STEM skills through exploration and creativity.
            </p>
            <button className="mt-4 mb-4 font-[var(--font-poppins)] text-sm px-4 py-2 border border-green-700 text-green-700 rounded hover:bg-green-50 transition">
              Learn More
            </button>
            <div className="w-[421px] h-[115px] relative rounded-[20px] overflow-hidden">
              <Image
                src="/images/HomePage/OurServicesSection/servicespic2.png"
                alt="For Students"
                fill
                className="object-cover rounded-[20px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

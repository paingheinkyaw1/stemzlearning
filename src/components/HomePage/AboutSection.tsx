'use client';

import Image from 'next/image';

export default function AboutSection() {
  return (
    <section className="bg-white py-20">
      {/* Section Title */}
      <div className="w-[1074px] mx-auto px-4 md:px-10">
        <h2 className="font-[--font-nunito-sans] font-bold text-3xl md:text-4xl text-green-800 mb-16">
          Who We Are and What We Do
        </h2>
      </div>

      {/* Top content */}
      <div className="w-[1074px] mx-auto md:px-10 flex flex-col lg:flex-row items-center gap-12">
        <div className="w-full">
          <p className="font-[var(--font-poppins)] text-black mb-6">
            We are passionate educators and technologists united to transform STEM education by making it more accessible to elementary students. Through interactive lessons, powerful analytics, and creative exploration, we offer free curriculum and online courses for both self-guided and parent-guided learners.
          </p>
        </div>
      </div>

      {/* Feature icons */}
      <div className="w-[1074px] mx-auto px-4 md:px-10 font-[var(--font-poppins)] mt-3 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* 1. Students Engage */}
        <div>
          <Image src="/images/HomePage/AboutSection/aboutImage2.png" alt="Students Engage" width={232} height={232} className="mx-auto" />
          <h4 className="mt-4 mx-4 text-black">Students</h4>
          <p className="mt-2 mx-4 text-sm text-black">Interactive lessons spark curiosity and hands-on learning</p>
        </div>
        {/* 2. Educators Guide */}
        <div>
          <Image src="/images/HomePage/AboutSection/aboutImage1.png" alt="Educators Guide" width={232} height={232} className="mx-auto" />
          <h4 className="mt-4 mx-4 text-black">Educator</h4>
          <p className="mt-2 mx-4  text-sm text-black">Teachers facilitate learning with powerful tools and insights</p>
        </div>

        {/* 3. Content Evolves */}
        <div>
          <Image src="/images/HomePage/AboutSection/aboutImage3.png" alt="Content Evolves" width={232} height={232} className="mx-auto" />
          <h4 className="mt-4 mx-4 text-black">Content</h4>
          <p className="mt-2 mx-4 text-sm text-black">Lessons adapt and improve based on learning outcomes</p>
        </div>

        {/* 4. Analytics Track */}
        <div>
          <Image src="/images/HomePage/AboutSection/aboutImage4.png" alt="Analytics Track" width={232} height={232} className="mx-auto" />
          <h4 className="mt-4 mx-4 text-black">Analytics</h4>
          <p className="mt-2 mx-4 text-sm text-black">Real-time data shows progress and identifies opportunities</p>
        </div>
      </div>
    </section>
  );
}

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
      <div className="w-[1074px] mx-auto px-4 md:px-10 flex flex-col lg:flex-row items-center gap-12">
        {/* Left visual (circular diagram) */}
        <div className="relative w-full lg:w-1/2">
          <Image
            src="/images/HomeAbout.png"
            alt="About Graphic"
            width={600}
            height={600}
            className="mx-auto"
          />
        </div>

        {/* Right text */}
        <div className="w-full lg:w-1/2">
          <p className="font-[--font-poppins] text-black leading-relaxed mb-6">
            We are passionate educators and technologists united to transform STEM education by making it more accessible to elementary students. Through interactive lessons, powerful analytics, and creative exploration, we offer free curriculum and online courses for both self-guided and parent-guided learners.
          </p>
          <button className="font-[--font-poppins] mt-2 px-5 py-2 border border-yellow-400 text-sm text-gray-700 rounded shadow-sm hover:text-yellow-500 transition">
            Learn More
          </button>
        </div>
      </div>

      {/* Feature icons */}
      <div className="w-[1074px] mx-auto px-4 md:px-10 font-[--font-poppins] mt-16 grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
        {/* 1. Educators Guide */}
        <div>
          <Image src="/images/aboutImage1.png" alt="Educators Guide" width={70} height={70} className="mx-auto" />
          <h4 className="font-bold mt-4 text-black">Educators Guide</h4>
          <p className="text-sm text-black">Teachers facilitate learning with powerful tools and insights</p>
        </div>

        {/* 2. Students Engage */}
        <div>
          <Image src="/images/aboutImage2.png" alt="Students Engage" width={62} height={70} className="mx-auto" />
          <h4 className="font-bold mt-2 text-black">Students Engage</h4>
          <p className="text-sm text-black">Interactive lessons spark curiosity and hands-on learning</p>
        </div>

        {/* 3. Content Evolves */}
        <div>
          <Image src="/images/aboutImage3.png" alt="Content Evolves" width={70} height={70} className="mx-auto" />
          <h4 className="font-bold mt-4 text-black">Content Evolves</h4>
          <p className="text-sm text-black">Lessons adapt and improve based on learning outcomes</p>
        </div>

        {/* 4. Analytics Track */}
        <div>
          <Image src="/images/aboutImage4.png" alt="Analytics Track" width={70} height={70} className="mx-auto" />
          <h4 className="font-bold mt-4 text-black">Analytics Track</h4>
          <p className="text-sm text-black">Real-time data shows progress and identifies opportunities</p>
        </div>
      </div>
    </section>
  );
}

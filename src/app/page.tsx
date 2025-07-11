'use client';

import Image from 'next/image';
import Navbar from '@/components/Navbar';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="relative pt-32 px-8 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12 min-h-screen overflow-hidden">
        {/* Decorative: top left math symbol */}
        <Image
          src="/images/home_math.png"
          alt="Math graphic"
          width={100}
          height={100}
          className="absolute top-40 left-4 opacity-30"
        />

        {/* Main Content */}
        <div className="space-y-6 z-10">
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

        {/* Decorative: bottom right atom */}
        <Image
          src="/images/home_atom.png"
          alt="Atom graphic"
          width={100}
          height={100}
          className="absolute bottom-6 right-6 opacity-40"
        />

        {/* Decorative: behind student illustration */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute right-100 top-[50%] -translate-y-1/2 w-[400px] pointer-events-none z-0 scale-x-[-1]"
        >
          <source src="/images/home_video_1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </main>
    </>
  );
}

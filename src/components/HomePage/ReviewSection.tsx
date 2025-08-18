'use client';

import Image from 'next/image';
import React from 'react';

export default function ReviewSection() {
  return (
    <section className="bg-white py-20">
      <div className="w-[1074px] mx-auto px-4 md:px-10">
        <h2 className="text-[24px] md:text-[28px] font-[--font-nunito-sans] font-bold text-green-800 mb-2">
          Don’t Take Our word for it
        </h2>
        <p className="text-black text-[16px] mb-10">
          Read about what others have to say about us
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Placeholder review cards - replace with specific styled ones */}
          <div className="bg-white p-6 rounded-xl shadow-md">
            <p className="text-[14px] text-black mb-4">
              We’re always looking for passionate individuals to be part of our mission. passionate individuals to be part of
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gray-300"></div>
              <div>
                <p className="font-bold text-sm">Ishita Kohli</p>
                <p className="text-xs">XYZ company</p>
              </div>
            </div>
          </div>

          {/* Duplicate and style remaining 8 cards uniquely */}
          {/* Add different styles per card to match image layout */}
        </div>
      </div>
    </section>
  );
}
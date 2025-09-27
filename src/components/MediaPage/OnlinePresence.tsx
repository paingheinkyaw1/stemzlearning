'use client';

import Image from 'next/image';
import React from 'react';

export default function OnlinePresence() {
  const cards = [
    {
      title: 'Podcast',
      body:
        'Students Engage in Interactive lessons spark curiosity and hands-on learning',
      img: '/images/MediaPage/podcast.png',
      actions: [
        { label: 'Youtube', href: '#', icon: '/icons/youtube.png' },
        { label: 'Spotify', href: '#', icon: '/icons/spotify.png' },
      ],
      offsetX: 10,   // px: +right / -left
      offsetY: -20,  // px: +down  / -up
    },
    {
      title: 'Substack',
      body:
        'Students Engage in Interactive lessons spark curiosity and hands-on learning',
      img: '/images/MediaPage/substack.png',
      actions: [{ label: 'Substack', href: '#', icon: '/icons/substack.png' }],
      offsetX: 10,
      offsetY: -20,
    },
  ] as const;

  return (
    <section className="w-full">
      <div className="max-w-[1074px] mx-auto px-4 md:px-6 py-12">
        <h2 className="text-[32px] leading-[1] font-medium [font-family:var(--font-nunito)] text-[#357717]">
          Our Online Presence
        </h2>

        <div className="mt-7 w-[1074px] h-[72px] max-w-full">
          <p className="text-[16px] leading-[1] font-[var(--font-poppins)] text-black">
            We are passionate educators and technologists united to transform STEM education by
            making it more accessible to elementary students. Through interactive lessons, powerful
            analytics, and creative exploration, we offer free curriculum and online courses for
            both self-guided and parent-guided learners.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-12">
          {cards.map((c) => (
            <div
              key={c.title}
              className="relative rounded-[16px] border border-black/20 bg-white overflow-visible"
            >
              {/* Image area: full card width & fixed height */}
              <div className="relative w-full h-[341.3040771484375px]">
                {/* This layer spans the full card; */}
                <div
                  className="absolute inset-0"
                  style={{ transform: `translate(${c.offsetX}px, ${c.offsetY}px)` }}
                >
                  <Image
                    src={c.img}
                    alt={c.title}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-contain"
                    priority={false}
                  />
                </div>
              </div>

              {/* Text + Buttons */}
              <div className="px-6 py-1 pb-8">
                <h3 className="text-[20px] leading-[1] font-[var(--font-poppins)] text-[#1a1a1a]">
                  {c.title}
                </h3>
                <p className="mt-3 text-[16px] leading-[1] font-[var(--font-poppins)] text-black">
                  {c.body}
                </p>

                <div className="mt-10 flex items-center gap-4">
                  {c.actions.map((a) => (
                    <a
                      key={a.label}
                      href={a.href}
                      className="inline-flex items-center gap-2 rounded-[12px] bg-[#357717] text-white px-4 py-2 text-[14px] font-[var(--font-poppins)]"
                    >
                      <Image
                        src={a.icon}
                        alt=""
                        width={18}
                        height={18}
                        className="pointer-events-none select-none"
                        aria-hidden="true"
                      />
                      {a.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

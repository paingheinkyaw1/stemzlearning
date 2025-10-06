'use client';

import React from 'react';
import Image from 'next/image';
import Navbar from '@/components/HomePage/Navbar';
import HomeFooter from '@/components/HomePage/HomeFooter';
import Link from 'next/link';

export default function LoginPage() {
  const [showPassword, setShowPassword] = React.useState(false);
  const [remember, setRemember] = React.useState(false);

  return (
    <div className="bg-white min-h-screen flex flex-col pt-40">
      <Navbar />

      <main className="relative flex-1 pt-8 md:pt-14">
        {/* Decorations */}
        <Image
          src="/images/LoginPage/Left1.png"
          alt=""
          width={100}
          height={100}
          className="pointer-events-none select-none hidden md:block absolute top-1"
        />
        <Image
          src="/images/LoginPage/Left2.png"
          alt=""
          width={123}
          height={100}
          className="pointer-events-none select-none hidden md:block absolute top-1"
        />
        <Image
          src="/images/LoginPage/math.png"
          alt=""
          width={150}
          height={220}
          className="pointer-events-none select-none hidden md:block absolute -right-8 top-60 opacity-10 rotate-10"
        />

        <div className="relative max-w-[1150px] mx-auto px-4 md:px-6">
          {/* Two columns: main art + form */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            {/* Left: hero art */}
            <div className="flex justify-center md:justify-start">
              <Image
                src="/images/LoginPage/MainImage.png"
                alt="Learning illustration"
                width={540}
                height={420}
                className="w-full max-w-[540px] h-auto object-contain"
                priority
              />
            </div>

            {/* Right: form */}
            <div className="flex flex-col items-start">
              {/* Heading */}
              <div className="flex items-center gap-3 mb-6">
                <Image
                  src="/images/LoginPage/stemzlogo.png"
                  alt="STEMz"
                  width={28}
                  height={28}
                  className="h-7 w-7"
                />
                <h1 className="text-[36px] leading-[1] font-medium [font-family:var(--font-nunito)] text-[#101010]">
                  Nice to see you again
                </h1>
              </div>

              {/* Form stack */}
              <form
                onSubmit={(e) => e.preventDefault()}
                className="flex flex-col"
                style={{
                  width: '434.544921875px',
                  minHeight: '208px',
                  rowGap: '20px',
                }}
              >
                {/* Email */}
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="login-email"
                    className="text-[12px] leading-[1] font-[var(--font-poppins)] text-[#333]"
                  >
                    Login
                  </label>
                  <input
                    id="login-email"
                    type="text"
                    placeholder="Email or phone number"
                    className="h-[48px] w-[434.544921875px] rounded-[10px] border border-black/15 px-4 text-[16px] placeholder:font-[var(--font-poppins)] placeholder:text-[#777] outline-none focus:ring-2 focus:ring-[#357717]/30"
                  />
                </div>

                {/* Password */}
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="login-password"
                    className="text-[12px] leading-[1] font-[var(--font-poppins)] text-[#333]"
                  >
                    Password
                  </label>

                  <div className="relative">
                    <input
                      id="login-password"
                      type={showPassword ? 'text' : 'password'}
                      placeholder="Enter password"
                      className="h-[48px] w-[434.544921875px] rounded-[10px] border border-black/15 px-4 pr-10 text-[16px] placeholder:font-[var(--font-poppins)] placeholder:text-[#777] outline-none focus:ring-2 focus:ring-[#357717]/30"
                    />

                    {/* Eye toggle */}
                    <button
                      type="button"
                      aria-label={showPassword ? 'Hide password' : 'Show password'}
                      onClick={() => setShowPassword((s) => !s)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-[#666] hover:text-[#333]"
                    >
                      {showPassword ? (
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                          <path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6S2 12 2 12Z" stroke="currentColor" strokeWidth="1.6" />
                          <path d="M15 9l-6 6M9 9l6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                        </svg>
                      ) : (
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                          <path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6S2 12 2 12Z" stroke="currentColor" strokeWidth="1.6" />
                          <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.6" />
                        </svg>
                      )}
                    </button>
                  </div>
                </div>

                {/* Remember + Forgot */}
                <div className="flex items-center justify-between">
                  <label className="inline-flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={remember}
                      onChange={(e) => setRemember(e.target.checked)}
                      className="peer sr-only"
                    />
                    {/* toggle */}
                    <span
                      className="relative h-[20px] w-[36px] rounded-full bg-gray-300 after:content-[''] after:absolute after:h-[16px] after:w-[16px] after:rounded-full after:bg-white after:top-[2px] after:left-[2px] after:transition-all peer-checked:bg-[#357717] peer-checked:after:left-[18px]"
                      aria-hidden
                    />
                    <span className="text-[12px] leading-[1] font-[var(--font-poppins)] text-[#333]">
                      Remember me
                    </span>
                  </label>

                  <a href="#" className="text-[12px] leading-[1] font-[var(--font-poppins)] text-[#007AFF]">
                    Forgot password?
                  </a>
                </div>

                {/* Login button */}
                <button
                  type="submit"
                  className="w-[435px] h-[48px] rounded-[12px] bg-[#357717] text-white font-medium px-9 py-3 hover:brightness-95 active:translate-y-[0.5px]"
                >
                  Login
                </button>

                {/* Divider (optional) */}
                <hr className="w-[434.544921875px] border-t border-black/10 my-3" />

                {/* Google button */}
                <button
                  type="button"
                  className="w-[434.544921875px] h-[44px] rounded-[12px] bg-[#333333] text-white flex items-center justify-center gap-2"
                >
                  {/* Google G icon (inline SVG) */}
                  <svg width="20" height="20" viewBox="0 0 48 48" aria-hidden="true">
                    <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3C33.9 32.5 29.4 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3 0 5.7 1.1 7.8 2.9l5.7-5.7C33.5 6.1 28.9 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20c11 0 19.7-8.9 19.7-20 0-1.3-.1-2.2-.1-3.5z" />
                    <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.7 16.2 19 12 24 12c3 0 5.7 1.1 7.8 2.9l5.7-5.7C33.5 6.1 28.9 4 24 4c-7.7 0-14.4 4.3-17.7 10.7z" />
                    <path fill="#4CAF50" d="M24 44c5.3 0 10.1-2 13.6-5.3l-6.3-5.2C29.2 35.6 26.8 36 24 36c-5.3 0-9.8-3.5-11.3-8.2l-6.6 5.1C9.4 39.6 16.1 44 24 44z" />
                    <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-1.3 3.7-4.7 6.5-8.7 7.4l6.3 5.2C36.7 38.8 40 32.8 40 24c0-1.3-.1-2.2-.4-3.5z" />
                  </svg>
                  <span className="font-[var(--font-poppins)] text-[14px]">Or sign in with Google</span>
                </button>

                {/* Bottom text */}
                <p className="mt-6 text-center w-[434.544921875px] font-[var(--font-poppins)] text-[18px] text-[#1a1a1a]">
                  Dont have an account?{' '}
                  <Link href="#" className="text-[#007AFF] hover:underline">
                    Sign up now
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </main>

      <HomeFooter />
    </div>
  );
}

"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/app/components/atoms/buttons";

// interface TimeLeft {
//   days: number;
//   hours: number;
//   minutes: number;
//   seconds: number;
// }

export default function ComingSoonPage() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  //   const [timeLeft, setTimeLeft] = useState<TimeLeft>({
  //     days: 0,
  //     hours: 0,
  //     minutes: 0,
  //     seconds: 0,
  //   });

  // Set target date (you can adjust this)
  //   const targetDate = new Date("2025-12-31T00:00:00").getTime();

  //   useEffect(() => {
  //     const timer = setInterval(() => {
  //       const now = new Date().getTime();
  //       const difference = targetDate - now;

  //       if (difference > 0) {
  //         setTimeLeft({
  //           days: Math.floor(difference / (1000 * 60 * 60 * 24)),
  //           hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
  //           minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
  //           seconds: Math.floor((difference % (1000 * 60)) / 1000),
  //         });
  //       }
  //     }, 1000);

  //     return () => clearInterval(timer);
  //   }, [targetDate]);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // Here you would typically send the email to your backend
      setIsSubscribed(true);
      setEmail("");
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFF9EB] via-[#F5EFE0] to-[#E8DCC0] relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating Ice Cream Scoops */}
        <div className="absolute top-20 left-10 animate-bounce delay-1000">
          <div className="w-16 h-16 bg-gradient-to-br from-pink-300 to-pink-500 rounded-full opacity-20"></div>
        </div>
        <div className="absolute top-32 right-20 animate-bounce delay-2000">
          <div className="w-12 h-12 bg-gradient-to-br from-yellow-300 to-yellow-500 rounded-full opacity-20"></div>
        </div>
        <div className="absolute bottom-40 left-20 animate-pulse delay-1500">
          <div className="w-20 h-20 bg-gradient-to-br from-green-300 to-green-500 rounded-full opacity-15"></div>
        </div>
        <div className="absolute bottom-60 right-10 animate-pulse delay-3000">
          <div className="w-14 h-14 bg-gradient-to-br from-purple-300 to-purple-500 rounded-full opacity-20"></div>
        </div>

        {/* Animated Cones */}
        <div className="absolute top-1/4 left-1/4 animate-spin-slow">
          <div className="w-8 h-12 bg-gradient-to-b from-amber-400 to-amber-600 opacity-10 transform rotate-45"></div>
        </div>
        <div className="absolute bottom-1/3 right-1/3 animate-spin-slow delay-2000">
          <div className="w-6 h-10 bg-gradient-to-b from-amber-400 to-amber-600 opacity-10 transform rotate-12"></div>
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        {/* Logo with Animation */}
        {/* <div className="mb-8 animate-fade-in-up">
          <div className="inline-block animate-float">
            <Image
              src="/navbar-logo.svg"
              alt="CreamRo Logo"
              width={150}
              height={150}
              className="mx-auto drop-shadow-2xl"
            />
          </div>
        </div> */}

        <div className="mb-6 animate-fade-in-up delay-300">
          <h1 className="text-4xl md:text-7xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#a66060] via-[#bb0c24] to-[#f30505] animate-gradient-x">
            MAXCREAM PVT LTD
          </h1>
        </div>

        {/* Main Heading with Gradient Text */}
        <div className="mb-6 animate-fade-in-up delay-300">
          <h1 className="text-4xl md:text-7xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#A68160] via-[#B8926F] to-[#A68160] animate-gradient-x">
            Something Sweet
          </h1>
          <h2 className="text-3xl md:text-6xl font-bold text-[#A68160] mb-2 animate-pulse">
            is Coming Soon!
          </h2>
        </div>

        {/* Subtitle */}
        <div className="mb-12 animate-fade-in-up delay-500">
          <p className="text-lg md:text-2xl text-[#8B6F47] max-w-3xl mx-auto leading-relaxed px-4">
            🍦 Get ready for the most delicious ice cream experience!
            <br className="hidden md:block" />
            <span className="font-semibold">CreamRo</span> is crafting something
            extraordinary just for you.
          </p>
        </div>

        {/* Countdown Timer */}
        {/* <div className="mb-16 animate-fade-in-up delay-700">
          <h3 className="text-2xl font-semibold text-[#A68160] mb-8">
            Opening Our Doors In:
          </h3>
          <div className="flex justify-center space-x-4 md:space-x-8">
            {[
              { label: "Days", value: timeLeft.days },
              { label: "Hours", value: timeLeft.hours },
              { label: "Minutes", value: timeLeft.minutes },
              { label: "Seconds", value: timeLeft.seconds },
            ].map((item, index) => (
              <div
                key={item.label}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 md:p-6 shadow-2xl border border-[#A68160]/20 animate-scale-in"
                style={{ animationDelay: `${800 + index * 100}ms` }}
              >
                <div className="text-3xl md:text-5xl font-bold text-[#A68160] animate-flip">
                  {item.value.toString().padStart(2, "0")}
                </div>
                <div className="text-sm md:text-base text-[#8B6F47] font-semibold mt-2">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div> */}

        {/* Ice Cream Images with Animation */}
        <div className="mb-16 animate-fade-in-up delay-900">
          <div className="flex justify-center items-center space-x-8 md:space-x-12">
            <div className="animate-float delay-1000">
              <Image
                src="/vanilla-cone.svg"
                alt="Vanilla Cone"
                width={80}
                height={120}
                className="drop-shadow-lg hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="animate-float delay-1500">
              <Image
                src="/chocolate-cone.svg"
                alt="Chocolate Cone"
                width={90}
                height={130}
                className="drop-shadow-lg hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="animate-float delay-2000">
              <Image
                src="/mango-popsicle.svg"
                alt="Mango Popsicle"
                width={70}
                height={110}
                className="drop-shadow-lg hover:scale-110 transition-transform duration-300"
              />
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mb-12 animate-fade-in-up delay-1100">
          <div className="max-w-md mx-auto">
            <h3 className="text-2xl font-semibold text-[#A68160] mb-6">
              Be the First to Know! 🎉
            </h3>
            <form onSubmit={handleSubscribe} className="space-y-4">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="w-full px-6 py-4 rounded-full border-2 border-[#A68160]/30 focus:border-[#A68160] focus:outline-none text-[#8B6F47] bg-white/90 backdrop-blur-sm placeholder-[#A68160]/60 transition-all duration-300"
                  required
                />
              </div>
              <Button
                label={isSubscribed ? "🎉 Subscribed!" : "🍦 Notify Me!"}
                className="w-full bg-gradient-to-r from-[#A68160] to-[#B8926F] hover:from-[#B8926F] hover:to-[#A68160] text-white font-semibold py-4 px-8 rounded-full transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              />
            </form>
            {isSubscribed && (
              <p className="text-green-600 font-semibold mt-4 animate-fade-in">
                Thanks! We&apos;ll keep you updated on our sweet journey! 🍨
              </p>
            )}
          </div>
        </div>

        {/* Social Preview */}
        <div className="animate-fade-in-up delay-1300">
          <p className="text-lg text-[#8B6F47] mb-6">
            Follow our sweet journey on social media
          </p>
          <div className="flex justify-center space-x-6">
            <div className="w-12 h-12 bg-[#A68160]/20 rounded-full flex items-center justify-center hover:bg-[#A68160]/30 transition-colors duration-300 cursor-pointer animate-bounce delay-1000">
              <span className="text-[#A68160] text-xl">📘</span>
            </div>
            <div className="w-12 h-12 bg-[#A68160]/20 rounded-full flex items-center justify-center hover:bg-[#A68160]/30 transition-colors duration-300 cursor-pointer animate-bounce delay-1200">
              <span className="text-[#A68160] text-xl">📷</span>
            </div>
            <div className="w-12 h-12 bg-[#A68160]/20 rounded-full flex items-center justify-center hover:bg-[#A68160]/30 transition-colors duration-300 cursor-pointer animate-bounce delay-1400">
              <span className="text-[#A68160] text-xl">🐦</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

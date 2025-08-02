"use client";

import React from "react";

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Floating Ice Cream Elements */}
      <div className="absolute top-20 left-10 animate-bounce delay-1000">
        <div className="w-16 h-16 bg-gradient-to-br from-pink-300 to-pink-500 rounded-full opacity-20 blur-sm"></div>
      </div>
      
      <div className="absolute top-32 right-20 animate-bounce delay-2000">
        <div className="w-12 h-12 bg-gradient-to-br from-yellow-300 to-yellow-500 rounded-full opacity-20 blur-sm"></div>
      </div>
      
      <div className="absolute bottom-40 left-20 animate-pulse delay-1500">
        <div className="w-20 h-20 bg-gradient-to-br from-green-300 to-green-500 rounded-full opacity-15 blur-sm"></div>
      </div>
      
      <div className="absolute bottom-60 right-10 animate-pulse delay-3000">
        <div className="w-14 h-14 bg-gradient-to-br from-purple-300 to-purple-500 rounded-full opacity-20 blur-sm"></div>
      </div>

      {/* Animated Sprinkles */}
      <div className="absolute top-1/4 left-1/4 animate-spin delay-1000">
        <div className="w-2 h-8 bg-gradient-to-b from-red-400 to-red-600 opacity-30 rounded-full"></div>
      </div>
      
      <div className="absolute top-1/3 right-1/3 animate-spin delay-2000">
        <div className="w-2 h-6 bg-gradient-to-b from-blue-400 to-blue-600 opacity-30 rounded-full"></div>
      </div>
      
      <div className="absolute bottom-1/4 left-1/3 animate-spin delay-3000">
        <div className="w-2 h-7 bg-gradient-to-b from-green-400 to-green-600 opacity-30 rounded-full"></div>
      </div>

      {/* Cone Shapes */}
      <div className="absolute top-1/4 right-1/4 animate-spin-slow">
        <div className="w-8 h-12 bg-gradient-to-b from-amber-400 to-amber-600 opacity-10 transform rotate-45 clip-triangle"></div>
      </div>
      
      <div className="absolute bottom-1/3 left-1/3 animate-spin-slow delay-2000">
        <div className="w-6 h-10 bg-gradient-to-b from-amber-400 to-amber-600 opacity-10 transform rotate-12 clip-triangle"></div>
      </div>

      {/* Gradient Orbs */}
      <div className="absolute top-10 left-1/2 animate-pulse delay-500">
        <div className="w-32 h-32 bg-gradient-radial from-[#A68160]/10 to-transparent rounded-full blur-xl"></div>
      </div>
      
      <div className="absolute bottom-20 right-1/4 animate-pulse delay-1500">
        <div className="w-24 h-24 bg-gradient-radial from-[#B8926F]/10 to-transparent rounded-full blur-xl"></div>
      </div>

      <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
        
        .bg-gradient-radial {
          background: radial-gradient(circle, var(--tw-gradient-stops));
        }
        
        .clip-triangle {
          clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
        }
      `}</style>
    </div>
  );
}

"use client";
import { ButtonProps, HamburgerButtonProps } from "@/app/utils/interfaces";
import React from "react";
import { motion } from "framer-motion";


function Button({ label, onClick, className }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`px-6 py-2 rounded font-medium ${className}`}
    >
      {label}
    </button>
  );
}

function HamburgerButton({ isOpen, onClick }: HamburgerButtonProps) {
  return (
    <button
      onClick={onClick}
      className="relative z-50 flex flex-col justify-center items-center w-10 h-10 focus:outline-none md:hidden"
      aria-label={isOpen ? "Close menu" : "Open menu"}
    >
      <motion.span
        initial={{ rotate: 0 }}
        animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 8 : 0 }}
        transition={{ duration: 0.3 }}
        className="w-6 h-0.5 bg-[#A68160] block mb-1.5"
      />
      <motion.span
        initial={{ opacity: 1 }}
        animate={{ opacity: isOpen ? 0 : 1 }}
        transition={{ duration: 0.3 }}
        className="w-6 h-0.5 bg-[#A68160] block mb-1.5"
      />
      <motion.span
        initial={{ rotate: 0 }}
        animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -8 : 0 }}
        transition={{ duration: 0.3 }}
        className="w-6 h-0.5 bg-[#A68160] block"
      />
    </button>
  );
}

export { Button , HamburgerButton};

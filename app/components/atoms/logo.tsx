"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { LogoProps } from "@/app/utils/interfaces";

export default function Logo({ className = "" }: LogoProps) {
  return (
    <Link href="/">
      <motion.span
        className={`text-[#FFECD4] text-xl font-bold qurova-font ${className}`}
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        CreamRo
      </motion.span>
    </Link>
  );
}

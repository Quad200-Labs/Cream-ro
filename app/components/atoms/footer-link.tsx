"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface FooterLinkProps {
  href: string;
  label: string;
}

export default function FooterLink({ href, label }: FooterLinkProps) {
  return (
    <Link href={href}>
      <motion.span
        className="text-black hover:text-[#A68160] transition-colors duration-300"
        whileHover={{ x: 5 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        {label}
      </motion.span>
    </Link>
  );
}

"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { IconType } from "react-icons";

interface SocialIconProps {
  href: string;
  icon: IconType;
  label: string;
}

export default function SocialIcon({
  href,
  icon: Icon,
  label,
}: SocialIconProps) {
  return (
    <Link href={href} aria-label={label}>
      <motion.div
        className="w-10 h-10 flex items-center justify-center rounded-lg hover:rounded-full bg-[#FFF9EB] hover:bg-[#A68160]/20 transition-colors"
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <Icon className="text-[#A68160] text-xl" />
      </motion.div>
    </Link>
  );
}

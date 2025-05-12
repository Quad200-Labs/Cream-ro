"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { NavLinkProps } from "@/app/utils/interfaces";

export default function NavLink({
  href,
  label,
  onClick,
  className = "",
}: NavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`relative py-2 px-1 text-lg font-medium transition-colors duration-300 ${className}`}
      onClick={onClick}
    >
      {label}
      {isActive && (
        <motion.span
          layoutId="underline"
          className="absolute left-0 bottom-0 w-full h-0.5 bg-[#A68160]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
      )}
    </Link>
  );
}

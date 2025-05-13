"use client";

import { motion, AnimatePresence } from "framer-motion";
import { MobileMenuProps } from "@/app/utils/interfaces";
import { IoClose } from "react-icons/io5";
import NavLink from "../../atoms/nav-link";



export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const menuVariants = {
    closed: {
      opacity: 0,
      x: "100%",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
        when: "afterChildren",
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        ease: "easeInOut",
        when: "beforeChildren",
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const linkVariants = {
    closed: {
      opacity: 0,
      y: 20,
    },
    open: {
      opacity: 1,
      y: 0,
    },
  };

  const links = [
    { href: "/", label: "Home" },
    { href: "/about-us", label: "About" },
    { href: "/product", label: "Product" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          <motion.div
            className="fixed top-0 right-0 bottom-0 w-full max-w-xs bg-[#FFF9EB] z-50 flex flex-col pt-24 px-8 shadow-lg"
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            <button
              onClick={onClose}
              className="absolute top-6 right-6 p-2 hover:bg-[#A68160]/10 rounded-full transition-colors"
              aria-label="Close menu"
            >
              <IoClose size={24} className="text-[#A68160]" />
            </button>
            <nav className="flex flex-col space-y-6">
              {links.map((link) => (
                <motion.div key={link.href} variants={linkVariants}>
                  <NavLink
                    href={link.href}
                    label={link.label}
                    onClick={onClose}
                    className="text-2xl hover:text-[#A68160] text-black"
                  />
                </motion.div>
              ))}
            </nav>
            <motion.div
              className="mt-auto mb-8 pt-8 border-t border-[#A68160]/20"
              variants={linkVariants}
            >
              <p className="text-sm text-[#A68160]">
                © 2025 CreamRo. All rights reserved.
              </p>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

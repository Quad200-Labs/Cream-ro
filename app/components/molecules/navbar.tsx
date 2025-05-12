"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import NavLink from "../atoms/nav-link";
import Logo from "../atoms/logo";
import { HamburgerButton } from "../atoms/buttons";
import MobileMenu from "./mobile-navbar";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [shouldHideNav, setShouldHideNav] = useState(false);

  const { scrollY } = useScroll();
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ["rgba(255, 249, 235, 0.95)", "rgba(255, 249, 235, 0.98)"]
  );
  const boxShadow = useTransform(
    scrollY,
    [0, 100],
    ["0 0 0 rgba(0,0,0,0)", "0 4px 20px rgba(166, 129, 96, 0.1)"]
  );

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 200 && currentScrollY > lastScrollY) {
        setShouldHideNav(true);
      } else {
        setShouldHideNav(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const links = [
    { href: "/", label: "Home" },
    { href: "/about-us", label: "About" },
    { href: "/products", label: "Products" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <>
      <motion.nav
        className="fixed top-0 left-0 right-0 z-30 w-full backdrop-blur-sm transition-all duration-300 border-b border-[#A68160]"
        style={{ backgroundColor, boxShadow }}
        initial={{ y: 0 }}
        animate={{ y: shouldHideNav ? -100 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex justify-between items-center py-4 md:py-6 max-w-7xl px-10 xl:px-0 mx-auto">
          <div className="flex-1">
            <Logo />
          </div>

          <div className="hidden md:block">
            <motion.div
              className="flex gap-8 text-black"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, staggerChildren: 0.1 }}
            >
              {links.map((link) => (
                <NavLink
                  key={link.href}
                  href={link.href}
                  label={link.label}
                  className="hover:text-[#A68160]"
                />
              ))}
            </motion.div>
          </div>

          <div className="md:hidden flex justify-end flex-1">
            <HamburgerButton isOpen={isMenuOpen} onClick={toggleMenu} />
          </div>
        </div>
      </motion.nav>

      <MobileMenu isOpen={isMenuOpen} onClose={closeMenu} />
    </>
  );
}

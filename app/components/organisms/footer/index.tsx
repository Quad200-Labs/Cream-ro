"use client";

import { motion } from "framer-motion";
import Logo from "../../atoms/logo";
import SocialIcon from "../../atoms/social-icon";
import FooterSection from "../../molecules/footer-section";
import NewsletterForm from "../../molecules/newsletter-form";
import { socialLinks, ourServices, quickLinks } from "@/app/constants";
import Link from "next/link";
import { AiOutlineMail } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
import { FiMapPin } from "react-icons/fi";
import { HiOutlineCalendarDays } from "react-icons/hi2";

export default function Footer() {
  return (
    <footer className="bg-[#FFECD4]">
      <div className="mx-auto">
        <div className="container py-16 px-8 xl:px-0 mx-auto">
          <div className="text-center mb-16 flex flex-col lg:flex-row w-full justify-between items-center">
            <motion.h2
              className="text-3xl font-bold mb-6 text-black"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Stay connected with us!
            </motion.h2>
            <NewsletterForm />
          </div>

          <hr className="border-[#A68160] mb-12" />
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-x-40 xl:gap-x-80 gap-y-8 w-full">
            <div className="space-y-6">
              <Logo className="text-2xl" />
              <p className="text-black">
                Find our contact details and follow us on social media
              </p>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <SocialIcon
                    key={social.href}
                    href={social.href}
                    icon={social.icon}
                    label={social.label}
                  />
                ))}
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4">
              <FooterSection title="Our Services" links={ourServices} />

              <FooterSection title="Quick Link" links={quickLinks} />

              <div className="space-y-4">
                <h3 className="text-[#A68160] text-lg font-semibold">
                  Contacts us
                </h3>
                <div className="space-y-3">
                  <p className="flex items-center gap-2">
                    <span className="text-[#A68160]">
                      <AiOutlineMail />
                    </span>
                    <Link
                      href="mailto:sales@premier.lk"
                      className="text-[#403225] hover:text-[#A68160] transition-colors"
                    >
                      sales@premier.lk
                    </Link>
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="text-[#A68160]">
                      <BsTelephone />
                    </span>
                    <a
                      href="tel:+94112815015"
                      className="text-[#403225] hover:text-[#A68160] transition-colors"
                    >
                      +94 112815015
                    </a>
                  </p>
                  <p className="flex items-start gap-2 text-[#403225]">
                    <span className="text-[#A68160]">
                      <FiMapPin />
                    </span>
                    17A, Mudali Mawatha, Kohuwala, Sri Lanka
                  </p>
                  <p className="flex items-start gap-2 text-[#403225]">
                    <span className="text-[#A68160]">
                      <HiOutlineCalendarDays />
                    </span>
                    Mon - Fri : 8:30AM - 6:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="py-8 px-16 bg-[#A68160] border-t border-[#A68160]/20 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-white">
          <p>Copyright © 2025</p>
          <div className="flex gap-4">
            <div className="hover:text-[#A68160] transition-colors">
              All Rights Reserved
            </div>
            <span>|</span>
            <Link
              href="/terms"
              className="hover:text-[#A68160] transition-colors"
            >
              Terms and Conditions
            </Link>
            <span>|</span>
            <Link
              href="/privacy"
              className="hover:text-[#A68160] transition-colors"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

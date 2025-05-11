"use client";

import { motion } from "framer-motion";
import FooterLink from "../atoms/footer-link";

interface FooterSectionProps {
  title: string;
  links: Array<{ href: string; label: string }>;
}

export default function FooterSection({ title, links }: FooterSectionProps) {
  return (
    <div className="space-y-4">
      <motion.h3
        className="text-[#A68160] text-lg font-semibold"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        {title}
      </motion.h3>
      <ul className="space-y-2">
        {links.map((link) => (
          <li key={link.href}>
            <FooterLink href={link.href} label={link.label} />
          </li>
        ))}
      </ul>
    </div>
  );
}

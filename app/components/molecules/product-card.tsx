"use client";

import { motion } from "framer-motion";

interface ProductCardProps {
  title: string;
  description: string;
  index: number;
  image?: string;
}

export default function ProductCard({
  title,
  description,
  index,
}: ProductCardProps) {
  return (
    <div className="flex flex-col items-end relative h-fit w-full">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1, duration: 0.5 }}
        viewport={{ once: true }}
        className="absolute -top-28 min-w-32 max-w-32 min-h-40 max-h-40 bg-[#A68160] rounded-tr-[240px] rounded-tl-[240px] rounded-bl-[180px] rounded-r-none"
      ></motion.div>
      <motion.div
        key={title}
        className="bg-[#FFECD4] rounded-[40px] px-6 pt-10 pb-8 shadow-lg text-left  max-h-fit min-h-72 w-full max-w-sm"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1, duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h3 className="text-2xl font-extrabold text-[#A68160] mb-3">{title}</h3>
        <p className="text-sm font-medium text-[#403225]">{description}</p>
      </motion.div>
    </div>
  );
}

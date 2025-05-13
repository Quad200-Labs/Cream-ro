"use client";

import { motion } from "framer-motion";
import React from "react";

interface MissionVisionCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  isReversed?: boolean;
}

const MissionVisionCard: React.FC<MissionVisionCardProps> = ({
  title,
  description,
  icon,
  isReversed = false,
}) => {
  return (
    <motion.div
      className="bg-[#FFECD4] py-10 px-8 md:py-16 xl:px-12 w-fit rounded-4xl"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div
        className={`flex flex-col justify-between gap-16 w-fit ${
          isReversed ? "md:flex-row-reverse" : "md:flex-row"
        } gap-8 xl:max-w-7xl mx-auto justify-between `}
      >
        <div className="flex-1 flex flex-col justify-center ">
          <motion.h2
            className="text-5xl xl:text-7xl font-bold mb-6 qurova-font text-black"
            initial={{ opacity: 0, x: isReversed ? 20 : -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {title}
          </motion.h2>
          <motion.p
            className="text-base md:text-lg text-black leading-relaxed"
            initial={{ opacity: 0, x: isReversed ? 20 : -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            {description}
          </motion.p>
        </div>

        <motion.div
          className={`flex-1 flex  items-center max-w-fit ${
            isReversed ? "justify-start" : "justify-end"
          }`}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="w-full h-full max-w-xs min-w-xs min-h-40 max-h-80  bg-[#A68160] rounded-2xl overflow-hidden flex items-center justify-center text-white">
            {icon}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default MissionVisionCard;

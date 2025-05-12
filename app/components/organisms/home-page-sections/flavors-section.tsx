/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { motion } from "framer-motion";
import FlavorCard from "../../molecules/flavor-card";
import { useState } from "react";
import { flavors } from "@/app/constants";

export default function FlavorsSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="relative py-16 px-8 md:px-16 lg:px-20 xl:px-40 bg-[#FFECD4] overflow-hidden">
      <div className="relative z-10">
        <div className="mb-16 text-center">
          <motion.p
            className="text-[#A68160] font-medium mb-2"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Our Selection
          </motion.p>
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-semibold text-black mb-6 qurova-font"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Discover Our Flavors
          </motion.h2>
          <motion.p
            className="text-base md:text-lg text-black max-w-3xl mx-auto"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Each flavor is crafted with premium, natural ingredients and a
            passion for perfection. We only use products of natural origin that
            are free from preservatives and sourced from trusted local
            sellers—ensuring every scoop is as wholesome as it is delicious.
          </motion.p>
        </div>

        <div className="relative sm:max-w-5xl mx-auto hidden xl:block">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            {flavors.map((flavor, index) => (
              <motion.div
                key={flavor.id}
                className="w-full md:w-72 relative"
                style={{
                  zIndex: hoveredIndex === index ? 10 : flavors.length - index,
                  marginLeft: index === 0 ? "0" : "-10px",
                  marginTop: index % 2 === 0 ? "-80px" : "80px",
                }}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  transition: {
                    delay: index * 0.1,
                    duration: 0.5,
                  },
                }}
                viewport={{ once: true }}
              >
                <FlavorCard
                  flavor={flavor}
                  index={index}
                  onHover={(isHovered: any) =>
                    setHoveredIndex(isHovered ? index : null)
                  }
                />
              </motion.div>
            ))}
          </div>
        </div>

        <div className="relative xl:max-w-5xl mx-auto xl:hidden block">
          <div className="grid md:grid-cols-2 items-center justify-center gap-4">
            {flavors.map((flavor, index) => (
              <motion.div
                key={flavor.id}
                className="w-full xl:w-72 relative"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  transition: {
                    delay: index * 0.1,
                    duration: 0.5,
                  },
                }}
                viewport={{ once: true }}
              >
                <FlavorCard
                  flavor={flavor}
                  index={index}
                  onHover={(isHovered: any) =>
                    setHoveredIndex(isHovered ? index : null)
                  }
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";

export default function ProductHeroSection() {
  return (
    <section className="bg-[#FCEEDB] py-28 px-4 text-center min-h-max flex flex-col justify-center items-center w-full mb-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h1 className="text-4xl md:text-6xl font-bold qurova-font text-[#1C1208]">
          Indulge in CreamRo’s <br />
          Finest Flavors!
        </h1>
        <p className="text-lg font-semibold mt-6 text-[#1C1208] max-w-xl mx-auto">
          Discover our premium, high-quality flavours made to delight every
          taste
        </p>
      </motion.div>
    </section>
  );
}

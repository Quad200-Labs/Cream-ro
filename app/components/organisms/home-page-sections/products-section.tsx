"use client";

import { motion } from "framer-motion";
import ProductCard from "../../molecules/product-card";
import { productData, productFilters } from "@/app/constants";
import { useState } from "react";
import { LuCupSoda, LuIceCreamBowl } from "react-icons/lu";
import { BiPopsicle } from "react-icons/bi";
import { IceCreamCone } from 'lucide-react';

export default function ProductsSection() {
  const [activeFilter, setActiveFilter] = useState("All Products");
  const items = productData[activeFilter];

  return (
    <section className="px-8 md:px-16 lg:px-20 xl:px-40 pt-20 pb-20 bg-[#FFF9EB] flex flex-col gap-10">
      {/* Heading */}
      <div className="text-left xl:text-right w-full flex flex-col justify-start xl:justify-end items-start xl:items-end gap-5  h-full">
        <motion.h2
          className="text-6xl font-bold text-[#403225] qurova-font"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          How Do You Scoop ?
        </motion.h2>

        <motion.p
          className="text-[#403225] font-semibold mt-2 text-lg text-left xl:text-right max-w-md w-full flex justify-end items-end"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          Each product is made with the finest ingredients to bring you the best
          experience
        </motion.p>
      </div>

      {/* Filters */}
      <div className="flex flex-col w-full h-full space-y-40">
        <div className="flex flex-wrap justify-center sm:justify-end gap-4">
          {productFilters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`sm:px-6 py-2 rounded-full font-semibold flex items-center min-w-36 justify-center gap-2 hover:cursor-pointer duration-300 transition-all hover:border hover:border-[#A68160] ${
                activeFilter === filter
                  ? "bg-[#A68160] text-white shadow-md"
                  : "bg-white text-[#403225] hover:bg-[#FFF9EB] border border-[#A68160]/20"
              }`}
            >
              {filter === "Cones" && <IceCreamCone size={18} />}
              {filter === "Tubs" && <LuIceCreamBowl size={18} />}
              {filter === "Popsicles" && <BiPopsicle size={18} />}
              {filter === "Cups" && <LuCupSoda size={18} />}
              {filter}
            </button>
          ))}
        </div>

        {/* Product Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 space-y-40 gap-x-10 mx-auto w-full">
          {items.map((product) => (
            <ProductCard
              key={product.title}
              image={product.image}
              title={product.title}
              description={product.description}
              index={parseInt(product.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

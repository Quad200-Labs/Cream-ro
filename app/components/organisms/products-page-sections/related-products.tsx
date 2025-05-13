"use client";

import { productData } from "@/app/constants";
import { RelatedProductsProps } from "@/app/utils/interfaces";
import { useState } from "react";

export default function RelatedProducts({
  category,
  currentProductId,
}: RelatedProductsProps) {
  const related =
    productData[category]?.filter((p) => p.id !== currentProductId) ?? [];

  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = 4;

  const handleNext = () => {
    setStartIndex((prev) => Math.min(prev + 1, related.length - visibleCount));
  };

  const handlePrev = () => {
    setStartIndex((prev) => Math.max(prev - 1, 0));
  };

  const visibleItems = related.slice(startIndex, startIndex + visibleCount);

  if (related.length <= 0) return null;

  return (
    <section className="mt-24 px-4 md:px-0 text-black">
      <div className="text-center mb-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-black qurova-font">
          Other Related Products
        </h2>
        <p className="text-lg text-muted-foreground max-w-xl mx-auto font-semibold">
          Each product is made with the finest ingredients to bring you the best
          experience
        </p>
      </div>

      <div className="relative flex items-center gap-4 mt-12 overflow-hidden">
        {startIndex > 0 && (
          <button
            onClick={handlePrev}
            className="text-2xl font-bold absolute left-0 z-10"
          >
            &lt;
          </button>
        )}

        <div className="flex justify-center gap-12 w-full transition-all duration-300">
          {visibleItems.map((product) => (
            <div
              key={product.id}
              className="flex flex-col items-center text-center"
            >
              <div className="w-[160px] h-[220px] bg-[#B69B80] rounded-t-[160px] rounded-bl-[90px] mb-4" />
              <h3 className="font-semibold text-lg">{product.title}</h3>
              <p className="font-semibold mt-1 text-[#543930]">
                LKR {product.price}.00
              </p>
            </div>
          ))}
        </div>

        {startIndex + visibleCount < related.length && (
          <button
            onClick={handleNext}
            className="text-2xl font-bold absolute right-0 z-10"
          >
            &gt;
          </button>
        )}
      </div>
    </section>
  );
}

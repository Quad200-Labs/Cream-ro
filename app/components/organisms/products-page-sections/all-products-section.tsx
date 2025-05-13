"use client";

import { useEffect, useState } from "react";
import { ProductCard } from "../../molecules/product-details";
import { cn } from "@/app/lib/utils";
import { ProductsSectionProps } from "@/app/utils/interfaces";

export default function ProductsSection({ data }: ProductsSectionProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-16 md:py-28 mt-56 bg-[#fffaf0] text-black w-full overflow-hidden">
      <div className="px-4 md:px-6 mx-auto max-w-7xl space-y-20">
        {Object.entries(data).map(([category, products], catIdx) => (
          <div key={category}>
            <div
              className={cn(
                "text-center transition-all duration-700 transform",
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              )}
              style={{ transitionDelay: `${catIdx * 100}ms` }}
            >
              <h2 className="text-3xl md:text-4xl font-bold qurova-font mb-4 text-left">
                {category}
              </h2>
            </div>

            <div className="w-full h-px bg-[#B69B80] mb-10" />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
              {products.map((product, index) => (
                <div
                  key={index}
                  className={cn(
                    "transition-all duration-700 transform",
                    isVisible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-20 opacity-0"
                  )}
                  style={{ transitionDelay: `${150 + index * 100}ms` }}
                >
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

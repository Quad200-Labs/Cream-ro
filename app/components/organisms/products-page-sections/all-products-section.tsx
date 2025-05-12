"use client";

import { products } from "@/app/constants";
import { cn } from "@/app/utils/interfaces";
import { useEffect, useState } from "react";
import { ProductCard } from "../../atoms/product-details";

export default function ProductsSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-16 md:py-28 md:mt-48 mt-10 bg-[#fffaf0] text-black w-full overflow-hidden">
      <div className="px-4 md:px-6 mx-auto max-w-7xl">
        <div
          className={cn(
            "space-y-4 text-center transition-all duration-700 transform",
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          )}
        >
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight qurova-font">
            Flavors to Match Every Craving
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto jeko-font">
            From timeless classics to bold new creations, dive into our
            selection of irresistible ice cream flavors. Whether you prefer
            something familiar or love to explore unique taste sensations, we
            have the perfect scoop waiting for you
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-24 mt-16">
          {products.map((product, index) => (
            <div
              key={product.id}
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
    </section>
  );
}

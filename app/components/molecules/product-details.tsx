"use client";

import { cn } from "@/app/lib/utils";
import { Product } from "@/app/utils/interfaces";
import Image from "next/image";
import Link from "next/link";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group flex flex-col">
      <div className="w-full aspect-[4/3] flex justify-end">
        <div className="w-[210px] h-[250px] bg-[#B69B80] rounded-t-[240px] overflow-hidden rounded-bl-[105px] flex justify-center items-center" >
          <Image
            src={product.image || ""}
            alt={product.title}
            width={80}
            height={80}
            className="w-[90%] h-[90%] object-cover -mb-5"
          />
        </div>
      </div>

      <div className="mt-6 w-full text-left">
        <h3 className="text-2xl font-semibold mb-3">{product.title}</h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
          {product.description}
        </p>
        <div className="flex justify-end items-end w-full">
          <Link href={`/pages/products/${product.id}`}>
            <button
              className={cn(
                "px-6 py-2 bg-[#B69B80] text-white rounded-md text-sm font-medium w-full max-w-40",
                "hover:bg-[#9A826A] transition-colors duration-300"
              )}
            >
              View more
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

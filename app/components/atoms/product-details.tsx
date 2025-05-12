"use client";

import { cn } from "@/app/lib/utils";
import { Product } from "@/app/utils/interfaces";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  // const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group flex flex-col items-center text-center"
      // onMouseEnter={() => setIsHovered(true)}
      // onMouseLeave={() => setIsHovered(false)}
    >
      <div className="w-full aspect-[4/3] flex justify-end">
        <div className="w-[210px] h-[250px] bg-[#B69B80] rounded-t-full overflow-hidden rounded-bl-full" />
      </div>

      <div className="mt-6 w-full">
        <h3 className="text-2xl font-semibold mb-3">{product.name}</h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
          {product.description}
        </p>
        <button
          className={cn(
            "px-6 py-2 bg-[#B69B80] text-white rounded-md text-sm font-medium",
            "hover:bg-[#9A826A] transition-colors duration-300"
          )}
        >
          View more
        </button>
      </div>
    </div>
  );
}

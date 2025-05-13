"use client";

import { Product } from "@/app/utils/interfaces";
import SampleImageGallery from "../organisms/products-page-sections/sample-product-images";

interface SingleProductCardProps {
  product: Product;
}

export default function SingleProductCard({ product }: SingleProductCardProps) {
  const flavorColorMap: Record<string, string> = {
    Vanilla: "#F5E1B9",
    Chocolate: "#D8BBA0",
    Strawberry: "#FFE4EC",
    "Fruit & Nut": "#E6F8E0",
  };

  return (
    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
      <div className="w-full aspect-square bg-[#B69B80] rounded-t-[240px] rounded-bl-[105px]" />

      <div className="text-black">
        {/* Ratings */}
        <div className="flex items-center gap-2 mb-2">
          <div className="flex">
            {[1, 2, 3, 4, 5].map((i) => (
              <svg
                key={i}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill={
                  i <= Math.round(product.rating || 0) ? "#FBBF24" : "#E5E7EB"
                }
                className="w-5 h-5"
              >
                <path d="M12 .587l3.668 7.431L24 9.75l-6 5.844 1.417 8.266L12 19.897l-7.417 3.963L6 15.594 0 9.75l8.332-1.732z" />
              </svg>
            ))}
          </div>
          <span className="text-sm text-black font-medium">
            ({product.rating?.toFixed(1)}/5)
          </span>
        </div>

        <h1 className="text-4xl font-bold mb-2">{product.title}</h1>
        <div className="text-2xl font-semibold mb-4">
          LKR {product.price}.00
        </div>
        <p className="mb-6 text-gray-700">{product.description}</p>

        {product.flavors && (
          <div className="mb-4">
            <span className="font-semibold">Flavors:</span>
            <div className="flex gap-3 mt-2">
              {product.flavors.map((flavor, index) => {
                const color = flavorColorMap[flavor] || "#D1D5DB";
                return (
                  <div
                    key={index}
                    className="w-6 h-6 rounded-full border"
                    style={{ backgroundColor: color }}
                    title={flavor}
                  />
                );
              })}
            </div>
          </div>
        )}

        {product.sizes && (
          <div className="mb-4">
            <span className="font-semibold">Quantity:</span>
            <div className="flex gap-3 mt-2">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  className="border px-4 py-1 rounded hover:bg-[#A68160] hover:text-white"
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
        )}

        <SampleImageGallery />
      </div>
    </div>
  );
}

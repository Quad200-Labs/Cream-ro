"use client";

import { useState } from "react";
import ImageModal from "../../molecules/single-product-view-modal";
import { ChevronLeft, ChevronRight } from "lucide-react";

const dummyImages = [
  "/images/sample-1.jpg",
  "/images/sample-2.jpg",
  "/images/sample-3.jpg",
];

export default function SampleImageGallery() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div className="mt-10">
      <div className="flex justify-center gap-8 relative">
        <div className="absolute top-1/2 left-2 transform -translate-y-1/2">
          <button onClick={() => {}}>
            <ChevronLeft size={28} className="text-black" />
          </button>
        </div>
        {dummyImages.map((img, index) => (
          <button
            key={index}
            onClick={() => {
              setSelectedIndex(index);
              setIsModalOpen(true);
            }}
            className="w-[100px] h-[120px] bg-[#B69B80] rounded-t-[120px] rounded-bl-[60px] hover:cursor-pointer hover:scale-125 transition-transform duration-300"
          />
        ))}
        <div className="absolute top-1/2 right-2 transform -translate-y-1/2">
          <button onClick={() => {}}>
            <ChevronRight size={28} className="text-black" />
          </button>
        </div>
      </div>

      <ImageModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        images={dummyImages}
        currentIndex={selectedIndex}
        setCurrentIndex={setSelectedIndex}
      />
    </div>
  );
}

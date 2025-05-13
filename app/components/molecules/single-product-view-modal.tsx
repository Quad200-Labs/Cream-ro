"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  images: string[];
  currentIndex: number;
  setCurrentIndex: React.Dispatch<React.SetStateAction<number>>;
}

export default function ImageModal({
  isOpen,
  onClose,
  images,
  currentIndex,
  setCurrentIndex,
}: ImageModalProps) {
  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-70 z-40 "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
          >
            <div className="relative bg-white p-4 rounded-lg shadow-xl max-w-md w-full z-50 mx-4">
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-2 right-2 text-gray-600 hover:text-black hover:cursor-pointer hover:scale-110 transition-transform duration-300"
              >
                <X size={20} className="hover:cursor-pointer" onClick={onClose} />
              </button>

              <div className="relative w-full h-[400px] md:h-[500px] rounded-md overflow-hidden ">
                <Image
                  src={images[currentIndex]}
                  alt="Modal Content"
                  fill
                  className="object-contain"
                  priority
                />
              </div>

              <div className="absolute top-1/2 left-2 transform -translate-y-1/2">
                <button onClick={handlePrev}>
                  <ChevronLeft size={28} />
                </button>
              </div>
              <div className="absolute top-1/2 right-2 transform -translate-y-1/2">
                <button onClick={handleNext}>
                  <ChevronRight size={28} />
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

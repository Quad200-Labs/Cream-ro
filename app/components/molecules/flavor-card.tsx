import { useState } from "react";
import { motion } from "framer-motion";
import { FlavorCardProps } from "@/app/utils/interfaces";

export default function FlavorCard({
  flavor,
  index,
  onHover,
}: FlavorCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const handleHoverStart = () => {
    setIsHovered(true);
    onHover(true);
  };

  const handleHoverEnd = () => {
    setIsHovered(false);
    onHover(false);
  };

  return (
    <motion.div
      className={`relative overflow-hidden ${
        flavor.name === "Vanilla"
          ? "rounded-l-4xl rounded-tr-4xl"
          : flavor.name === "Chocolate"
          ? "rounded-r-4xl rounded-tl-4xl"
          : flavor.name === "Strawberry"
          ? "rounded-l-4xl rounded-tr-4xl"
          : flavor.name === "Fruit & Nut" && "rounded-r-4xl rounded-tl-4xl"
      } aspect-[3/4] min-w-xs lg:min-w-sm w-full shadow-lg`}
      style={{ backgroundColor: flavor.backgroundColor }}
      key={index}
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.2 },
      }}
      onHoverStart={handleHoverStart}
      onHoverEnd={handleHoverEnd}
    >
      <div className="flex flex-col h-full w-full p-6">
        <div className="relative flex-1 mb-4">
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              className="w-full h-full bg-gray-200/30 rounded-3xl"
              animate={{ scale: isHovered ? 1.05 : 1 }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>

        <motion.div
          className="z-10 bg-white py-3 px-6 rounded-full text-center shadow-md"
          whileHover={{ y: -2 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <h3 className="text-lg font-semibold text-black">{flavor.name}</h3>
        </motion.div>
      </div>
    </motion.div>
  );
}

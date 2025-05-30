"use client";

import Image from "next/image";
import HeroTextBlock from "../../molecules/text-block-hero";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="bg-[#FFF9EB] relative px-16 lg:px-20 xl:px-40 py-16 min-h-screen overflow-hidden flex flex-col-reverse lg:flex-row justify-between items-center gap-10">
      <div className="sm:hidden block">
        <motion.div
          className="absolute inset-0 bg-[#FFF9EB] opacity-10 z-0 pointer-events-none flex flex-col justify-center items-center xl:space-y-[-100px]"
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 20,
            ease: "linear",
          }}
        >
          <div className="flex flex-col justify-center items-center h-full w-[200%] ">
            {Array.from({ length: 10 }).map((_, i) => (
              <div key={i} className="whitespace-nowrap">
                <span className="text-[100px] xl:text-[350px] font-bold text-[#FFF9EB]/20 stroke-text select-none leading-[1]">
                  CreamRo&nbsp;CreamRo&nbsp;CreamRo&nbsp;CreamRo
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
      <div className="hidden lg:block">
        <motion.div
          className="absolute inset-0 bg-[#FFF9EB] opacity-10 z-0 pointer-events-none overflow-hidden"
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 20,
            ease: "linear",
          }}
        >
          <div className="flex flex-col justify-center items-center h-full w-[200%] space-y-[-60px] xl:space-y-[-50px]">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="whitespace-nowrap">
                <span className="text-[200px] xl:text-[350px] font-bold text-[#FFF9EB]/20 stroke-text select-none leading-[1]">
                  CreamRo&nbsp;CreamRo&nbsp;CreamRo&nbsp;CreamRo
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="relative z-10 bg-[#FFF9EB]/40">
        <Image
          src="/icons/splash-icon-left.svg"
          alt="Splash"
          width={100}
          height={100}
          className="absolute -top-18 sm:-top-16 -left-12 lg:-left-16"
        />
        <HeroTextBlock />
      </div>

      {/* Right-side Block */}
      <div className="w-[300px] h-[300px] lg:w-[600px] lg:h-[600px] bg-[#f5dcc0] rounded-xl z-10"></div>
    </section>
  );
}

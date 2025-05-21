"use client";

import { ConeTubImageProps } from "@/app/utils/interfaces";

export default function ConeTubImage({
}: ConeTubImageProps) {
  return (
    <section className="hidden md:flex items-end justify-center pb-24">
      <div className="flex items-end justify-center gap-6 qurova-font">
        <div className="relative md:w-[350px] md:h-[490px] bg-[#a67c52] rounded-t-full rounded-bl-full">
          {/* <p className="absolute -bottom-20 right-2 font-bold text-black text-3xl sm:text-6xl qurova-font">
            {coneLabel}
          </p> */}
        </div>
        <div className="relative md:w-[350px] translate-y-1/4 md:h-[490px] bg-[#a67c52] rounded-t-full rounded-br-full">
          {/* <p className="absolute -bottom-20 left-1/5 -translate-x-1/2 font-bold text-black text-3xl sm:text-6xl qurova-font">
            {tubLabel}
          </p> */}
        </div>
      </div>
    </section>
  );
}

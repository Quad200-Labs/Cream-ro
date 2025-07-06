"use client";

import { ConeTubImageProps } from "@/app/utils/interfaces";
import Image from "next/image";

export default function ConeTubImage({}: ConeTubImageProps) {
  return (
    <section className="hidden md:flex items-end justify-center pb-24">
      <div className="flex items-end justify-center gap-6 qurova-font">
        <div className="relative w-full md:h-full bg-[#a67c52] rounded-t-full rounded-bl-full">
          {/* <p className="absolute -bottom-20 right-2 font-bold text-black text-3xl sm:text-6xl qurova-font">
            {coneLabel}
          </p> */}
          <Image
            src="https://hkakezruxsleppd7.public.blob.vercel-storage.com/products-card-left-3RDN0FYwhiVWhMIsdtSzp4uf9dRgqb.svg"
            alt="Splash"
            width={100}
            height={100}
            className="w-full h-full"
          />
        </div>
        <div className="relative w-full translate-y-1/4 h-full bg-[#a67c52] rounded-t-full rounded-br-full">
          {/* <p className="absolute -bottom-20 left-1/5 -translate-x-1/2 font-bold text-black text-3xl sm:text-6xl qurova-font">
            {tubLabel}
          </p> */}
          <Image
            src="https://hkakezruxsleppd7.public.blob.vercel-storage.com/products-card-right-RrAHXNuTVs0r7oa941PpY32B1wBjyB.svg"
            alt="Splash"
            width={100}
            height={100}
            className="w-full h-full"
          />
        </div>
      </div>
    </section>
  );
}

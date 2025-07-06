"use client";

import Image from "next/image";
import HeroTextBlock from "../../molecules/text-block-hero";

export default function HeroSectionAboutUs() {
  return (
    <section className="bg-[#FFF9EB] relative px-8 lg:px-20 xl:px-40 py-16 min-h-screen overflow-hidden flex flex-col-reverse lg:flex-row justify-between items-center gap-10">
      <div className="w-full h-full">
        <HeroTextBlock
          heading={"Experience the Delight of CreamRo"}
          paragraph={
            "At CreamRo, we’re dedicated to crafting premium ice cream that blends high-quality ingredients with unforgettable flavor. Each scoop is a creamy, indulgent treat made to brighten your day and satisfy your cravings. Whether you love the comfort of classic favorites or enjoy exploring bold, unique creations, we have something for every taste. Our focus is on delivering a joyful experience in every bite—rich, smooth, and full of flavor. At CreamRo, it’s not just about ice cream; it’s about creating moments of delight you’ll want to savor again and again."
          }
          paragraphStyles="!max-w-2xl w-full h-full"
        />
      </div>
      <div className="w-full h-full rounded-xl bg-[#f6e7d5] flex items-center justify-center">
        <Image
          src="https://hkakezruxsleppd7.public.blob.vercel-storage.com/about-us-page-banner-GLPSbaZbOtU9Z9b5oVHEzflWjzKdbx.svg"
          alt="Splash"
          width={100}
          height={100}
          className="w-full h-full"
        />
      </div>
    </section>
  );
}

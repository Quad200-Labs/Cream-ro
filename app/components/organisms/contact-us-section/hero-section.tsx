"use client";

import Image from "next/image";
import HeroTextBlock from "../../molecules/text-block-hero";

export default function ContactHero() {
  return (
    <section className="bg-[#FFECD4] relative px-16 lg:px-20 xl:px-40 py-16 lg:min-h-screen overflow-hidden flex flex-col-reverse lg:flex-row justify-between items-center gap-10">
      <div className=" bg-[#f5dcc0] rounded-xl z-10 ">
        <Image
          src="/contact-us-page-banner-two.svg"
          alt="Splash"
          width={100}
          height={100}
          className="w-full h-full"
        />
      </div>
      <div className="relative z-10 w-full h-full">
        <HeroTextBlock
          heading={"Indulge in CreamRo’s Finest Flavors!"}
          paragraph={
            "Discover our premium, high-quality flavours made to delight every taste"
          }
          paragraphStyles="!max-w-2xl text-right  "
          headingAlign="text-right"
        />
      </div>
    </section>
  );
}

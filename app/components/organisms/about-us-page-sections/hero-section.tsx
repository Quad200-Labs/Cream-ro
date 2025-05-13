"use client";

import HeroTextBlock from "../../molecules/text-block-hero";
import { IoIceCreamOutline } from "react-icons/io5";

export default function HeroSectionAboutUs() {
  return (
    <section className="bg-[#FFF9EB] relative px-16 lg:px-20 xl:px-40 py-16 min-h-screen overflow-hidden flex flex-col-reverse lg:flex-row justify-between items-center gap-10">
      <HeroTextBlock
        heading={"Experience the Delight of CreamRo"}
        paragraph={
          " At CreamRo, we are passionate about crafting the finest ice cream with premium ingredients and irresistible flavors. Every scoop is a blend of rich, creamy indulgence, designed to bring joy to every moment. Whether you crave classic favorites or bold new creations, CreamRo is dedicated to making every bite a delightful experience."
        }
      />
      <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
        <div className="w-[300px] h-[400px] rounded-xl  flex items-center justify-center">
          <IoIceCreamOutline className="w-full h-full" color="black" />
        </div>
      </div>
    </section>
  );
}

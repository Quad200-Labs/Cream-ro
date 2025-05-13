"use client";

import HeroTextBlock from "../../molecules/text-block-hero";
import { IoIceCreamOutline } from "react-icons/io5";

export default function HeroSectionAboutUs() {
  return (
    <section className="bg-[#FFF9EB] relative px-8 lg:px-20 xl:px-40 py-16 min-h-screen overflow-hidden flex flex-col-reverse lg:flex-row justify-between items-center gap-10">
      <HeroTextBlock
        heading={"Experience the Delight of CreamRo"}
        paragraph={
          "At CreamRo, we’re dedicated to crafting premium ice cream that blends high-quality ingredients with unforgettable flavor. Each scoop is a creamy, indulgent treat made to brighten your day and satisfy your cravings. Whether you love the comfort of classic favorites or enjoy exploring bold, unique creations, we have something for every taste. Our focus is on delivering a joyful experience in every bite—rich, smooth, and full of flavor. At CreamRo, it’s not just about ice cream; it’s about creating moments of delight you’ll want to savor again and again."
        }
        paragraphStyles="!max-w-2xl"
      />
      <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
        <div className="w-[300px] h-[400px] rounded-xl  flex items-center justify-center">
          <IoIceCreamOutline className="w-full h-full" color="black" />
        </div>
      </div>
    </section>
  );
}

"use client";

import ConeTubImage from "../../atoms/cone-tubs-image";

export default function ProductsHeroSection() {
  return (
    <>
      <div className="bg-[#fdecd2] py-24 px-4 text-center h-screen ">
        <div className="lg:px-48 md:px-20 px-10">
          <h1 className="text-3xl sm:text-6xl font-extrabold text-black mb-6 qurova-font">
            Discover the Sweetest Indulgence
          </h1>
          <p className="text-lg md:text-xl text-gray-800 font-semibold">
            At CreamRo, we bring you a delightful range of premium ice cream,
            crafted with the finest ingredients to satisfy every craving.
            Whether you prefer the crispy crunch of a cone or the creamy
            richness of a tub, our flavors are designed to bring joy to every
            moment. Explore our delicious selection and treat yourself to a
            scoop of happiness.
          </p>
        </div>
        <div className="flex justify-center relative -bottom-20">
          <ConeTubImage />
        </div>
      </div>
    </>
  );
}

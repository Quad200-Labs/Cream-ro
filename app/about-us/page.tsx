import { IoIceCreamOutline } from "react-icons/io5";
import FeatureSection from "../components/organisms/about-us-page-sections/about-us-sections";
import Image from "next/image";
import TeamSection from "../components/organisms/about-us-page-sections/team";

export default function AboutPage() {
  return (
    <>
      <div className="bg-[#FFF9EB] sm:px-20 px-10 py-16 flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 text-left space-y-6">
          <h1 className="text-3xl sm:text-6xl font-bold text-black qurova-font">
            Experience the Delight of CreamRo
          </h1>
          <p className="text-lg leading-7 text-gray-700">
            At CreamRo, we are passionate about crafting the finest ice cream
            with premium ingredients and irresistible flavors. Every scoop is a
            blend of rich, creamy indulgence, designed to bring joy to every
            moment. Whether you crave classic favorites or bold new creations,
            CreamRo is dedicated to making every bite a delightful experience.
          </p>
        </div>
        <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
          <div className="w-[300px] h-[400px] rounded-xl  flex items-center justify-center">
            <IoIceCreamOutline className="w-full h-full" color="black" />
          </div>
        </div>
      </div>
      <FeatureSection
        title="Launch Ready"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
        icon={
          <Image
            src="/icons/rocket-icon.svg"
            alt="Splash"
            width={50}
            height={50}
            className=""
          />
        }
      />

      <FeatureSection
        title="Precise Targeting"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
        icon={
          <Image
            src="/icons/target-icon.svg"
            alt="Splash"
            width={50}
            height={50}
            className=""
          />
        }
        reverse
      />
      <TeamSection />
    </>
  );
}

import React from "react";

type FeatureSectionProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
  reverse?: boolean;
};

const FeatureSection: React.FC<FeatureSectionProps> = ({
  title,
  description,
  icon,
  reverse = false,
}) => {
  return (
    <div
      className={`flex flex-col md:flex-row justify-between  ${
        reverse ? "md:flex-row-reverse md:pr-24 p-8" : "md:pl-24 p-8"
      } items-center gap-8 py-10  bg-[#FFF9EB]`}
    >
      <div className="md:w-2/3 text-left ">
        <h2 className="text-3xl font-bold text-black mb-4">{title}</h2>
        <p className="text-base text-gray-800 leading-relaxed">{description}</p>
      </div>

      <div className="md:w-1/3 flex justify-center">
        <div className="lg:min-w-[410px] h-[290px] bg-[#FCE7CA] rounded-xl flex items-start justify-start p-5">
          <div className="text-brown-700 bg-[#A68160] rounded-t-full rounded-br-full p-5 ">
            {icon}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;

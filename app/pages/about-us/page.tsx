import FeatureSection from "@/app/components/organisms/about-us-page-sections/about-us-sections";
import HeroSectionAboutUs from "@/app/components/organisms/about-us-page-sections/hero-section";
import TeamSection from "@/app/components/organisms/about-us-page-sections/team";
import Image from "next/image";


export default function AboutPage() {
  return (
    <>
      <HeroSectionAboutUs />
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

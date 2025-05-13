import MissionVisionCard from "@/app/components/molecules/mission-vision-card";
import HeroSectionAboutUs from "@/app/components/organisms/about-us-page-sections/hero-section";
import OurStory from "@/app/components/organisms/about-us-page-sections/our-story-section";
import { Lightbulb, Target } from "lucide-react";

export default function AboutPage() {
  return (
    <>
      <HeroSectionAboutUs />

      <OurStory />

      <div className="flex flex-col bg-[#FFF9EB] justify-center items-center gap-8 w-full mx-auto px-10 pb-20">
        <MissionVisionCard
          title="Vision"
          description="Our vision is to be a respected and leading name in the dairy industry, recognized for our dedication to quality, innovation, and sustainable practices. We aim to make a meaningful difference by creating value and fostering positive relationships with our customers, employees, partners, and the communities we serve."
          icon={<Lightbulb size={120} strokeWidth={1} />}
        />

        <MissionVisionCard
          title="Mission"
          description="Our mission is to ethically source, expertly produce, and wholeheartedly deliver premium dairy products. We strive to create lasting value for our customers, empower our employees, and support the well-being of the communities we serve through quality, integrity, and dedication in everything we do."
          icon={<Target size={120} strokeWidth={1} />}
          isReversed={true}
        />
      </div>
      {/* <TeamSection /> */}
    </>
  );
}

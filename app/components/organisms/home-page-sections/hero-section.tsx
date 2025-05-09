import Image from "next/image";
import HeroTextBlock from "../../molecules/text-block-hero";

export default function Hero() {
  return (
    <section className="bg-[#FFF9EB] flex flex-col-reverse lg:flex-row justify-between items-center relative px-16 lg:px-28 xl:px-40 py-16 min-h-screen ">
      <div className="relative z-10">
        <Image
          src="/icons/splash-icon-left.svg"
          alt="Splash"
          width={100}
          height={100}
          className="absolute -top-18 sm:-top-16 -left-12 lg:-left-16"
        />
        <HeroTextBlock />
      </div>
      <span className="creamro-text">CREAMRO</span>
      <div className="w-[560px] h-[675px] bg-[#f5dcc0] rounded-xl hidden lg:block"></div>
    </section>
  );
}

import HeroTextBlock from "../../molecules/text-block-hero";

export default function Hero() {
  return (
    <section className="bg-[#fdf6ee] flex flex-col-reverse lg:flex-row justify-between items-center px-8 py-16">
      <HeroTextBlock />
      <div className="w-[300px] h-[300px] bg-[#f5dcc0] rounded-xl"></div>
    </section>
  );
}

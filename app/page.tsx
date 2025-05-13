import FlavorsSection from "@/app/components/organisms/home-page-sections/flavors-section";
import Hero from "@/app/components/organisms/home-page-sections/hero-section";
import ProductsSection from "@/app/components/organisms/home-page-sections/products-section";

export default function Home() {
  return (
    <>
      <Hero />
      <FlavorsSection />
      <ProductsSection />
    </>
  );
}

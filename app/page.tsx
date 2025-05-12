import FlavorsSection from "./components/organisms/home-page-sections/flavors-section";
import Hero from "./components/organisms/home-page-sections/hero-section";
import ProductsSection from "./components/organisms/home-page-sections/products-section";

export default function Home() {
  return (
    <>
      <Hero />
      <FlavorsSection />
      <ProductsSection />
    </>
  );
}

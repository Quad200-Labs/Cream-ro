import ProductsSection from "@/app/components/organisms/products-page-sections/all-products-section";
import ProductsHeroSection from "@/app/components/organisms/products-page-sections/products-hero";


export default function ProdcutsPage() {
  return (
    <>
      <main className="bg-[#FFF9EB]">
        <ProductsHeroSection />
        <ProductsSection />
      </main>
    </>
  );
}

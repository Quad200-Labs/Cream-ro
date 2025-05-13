import ProductsSection from "@/app/components/organisms/products-page-sections/all-products-section";
import ProductsHeroSection from "@/app/components/organisms/products-page-sections/products-hero";
import { productData } from "@/app/constants";


export default function ProdcutsPage() {
  const filteredProductData = Object.fromEntries(
    Object.entries(productData).filter(([key]) => key !== "All Products")
  );

  return (
    <>
      <main className="bg-[#FFF9EB]">
        <ProductsHeroSection />
        <ProductsSection data={filteredProductData} />
      </main>
    </>
  );
}

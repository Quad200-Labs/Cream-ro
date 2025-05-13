import SingleProductCard from "@/app/components/molecules/single-product-card";
import RelatedProducts from "@/app/components/organisms/products-page-sections/related-products";
import ProductHeroSection from "@/app/components/organisms/products-page-sections/single-product-hero-section";
import { productData } from "@/app/constants";
import { Product } from "@/app/utils/interfaces";
import { notFound } from "next/navigation";

interface ProductPageProps {
  params: { id: string };
}

export default function ProductPage({ params }: ProductPageProps) {
  const allProducts = Object.values(productData).flat();

  const product = allProducts.find((p) => p.id === params.id);

  if (!product) return notFound();

  let currentProduct: Product | undefined = undefined;
  let currentCategory: string | undefined = undefined;

  for (const [category, products] of Object.entries(productData)) {
    const found = products.find((p) => p.id === params.id);
    if (found) {
      currentProduct = found;
      currentCategory = category;
      break;
    }
  }

  if (!currentProduct || !currentCategory) return notFound();

  return (
    <main className="bg-[#FFF9EB] pb-20">
      <ProductHeroSection />
      <SingleProductCard product={currentProduct} />
      <RelatedProducts
        category={currentCategory}
        currentProductId={currentProduct.id}
      />
    </main>
  );
}

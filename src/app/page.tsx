import { Categories } from "@/components/home/Categories";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { Hero } from "@/components/home/Hero";
import { getCategories, getProducts } from "@/lib/api/products";

export default async function Home() {
  const [productsData, categories] = await Promise.all([
    getProducts(8),
    getCategories(),
  ]);

  return (
    <main className="bg-black">
      <Hero />

      <Categories categories={categories} />

      <FeaturedProducts products={productsData.products} />
    </main>
  );
}

import { ProductGrid } from "@/components/products/ProductGrid";
import { getProducts, searchProducts } from "@/lib/api/products";

interface ShopPageProps {
  searchParams: Promise<{
    q?: string;
  }>;
}

export default async function ShopPage({ searchParams }: ShopPageProps) {
  const params = await searchParams;
  const query = params.q?.trim() ?? "";

  const data = query ? await searchProducts(query, 20) : await getProducts(20);

  return (
    <main className="min-h-screen bg-black px-6 py-16 text-white">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-10">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-white/40">
            {query ? "Search results" : "Explore"}
          </p>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            {query ? `Results for "${query}"` : "Shop"}
          </h1>

          <p className="mt-4 max-w-2xl text-white/50">
            {query
              ? `Showing products matching "${query}".`
              : "Discover our collection of products and find something you love."}
          </p>
        </div>

        {/* Products */}
        {data.products.length > 0 ? (
          <ProductGrid products={data.products} />
        ) : (
          <div className="flex min-h-60 items-center justify-center rounded-2xl border border-white/10">
            <p className="text-white/50">No products found for "{query}".</p>
          </div>
        )}
      </div>
    </main>
  );
}

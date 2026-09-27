import Link from "next/link";
import { ProductGrid } from "@/components/products/ProductGrid";
import type { Product } from "@/types/product";

interface FeaturedProductsProps {
  products: Product[];
}

export function FeaturedProducts({ products }: FeaturedProductsProps) {
  return (
    <section className="bg-black px-6 py-20 text-white">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-10 flex items-end justify-between gap-6">
          <div>
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-white/40">
              Curated for you
            </p>

            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Featured Products
            </h2>
          </div>

          <Link
            href="/shop"
            className="hidden items-center rounded-md px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-white/10 sm:flex"
          >
            View all →
          </Link>
        </div>

        {/* Products */}
        <ProductGrid products={products} />

        {/* Mobile View All */}
        <div className="mt-8 flex justify-center sm:hidden">
          <Link
            href="/shop"
            className="inline-flex items-center justify-center rounded-md border border-white/20 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-white hover:text-black"
          >
            View all products
          </Link>
        </div>
      </div>
    </section>
  );
}

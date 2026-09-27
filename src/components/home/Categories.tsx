import Link from "next/link";

import type { ProductCategory } from "@/types/product";

interface CategoriesProps {
  categories: ProductCategory[];
}

export function Categories({ categories }: CategoriesProps) {
  return (
    <section className="bg-black px-6 py-20 text-white">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-10">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-white/40">
            Explore
          </p>

          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Shop by Category
          </h2>
        </div>

        {/* Categories */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {categories.map((category) => (
            <Link
              key={category.slug}
              href={`/shop?category=${category.slug}`}
              className="group rounded-2xl border border-white/10 bg-white p-6 text-black transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              <div className="flex min-h-28 flex-col justify-between">
                <span className="text-xs font-medium uppercase tracking-[0.2em] text-black/40">
                  Category
                </span>

                <h3 className="text-lg font-semibold capitalize transition-transform duration-300 group-hover:translate-x-1">
                  {category.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

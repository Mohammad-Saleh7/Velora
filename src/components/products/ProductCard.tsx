import Image from "next/image";
import { Heart, ShoppingCart, Star } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import type { Product } from "@/types/product";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const discountedPrice =
    product.price - (product.price * product.discountPercentage) / 100;

  return (
    <Card className="group relative overflow-hidden border-black/5 bg-white text-black shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
      {/* Discount */}
      {product.discountPercentage > 0 && (
        <Badge className="absolute left-5 top-5 z-10 border-0 bg-black/80 text-white backdrop-blur-md">
          -{Math.round(product.discountPercentage)}%
        </Badge>
      )}

      {/* Wishlist */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-5 top-5 z-10 rounded-full bg-white/80 text-black shadow-sm backdrop-blur-md transition-all duration-300 hover:bg-black hover:text-white"
      >
        <Heart className="size-4 transition-transform duration-300 group-hover:scale-110" />
      </Button>

      {/* Product Image */}
      <div className="relative aspect-square overflow-hidden rounded-xl bg-neutral-100">
        <Image
          src={product.thumbnail}
          alt={product.title}
          fill
          sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />

        {/* Image Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      </div>

      {/* Product Info */}
      <div className="space-y-3 px-1 pb-1 pt-4">
        {/* Rating */}
        <div className="flex items-center gap-1 text-sm text-black/60">
          <Star className="size-4 fill-yellow-400 text-yellow-400" />
          <span>{product.rating.toFixed(1)}</span>
        </div>

        {/* Title */}
        <h3 className="line-clamp-2 min-h-12 text-sm font-semibold leading-6 text-black">
          {product.title}
        </h3>

        {/* Price */}
        <div className="flex items-center gap-2">
          <span className="text-lg font-bold text-black">
            ${discountedPrice.toFixed(2)}
          </span>

          <span className="text-sm text-black/40 line-through">
            ${product.price.toFixed(2)}
          </span>
        </div>

        {/* Add To Cart */}
        <Button className="w-full gap-2 rounded-xl bg-black text-white transition-all duration-300 hover:scale-[1.02] hover:bg-black/80">
          <ShoppingCart className="size-4" />
          Add to cart
        </Button>
      </div>
    </Card>
  );
}

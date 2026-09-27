import Link from "next/link";
import { Heart, Menu, Search, ShoppingBag, User, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { SearchInput } from "@/components/search/SearchInput";

const navigationItems = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Shop",
    href: "/shop",
  },
  {
    label: "Categories",
    href: "/categories",
  },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/80 text-white backdrop-blur-xl">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-bold tracking-[0.25em] transition-opacity duration-300 hover:opacity-70"
        >
          VELORA
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navigationItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-white/70 transition-colors duration-300 hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-1">
          <SearchInput />

          <Button
            variant="ghost"
            size="icon"
            className="hidden text-white hover:bg-white/10 hover:text-white sm:flex"
          >
            <Heart className="size-5" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="text-white hover:bg-white/10 hover:text-white"
          >
            <ShoppingBag className="size-5" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="hidden text-white hover:bg-white/10 hover:text-white sm:flex"
          >
            <User className="size-5" />
          </Button>

          {/* Mobile Menu */}
          <Button
            variant="ghost"
            size="icon"
            className="text-white hover:bg-white/10 hover:text-white md:hidden"
          >
            <Menu className="size-5" />
          </Button>
        </div>
      </nav>
    </header>
  );
}

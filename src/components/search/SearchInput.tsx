"use client";

import { Search, X } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function SearchInput() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const query = searchParams.get("q") ?? "";

  const [value, setValue] = useState(query);

  return (
    <form action="/shop" method="GET" className="flex items-center gap-2">
      <div className="relative">
        <Input
          name="q"
          value={value}
          onChange={(event) => setValue(event.target.value)}
          placeholder="Search products..."
          className="w-64 border-white/10 bg-white/5 pr-10 text-white placeholder:text-white/40"
        />

        {value && (
          <Button
            type="button"
            variant="ghost"
            size="icon"
            onClick={() => {
              setValue("");
              router.push("/shop");
            }}
            className="absolute right-1 top-1/2 size-8 -translate-y-1/2 text-white/50 hover:bg-white/10 hover:text-white"
          >
            <X className="size-4" />
          </Button>
        )}
      </div>

      <Button
        type="submit"
        size="icon"
        className="bg-black text-white hover:bg-white/10 cursor-pointer "
      >
        <Search className="size-4" />
      </Button>
    </form>
  );
}

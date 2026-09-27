"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

import { Button } from "@/components/ui/button";

export function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const context = gsap.context(() => {
      const timeline = gsap.timeline();

      timeline
        .from(".hero-title", {
          y: 80,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
        })
        .from(
          ".hero-description",
          {
            y: 40,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.5",
        )
        .from(
          ".hero-button",
          {
            y: 30,
            opacity: 0,
            duration: 0.6,
            ease: "power3.out",
          },
          "-=0.3",
        );
    }, heroRef);

    return () => context.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative flex min-h-[calc(100vh-5rem)] items-center overflow-hidden bg-black"
    >
      <div className="mx-auto w-full max-w-7xl px-6 py-20">
        <div className="max-w-3xl">
          <p className="hero-description mb-4 text-sm font-medium uppercase tracking-[0.4em] text-white/50">
            The new standard
          </p>

          <h1 className="hero-title text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-8xl">
            Discover
            <br />
            Your Style.
          </h1>

          <p className="hero-description mt-6 max-w-xl text-base leading-7 text-white/60 sm:text-lg">
            Discover products designed to elevate your everyday experience.
            Simple, modern and made for you.
          </p>

          <div className="hero-button mt-8">
            <Button
              size="lg"
              className="rounded-full bg-white px-8 text-black transition-transform duration-300 hover:scale-105 hover:bg-white"
            >
              Shop Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

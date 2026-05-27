"use client";

import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { Inter, Syne } from "next/font/google";

import Floating, { FloatingElement } from "@/components/ui/parallax-floating";
import { cn } from "@/lib/utils";

const syne = Syne({
  subsets: ["latin"],
  weight: "800",
});

const inter = Inter({
  subsets: ["latin"],
  weight: "300",
});

const navItems = ["FEATURES", "PRICING", "CONTACT"] as const;

const exampleImages = [
  {
    url: "https://images.unsplash.com/photo-1727341554370-80e0fe9ad082?q=80&w=2276&auto=format&fit=crop&ixlib=rb-4.0.3",
    title: "A black and white photo of a woman brushing her teeth",
  },
  {
    url: "https://images.unsplash.com/photo-1640680608781-2e4199dd1579?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3",
    title: "Neon palm",
  },
  {
    url: "https://images.unsplash.com/photo-1726083085160-feeb4e1e5b00?q=80&w=3024&auto=format&fit=crop&ixlib=rb-4.0.3",
    title: "A blurry photo of a crowd of people",
  },
  {
    url: "https://images.unsplash.com/photo-1562016600-ece13e8ba570?q=80&w=2838&auto=format&fit=crop&ixlib=rb-4.0.3",
    title: "Rippling crystal blue water",
  },
  {
    url: "https://images.unsplash.com/photo-1624344965199-ed40391d20f2?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.0.3",
    title: "Man under a blue sky",
  },
  {
    url: "https://images.unsplash.com/photo-1689553079282-45df1b35741b?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3",
    title: "A woman with a flower crown on her head",
  },
  {
    url: "https://images.unsplash.com/photo-1721968317938-cf8c60fccd1a?q=80&w=2728&auto=format&fit=crop&ixlib=rb-4.0.3",
    title: "A blurry photo of white flowers in a field",
  },
  {
    url: "https://images.unsplash.com/photo-1677338354108-223e807fb1bd?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3",
    title: "A table topped with two wine glasses and plates",
  },
];

export function Hero() {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate("img", { opacity: [0, 1] }, { duration: 0.5, delay: stagger(0.15) });
  }, [animate]);

  return (
    <section
      ref={scope}
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-black"
    >
      <nav
        className={cn(
          inter.className,
          "absolute left-1/2 top-6 z-50 flex -translate-x-1/2 items-center gap-2 rounded-full border border-white/15 bg-black/35 px-2 py-2 text-xs font-light text-white/90 backdrop-blur-md md:top-8 md:gap-3 md:px-3 md:text-sm",
        )}
        aria-label="Homepage sections"
      >
        {navItems.map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="rounded-full px-3 py-2 transition-colors hover:bg-white/15 hover:text-white md:px-4"
          >
            {item}
          </a>
        ))}
      </nav>

      <motion.div
        className="relative z-50 flex max-w-2xl flex-col items-center space-y-5 px-8 py-8 text-center"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.88, delay: 1.5 }}
      >
        <div className="absolute inset-x-0 top-1/2 -z-10 mx-auto h-44 max-w-xl -translate-y-1/2 rounded-full bg-white/[0.11] blur-3xl backdrop-blur-2xl" />
        <p
          className={cn(
            syne.className,
            "z-50 text-5xl font-extrabold tracking-tight text-white md:text-7xl",
          )}
        >
          Infinie.
        </p>
        <p
          className={cn(
            inter.className,
            "z-50 max-w-xl text-base font-light leading-7 text-white/75 md:text-xl md:leading-9",
          )}
        >
          Infinite space for your infinite mind.
        </p>
        <button
          className={cn(
            inter.className,
            "z-50 rounded-full bg-white/90 px-7 py-2.5 text-sm font-light text-black transition-transform hover:scale-110 md:px-8 md:py-3 md:text-base",
          )}
        >
          Get Started
        </button>
      </motion.div>

      <Floating sensitivity={-1} className="z-10 overflow-hidden">
        <FloatingElement depth={0.5} className="left-[11%] top-[8%]">
          <motion.img
            src={exampleImages[0].url}
            alt={exampleImages[0].title}
            className="h-16 w-16 object-cover transition-transform duration-200 hover:scale-105 md:h-24 md:w-24"
          />
        </FloatingElement>
        <FloatingElement depth={1} className="left-[32%] top-[10%]">
          <motion.img
            src={exampleImages[1].url}
            alt={exampleImages[1].title}
            className="h-20 w-20 object-cover transition-transform duration-200 hover:scale-105 md:h-28 md:w-28"
          />
        </FloatingElement>
        <FloatingElement depth={2} className="left-[53%] top-[2%]">
          <motion.img
            src={exampleImages[2].url}
            alt={exampleImages[2].title}
            className="h-40 w-28 object-cover transition-transform duration-200 hover:scale-105 md:h-52 md:w-40"
          />
        </FloatingElement>
        <FloatingElement depth={1} className="left-[83%] top-0">
          <motion.img
            src={exampleImages[3].url}
            alt={exampleImages[3].title}
            className="h-24 w-24 object-cover transition-transform duration-200 hover:scale-105 md:h-32 md:w-32"
          />
        </FloatingElement>
        <FloatingElement depth={1} className="left-[2%] top-[40%]">
          <motion.img
            src={exampleImages[4].url}
            alt={exampleImages[4].title}
            className="h-28 w-28 object-cover transition-transform duration-200 hover:scale-105 md:h-36 md:w-36"
          />
        </FloatingElement>
        <FloatingElement depth={2} className="left-[77%] top-[70%]">
          <motion.img
            src={exampleImages[7].url}
            alt={exampleImages[7].title}
            className="h-28 w-28 object-cover transition-transform duration-200 hover:scale-105 md:h-48 md:w-36"
          />
        </FloatingElement>
        <FloatingElement depth={4} className="left-[15%] top-[73%]">
          <motion.img
            src={exampleImages[5].url}
            alt={exampleImages[5].title}
            className="h-full w-40 object-cover transition-transform duration-200 hover:scale-105 md:w-52"
          />
        </FloatingElement>
        <FloatingElement depth={1} className="left-[50%] top-[80%]">
          <motion.img
            src={exampleImages[6].url}
            alt={exampleImages[6].title}
            className="h-24 w-24 object-cover transition-transform duration-200 hover:scale-105 md:h-32 md:w-32"
          />
        </FloatingElement>
      </Floating>
    </section>
  );
}

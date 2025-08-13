
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const carouselData = [
  {
    label: "Classic Black",
    image: "/slide 1.png"
  },
  {
    label: "Elegant White",
    image: "/slide 2.png"
  },
  {
    label: "Modern Silver",
    image: "/slide 3.png"
  }
  // Add more items as needed
];

export default function HeroCarousel() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selected = carouselData[selectedIndex];

  // Auto change image every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedIndex((prev) => (prev + 1) % carouselData.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="lg:h-screen h-auto w-full py-10 text-neutral-900 mt-10">
      <div className="max-w-[80%] mx-auto flex flex-col items-center text-center space-y-8">

        <div className="relative w-full aspect-[9/16] lg:aspect-[16/9] rounded-xl overflow-hidden bg-white shadow-md">
          <Image
            src={selected.image}
            alt={selected.label}
            fill
            className="object-cover"
            priority
          />

          {/* Selector */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-3 px-5 py-3 rounded-full bg-white/5 shadow-md">
            {carouselData.map((item, index) => (
              <button
                key={item.label}
                onClick={() => setSelectedIndex(index)}
                className={`w-4 h-4 rounded-full border-2 border-white flex items-center justify-center transition-all overflow-hidden ${selectedIndex === index
                    ? "bg-white "
                    : "bg-transparent "
                  }`}
                aria-label={item.label}
              >
              </button>
            ))}
          </div>
          <div className="absolute bottom-4 right-4 flex gap-3 px-7 py-7 rounded-full bg-white/5 shadow-md">
            <Image
              src="/icon.png"
              alt="icon"
              fill
              className="object-cover"
              priority
            />
          </div>
          
            <div className="absolute top-30 left-12 flex flex-col text-white items-start max-w-lg">
              <h2 className="text-3xl sm:text-5xl font-light leading-tight mb-20 text-left">
                A NEW ERA OF <span className="font-bold italic">INNOVATION</span>
              </h2>
              <div className="mt-2 space-y-1 text-2xl md:text-4xl font-light italic text-left">
                <p>SLEEK</p>
                <p>SMART</p>
                <p>EFFORTLESS</p>
              </div>
            </div>
        </div>
      </div>
    </section>
  );
}

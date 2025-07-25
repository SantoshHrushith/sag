
"use client";

import { useState } from "react";
import Image from "next/image";
import colors from "@/data/colorOptions.json";

export default function RingSelector() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selected = colors[selectedIndex];

  return (
    <section className="lg:h-[120vh] h-auto w-full px-6 py-10 text-neutral-900">
      <div className="max-w-5xl mx-auto flex flex-col items-center text-center space-y-8">

        {/* Text */}
        <h2 className="text-3xl md:text-4xl font-medium leading-tight">
          A finish for every lifestyle
        </h2>

        {/* Image with selector */}
        <div className="relative w-full aspect-[9/16] lg:aspect-[16/9] max-w-[70vw] rounded-xl overflow-hidden bg-white shadow-md">
          <Image
            src={selected.image}
            alt={selected.label}
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />

          {/* Selector */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-3 px-5 py-3 rounded-full  bg-white/5 shadow-md">
            {colors.map((color, index) => (
              <button
                key={color.label}
                onClick={() => setSelectedIndex(index)}
                className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
                  selectedIndex === index
                    ? "border-gray-800"
                    : "border-transparent"
                }`}
              >
                <div
                  className="w-4 h-4 rounded-full"
                  style={{ backgroundColor: color.color }}
                />
              </button>
            ))}
          </div>
        </div>

        {/* Button */}
        <button className="px-6 py-3 bg-black text-white rounded-full hover:bg-neutral-800 transition">
          Choose your PowerTrack
        </button>
      </div>
    </section>
  );
}

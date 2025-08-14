import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    img: "/images/slide1.png",
    title: "Internal Functionality",
    highlight: "Functionality",
    description:
      "A precision-engineered internal rail system ensures safe, efficient, and seamless power distribution. All components are enclosed in a fire-retardant aluminum body for maximum safety."
  },
  {
    img: "/images/slide2.png",
    title: "Rubber Seal",
    highlight: "Seal",
    description:
      "Ensuring no object larger than 1mm can reach live components."
  },
  {
    img: "/images/slide3.png",
    title: "Crafted for Performance",
    highlight: "Built for Life",
    description:
      "Durable design meets elegant aesthetics."
  }
];

export default function ImageSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [current]);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-full flex justify-center items-center overflow-hidden py-10">
      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-5 z-10 p-2 bg-white/70 rounded-full hover:bg-white shadow"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-5 z-10 p-2 bg-white/70 rounded-full hover:bg-white shadow"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Slides */}
      <div className="flex gap-6 transition-transform duration-500 ease-in-out">
        {slides.map((slide, index) => {
          const isActive = index === current;
          return (
            <div
              key={index}
              className={`transition-all duration-500 ease-in-out rounded-2xl shadow-lg overflow-hidden ${
                isActive ? "w-[600px] h-[400px]" : "w-[300px] h-[200px] opacity-70"
              } relative bg-black`}
            >
              <img
                src={slide.img}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-4">
                <h3 className="text-lg font-bold">
                  {slide.title.split(slide.highlight)[0]}
                  <span className="text-yellow-400">{slide.highlight}</span>
                  {slide.title.split(slide.highlight)[1]}
                </h3>
                <p className="text-sm">{slide.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

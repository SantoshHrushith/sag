
import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    img: "/slide 1.png",
    alt: "Slide 1"
  },
  {
    img: "/slide 2.png",
    alt: "Slide 2"
  },
  {
    img: "/slide 3.png",
    alt: "Slide 3"
  },
  {
    img: "/slide 1.png",
    alt: "Slide 4"
  },
  {
    img: "/slide 1.png",
    alt: "Slide 5"
  },
  {
    img: "/slide 1.png",
    alt: "Slide 6"
  },
  {
    img: "/slide 1.png",
    alt: "Slide 7"
  }
];

export default function ImageSlider() {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 4000);
        return () => clearInterval(interval);
    }, [current]);

    const prevSlide = () => {
        setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };

    const nextSlide = () => {
        setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    };

    const getSlideStyle = (idx: number) => {
        let pos = idx - current;
        if (pos < -1) pos += slides.length;
        if (pos > 1) pos -= slides.length;

        const scale = pos === 0 ? 1 : 0.85;
        const zIndex = pos === 0 ? 20 : 10;
        const opacity = pos === 0 ? 1 : 0.7;
        const translateX = pos * 320;

        // Fix: pointerEvents must be a valid CSS type, not string
        return {
            transform: `translateX(${translateX}px) scale(${scale})`,
            zIndex,
            opacity,
            transition: "transform 0.5s, opacity 0.5s",
            position: "absolute" as const,
            left: "50%",
            top: "50%",
            width: "900px",
            height: "520px",
            marginLeft: "-450px",
            marginTop: "-260px",
            // Use correct type for pointerEvents
            pointerEvents: pos === 0 ? "auto" as React.CSSProperties['pointerEvents'] : undefined
        };
    };

    return (
        <div className="relative w-full max-w-6xl mx-auto flex flex-col items-center py-18">
            {/* Title */}
            <div className="mb-8 text-center">
                <h2 className="text-3xl md:text-5xl font-[600] text-green">
                    Visualize the R Series<br />
                    <span className="font-[200] italic text-blue">in Your Envirinment</span>
                </h2>
            </div>
            {/* Slider */}
            <div className="relative w-full h-[520px] flex items-center justify-center overflow-hidden">
                {slides.map((slide, idx) => {
                    let pos = idx - current;
                    if (pos < -1) pos += slides.length;
                    if (pos > 1) pos -= slides.length;
                    if (Math.abs(pos) > 1) return null;

                    return (
                        <div
                            key={idx}
                            style={getSlideStyle(idx)}
                            className="rounded-3xl overflow-hidden shadow-2xl bg-white flex-shrink-0 flex items-center justify-center"
                        >
                            <img
                                src={slide.img}
                                alt=""
                                className="w-full h-full object-cover"
                            />
                        </div>
                    );
                })}
                {/* Navigation Buttons */}
                <button
                    onClick={prevSlide}
                    className="absolute left-2 top-1/2 -translate-y-1/2 z-30 p-2 bg-green/80 rounded-full hover:bg-yellow shadow"
                >
                    <ChevronLeft className="w-6 h-6 text-[#14213D]" />
                </button>
                <button
                    onClick={nextSlide}
                    className="absolute right-2 top-1/2 -translate-y-1/2 z-30 p-2 bg-green/80 rounded-full hover:bg-yellow shadow"
                >
                    <ChevronRight className="w-6 h-6 text-[#14213D]" />
                </button>
            </div>
            {/* <div className="mt-6 text-[#14213D] font-medium">
                {current + 1}/{slides.length}
            </div> */}
        </div>
    );
}
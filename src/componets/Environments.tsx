"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { IoClose, IoAddOutline } from "react-icons/io5";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { IoIosArrowBack, IoIosArrowForward, } from "react-icons/io";
import environments from "@/data/environments.json";
import "./env.css"

gsap.registerPlugin(ScrollTrigger);

export default function Environments() {
    const [selected, setSelected] = useState<number | null>(null);
    const imageRefs = useRef<(HTMLImageElement | null)[]>([]);
    const containerRef = useRef<HTMLDivElement | null>(null);
    const [scrollProgress, setScrollProgress] = useState(0);

    // Parallax effect
    useEffect(() => {
        imageRefs.current.forEach((img) => {
            if (!img) return;
            gsap.to(img, {
                y: -100,
                ease: "none",
                scrollTrigger: {
                    trigger: img,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true,
                },
            });
        });
    }, []);

    // Scroll progress bar logic
    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const updateScroll = () => {
            const { scrollLeft, scrollWidth, clientWidth } = container;
            const progress = (scrollLeft / (scrollWidth - clientWidth)) * 100;
            setScrollProgress(progress);
        };

        container.addEventListener("scroll", updateScroll);
        return () => container.removeEventListener("scroll", updateScroll);
    }, []);

    const scrollByAmount = (amount: number) => {
        if (containerRef.current) {
            containerRef.current.scrollBy({ left: amount, behavior: "smooth" });
        }
    };

    return (
        <div className="w-full overflow-hidden relative py-20 px-6">
            {/* Scrollable Image Cards */}
            <div
                ref={containerRef}
                className="flex gap-6 snap-x snap-mandatory overflow-x-scroll pb-4 scrollbar-hide"
            >
                {environments.map((env, index) => {
                    const isSelected = selected === index;

                    return (
                        // <div
                        // key={index}
                        // className="relative snap-start group rounded-xl overflow-hidden transition-all duration-500 shrink-0"
                        // style={{
                        //     width: isSelected ? "70vw" : "30vw",
                        //     height: "70vh",
                        // }}

                        // >
                        <div
                            key={index}
                            className={`env-card ${isSelected ? "selected" : ""}`}
                            // ref={(el) => { if (el) imageRefs.current[index] = el }}
                        >

                            <div className="w-full h-full relative">
                                <img
                                    ref={(el) => { if (el) { imageRefs.current[index] = el } }}
                                    src={env.image}
                                    alt={env.topText}
                                    className="w-full h-[125%] object-cover"
                                />

                                {/* Overlay Text */}
                                <div className="absolute top-4 left-4 text-black px-3 py-1 rounded-2xl backdrop-blur-sm bg-white/10 text-sm">
                                    {env.topText}
                                </div>

                                <div className="absolute bottom-4 left-4 text-white text-lg">
                                    <p className="font-semibold">{env.bottomText}</p>
                                    {isSelected && (
                                        <>

                                            <div className="max-w-md text-white text-xs bg-black/30 backdrop-blur-sm px-4 py-2 rounded-xl">
                                                {env.description}
                                            </div>
                                        </>
                                    )}
                                </div>
                                {/* {isSelected && (
                                    <>
                                        <div className="absolute bottom-4 right-4 max-w-sm bg-black/50 backdrop-blur-md text-white text-sm px-4 py-2 rounded-xl">
                                            <p className="font-semibold">{env.bottomText}</p>
                                            </div>
                                        <div className="absolute max-w-md text-white text-xs bg-black/30 backdrop-blur-sm px-4 py-2 rounded-xl">
                                            {env.description}
                                        </div>
                                    </>
                                )} */}

                                {/* Toggle Expand Button */}
                                <button
                                    className="absolute top-4 right-4 bg-white rounded-full p-3"
                                    onClick={() => setSelected(isSelected ? null : index)}
                                >
                                    {isSelected ? <IoClose /> : <IoAddOutline />}
                                </button>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Scroll Progress Indicator */}
            <div className="h-0.5 bg-gray-300 w-full mb-5 relative rounded overflow-hidden">
                <div
                    className="h-full bg-black transition-all duration-200"
                    style={{ width: `${scrollProgress}%` }}
                />
            </div>

            {/* Left / Right Buttons */}
            <div className="flex gap-2 mb-2">
                <button
                    className="bg-gray-200 hover:bg-gray-300 p-2 rounded-full text-xl"
                    onClick={() => scrollByAmount(-300)}
                >
                    <IoIosArrowBack />
                </button>
                <button
                    className="bg-gray-200 hover:bg-gray-300 p-2 rounded-full text-xl"
                    onClick={() => scrollByAmount(300)}
                >
                    <IoIosArrowForward />
                </button>
            </div>

            {/* Fullscreen Modal for Tablet & Mobile */}
            {selected !== null && (
                <div className="fixed inset-0 bg-black/80 z-[999] flex flex-col items-center justify-start lg:hidden">
                    <button
                        className="absolute top-4 right-4 text-white text-3xl z-50"
                        onClick={() => setSelected(null)}
                    >
                        <IoClose />
                    </button>

                    <div className="w-full h-[60vh] relative mt-10">
                        <Image
                            src={environments[selected].image}
                            alt="Expanded"
                            layout="fill"
                            objectFit="cover"
                            className="rounded-lg"
                        />
                        <div className="absolute top-4 left-4 text-white bg-black/40 backdrop-blur-sm p-2 rounded">
                            {environments[selected].topText}
                        </div>
                    </div>

                    <div className="text-white mt-6 px-6 text-center text-lg">
                        {environments[selected].bottomText}
                    </div>
                </div>
            )}

            {/* Responsive Custom Style Overrides */}
            {/* <style jsx>{`
        @media (max-width: 1024px) {
          div[style*="width: 30vw"] {
            width: 60vw !important;
          }
          div[style*="width: 70vw"] {
            width: 70vw !important;
          }
        }

        @media (max-width: 640px) {
          div[style*="width: 30vw"] {
            width: 80vw !important;
          }
        }
      `}</style> */}
        </div>
    );
}

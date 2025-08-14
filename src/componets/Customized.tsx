"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

const colors = [
    { img: "https://eubiq.b-cdn.net/saga/shot%2006.png", name: "Raven", color: "#232323" },
    { img: "https://eubiq.b-cdn.net/saga/shot%2006.png", name: "Casada", color: "#bfae9e" },
    { img: "https://eubiq.b-cdn.net/saga/shot%2006.png", name: "Dark Rose", color: "#a7324a" },
    { img: "https://eubiq.b-cdn.net/saga/shot%2006.png", name: "Sage", color: "#7cae7a" },
    { img: "https://eubiq.b-cdn.net/saga/shot%2006.png", name: "Venus", color: "#e6b7c1" },
];

export default function CustomizedColors() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [centerIndex, setCenterIndex] = useState(2); // default to Dark Rose

    // Detect which is center
    useEffect(() => {
        const handleScroll = () => {
            if (!containerRef.current) return;
            const container = containerRef.current;
            let closestIndex = 0;
            let closestDistance = Infinity;

            Array.from(container.children).forEach((child, index) => {
                const rect = (child as HTMLElement).getBoundingClientRect();
                const distance = Math.abs(rect.left + rect.width / 2 - window.innerWidth / 2);
                if (distance < closestDistance) {
                    closestDistance = distance;
                    closestIndex = index;
                }
            });

            setCenterIndex(closestIndex);
        };

        containerRef.current?.addEventListener("scroll", handleScroll);
        handleScroll();
        return () => containerRef.current?.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="w-full py-12">
            {/* Top Section */}
            <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-8">
                <div className="md:w-[45%] my-auto px-10">
                    <h2 className="text-2xl md:text-5xl font-[700] text-gray-900">
                        CUSTOMIZED TO <br /> MATCH YOUR SPACE
                    </h2>
                    <p className="text-gray-600 mt-4">
                        Your interior is a reflection of your style. With Saga’s customized color options,
                        you’re no longer limited to the basics.
                    </p>
                    <p className="text-gray-600 mt-2">
                        We craft your power tracks in the shades that speak your language.
                    </p>
                </div>
                <div className="md:w-[55%] rounded-tl-2xl rounded-bl-2xl overflow-hidden">
                    <img
                        src="https://eubiq.b-cdn.net/saga/custom.png"
                        alt="Power track colors"
                        className="rw-full object-cover"
                    />
                </div>
            </div>

            {/* Bottom Section */}
            <div className="relative overflow-hidden justify-center items-center mt-12 w-[90vw] h-[90vh] mx-auto bg-blue py-8 rounded-3xl">
                {/* background pattern centered */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[220px] h-[220px] md:w-[1000px] md:h-[1000px]">
                    <Image
                        src="/pattern.png"
                        alt="Steps Illustration"
                        fill
                        className="object-cover"
                        style={{ opacity: 0.3 }}
                    />
                </div>
                <div className="h-full justify-items-center flex flex-col">

                    <div className="text-5xl mx-auto py-10 font-[600] text-green z-10">Our Collection</div>
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8  items-center px-8">
                        {colors.map((color, index) => (
                            <div
                                key={index}
                                className={
                                    `w-[250px] h-[350px] z-20 rounded-2xl bg-white transition-transform duration-300 shadow-lg hover:scale-110 cursor-pointer`
                                }
                            >
                                <div className="w-full h-[80%]">
                                    <img
                                        src={color.img}
                                        alt={color.name}
                                        className="w-full h-full object-cover rounded-lg"
                                    />
                                </div>
                                <p className="text-center font-[600] text-2xl itens-center h-[20%]">
                                    <span className="flex items-center justify-center h-full w-full" style={{ color: color.color }}>{color.name}</span>
                                </p>
                            </div>
                        ))}
                    </div>
                    <div className="w-full flex flex-col items-center mt-8 z-10">
                        <p className="text-xl text-white mb-5">For more customization</p>
                        <a href="/contact" className="bg-yellow hover:text-green text-white font-bold py-3 px-8 rounded-full shadow-lg transition-colors duration-200">
                            Reach Us
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

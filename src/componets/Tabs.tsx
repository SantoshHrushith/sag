"use client";

import { useState, useRef, useEffect } from "react";
import { IoIosArrowBack, IoIosArrowForward, } from "react-icons/io";

const tabs = [
    {
        label: "Sleep",
        content: [
            {
                title: "Sleep Score",
                description: "Your score is based on total sleep, HRV, movement, and more.",
                image: "https://eubiq.b-cdn.net/saga/S91_WaterDroplets%20(On%20water%20surface).png",
            },
            {
                title: "Sleep Stages",
                description: "Analyze deep, REM, and light sleep trends.",
                image: "https://eubiq.b-cdn.net/saga/S91_WaterDroplets%20(On%20water%20surface).png",
            },
            {
                title: "O2 Sensing",
                description: "Detect irregular breathing during sleep.",
                image: "https://eubiq.b-cdn.net/saga/S91_WaterDroplets%20(On%20water%20surface).png",
            },
        ],
    },
    {
        label: "Activity",
        content: [
            {
                title: "Auto Detection",
                description: "Detects over 40 types of movement.",
                image: "https://eubiq.b-cdn.net/saga/S91_WaterDroplets%20(On%20water%20surface).png",
            },
            {
                title: "Activity Score",
                description: "Helps you balance movement & rest.",
                image: "https://eubiq.b-cdn.net/saga/S91_WaterDroplets%20(On%20water%20surface).png",
            },
        ],
    },
    {
        label: "Readiness",
        content: [
            {
                title: "Daily Readiness",
                description: "Personalized recovery guidance.",
                image: "https://eubiq.b-cdn.net/saga/S91_WaterDroplets%20(On%20water%20surface).png",
            },
        ],
    },
    {
        label: "Design",
        content: [
            {
                title: "Industrial Design",
                description: "Each powertrack begins with a modern, modular design blueprint focused on elegance and efficiency.",
                image: "https://eubiq.b-cdn.net/saga/S91_WaterDroplets%20(On%20water%20surface).png",
            },
        ],
    },
    {
        label: "Materials",
        content: [
            {
                title: "Premium Materials",
                description: "Constructed using high-grade aluminum and copper for durability and conductivity.",
                image: "https://eubiq.b-cdn.net/saga/S91_WaterDroplets%20(On%20water%20surface).png",
            },
        ],
    },
    {
        label: "Manufacturing",
        content: [
            {
                title: "Precision Engineering",
                description: "CNC machining and automation ensure consistent high-quality output.",
                image: "https://eubiq.b-cdn.net/saga/S91_WaterDroplets%20(On%20water%20surface).png",
            },
        ],
    },
    {
        label: "Assembly",
        content: [
            {
                title: "Modular Assembly",
                description: "Powertrack components are assembled in a modular fashion, allowing easy customization.",
                image: "https://eubiq.b-cdn.net/saga/S91_WaterDroplets%20(On%20water%20surface).png",
            },
        ],
    },
    {
        label: "Testing",
        content: [
            {
                title: "Safety & Load Testing",
                description: "Each unit undergoes rigorous testing for thermal resistance and electrical safety.",
                image: "https://eubiq.b-cdn.net/saga/S91_WaterDroplets%20(On%20water%20surface).png",
            },
        ],
    },
    {
        label: "Finishing",
        content: [
            {
                title: "Finishing Touches",
                description: "Anodized coating and minimal surface finishes give it a sleek, polished look.",
                image: "https://eubiq.b-cdn.net/saga/S91_WaterDroplets%20(On%20water%20surface).png",
            },
        ],
    },
    {
        label: "Packaging",
        content: [
            {
                title: "Eco-Friendly Packaging",
                description: "Packed using sustainable materials and shipped with care.",
                image: "https://eubiq.b-cdn.net/saga/S91_WaterDroplets%20(On%20water%20surface).png",
            },
        ],
    },
];


export default function TabbedFeatures() {
    const [activeTab, setActiveTab] = useState(0);
    const scrollRef = useRef<HTMLDivElement>(null);
    const [scrollProgress, setScrollProgress] = useState(0);

    const scrollLeft = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
        }
    };

    const scrollRight = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
        }
    };

    const updateScrollProgress = () => {
        const container = scrollRef.current;
        if (container) {
            const totalScroll = container.scrollWidth - container.clientWidth;
            const currentScroll = container.scrollLeft;
            const progress = (currentScroll / totalScroll) * 100;
            setScrollProgress(progress);
        }
    };

    useEffect(() => {
        const container = scrollRef.current;
        if (container) {
            container.addEventListener("scroll", updateScrollProgress);
            updateScrollProgress(); // Init
            return () => container.removeEventListener("scroll", updateScrollProgress);
        }
    }, [activeTab]);

    return (
        <div className="text-[#2e2b28] px-4 md:px-12 py-8 w-full lg:w-[70vw] mx-auto">
            {/* Tabs */}
            <div className="relative flex gap-6 border-b border-gray-900 mb-4 overflow-x-auto scrollbar-hide">
                {tabs.map((tab, index) => (
                    <button
                        key={tab.label}
                        onClick={() => setActiveTab(index)}
                        className={`relative z-10 py-3 whitespace-nowrap text-sm md:text-base font-medium ${index === activeTab
                                ? "border-b-5 border-black text-black "
                                : "text-gray-500"
                            }`}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>


            {/* Scroll Buttons */}
            <div className="flex items-center relative">


                <div
                    ref={scrollRef}
                    className="flex gap-6 overflow-x-auto pb-4 scroll-smooth px-8 md:px-12 scrollbar-hide"
                >
                    {tabs[activeTab].content.map((item, idx) => (
                        <div
                            key={idx}
                            className="flex-shrink-0 w-[120px] md:w-[280px]  rounded-lg   h-[350px]"
                        >
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-65 object-cover rounded-md mb-4"
                            />
                            <h3 className="text-lg text-white font-semibold mb-1">{item.title}</h3>
                            <p className="text-sm text-gray-400">{item.description}</p>
                        </div>
                    ))}
                </div>


            </div>

            {/* Scroll Progress Indicator */}
            <div className="w-full h-0.5 bg-gray-300 mt-2 rounded">
                <div
                    className="h-full bg-black transition-all duration-300 rounded"
                    style={{ width: `${scrollProgress}%` }}
                ></div>
            </div>
            <div className="flex justify-end gap-4 mt-4">
                <button
                    onClick={scrollLeft}
                    className="bg-black text-white p-2 rounded-full shadow-md hover:bg-gray-800 transition disabled:opacity-40"
                    aria-label="Scroll Left"
                >
                    <IoIosArrowBack size={20} />
                </button>
                <button
                    onClick={scrollRight}
                    className="bg-black text-white p-2 rounded-full shadow-md hover:bg-gray-800 transition disabled:opacity-40"
                    aria-label="Scroll Right"
                >
                    <IoIosArrowForward size={20} />
                </button>
            </div>

        </div>
    );
}
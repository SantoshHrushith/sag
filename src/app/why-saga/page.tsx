"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import HeroCarousel from "@/componets/HeroCarousel";
import Curved from "@/componets/Curved";
import WhySaga from "@/componets/Why";
import TechnologyQuote from "@/componets/Technologyquote";
import StatsSection from "@/componets/StatsSection";


export default function WHYSAGA() {
    const [isMobileOrTablet, setIsMobileOrTablet] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobileOrTablet(window.innerWidth < 1024);
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className="font-poppins">
            {/* === Hero Section === */}
            <div className="relative w-full h-screen overflow-hidden">

                <img
                    src="https://eubiq.b-cdn.net/saga/Evolution.png"
                    alt="Tangled to sleek"
                    className="absolute top-0 left-0 w-full h-full object-cover z-0"
                />
                <div className="absolute z-10 w-full h-full flex items-center justify-start">
                    <div className="ml-10 sm:ml-24 text-left">
                        <h1 className="text-3xl sm:text-6xl font-[100] text-white leading-snug">
                            From <span className="font-[600]">tangled</span> <br />to <span className="font-normal italic text-green">Sleek</span>
                        </h1>
                        <p className="mt-12 text-lg text-white font-normal">
                            Say goodbye to messy cables with Saga <br />PowerTrack a seamless, modular solution <br />for clean and efficient power distribution.
                        </p>
                    </div>
                </div>
            </div>
            <StatsSection />
            <HeroCarousel />
            <Curved />
            <WhySaga />
            <TechnologyQuote />

        </div>
    );
}

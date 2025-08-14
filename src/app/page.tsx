"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import HeroCarousel from "@/componets/HeroCarousel";
import Curved from "@/componets/Curved";
import WhySaga from "@/componets/Why";
import TechnologyQuote from "@/componets/Technologyquote";
import Environments from "@/componets/Environments";
import Collage from "@/componets/Collage";
import RingSelector from "@/componets/ProductColorSelector";
import TabbedFeatures from "@/componets/Tabs";


export default function Home() {
  const [isMobileOrTablet, setIsMobileOrTablet] = useState(false);
  const [videoEnded, setVideoEnded] = useState(false);

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
        {!videoEnded ? (
          <video
            className="absolute top-0 left-0 w-full h-full object-cover z-0"
            src={
              isMobileOrTablet
                ? "https://eubiq.b-cdn.net/saga/saga.mp4"
                : "https://eubiq.b-cdn.net/saga/saga.mp4"
            }
            autoPlay
            muted
            playsInline
            onEnded={() => setVideoEnded(true)}
          />
        ) : (
          <img
            src="/hero.png"
            alt="Saga Static"
            className="absolute top-0 left-0 w-full h-full object-cover z-0"
          />
        )}
        <div className="absolute z-10 w-full h-full flex items-end justify-center pb-12">
          <div className="text-center">
            <h1 className="text-3xl sm:text-6xl font-[100] text-white leading-snug">
              Designed in <span className="font-[600]">UAE</span> to <span className="font-[600]">Empower</span> the <span className="font-[500]">World</span>
            </h1>
            <p className="mt-2 text-lg text-white font-normal">
              MODULAR POWER, INFINITE POSSIBILITIES
            </p>
          </div>
        </div>
      </div>
      <HeroCarousel />
      <Curved />
      <WhySaga />
      <TechnologyQuote />
      <Environments/>
      <Collage/>
      <RingSelector/>
      <TabbedFeatures/>

    </div>
  );
}

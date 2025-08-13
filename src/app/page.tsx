"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Environments from "@/componets/Environments";
// import Exploded from "@/componets/Exploded";
// import Exp from "@/componets/Exp";
import Exp1 from "@/componets/Exp1";
import ProductColorSelector from "@/componets/ProductColorSelector";
import Tabs from "@/componets/Tabs";
import Collage from "@/componets/Collage";
// import VideoScroller from "@/componets/Video";

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
    <div className="font-sans">
      {/* === Hero Section === */}
      <div className="relative w-full h-screen overflow-hidden">
        {!videoEnded ? (
          <video
            className="absolute top-0 left-0 w-full h-full object-cover z-0"
            src={
              isMobileOrTablet
                ? "https://eubiq.b-cdn.net/saga/4k%20render.mp4"
                : "https://eubiq.b-cdn.net/saga/4k%20render.mp4"
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

      {/* === Product Images Section === */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-6 sm:px-20 py-16">
        {/* Product Card - Recess */}
        <div className="relative w-full">
          <Image
            src="https://eubiq.b-cdn.net/saga/Rec%204.png"
            alt="Recess Product"
            width={800}
            height={600}
            className="w-full h-auto object-cover rounded-2xl shadow-md"
          />

          {/* Desktop Overlay */}
          {!isMobileOrTablet && (
            <>
              <div className="absolute bottom-6 left-6 bg-black bg-opacity-60 text-white px-4 py-2 rounded-lg text-lg font-semibold">
                Recess
              </div>
              <button className="absolute bottom-6 right-6 bg-white text-black px-4 py-2 rounded-full font-medium hover:bg-gradient-to-r from-blue-400 to-green-400 transition-all duration-300">
                Explore
              </button>
            </>
          )}

          {/* Mobile/Tablet below section */}
          {isMobileOrTablet && (
            <div className="mt-4 flex items-center justify-between">
              <div className="text-xl font-semibold">Recess</div>
              <button className="bg-black text-white px-4 py-2 rounded-full font-medium hover:bg-white hover:text-black transition-all duration-300">
                Explore
              </button>
            </div>
          )}
        </div>

        {/* Product Card - Surface */}
        <div className="relative w-full">
          <Image
            src="https://eubiq.b-cdn.net/saga/R1000%20S44%20S91%20SUltra%20S49%20Top%20Conference%20View%20.png.png"
            alt="Surface Product"
            width={800}
            height={600}
            className="w-full h-full object-cover rounded-2xl shadow-md"
          />

          {!isMobileOrTablet && (
            <>
              <div className="absolute bottom-6 left-6 bg-black bg-opacity-60 text-white px-4 py-2 rounded-lg text-lg font-semibold">
                Surface
              </div>
              <button className="absolute bottom-6 right-6 bg-white text-black px-4 py-2 rounded-full font-medium hover:bg-gradient-to-r from-blue-400 to-green-400 transition-all duration-300">
                Explore
              </button>
            </>
          )}

          {isMobileOrTablet && (
            <div className="mt-4 flex items-center justify-between">
              <div className="text-xl font-semibold">Surface</div>
              <button className="bg-black text-white px-4 py-2 rounded-full font-medium hover:bg-white hover:text-black transition-all duration-300">
                Explore
              </button>
            </div>
          )}
        </div>
      </div>

      {/* why saga Powertrack */}
      <div className="text-center text-4xl md:text-6xl font-bold leading-tight">
        SAGA PowerTracks<br />
        Make your Surrounding <span className="italic">Elegant</span>
      </div>
      <Environments />
      {/* <VideoScroller/> */}
      {/* <Exploded/> */}
      {/* <Exp/> */}
      {/* <Exp1 /> */}
      <ProductColorSelector />
      <Tabs />
      <Collage/>
    </div>
  );
}

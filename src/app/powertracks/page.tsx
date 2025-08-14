"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Surface from "@/componets/Surface";
import PowerOfSaga from "@/componets/PowerOfSaga";
import VideoPlayer from "@/componets/VideoPlayer";
import Environments from "@/componets/Environments";
import CenterScaleCarousel from "@/componets/CentralScaleCarousel";
import CustomizedColors from "@/componets/Customized";
import SagaPersonalization from "@/componets/Personalization";

export default function Powertracks() {
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
                    src="https://eubiq.b-cdn.net/saga/all.png"
                    alt="Tangled to sleek"
                    className="absolute top-0 left-0 w-full h-full object-cover z-0"
                />
                <div className="absolute z-10 w-full h-full flex items-center justify-start">
                    <div className="ml-10 sm:ml-24 text-left">
                        <h1 className="text-3xl sm:text-6xl font-[300] text-blue leading-snug">
                            Crafted for<br /> <span className="font-[600]"><span className="text-blue">Modern</span>{" "}<span className="text-green">Spaces</span> </span>
                        </h1>
                        <p className="mt-12 text-lg text-blue font-[300]">
                            SAGA Powertracks provide<br />seamless, reliable power with a<br />minimalist elegance that elevates<br /> your surroundings.
                        </p>
                    </div>
                </div>
            </div>



            <div className=" mx-auto w-[90%] h-full md:h-auto py-10  overflow-hidden  ">
                {/* Blurred background image */}
                <img src="https://eubiq.b-cdn.net/saga/Tracks.png" alt="Saga Stats Background" className="w-full h-full object-cover" style={{ zIndex: 1 }} />
            </div>
            <section className="w-full py-16 bg-white flex flex-col items-center" id="powertrack-types">
                <h2 className="text-3xl md:text-5xl font-[600] text-blue mb-3 text-center">
                    Two unique <span className="italic font-[300] text-blue">designs</span>
                </h2>
                <p className="text-blue/80 text-lg text-center mb-10 max-w-2xl">
                    Each Saga Powertrack offers distinct technical features<br className="hidden md:block" />
                    &amp; hardware capabilities.
                </p>
                <div className="flex flex-col md:flex-row gap-8 justify-center items-center w-full">
                    {/* Surface Track Card */}
                    <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden w-[340px] md:w-[500px]">
                        <div className="relative w-full h-[300px]">
                            <Image
                                src="https://eubiq.b-cdn.net/saga/shot04.png" // Place your image in public/surface-track.jpg
                                alt="S Series Surface Track"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                        <div className=" absolute top-0 text-white left-3 p-6">
                            <h3 className="text-lg font-[500]">S Series</h3>
                            <span className="text-md font-[200]">Surface track</span>
                        </div>
                    </div>
                    {/* Recess Track Card */}
                    <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden w-[340px] md:w-[500px]">
                        <div className="relative w-full h-[300px]">
                            <Image
                                src="https://eubiq.b-cdn.net/saga/shot04.png" // Place your image in public/recess-track.jpg
                                alt="R Series Recess Track"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                        <div className=" absolute top-0 text-white left-3 p-6">
                            <h3 className="text-xl font-[500]">R Series</h3>
                            <span className="text-md font-[200]">Recess track</span>
                        </div>
                    </div>
                </div>
            </section>
            <section id="surface">
                <Surface />
                <PowerOfSaga />
                <div className="p-6">
                    <VideoPlayer
                        src="https://eubiq.b-cdn.net/saga/surface-exploded.mp4"
                        autoPlay
                        muted
                        className="mx-auto"
                    />
                </div>
            </section>
            <div className=" p-10">
                <div className="text-5xl text-center font-[400]">
                    <span className="text-blue font-[600]">Designed For</span>{" "}<span className="text-green italic border-b-4 border-yellow pb-[0.5]">
                        Every Space
                    </span>
                </div>
                <Environments />
            </div>
            <section id="recess">
                <section className="w-full flex items-center justify-center py-12">
                    <div className="relative w-full min-h-[340px] flex items-center shadow-xl overflow-hidden" style={{ backgroundColor: '#C8C8CA' }}>
                        <div className="relative  flex-1 text-blue text-left pl-15 z-10">
                            <h2 className="text-3xl md:text-5xl font-[300]  mb-4"><span className="font-[600]">Recess</span> <br />Power Track</h2>
                            <p className="max-w-md text-base md:text-lg font-light">

                                The R Series offers a clean, integrated power solution for modern offices and collaborative setups. No wall mounts, no clutter just seamless access to power exactly where work happens.
                            </p>
                        </div>
                        <div className="relative flex-1 flex items-center justify-center z-10">
                            <Image
                                src="/explo.png"
                                alt="Saga Exploded View"
                                width={420}
                                height={180}
                                className="rounded-xl object-contain drop-shadow-lg"
                                priority
                            />
                        </div>
                    </div>
                </section>
                <section className="w-full flex py-12">
                    <div className="relative w-[90vw] min-h-[340px] flex items-center rounded-tr-3xl rounded-br-3xl shadow-xl overflow-hidden">
                        {/* Gradient overlay */}
                        <div className="absolute inset-0 z-0 pointer-events-none" style={{ background: 'linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, #C8C8CA 100%)' }} />
                        <div className="relative  flex-1 text-left pl-15 z-10">
                            <h2 className="text-3xl md:text-4xl font-semibold text-blue mb-4">Anatomy of Smart living</h2>
                        </div>
                        <div className="relative flex-1 flex items-center justify-center z-10">
                            <Image
                                src="/explo.png"
                                alt="Saga Exploded View"
                                width={420}
                                height={180}
                                className="rounded-xl object-contain drop-shadow-lg"
                                priority
                            />
                        </div>
                        <div className="relative  flex-1 text-left pr-15 z-10">
                            <p className="text-black text-base md:text-lg font-light">

                                The R Series combines a compact, recessed design with heavy duty copper rails, dual insulation, and thermal control for safe, efficient power.                            </p>
                        </div>
                    </div>
                </section>
                <div className="p-6">
                    <VideoPlayer
                        src="https://eubiq.b-cdn.net/saga/recess-exploded.mp4"
                        autoPlay
                        muted
                        className="mx-auto"
                    />
                </div>
                <CenterScaleCarousel />
                <>
                    <CustomizedColors />
                    <SagaPersonalization />
                </>

            </section>


        </div>
    );
}


"use client";

import { useEffect, useState } from "react";
import Image from "next/image";


export default function HowitWorks() {
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
            <div className=" relative w-full h-screen overflow-hidden">
                <video
                    className="absolute top-0 left-0 w-full h-full object-cover z-0"
                    src="https://eubiq.b-cdn.net/saga/vid.mp4"
                    autoPlay
                    muted
                    playsInline
                />
            </div>
            <BrandHeader />
            <DiscoverSaga />
            <HowSagaWorksSteps />
            <StepsCard />
            <TestimonialCard/>

        </div>
    );
}


function BrandHeader() {
    return (
        <div className="text-center py-8">
            <h2 className="text-5xl font-semibold mb-2 flex items-center justify-center gap-2">
                A brand by
                <span className="text-black">
                    <Image src="/61-logo.png" alt="Saga Logo" width={100} height={100} />
                </span>
            </h2>
            <p className="text-black max-w-xl mx-auto text-lg">
                Every detail is crafted with intent, every edge with precision.<br />
                SAGA isn’t just about owning devices—it’s about empowering lifestyles with purpose and elegance.
            </p>
        </div>
    );
}

function DiscoverSaga() {
    return (
        <div className="bg-white p-0 mb-8 flex flex-col items-center justify-center">
            <div className="relative w-[90%] h-[80vh] md:h-[80vh] rounded-3xl overflow-hidden">
                <Image
                    src="/bn.png"
                    alt="Discover How SAGA Works"
                    fill
                    className="object-cover"
                />
                <div className="absolute right-40 top-1/2 -translate-y-1/2 text-white text-2xl md:text-5xl font-[200]">
                    Discover <br />
                    <span className="font-[500]">How <span className="text-green italic"> SAGA </span><br />works</span>
                </div>
            </div>
        </div>
    );
}

function HowSagaWorksSteps() {
    return (
        <div className="p-0 mb-8">
            <div className="relative w-full h-[70vh] md:h-[90vh] overflow-hidden bg-gray-200">
                <Image
                    src="/image.png"
                    alt="Saga Steps"
                    fill
                    className="object-cover"
                    priority
                    sizes="100vw"
                    style={{ objectFit: "cover" }}
                />
            </div>
        </div>
    );
}

function StepsCard() {
    const steps = [
        {
            title: "Step 01:",
            text: "Insert the SAGA socket anywhere along the Power Track rail, no alignment needed."
        },
        {
            title: "Step 02:",
            text: "Rotate 90° clockwise to activate the secure electrical connection with built in safety lock."
        },
        {
            title: "Step 03:",
            text: "Move, remove, or add sockets freely, customize power access where and when you need it."
        }
    ];

    return (
        <div className="relative w-[80%] h-auto mx-auto p-6 rounded-2xl bg-blue text-white shadow-lg py-10 mb-10 overflow-hidden">
            <div className="absolute top-0 left-0 w-[220px] h-[220px] md:w-[400px] md:h-[400px] pointer-events-none z-0"
                style={{
                    background: "radial-gradient(circle at top left, #01814E 0%, transparent 70%)"
                }}
            />
            {/* Bottom right green gradient */}
            <div className="absolute bottom-0 right-0 w-[220px] h-[220px] md:w-[400px] md:h-[400px] pointer-events-none z-0"
                style={{
                    background: "radial-gradient(circle at bottom right, #01814E 0%, transparent 70%)"
                }}
            />
            <div className="absolute -right-40 top-20 -translate-y-1/2 w-[220px] h-[220px] md:w-[1000] md:h-[1000]">
                <Image
                    src="/pattern.png"
                    alt="Steps Illustration"
                    fill
                    className="object-cover rounded-2xl"
                    style={{ opacity: 0.3 }}
                />
            </div>
            <div className="relative z-10 flex flex-col md:w-[60%]">
                {steps.map((step, index) => (
                    <div key={index} className="ms-20 mb-10 last:mb-0">
                        <h1 className=" text-3xl text-white font-bold">{step.title}</h1>
                        <p className=" mt-5 text-xl text-white/90">{step.text}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}


function TestimonialCard() {
  return (
    <div className="bg-green text-white h-auto p-8 relative overflow-hidden">
      {/* Opening quote */}
      <span className="absolute top-0 -translate-y-25 left-30 text-white/20 italic text-[400px]">&quot;</span>

      <p className="text-center max-w-4xl mx-auto font-[500] relative z-10">
        Saga Power Track stands out with its tool free modularity, fire retardant aluminum body, 
        and seamless adaptability enabling rapid reconfiguration, precision load distribution, 
        and fail safe energy delivery in demanding environments.
      </p>

      {/* Closing quote */}
      <span className="absolute top-0 -translate-y-10 right-40 text-white/20 italic text-[400px]">&quot;</span>

      <div className="text-center mt-4 text-yellow font-[400]">
        Saurabh Saggar, CEO <span className="text-yellow">| The Sixty One Dubai</span>
      </div>
    </div>
  );
}

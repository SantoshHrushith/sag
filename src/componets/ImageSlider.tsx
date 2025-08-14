// import React, { useState, useEffect } from "react";
// import { ChevronLeft, ChevronRight } from "lucide-react";

// const slides = [
//     {
//         img: "/slide 1.png",
//         title: "Internal",
//         highlight: "Functionality",
//         description:
//             "A precision-engineered internal rail system ensures safe, efficient, and seamless power distribution. All components are enclosed in a fire-retardant aluminum body for maximum safety."
//     },
//     {
//         img: "/slide 2.png",
//         title: "Rubber",
//         highlight: "Seal",
//         description:
//             "At Saga, safety is a priority. Every product undergoes rigorous testing ensuring no object larger than 1mm can reach live components."
//     },
//     {
//         img: "/slide 3.png",
//         title: "Crafted for",
//         highlight: "Performance",
//         description: "Built for life — durable design meets elegant aesthetics."
//     }
// ];

// export default function ImageSlider() {
//     const [current, setCurrent] = useState(0);

//     useEffect(() => {
//         const interval = setInterval(() => {
//             nextSlide();
//         }, 5000);
//         return () => clearInterval(interval);
//     }, [current]);

//     const prevSlide = () => {
//         setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
//     };

//     const nextSlide = () => {
//         setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
//     };

//     return (
//         <div className="relative w-full max-w-6xl mx-auto flex flex-col items-center pt-8">
//             {/* Title */}
//             <div className="mb-8 text-center">
//                 <h2 className="text-3xl md:text-4xl font-normal text-[#14213D]">
//                     Crafted for Performance.<br />
//                     <span className="font-bold italic text-[#14213D]">Built for Life.</span>
//                 </h2>
//             </div>
//             {/* Slider */}
//             {/* <div className="relative w-full flex items-center justify-center overflow-hidden">
//                 <div className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 z-10 pointer-events-none">
//                     <div className="w-[820px] h-[520px] rounded-3xl overflow-hidden opacity-0 transition-opacity duration-300">
//                         <img
//                             src={slides[(current - 1 + slides.length) % slides.length].img}
//                             alt=""
//                             className="w-full h-full object-cover"
//                         />
//                     </div>
//                 </div>
//                 <div className="relative w-[820px] h-[520px] rounded-3xl overflow-hidden shadow-2xl mx-4 flex-shrink-0 flex items-center justify-center bg-white z-20">
//                     <img
//                         src={slides[current].img}
//                         alt={slides[current].title}
//                         className="w-full h-full object-cover"
//                     />
//                     <div className="absolute right-6 top-6 bg-gray-900/60 text-white p-5 rounded-xl max-w-[280px] text-left shadow-lg">
//                         <h3 className="text-lg font-bold mb-2">
//                             {slides[current].title}{" "}
//                             <span className="text-yellow-400 font-semibold">{slides[current].highlight}</span>
//                         </h3>
//                         <p className="text-sm">{slides[current].description}</p>
//                     </div>
//                 </div>
//                 <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 z-10 pointer-events-none">
//                     <div className="w-[820px] h-[520px] rounded-3xl overflow-hidden opacity-0 transition-opacity duration-300">
//                         <img
//                             src={slides[(current + 1) % slides.length].img}
//                             alt=""
//                             className="w-full h-full object-cover"
//                         />
//                     </div>
//                 </div>
//                 <button
//                     onClick={prevSlide}
//                     className="absolute left-2 top-1/2 -translate-y-1/2 z-30 p-2 bg-white/80 rounded-full hover:bg-yellow-400 shadow"
//                 >
//                     <ChevronLeft className="w-6 h-6 text-[#14213D]" />
//                 </button>
//                 <button
//                     onClick={nextSlide}
//                     className="absolute right-2 top-1/2 -translate-y-1/2 z-30 p-2 bg-white/80 rounded-full hover:bg-yellow-400 shadow"
//                 >
//                     <ChevronRight className="w-6 h-6 text-[#14213D]" />
//                 </button>
//             </div> */}
//             {/* Slider */}
//             <div className="relative w-full flex items-center justify-center overflow-hidden">
//                 {/* Previous Slide Preview (small edge) */}
//                 <div className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 z-10 pointer-events-none">
//                     <div className="w-[80px] h-[480px] rounded-r-3xl overflow-hidden opacity-80 shadow-lg">
//                         <img
//                             src={slides[(current - 1 + slides.length) % slides.length].img}
//                             alt=""
//                             className="w-full h-full object-cover"
//                             style={{ objectPosition: "left" }}
//                         />
//                     </div>
//                 </div>
//                 {/* Main Slide */}
//                 <div className="relative w-[900px] h-[520px] rounded-3xl overflow-hidden shadow-2xl mx-4 flex-shrink-0 flex items-center justify-center bg-white z-20">
//                     <img
//                         src={slides[current].img}
//                         alt={slides[current].title}
//                         className="w-full h-full object-cover"
//                     />
//                     {/* Overlay Text */}
//                     <div className="absolute right-6 top-6 bg-gray-900/60 text-white p-5 rounded-xl max-w-[280px] text-left shadow-lg">
//                         <h3 className="text-lg font-bold mb-2">
//                             {slides[current].title}{" "}
//                             <span className="text-yellow-400 font-semibold">{slides[current].highlight}</span>
//                         </h3>
//                         <p className="text-sm">{slides[current].description}</p>
//                     </div>
//                 </div>
//                 {/* Next Slide Preview (small edge) */}
//                 <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 z-10 pointer-events-none">
//                     <div className="w-[80px] h-[480px] rounded-l-3xl overflow-hidden opacity-80 shadow-lg">
//                         <img
//                             src={slides[(current + 1) % slides.length].img}
//                             alt=""
//                             className="w-full h-full object-cover"
//                             style={{ objectPosition: "right" }}
//                         />
//                     </div>
//                 </div>
//                 {/* Navigation Buttons */}
//                 <button
//                     onClick={prevSlide}
//                     className="absolute left-2 top-1/2 -translate-y-1/2 z-30 p-2 bg-white/80 rounded-full hover:bg-yellow-400 shadow"
//                 >
//                     <ChevronLeft className="w-6 h-6 text-[#14213D]" />
//                 </button>
//                 <button
//                     onClick={nextSlide}
//                     className="absolute right-2 top-1/2 -translate-y-1/2 z-30 p-2 bg-white/80 rounded-full hover:bg-yellow-400 shadow"
//                 >
//                     <ChevronRight className="w-6 h-6 text-[#14213D]" />
//                 </button>
//             </div>
//             <div className="mt-6 text-[#14213D] font-medium">
//                 {current + 1}/{slides.length}
//             </div>
//         </div>
//     );
// }

import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
    {
        img: "/slide 1.png",
        title: (
            <>
                Internal<br />
                <span className="italic text-yellow">Functionality</span>
            </>
        ),
        description:
            "A precision-engineered internal rail system ensures safe, efficient, and seamless power distribution. All components are enclosed in a fire-retardant aluminum body for maximum safety."
    },
    {
        img: "/slide 2.png",
        title: (
            <>
                Durable<br />Aluminium{" "}
                <span className="italic text-yellow">Alloy</span>
            </>
        ),
        description: "A thick copper core with five 3.5mm copper bars delivers reliable power, handling up to 8000W."
    },
    {
        img: "/slide 3.png",
        title: (
            <>
                Rubber <span className="text-green">Seal</span>
            </>
        ),
        description: "At Saga, safety isn't just a priority, it's our foundation. Every product undergoes a rigorous 1mm probe test, ensuring no object larger than 1mm can reach live wires."
    },
    {
        img: "/slide 1.png",
        title: (
            <>
                Water<br />
                <span className="text-green">Resistant</span>
            </>
        ),
        description:
            "Sealed with specialized coatings to prevent water damage, ensuring lasting durability and peace of mind."
    },
    {
        img: "/slide 1.png",
        title: (
            <>
                Seamless<br />
                <em>Motion <span className="text-green">Activation</span></em>
            </>
        ),
        description:
            "Turn on the light with a simple wave effortless, touch free convenience. Soft ambient glow adds elegance to any space, while guiding you safely through dark rooms."
    },
    {
        img: "/slide 1.png",
        title: (
            <>
                Smart Charging,<br />
                <span className="italic text-green">Built In</span>
            </>
        ),
        description: "Charge phones, tablets, and laptops directly from the PowerTrack with fast, efficient with built in USB and Type C ports."
    },
    {
        img: "/slide 1.png",
        title: (
            <>
                Power With a <span className="italic text-green">Twist</span>
            </>
        ),
        description:
            "Jusr Rotate the adaptor 90 to activate power"
    },
    // {
    //     img: "/slide 1.png",
    //     title: (
    //         <>
    //             Internal<br />
    //             <span className="italic text-yellow-400 font-semibold">Functionality</span>
    //         </>
    //     ),
    //     description:
    //         "A precision-engineered internal rail system ensures safe, efficient, and seamless power distribution. All components are enclosed in a fire-retardant aluminum body for maximum safety."
    // },
    // {
    //     img: "/slide 1.png",
    //     title: (
    //         <>
    //             Internal<br />
    //             <span className="italic text-yellow-400 font-semibold">Functionality</span>
    //         </>
    //     ),
    //     description:
    //         "A precision-engineered internal rail system ensures safe, efficient, and seamless power distribution. All components are enclosed in a fire-retardant aluminum body for maximum safety."
    // },
    // {
    //     img: "/slide 1.png",
    //     title: (
    //         <>
    //             Internal<br />
    //             <span className="italic text-yellow-400 font-semibold">Functionality</span>
    //         </>
    //     ),
    //     description:
    //         "A precision-engineered internal rail system ensures safe, efficient, and seamless power distribution. All components are enclosed in a fire-retardant aluminum body for maximum safety."
    // },
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
                <h2 className="text-3xl md:text-4xl font-normal text-[#14213D]">
                    Crafted for Performance.<br />
                    <span className="font-bold italic text-[#14213D]">Built for Life.</span>
                </h2>
            </div>
            {/* Slider */}
            <div className="relative w-full h-[520px] flex items-center justify-center overflow-hidden">
                {slides.map((slide, idx) => {
                    let pos = idx - current;
                    if (pos < -1) pos += slides.length;
                    if (pos > 1) pos -= slides.length;
                    if (Math.abs(pos) > 1) return null;

                    let overlayPosition = "absolute left-6 top-4 ";
                    if (idx === 0) overlayPosition = "absolute right-10 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-md text-white p-5 rounded-xl max-w-[280px] text-left shadow-lg";
                    if (idx === 1) overlayPosition = "absolute left-6 top-4 bg-white/20 backdrop-blur-md text-white p-5 rounded-xl max-w-[280px] text-left shadow-lg";
                    if (idx === 2) overlayPosition = "absolute left-6 top-4 bg-white/20 backdrop-blur-md text-white p-5 rounded-xl max-w-[280px] text-left shadow-lg";
                    if (idx === 3) overlayPosition = "absolute left-6 top-4 bg-white/20 backdrop-blur-md text-white p-5 rounded-xl max-w-[280px] text-left shadow-lg";
                    if (idx === 4) overlayPosition = "absolute left-6 top-4 bg-white/20 backdrop-blur-md text-white p-5 rounded-xl max-w-[280px] text-left shadow-lg";
                    if (idx === 5) overlayPosition = "absolute left-6 top-4 bg-white/20 backdrop-blur-md text-white p-5 rounded-xl max-w-[280px] text-left shadow-lg";
                    if (idx === 6) overlayPosition = "absolute left-1/2 top-4 -translate-x-1/2 text-white p-5 rounded-xl text-center ";

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
                            {/* Overlay Text */}
                            {pos === 0 && (
                                <div className={`${overlayPosition} `}>
                                    <h3 className="text-lg mb-2">
                                        {slide.title}
                                    </h3>
                                    <p className="text-sm">{slide.description}</p>
                                </div>
                            )}
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
            <div className="mt-6 text-[#14213D] font-medium">
                {current + 1}/{slides.length}
            </div>
        </div>
    );
}
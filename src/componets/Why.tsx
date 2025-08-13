"use client";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const features = [
    {
        title: "Rubber",
        highlight: "Seal",
        desc: "No object larger than 1mm can reach live wires.",
        img: "https://eubiq.b-cdn.net/saga/shot%2006.png",
        green: true,
    },
    {
        title: "Internal",
        highlight: "Functionality",
        desc: "A precision engineered rail system designed for safety.",
        img: "https://eubiq.b-cdn.net/saga/shot%2006.png",
    },
    {
        title: "Motion",
        highlight: "Sensors",
        desc: "Soft ambient light adds a modern aesthetic to any space.",
        img: "https://eubiq.b-cdn.net/saga/shot%2006.png",
    },
    {
        title: "Water",
        highlight: "Resistant",
        desc: "Our Power Tracks are built to resist water damage.",
        img: "https://eubiq.b-cdn.net/saga/shot%2006.png",
    },
    {
        title: "Smart",
        highlight: "Charging",
        desc: "Built-in USB & C Type ports for direct charging.",
        img: "https://eubiq.b-cdn.net/saga/shot%2006.png",
    },
    {
        title: "A Power",
        highlight: "With Twist",
        desc: "Just rotate 90° to activate power.",
        img: "https://eubiq.b-cdn.net/saga/shot%2006.png",
        green: true,
    },
];

export default function WhySaga() {
    const [index, setIndex] = useState(0);

    const prev = () => setIndex((i) => (i === 0 ? features.length - 1 : i - 1));
    const next = () => setIndex((i) => (i === features.length - 1 ? 0 : i + 1));

    return (
        <div className="w-full h-screen flex flex-col items-center py-10">
            {/* Title */}
            <div className="text-xl bg-green text-white pl-4 pr-1 py-1 rounded-full font-[600] mb-8 flex items-center gap-2">
                <span>Why</span>
                <span className="bg-white text-green rounded-full px-3 py-1">SAGA?</span>
            </div>

            {/* Desktop layout */}
            <div className="hidden lg:flex justify-center items-center gap-10 relative py-8">
                {/* Circle background */}
                <div className="absolute -z-10 items-center">
                    <img src="/pattern.png" className="w-[700px] md:w-[1200px] "></img>
                </div>
                {features.map((f, i) => (
                    <div
                        key={i}
                        className={`flex flex-col items-start rounded-2xl p-2 w-[150px] h-[340px] transition-transform duration-200 hover:scale-105 ${f.green ? "bg-green text-white" : "bg-white/60 text-gray-800"
                            }`}
                        style={{
                            minWidth: 210,
                            minHeight: 340,
                            boxShadow: "6px 6px 39px rgba(0, 0, 23, 0.63)" // right & bottom shadow only
                        }}
                    >

                        <img src={f.img} alt={f.title} className="rounded-xl mb-4 w-[225px] h-[280px] object-cover" />
                        <h3 className="font-bold text-lg mb-2 text-left w-full">
                            {f.title} <span className="italic">{f.highlight}</span>
                        </h3>
                        <p className="text-sm leading-relaxed text-left w-full">{f.desc}</p>
                    </div>
                ))}
            </div>

            {/* Mobile carousel */}
            <div className="lg:hidden flex flex-col items-center relative">
                <div className="w-full flex flex-col items-center relative">
                    <img src="/pattern.png" className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-[200%] object-cover -z-10" style={{ pointerEvents: 'none' }} />
                    <div className="flex flex-col items-center gap-4 w-full justify-center relative z-10">
                        
                        <div
                            key={index}
                            className={`flex flex-col items-center rounded-2xl shadow-lg p-4 w-[90%] h-[500px] ${features[index].green
                                ? "bg-green text-white"
                                : "bg-white/60 text-gray-800"
                                }`}
                            style={{ position: 'relative', zIndex: 20,boxShadow: "6px 6px 39px rgba(0, 0, 23, 0.63)" }}
                        >
                            <img
                                src={features[index].img}
                                alt={features[index].title}
                                className="rounded-xl mb-4"
                            />
                            <h3 className="font-bold text-lg">
                                {features[index].title}{" "}
                                <span className="italic">{features[index].highlight}</span>
                            </h3>
                            <p className="text-sm text-center mb-5">{features[index].desc}</p>
                        </div>
                        <div className="flex gap-20">

                        
                        <button
                            onClick={prev}
                            className="p-2 rounded-full bg-green hover:bg-yellow"
                        >
                            <ChevronLeft size={20} />
                        </button>
                        <button
                            onClick={next}
                            className="p-2 rounded-full bg-green hover:bg-yellow"
                        >
                            <ChevronRight size={20} />
                        </button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

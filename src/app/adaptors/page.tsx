"use client";

import { useEffect, useState } from "react";



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

        </div>
    );
}
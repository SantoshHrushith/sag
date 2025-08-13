// "use client";

// import React, { useEffect, useRef, useState } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

// if (typeof window !== "undefined") {
//     gsap.registerPlugin(ScrollTrigger);
// }

// const FRAME_COUNT = 180;

// const Exploded: React.FC = () => {
//     const canvasRef = useRef<HTMLCanvasElement>(null);
//     const containerRef = useRef<HTMLElement>(null);
//     const [images, setImages] = useState<HTMLImageElement[]>([]);
//     const [isMobile, setIsMobile] = useState(false);
//     const textRef = useRef<HTMLDivElement>(null);

//     // Detect mobile or desktop
//     useEffect(() => {
//         const handleResize = () => {
//             setIsMobile(window.innerWidth < 768);
//         };
//         handleResize();
//         window.addEventListener("resize", handleResize);
//         return () => window.removeEventListener("resize", handleResize);
//     }, []);

//     // Load frames from the correct folder
//     useEffect(() => {
//         const folder = isMobile ? "mobile" : "desktop";
//         const loadedImages: HTMLImageElement[] = [];
//         for (let i = 1; i <= FRAME_COUNT; i++) {
//             const img = new Image();
//             img.src = `/frames/${i}.png`;
//             loadedImages.push(img);
//         }
//         setImages(loadedImages);
//     }, [isMobile]);

//     // Canvas animation logic
//     useEffect(() => {
//         if (typeof window === "undefined" || images.length === 0) return;

//         const canvas = canvasRef.current;
//         const context = canvas?.getContext("2d");
//         if (!canvas || !context) return;

//         canvas.width = window.innerWidth;
//         canvas.height = window.innerHeight;

//         const render = (frame: number, scale = 1, borderRadius = 0) => {
//             const img = images[frame];
//             if (!img) return;

//             context.clearRect(0, 0, canvas.width, canvas.height);

//             const imgWidth = canvas.width * scale;
//             const imgHeight = canvas.height * scale;
//             const x = (canvas.width - imgWidth) / 2;
//             const y = (canvas.height - imgHeight) / 2;

//             // Draw rounded "photo frame" style rect before image
//             if (borderRadius > 0) {
//                 context.save();
//                 context.beginPath();
//                 const radius = borderRadius * Math.min(imgWidth, imgHeight) * 0.5;
//                 context.moveTo(x + radius, y);
//                 context.lineTo(x + imgWidth - radius, y);
//                 context.quadraticCurveTo(x + imgWidth, y, x + imgWidth, y + radius);
//                 context.lineTo(x + imgWidth, y + imgHeight - radius);
//                 context.quadraticCurveTo(x + imgWidth, y + imgHeight, x + imgWidth - radius, y + imgHeight);
//                 context.lineTo(x + radius, y + imgHeight);
//                 context.quadraticCurveTo(x, y + imgHeight, x, y + imgHeight - radius);
//                 context.lineTo(x, y + radius);
//                 context.quadraticCurveTo(x, y, x + radius, y);
//                 context.closePath();
//                 context.clip();
//             }

//             context.drawImage(img, x, y, imgWidth, imgHeight);

//             if (borderRadius > 0) {
//                 context.restore();
//             }
//         };

//         // Initial render
//         render(0, 0.6, 1);

//         const obj = { frame: 0, scale: 0.6, borderRadius: 1 };

//         const tl = gsap.timeline({
//             scrollTrigger: {
//                 trigger: containerRef.current,
//                 start: "top top",
//                 // endTrigger:"#footer",
//                 end: `+=4200`,
//                 scrub: true,
//                 pin: true,
//                 anticipatePin: 1,
//             },
//         });

//         // Fade out the text
//         tl.to(textRef.current, {
//             opacity: 0,
//             duration: 0.5,
//         }, 0);

//         // Expand frame 1 from photo-frame to full screen
//         tl.to(obj, {
//             scale: 1,
//             borderRadius: 0,
//             duration: 1,
//             onUpdate: () => {
//                 render(0, obj.scale, obj.borderRadius);
//             },
//         }, 0);

//         // Play frame-by-frame
//         tl.to(obj, {
//             frame: FRAME_COUNT - 1,
//             snap: "frame",
//             ease: "none",
//             onUpdate: () => {
//                 render(obj.frame);
//             },
//         });

//         return () => {
//             tl.scrollTrigger?.kill();
//         };
//     }, [images]);

//     return (
//         <section
//             ref={containerRef}
//             className="h-screen w-full bg-black overflow-hidden p-5"
//         >
//              <canvas
//                 ref={canvasRef}
//                 className="fixed top-0 left-0 w-full h-[100vh] z-0 shadow-[0_0_80px_rgba(255,255,255,0.15)]"
//             />
//             <div
//                 ref={textRef}
//                 className="absolute top-1/8 left-1/2 text-white text-4xl font-bold transform -translate-x-1/2 -translate-y-1/2 z-10 text-center px-4"
//             >
//                 The Magic of SAGA
//             </div>
//               <div id="footer-anchor" style={{ height: `${180 * 0.4}vh` }} />

//         </section>
//     );
// };

// export default Exploded;


"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const FRAME_COUNT = 180;

const Exploded: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const containerRef = useRef<HTMLElement>(null);
    const [images, setImages] = useState<HTMLImageElement[]>([]);
    const [isMobile, setIsMobile] = useState(false);
    const textRef = useRef<HTMLDivElement>(null);

    // Detect mobile or desktop
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Load frames
    useEffect(() => {
        const loadedImages: HTMLImageElement[] = [];
        for (let i = 1; i <= FRAME_COUNT; i++) {
            const img = new Image();
            img.src = `/frames/${i}.png`;
            loadedImages.push(img);
        }
        setImages(loadedImages);
    }, [isMobile]);

    useEffect(() => {
        if (images.length === 0 || typeof window === "undefined") return;

        const canvas = canvasRef.current;
        const context = canvas?.getContext("2d");
        if (!canvas || !context) return;

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const render = (frame: number, scale = 1, borderRadius = 0) => {
            const img = images[frame];
            if (!img) return;

            context.clearRect(0, 0, canvas.width, canvas.height);

            const imgWidth = canvas.width * scale;
            const imgHeight = canvas.height * scale;
            const x = (canvas.width - imgWidth) / 2;
            const y = (canvas.height - imgHeight) / 2;

            if (borderRadius > 0) {
                context.save();
                context.beginPath();
                const radius = borderRadius * Math.min(imgWidth, imgHeight) * 0.5;
                context.moveTo(x + radius, y);
                context.lineTo(x + imgWidth - radius, y);
                context.quadraticCurveTo(x + imgWidth, y, x + imgWidth, y + radius);
                context.lineTo(x + imgWidth, y + imgHeight - radius);
                context.quadraticCurveTo(x + imgWidth, y + imgHeight, x + imgWidth - radius, y + imgHeight);
                context.lineTo(x + radius, y + imgHeight);
                context.quadraticCurveTo(x, y + imgHeight, x, y + imgHeight - radius);
                context.lineTo(x, y + radius);
                context.quadraticCurveTo(x, y, x + radius, y);
                context.closePath();
                context.clip();
            }

            context.drawImage(img, x, y, imgWidth, imgHeight);

            if (borderRadius > 0) {
                context.restore();
            }
        };

        // Initial render
        render(0, 0.6, 1);

        const obj = { frame: 0, scale: 0.6, borderRadius: 1 };

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top top",
                end: `+=${FRAME_COUNT * 20}`, // Dynamic scroll length
                scrub: true,
                pin: true,
                anticipatePin: 1,
            },
        });

        tl.to(textRef.current, { opacity: 0, duration: 0.5 }, 0);

        tl.to(obj, {
            scale: 1,
            borderRadius: 0,
            duration: 1,
            onUpdate: () => render(0, obj.scale, obj.borderRadius),
        }, 0);

        tl.to(obj, {
            frame: FRAME_COUNT - 1,
            snap: "frame",
            ease: "none",
            onUpdate: () => render(obj.frame),
        });

        return () => {
            tl.scrollTrigger?.kill();
        };
    }, [images]);

    return (
        <>
            <section
                ref={containerRef}
                className="relative w-full h-[100vh] bg-black overflow-hidden"
            >
                <canvas
                    ref={canvasRef}
                    className="fixed top-0 left-0 w-full h-[100vh] z-0"
                />
                <div
                    ref={textRef}
                    className="absolute top-1/8 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-4xl font-bold z-10 text-center"
                >
                    The Magic of SAGA
                </div>
            </section>

           
        </>
    );
};

export default Exploded;

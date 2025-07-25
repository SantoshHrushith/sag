'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const imageList = [
    { class: 'item-1', src: 'https://eubiq.b-cdn.net/saga/Hero%20shot.png', animation: { y: -100 } },          // move up
    { class: 'item-2', src: 'https://eubiq.b-cdn.net/saga/Hero%20shot.png', animation: { x: 100 } },           // move right
    { class: 'item-3', src: 'https://eubiq.b-cdn.net/saga/Hero%20shot.png', animation: { scale: 1.3 } },       // scale up
    { class: 'item-4', src: 'https://eubiq.b-cdn.net/saga/Hero%20shot.png', animation: { scale: 0.8 } },       // scale down
    { class: 'item-5', src: 'https://eubiq.b-cdn.net/saga/Hero%20shot.png', animation: { rotate: 10 } },       // slight rotate
    { class: 'item-6', src: 'https://eubiq.b-cdn.net/saga/Hero%20shot.png', animation: { x: -100 } },          // move left
    { class: 'item-7', src: 'https://eubiq.b-cdn.net/saga/Hero%20shot.png', animation: { y: 100 } },           // move down
    { class: 'item-8', src: 'https://eubiq.b-cdn.net/saga/Hero%20shot.png', animation: { rotate: -10 } },      // rotate opposite
];

export default function Collage() {
    const containerRef = useRef(null);
    const imageRefs = useRef<(HTMLImageElement | null)[]>([]);
    useEffect(() => {
        imageRefs.current.forEach((img) => {
            if (!img) return;
            gsap.to(img, {
                scale:1.5,
                ease: "none",
                scrollTrigger: {
                    trigger: img,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true,
                },
            });
        });
    }, []);
    // const image1Ref = useRef<HTMLImageElement | null>(null);
    // const image2Ref = useRef<HTMLImageElement | null>(null);
    // const image3Ref = useRef<HTMLImageElement | null>(null);
    // const image4Ref = useRef<HTMLImageElement | null>(null);
    // const image5Ref = useRef<HTMLImageElement | null>(null);
    // const image6Ref = useRef<HTMLImageElement | null>(null);
    // const image7Ref = useRef<HTMLImageElement | null>(null);
    // const image8Ref = useRef<HTMLImageElement | null>(null);
    // const imageRefs = [
    //     image1Ref,
    //     image2Ref,
    //     image3Ref,
    //     image4Ref,
    //     image5Ref,
    //     image6Ref,
    //     image7Ref,
    //     image8Ref,
    // ];
    // useEffect(() => {
    //     imageRefs.forEach((ref, idx) => {
    //         const animation = imageList[idx].animation;

    //         if (ref.current && animation) {
    //             gsap.to(ref.current, {
    //                 ...animation,
    //                 ease: "none",
    //                 scrollTrigger: {
    //                     trigger: ref.current,
    //                     start: "top bottom",
    //                     end: "bottom top",
    //                     scrub: true,
    //                 },
    //             });
    //         }
    //     });
    // }, []);



    return (
        <div className="bg-black py-20">
            <div
                ref={containerRef}
                className="collage-container mx-auto max-w-[1000px] grid grid-cols-4 grid-rows-5 gap-2 p-5"
                style={{ height: '600px' }}
            >
                {imageList.map((item, idx) => (
                    <div
                        key={idx}
                        className={`collage-item ${item.class} relative overflow-hidden bg-gray-200 flex items-center justify-center`}
                    >
                        <img 
                        // ref={imageRefs[idx]} 
                         ref={(el) => { if (el) { imageRefs.current[idx] = el } }}

                        src={item.src} alt={`Image ${idx + 1}`} className="w-[200%] h-[200%] object-cover" />
                    </div>
                ))}
            </div>
        </div>
    );
}
// useEffect(() => {
//     const trigger = ScrollTrigger.create({
//         trigger: footerRef.current,
//         start: "top bottom", // Footer's top reaches bottom of viewport
//         end: "bottom bottom",
//         scrub: true,
//         markers: true, // set to true to debug
//     });

//     return () => trigger.kill();
// }, []);
//     useEffect(() => {
//     const img = imageRef.current;

//     const container = footerRef.current;

//     gsap.to(img, {
//         y: -200,
//         ease: "none",
//         scrollTrigger: {
//             trigger: container,
//             start: "top bottom",   // starts when footer enters viewport
//             end: "bottom bottom",     // ends when footer leaves
//             scrub: true,
//             // markers:true,
//         }
//     });
// }, []);
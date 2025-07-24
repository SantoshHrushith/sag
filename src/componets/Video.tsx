"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const videos = [
    { id: 1, src: "/videos/v1.mp4" },
    { id: 2, src: "/videos/v2.mp4" },
    { id: 3, src: "/videos/v3.mp4" },
];

export default function VideoScroller() {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
    const sectionRefs = useRef<HTMLDivElement[]>([]);
    const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

    useEffect(() => {
        if (!containerRef.current) return;

        let isScrollDisabled = false;

        const disableScroll = () => {
            document.body.style.overflow = "hidden";
            isScrollDisabled = true;
        };

        const enableScroll = () => {
            document.body.style.overflow = "";
            isScrollDisabled = false;
        };

        const handleScroll = (e: Event) => {
            if (isScrollDisabled) {
                e.preventDefault();
                e.stopPropagation();
                return false;
            }
        };

        window.addEventListener("wheel", handleScroll, { passive: false });

        // For each video section
        videos.forEach((_, index) => {
            const section = sectionRefs.current[index];
            const video = videoRefs.current[index];

            if (!section || !video) return;

            // Set initial video style
            gsap.set(video, {
                width: "80vw",
                scale: 0.8,
                filter: "blur(10px)",
                opacity: 0,
                borderRadius: "20px",
            });

            // Set fade-in when section enters
            ScrollTrigger.create({
                trigger: section,
                start: "top center",
                end: "bottom center",
                scrub: true,
                onEnter: () => {
                    if (currentVideoIndex !== index) return;

                    const tl = gsap.timeline({
                        onStart: () => {
                            disableScroll();
                            gsap.to(video, {
                                opacity: 1,
                                duration: 0.5,
                            });

                            gsap.to(video, {
                                width: "100vw",
                                scale: 1,
                                filter: "blur(0px)",
                                borderRadius: 0,
                                duration: 1,
                                ease: "power2.out",
                            });
                        },
                        onComplete: () => {
                            video.play();
                        },
                    });

                    video.onended = () => {
                        enableScroll();
                        setCurrentVideoIndex((prev) => prev + 1);
                    };
                },
                once: true,
            });
        });

        return () => {
            window.removeEventListener("wheel", handleScroll);
            ScrollTrigger.getAll().forEach((st) => st.kill());
        };
    }, [currentVideoIndex]);

    return (
        <div ref={containerRef}>
            {videos.map((video, index) => (
                <section
                    key={video.id}
                    ref={(el) => {
                        if (el) sectionRefs.current[index] = el as HTMLDivElement;
                    }}
                    style={{
                        height: "100vh",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        position: "relative",
                        overflow: "hidden",
                    }}
                >
                    <video
                        ref={(el) => {
                            if (el) videoRefs.current[index] = el;
                        }}
                        src={video.src}
                        muted
                        playsInline
                        preload="auto"
                        style={{
                            transition: "all 0.8s ease",
                            position: "absolute",
                            pointerEvents: currentVideoIndex === index ? "auto" : "none",
                        }}
                    />
                </section>
            ))}
        </div>
    );
}

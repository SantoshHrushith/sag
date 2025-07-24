"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const FRAME_COUNT = 180;
const getCurrentFrame = (index: number) =>
  `/frames/${index}.png`; // e.g., frame1.png to frame179.png

export default function Exploded() {
  const containerRef = useRef<HTMLElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const contextRef = useRef<CanvasRenderingContext2D | null>(null);
  const images = useRef<HTMLImageElement[]>([]);
  const imageSequence = useRef({ frame: 0 });

  const initialImageRef = useRef<HTMLImageElement | null>(null);

  const render = () => {
    const context = contextRef.current;
    const canvas = canvasRef.current;
    const img = images.current[imageSequence.current.frame];

    if (!context || !canvas || !img) return;

    const scale = Math.min(canvas.width / img.width, canvas.height / img.height);
    const x = (canvas.width - img.width * scale) / 2;
    const y = (canvas.height - img.height * scale) / 2;

    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(img, x, y, img.width * scale, img.height * scale);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Setup canvas
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    contextRef.current = canvas.getContext("2d");

    // Preload images
    for (let i = 1; i < FRAME_COUNT; i++) {
      const img = new Image();
      img.src = getCurrentFrame(i);
      images.current.push(img);
    }

    images.current[0].onload = render;

    // Intro animation: transition image to canvas
    const introTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "20% top",
        scrub: true,
      },
    });

    introTimeline
      .to(initialImageRef.current, {
        scale: 2,
        opacity: 0,
        ease: "power2.out",
      }, 0)
      .fromTo(canvasRef.current, {
        opacity: 0,
      }, {
        opacity: 1,
        ease: "power2.out",
      }, 0);

    // Frame animation
    gsap.to(imageSequence.current, {
      frame: FRAME_COUNT - 1,
      snap: "frame",
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "20% top",
        end: `+=${FRAME_COUNT * 20}`,
        scrub: true,
        pin: true,
        anticipatePin: 1,
      },
      onUpdate: render,
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full h-[400vh] bg-black overflow-hidden"
    >
      {/* Canvas */}
      <canvas
        ref={canvasRef}
        className="fixed top-0 left-0 w-full h-full opacity-0"
      />

      {/* Initial Image */}
      <img
        ref={initialImageRef}
        src={getCurrentFrame(1)}
        alt="Intro Frame"
        className="fixed top-1/2 left-1/2 w-1/2 h-1/2 object-contain z-20 -translate-x-1/2 -translate-y-1/2"
      />

      {/* Overlay Text */}
      <div className="absolute top-12 left-1/2 transform -translate-x-1/2 text-white text-4xl font-bold z-30">
        The Magic of SAGA
      </div>

      {/* Spacer to give ScrollTrigger enough height */}
      <div id="footer-anchor" style={{ height: `${FRAME_COUNT * 0.4}vh` }} />
    </section>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const FRAME_COUNT = 180;

export default function Magic() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [currentFrameIndex, setCurrentFrameIndex] = useState(0);

  // ✅ Preload all 180 frames
  const preloadImages = () => {
    const loaded: HTMLImageElement[] = [];
    for (let i = 1; i <= FRAME_COUNT; i++) {
      const img = new Image();
      img.src = `/frames/${i}.png`;
      loaded.push(img);
    }
    setImages(loaded);
  };

  // ⏫ Preload once
  useEffect(() => {
    preloadImages();
  }, []);

  // 🎞️ Draw selected frame on canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");

    const render = (index: number) => {
      const img = images[index];
      if (!canvas || !context || !img) return;
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.drawImage(img, 0, 0, canvas.width, canvas.height);
    };

    if (images.length === FRAME_COUNT) {
      render(currentFrameIndex);
    }
  }, [currentFrameIndex, images]);

  // 🚀 GSAP timeline: scale image, fade it out, play canvas animation
  useEffect(() => {
    if (!containerRef.current || !imageRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: `+=300%`,
          scrub: true,
          pin: true,
        },
      });

      // Step 3: Animate PNG frame sequence
      tl.to(
        {},
        {
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "+=200%",
            scrub: true,
            onUpdate: (self) => {
              const frame = Math.floor(self.progress * (FRAME_COUNT - 1));
              setCurrentFrameIndex(frame);
            },
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [images]);

  return (
    <section
      ref={containerRef}
      className="relative w-full h-screen bg-black overflow-hidden"
    >
      <h1 className="absolute top-10 w-full text-center text-white text-3xl font-semibold z-10">
        SAGA's INSIDE MAGIC
      </h1>

      <div className="flex items-center justify-center w-full h-full relative">
        <canvas
          ref={canvasRef}
          width={1920}
          height={1080}
          className="absolute top-0 left-0 w-full h-full"
        />
      </div>
    </section>
  );
}

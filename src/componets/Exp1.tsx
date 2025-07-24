// "use client";

// import { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { useMediaQuery } from "@/hooks/useMediaQuery"; // You must define this hook

// gsap.registerPlugin(ScrollTrigger);

// const FRAME_COUNT = 180;

// const getCurrentFrame = (index: number, isMobile: boolean) =>
//   isMobile
//     ? `/frames/${index}.png`
//     : `/frames/${index}.png`;

// export default function Exploded() {
//   const containerRef = useRef<HTMLElement | null>(null);
//   const canvasRef = useRef<HTMLCanvasElement | null>(null);
//   const contextRef = useRef<CanvasRenderingContext2D | null>(null);
//   const images = useRef<HTMLImageElement[]>([]);
//   const imageSequence = useRef({ frame: 0 });

//   const isMobile = useMediaQuery("(max-width: 768px)");

//   // Render one frame
//   const render = () => {
//     const context = contextRef.current;
//     const canvas = canvasRef.current;
//     const img = images.current[imageSequence.current.frame];
//     if (!context || !canvas || !img) return;

//     const scale = Math.min(
//       canvas.width / img.width,
//       canvas.height / img.height
//     );
//     const x = (canvas.width - img.width * scale) / 2;
//     const y = (canvas.height - img.height * scale) / 2;

//     context.clearRect(0, 0, canvas.width, canvas.height);
//     context.drawImage(img, x, y, img.width * scale, img.height * scale);
//   };

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;

//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight;
//     contextRef.current = canvas.getContext("2d");

//     // Load images
//     for (let i = 0; i < FRAME_COUNT; i++) {
//       const img = new Image();
//       img.src = getCurrentFrame(i + 1, isMobile);
//       images.current.push(img);
//     }

//     images.current[0].onload = render;

//     const tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: containerRef.current,
//         start: "top top",
//         end: `+=${FRAME_COUNT * 20}`,
//         scrub: true,
//         pin: true,
//         anticipatePin: 1,
//       },
//     });

//     // Step 1: Scale the initial image (simulate zoom-in)
//     tl.fromTo(
//       canvas,
//       {
//         scale: 0.5,
//         transformOrigin: "center center",
//       },
//       {
//         scale: 1,
//         ease: "power1.inOut",
//         duration: 0.3,
//       }
//     );

//     // Step 2: Start scroll-controlled animation
//     tl.to(imageSequence.current, {
//       frame: FRAME_COUNT - 1,
//       snap: "frame",
//       ease: "none",
//       duration: 0.7,
//       onUpdate: render,
//     });

//     return () => {
//       ScrollTrigger.getAll().forEach((t) => t.kill());
//     };
//   }, [isMobile]);

//   return (
//     <section
//       ref={containerRef}
//       className="relative h-screen w-full bg-black overflow-hidden"
//     >
//       <canvas
//         ref={canvasRef}
//         className="fixed top-0 left-0 w-full h-full"
//       />

//       <div className="absolute top-10 left-1/2 -translate-x-1/2 text-white text-3xl font-bold z-10">
//         SAGA's Inside Magic
//       </div>

//       {/* Padding for scroll */}
//       <div style={{ height: `${FRAME_COUNT * 0.5}vh` }} />
//     </section>
//   );
// }

"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const FRAME_COUNT = 180;

export default function Exploded() {
  const containerRef = useRef<HTMLElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const contextRef = useRef<CanvasRenderingContext2D | null>(null);
  const images = useRef<HTMLImageElement[]>([]);
  const imageSequence = useRef({ frame: 0 });

  const getFrameSrc = (index: number) => {
    const isMobile = window.innerWidth <= 768;
    return isMobile
      ? `/frames/${index}.png`
      : `/frames/${index}.png`;
  };

  // Draw current frame on canvas
  const render = () => {
    const context = contextRef.current;
    const canvas = canvasRef.current;
    const img = images.current[imageSequence.current.frame];
    if (!context || !canvas || !img) return;

    const scale = Math.min(
      canvas.width / img.width,
      canvas.height / img.height
    );
    const x = (canvas.width - img.width * scale) / 2;
    const y = (canvas.height - img.height * scale) / 2;

    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(img, x, y, img.width * scale, img.height * scale);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    contextRef.current = canvas.getContext("2d");

    // Load all frames
    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new Image();
      img.src = getFrameSrc(i + 1);
      images.current.push(img);
    }

    images.current[0].onload = render;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: `+=${FRAME_COUNT * 20}`,
        scrub: true,
        pin: true,
        anticipatePin: 1,
      },
    });

    // 1. Zoom-in effect
    tl.fromTo(
      canvas,
      {
        scale: 0.5,
        transformOrigin: "center center",
      },
      {
        scale: 1,
        ease: "power1.inOut",
        duration: 0.3,
      }
    );

    // 2. Frame-by-frame animation
    tl.to(imageSequence.current, {
      frame: FRAME_COUNT - 1,
      snap: "frame",
      ease: "none",
      duration: 0.7,
      onUpdate: render,
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative h-screen w-full bg-black overflow-hidden"
    >
      <canvas
        ref={canvasRef}
        className="fixed top-0 left-0 w-full h-full"
      />

      <div className="absolute top-10 left-1/2 -translate-x-1/2 text-white text-3xl font-bold z-10">
        SAGA's Inside Magic
      </div>

      {/* Padding for scroll */}
      <div style={{ height: `${FRAME_COUNT * 0.5}vh` }} />
    </section>
  );
}

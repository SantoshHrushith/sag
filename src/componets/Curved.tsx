"use client";
import Image from "next/image";

const images = [
  "https://eubiq.b-cdn.net/saga/shot%2006.png",
  "https://eubiq.b-cdn.net/saga/shot%2006.png",
  "https://eubiq.b-cdn.net/saga/shot%2006.png",
  "https://eubiq.b-cdn.net/saga/shot%2006.png",
  "https://eubiq.b-cdn.net/saga/shot%2006.png",
  "https://eubiq.b-cdn.net/saga/shot%2006.png",
  "https://eubiq.b-cdn.net/saga/shot%2006.png",

];

export default function LinearCurvedGallery() {
  const totalImages = images.length;
  const maxAngle = 40; // degrees at the ends

  // Precompute scaled widths and positions before returning JSX
  const baseWidth = 200;
  const gap = 32;
  const scales: number[] = [];
  for (let i = 0; i < totalImages; i++) {
    const t = i / (totalImages - 1);
    scales.push(1 + Math.abs(t - 0.5) * 0.3);
  }
  const cumWidths: number[] = [0];
  for (let i = 1; i < totalImages; i++) {
    cumWidths[i] = cumWidths[i - 1] + baseWidth * scales[i - 1] + gap;
  }
  const totalGalleryWidth = cumWidths[totalImages - 1] + baseWidth * scales[totalImages - 1];
  // Calculate the center of the middle image (its center point)
  const middleIndex = Math.floor(totalImages / 2);
  const middleCenter = cumWidths[middleIndex] + (baseWidth * scales[middleIndex]) / 2;

  return (
    <div className="w-full h-screen flex flex-col justify-start items-center relative overflow-hidden mt-20 mb-10 ">
      {/* Top Text */}
      <div className="w-full flex flex-col items-center pt-5 mb-16 z-20">
        <h2 className="text-4xl md:text-5xl font-normal text-center text-[#14213D] leading-tight">
          <span className="font-[600]">SAGA</span> is a <span className="text-green font-[600]">Global</span> <i>Innovation brand</i> redefining<br />
          how <span className="font-semibold">Power</span> <i>integrates</i> into <span className="text-green font-[600]">modern life</span>
        </h2>
      </div>
      {/* Green Oval Gradient */}
      <div className="absolute left-1/2 top-[50%] -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none"
        style={{
          width: '1100px',
          height: '340px',
          background: 'radial-gradient(ellipse 60% 40% at 50% 50%, #4ADE80 0%, #A7F3D0 60%, transparent 100%)',
          filter: 'blur(32px)',
          opacity: 0.7,
        }}
      />
      {/* Curved Images */}
      <div
        className="relative z-20"
        style={{
          perspective: "1500px",
          height: "300px",
          width: "100%",
        }}
      >
        {images.map((src, i) => {
          const t = i / (totalImages - 1);
          const angle = (0.5-t) * 2 * maxAngle;
          const scale = scales[i];
          const imageCenter = cumWidths[i] + (baseWidth * scale) / 2;
          const leftOffset = imageCenter - middleCenter;

          return (
            <div
              key={i}
              style={{
                position: "absolute",
                left: `42vw`,
                top: `50%`,
                transform: `translateX(${leftOffset}px) translateY(-50%) rotateY(${angle}deg) scale(${scale})`,
                transformOrigin: "center center",
              }}
              className="transition-transform duration-300"
            >
              <div className="overflow-hidden shadow-lg rounded-xl">
                <Image
                  src={src}
                  alt={`Image ${i + 1}`}
                  width={200}
                  height={150}
                  className="object-cover w-[200px] h-[300px]"
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
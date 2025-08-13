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
    <div className="w-full h-[400px] flex justify-center items-center bg-gray-100 overflow-hidden">
      <div
        className="relative"
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
                left: `42%`,
                top: `50%`,
                transform: `translateX(${leftOffset}px) translateY(-50%) rotateY(${angle}deg) scale(${scale})`,
                transformOrigin: "center center",
              }}
              className="transition-transform duration-300"
            >
              <div className="overflow-hidden shadow-lg">
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
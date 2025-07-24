"use client";
import { IoClose } from "react-icons/io5";
import Image from "next/image";

export default function Modal({ isOpen, onClose, image, topText, bottomText }: {
  isOpen: boolean;
  onClose: () => void;
  image: string;
  topText: string;
  bottomText: string;
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 z-[999] flex flex-col items-center justify-start">
      <button
        className="absolute top-4 right-4 text-white text-3xl z-50"
        onClick={onClose}
      >
        <IoClose />
      </button>

      <div className="w-full h-[60vh] relative">
        <Image
          src={image}
          alt="Expanded"
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
        <div className="absolute top-4 left-4 text-white bg-black/40 backdrop-blur-sm p-2 rounded">
          {topText}
        </div>
      </div>

      <div className="text-white mt-6 px-6 text-center text-lg">
        {bottomText}
      </div>
    </div>
  );
}

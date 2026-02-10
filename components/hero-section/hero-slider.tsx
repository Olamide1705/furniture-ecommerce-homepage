"use client";

import Image from "next/image";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

type Slide = {
  id: number;
  src: string;
  alt: string;
};

interface Props {
  slides: Slide[];
  current: number;
  onNext: () => void;
  onPrev: () => void;
}
export default function HeroSlider({ slides, current, onNext, onPrev }: Props) {
  return (
    <div className="relative h-full w-full overflow-hidden">
      {/* Slides */}
      <div
        className="flex h-full transition-transform duration-500 ease-in-out"
        style={{
          transform: `translateX(-${current * 100}%)`,
        }}
      >
        {slides.map((slide) => (
          <div key={slide.id} className="relative h-full w-full shrink-0">
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              className="object-cover"
              priority={slide.id === 1}
            />
          </div>
        ))}
      </div>

      {/* Mobile Controls */}
      <div className="flex md:hidden absolute bottom-0 right-0 z-20">
        <button
          onClick={onPrev}
          className="bg-black p-5 text-white hover:bg-gray-800"
        >
          <SlArrowLeft size={24} />
        </button>

        <button
          onClick={onNext}
          className="bg-black p-5 text-white hover:bg-gray-800"
        >
          <SlArrowRight size={24} />
        </button>
      </div>
    </div>
  );
}

"use client";

import Image from "next/image";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { useRef } from "react";

type Slide = {
  id: number;
  mobileSrc: string;
  desktopSrc: string;
  alt: string;
};

interface Props {
  slides: Slide[];
  current: number;
  direction: string;
  onNext: () => void;
  onPrev: () => void;
}
export default function HeroSlider({
  slides,
  current,
  direction,
  onNext,
  onPrev,
}: Props) {
  const slide = slides[current];

  const startX = useRef<number | null>(null);

  /* Swipe Handling */
  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    startX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!startX.current) return;

    const diff = startX.current - e.changedTouches[0].clientX;

    if (diff > 50) onNext(); // swipe left
    if (diff < -50) onPrev(); // swipe right

    startX.current = null;
  };

  return (
    <div
      className="relative w-full h-full overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Image */}
      <div
        key={current}
        className={`absolute inset-0 transition-transform duration-500 ease-in-out ${
          direction === "right"
            ? "animate-slide-in-right"
            : "animate-slide-in-left"
        }`}
      >
        {/* Mobile */}
        <Image
          src={slide.mobileSrc}
          alt={slide.alt}
          fill
          className="object-cover lg:hidden"
          priority
        />

        {/* Desktop */}
        <Image
          src={slide.desktopSrc}
          alt={slide.alt}
          fill
          className="object-cover hidden lg:block"
          priority
        />
      </div>

      {/* Mobile Controls */}
      <div className="flex lg:hidden absolute bottom-0 right-0 z-20">
        <button
          onClick={onPrev}
          aria-label="Previous slide"
          className="bg-black p-5 text-white hover:bg-gray-800"
        >
          <SlArrowLeft size={24} />
        </button>

        <button
          onClick={onNext}
          aria-label="Next slide"
          className="bg-black p-5 text-white hover:bg-gray-800"
        >
          <SlArrowRight size={24} />
        </button>
      </div>
    </div>
  );
}

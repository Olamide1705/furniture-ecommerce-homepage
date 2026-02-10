"use client";

import Header from "../header/header";
import HeroContent from "./hero-content";
import HeroSlider from "./hero-slider";
import { useState, useEffect } from "react";

const slides = [
  {
    id: 1,
    mobileSrc: "/mobile-image-hero-1.jpg",
    desktopSrc: "/desktop-image-hero-1.jpg",
    alt: "Modern furniture",
    heading: "Discover innovative ways to decorate",
    paragraph:
      "We provide unmatched quality, comfort and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
  },
  {
    id: 2,
    mobileSrc: "/mobile-image-hero-2.jpg",
    desktopSrc: "/desktop-image-hero-2.jpg",
    alt: "Modern living room",
    heading: "We are available all across the globe",
    paragraph:
      "With stores all over the world,it's easy for you to find the furniture for your home or place of business. Locally, we're in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
  },
  {
    id: 3,
    mobileSrc: "/mobile-image-hero-3.jpg",
    desktopSrc: "/desktop-image-hero-3.jpg",
    alt: "Minimal bedroom furniture",
    heading: "Manufactured with the best materials",
    paragraph:
      "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("right");

  const next = () => {
    setDirection("right");
    setCurrent((c) => (c + 1) % slides.length);
  };

  const prev = () => {
    setDirection("left");
    setCurrent((c) => (c === 0 ? slides.length - 1 : c - 1));
  };

  /* Keyboard Navigation */
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <section className="relative grid grid-cols-1 lg:grid-cols-[60%_40%]">
      {/* left */}
      <div className="relative h-[50vh] sm:h-[65vh] lg:h-auto">
        <Header />
        <HeroSlider
          slides={slides}
          current={current}
          direction={direction}
          onNext={next}
          onPrev={prev}
        />
      </div>

      {/* Right */}
      <HeroContent slide={slides[current]} onNext={next} onPrev={prev} />
    </section>
  );
}

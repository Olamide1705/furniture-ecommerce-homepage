"use client";

import Header from "../header/header";
import HeroContent from "./hero-content";
import HeroSlider from "./hero-slider";

export default function Hero() {
  return (
    <section className="relative grid lg:grid-cols-[55%_45%]">
      <div className="relative">
        <Header />
        <HeroSlider />
      </div>
      <HeroContent />
    </section>
  );
}

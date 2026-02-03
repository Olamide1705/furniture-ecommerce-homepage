import Image from "next/image";

export default function HeroSlider() {
  return (
    <div className="relative w-full h-full">
      <Image
        src="/desktop-image-hero-1.jpg"
        alt="Modern furniture"
        fill
        className="object-cover h-full"
        priority
      />
    </div>
  );
}

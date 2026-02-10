import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-[28.5%_43%_28.5%]">
      {/* Left Image */}
      <div className="relative w-full h-64 lg:h-full">
        <Image
          src="/image-about-dark.jpg"
          alt="Dark furniture"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Text */}
      <div className="flex flex-col justify-center px-8 py-12 lg:px-10">
        <h3 className="text-2xl lg:text-3xl font-bold mb-4 tracking-wide">
          About Our Furniture
        </h3>
        <p className="text-primary text-sm lg:text-base leading-relaxed">
          Our multifunctional collection blends design and function to suit your
          individual taste. Make each room unique, or pick a cohesive theme that
          best express your interests and what inspires you. Find the furniture
          pieces you need, from traditional to contemporary styles or anything
          in between. Product specialists are available to help you create your
          dream space.
        </p>
      </div>

      {/* Right Image */}
      <div className="relative w-full h-64 lg:h-full">
        <Image
          src="/image-about-light.jpg"
          alt="Logo"
          fill
          className="object-cover"
          priority
        />
      </div>
    </section>
  );
}

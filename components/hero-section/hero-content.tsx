import Link from "next/link";

export default function HeroContent() {
  return (
    <div className="flex flex-col justify-center px-8 py-16 max-w-xl">
      <h1 className="text-3xl lg:text-4xl font-bold text-black mb-4">
        Discover innovate ways to decorate
      </h1>
      <p className="text-primary mb-6">
        We provide unmatched quality, comfort and style for property owners
        across the country. Our experts combine form and function in bringing
        your vision to life. Create a room in your own style with our collection
        and make your property a reflection of you and what you love.
      </p>
      <Link
        href="#"
        className="flex items-center gap-4 tracking-[0.4em] text-black hover:text-primary"
      >
        SHOP NOW →
      </Link>
    </div>
  );
}

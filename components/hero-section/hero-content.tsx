import Link from "next/link";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

interface Slide {
  heading: string;
  paragraph: string;
}

interface Props {
  slide: Slide;
  onNext: () => void;
  onPrev: () => void;
}

export default function HeroContent({ slide, onNext, onPrev }: Props) {
  return (
    <div className="relative flex flex-col justify-center px-8 lg:px-10 xl:px-12 py-16 w-full">
      <div className="pb-20">
        <h1 className="text-3xl lg:text-5xl font-bold text-black mb-4">
          {slide.heading}
        </h1>
        <p className="text-primary mb-6 font-medium text-sm lg:text-base">
          {slide.paragraph}
        </p>
        <Link
          href="#"
          className="flex items-center gap-4 tracking-[0.4em] text-black hover:text-primary lg:text-xl font-medium"
        >
          SHOP NOW <MdOutlineArrowRightAlt size={30} />
        </Link>
      </div>

      {/* Desktop Controls */}
      <div className="hidden md:flex absolute bottom-0 left-0 z-20">
        <button
          onClick={onPrev}
          aria-label="Previous slide"
          className="bg-black p-6 text-white hover:bg-gray-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
        >
          <SlArrowLeft size={30} />
        </button>

        <button
          onClick={onNext}
          aria-label="Next slide"
          className="bg-black p-6 text-white hover:bg-gray-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
        >
          <SlArrowRight size={30} />
        </button>
      </div>
    </div>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Header() {
  const [sidebarOpen, setSideBarOpen] = useState(false);
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
    <header className="absolute top-0 left-0 z-50 w-full">
      {/* Desktop */}
      <div className="hidden md:flex items-center justify-between p-12 max-w-lg">
        <Link href="/">
          <Image
            src="/logo.svg"
            alt="Logo"
            width={30}
            height={30}
            className="w-12 h-3"
          />
        </Link>

        {/* Nav Links */}
        <div className="flex items-center space-x-8 text-white text-[18px] font-medium">
          <Link href="/">Home</Link>
          <Link href="/shop">Shop</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>

      {/* Mobile */}
      <div className="md:hidden absolute top-0 left-0 w-full z-50">
        <div className="relative flex items-center px-4 py-4 h-20">
          {/* Hamburger */}
          <button
            onClick={() => setSideBarOpen(true)}
            className="text-white text-2xl"
          >
            ☰
          </button>

          {/* Center Logo */}
          <Link href="/" className="absolute left-1/2 -translate-x-1/2">
            <Image
              src="/logo.svg"
              alt="Logo"
              width={24}
              height={32}
              className="w-15 h-auto"
            />
          </Link>
        </div>

        {sidebarOpen && (
          <div
            className="md:hidden fixed inset-0 z-50"
            onClick={() => setSideBarOpen(false)}
          />
        )}

        <aside
          className={`md:hidden h-20 fixed top-0 z-60 bg-white w-full transform transition-transform duration-300 ${sidebarOpen ? "translate-x-0" : "translate-x-full"}`}
        >
          <div className="px-4 py-4 flex items-center justify-between pt-6">
            <button
              className="text-2xl text-primary"
              onClick={() => setSideBarOpen(false)}
            >
              ✕
            </button>

            {/* Nav Links */}
            <div className="flex gap-5 text-black text-base">
              <Link href="/" onClick={() => setSideBarOpen(false)}>
                home
              </Link>
              <Link href="/shop" onClick={() => setSideBarOpen(false)}>
                shop
              </Link>
              <Link href="/about" onClick={() => setSideBarOpen(false)}>
                about
              </Link>
              <Link href="/contact" onClick={() => setSideBarOpen(false)}>
                contact
              </Link>
            </div>
          </div>
        </aside>
      </div>
    </header>
  );
}

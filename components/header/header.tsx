"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [sidebarOpen, setSideBarOpen] = useState(false);
  return (
    <header className="absolute top-0 left-0 z-50 w-full">
      {/* Desktop */}
      <div className="hidden md:flex items-center justify-between p-12 max-w-lg">
        <Link href="/">
          <Image
            src="/logo.svg"
            alt="Logo"
            width={24}
            height={24}
            className="h-4 w-12"
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
      <div className="md:hidden flex">
        <div>
          <button
            onClick={() => setSideBarOpen(true)}
            className="text-white text-2xl px-2"
          >
            ☰
          </button>

          <Link href="/">
            <Image src="/logo.svg" alt="Logo" width={24} height={32} />
          </Link>
        </div>

        {sidebarOpen && (
          <div
            className="md:hidden fixed inset-0 z-50"
            onClick={() => setSideBarOpen(false)}
          />
        )}

        <aside
          className={`md:hidden fixed top-0 z-50 bg-white w-full transform transition-transform duration-300 ${sidebarOpen ? "translate-x-0" : "translate-x-full"}`}
        >
          <button
            className="text-2xl text-primary"
            onClick={() => setSideBarOpen(false)}
          >
            ✕
          </button>

          {/* Nav Links */}
          <div className="flex text-black text-base">
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
        </aside>
      </div>
    </header>
  );
}

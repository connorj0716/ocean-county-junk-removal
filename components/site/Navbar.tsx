"use client";

import Link from "next/link";
import { Phone, Truck } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 bg-[#030a1f] border-b border-blue-900">
      <div className="container-tight flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5">
          <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-brand-500 to-brand-800 grid place-items-center text-white">
            <Truck className="h-5 w-5" />
          </div>
          <div className="leading-tight">
            <div className="text-base font-black text-white uppercase tracking-wide">Ocean County</div>
            <div className="text-base font-black text-[#f47820] uppercase tracking-wide">Junk Removal</div>
          </div>
        </Link>
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-white">
          <a href="#services" className="hover:text-orange-400">Services</a>
          <a href="#areas" className="hover:text-orange-400">Service Area</a>
          <a href="#why" className="hover:text-orange-400">Why Us</a>
          <a href="#contact" className="hover:text-orange-400">Contact</a>
        </nav>
        <div className="flex items-center gap-4">
          <a
            href="tel:+16093845223" onClick={() => window.gtag?.("event", "call_click", { event_category: "navbar" })}
            className="hidden sm:inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-orange-400"
          >
            <Phone className="h-4 w-4" />
            (609) 384-5223
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-lg bg-accent-500 hover:bg-accent-600 text-white font-semibold px-4 py-2 text-sm shadow-sm"
          >
            Free Quote
          </a>
        </div>
      </div>
    </header>
  );
}

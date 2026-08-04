"use client";

import Link from "next/link";
import { Truck } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-900">
      <div className="container-tight py-14 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-brand-500 to-brand-800 grid place-items-center text-white">
              <Truck className="h-5 w-5" />
            </div>
            <div className="leading-tight">
              <div className="text-sm font-bold text-white">Ocean County</div>
              <div className="text-xs">Junk Removal</div>
            </div>
          </Link>
          <p className="mt-4 text-sm max-w-md">
            Licensed, insured junk removal serving all of Ocean County, NJ including Toms River, Manahawkin, Brick, Lacey, Stafford, Barnegat, Long Beach Island and beyond. Same-day pickup. Upfront pricing.
          </p>
        </div>

        <div>
          <div className="text-sm font-semibold text-white">Services</div>
          <ul className="mt-3 space-y-2 text-sm">
            <li><a href="#services" className="hover:text-white">Junk Removal</a></li>
            <li><a href="#services" className="hover:text-white">Furniture Removal</a></li>
            <li><a href="#services" className="hover:text-white">Appliance Removal</a></li>
            <li><a href="#services" className="hover:text-white">Estate Cleanouts</a></li>
            <li><a href="#services" className="hover:text-white">Construction Debris</a></li>
          </ul>
        </div>

        <div>
          <div className="text-sm font-semibold text-white">Contact</div>
          <ul className="mt-3 space-y-2 text-sm">
            <li><a href="tel:+16097032115" className="hover:text-white" onClick={() => window.gtag?.("event", "call_click", { event_category: "footer" })}>(609) 703-2115</a></li>
            <li>
              <a href="mailto:info@oceancountyjunkremoval.com" className="hover:text-white">
                info@oceancountyjunkremoval.com
              </a>
            </li>
            <li>Toms River, NJ</li>
            <li>Mon to Sat: 7am to 7pm</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-900 py-5 text-xs text-slate-500">
        <div className="container-tight flex flex-col sm:flex-row items-center justify-between gap-2">
          <div>&copy; {new Date().getFullYear()} Ocean County Junk Removal. Serving Ocean County, NJ.</div>
          <div className="text-slate-500">Powered by <a href="https://cjresults.com" target="_blank" rel="noopener noreferrer" className="text-brand-400 hover:text-brand-300">CJResults</a></div>
          <div>
            <Link href="/login" className="hover:text-slate-300">Staff Login</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

"use client";

import Link from "next/link";
import { Truck } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-900">
      <div className="container-tight py-14 grid md:grid-cols-5 gap-10">
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
            Licensed, insured junk removal serving all of Ocean County, NJ including Toms River, Manahawkin, Brick, Lacey, Stafford, Barnegat, Long Beach Island and beyond. Same day pickup. Upfront pricing.
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
          <div className="text-sm font-semibold text-white">Service Areas</div>
          <ul className="mt-3 space-y-2 text-sm columns-2 gap-6">
            <li><Link href="/toms-river" className="hover:text-white">Toms River</Link></li>
            <li><Link href="/barnegat" className="hover:text-white">Barnegat</Link></li>
            <li><Link href="/ocean-acres" className="hover:text-white">Ocean Acres</Link></li>
            <li><Link href="/little-egg-harbor" className="hover:text-white">Little Egg Harbor</Link></li>
            <li><Link href="/long-beach-island" className="hover:text-white">Long Beach Island</Link></li>
            <li><Link href="/manahawkin" className="hover:text-white">Manahawkin</Link></li>
            <li><Link href="/stafford-township" className="hover:text-white">Stafford Township</Link></li>
            <li><Link href="/waretown" className="hover:text-white">Waretown</Link></li>
            <li><Link href="/west-creek" className="hover:text-white">West Creek</Link></li>
            <li><Link href="/lacey-township" className="hover:text-white">Lacey / Forked River</Link></li>
            <li><Link href="/brick" className="hover:text-white">Brick</Link></li>
            <li><Link href="/jackson" className="hover:text-white">Jackson</Link></li>
            <li><Link href="/lakewood" className="hover:text-white">Lakewood</Link></li>
            <li><Link href="/point-pleasant" className="hover:text-white">Point Pleasant</Link></li>
            <li><Link href="/seaside-heights" className="hover:text-white">Seaside Heights</Link></li>
            <li><Link href="/seaside-park" className="hover:text-white">Seaside Park</Link></li>
            <li><Link href="/lavallette" className="hover:text-white">Lavallette</Link></li>
            <li><Link href="/beachwood" className="hover:text-white">Beachwood</Link></li>
            <li><Link href="/pine-beach" className="hover:text-white">Pine Beach</Link></li>
            <li><Link href="/island-heights" className="hover:text-white">Island Heights</Link></li>
            <li><Link href="/ocean-gate" className="hover:text-white">Ocean Gate</Link></li>
            <li><Link href="/south-toms-river" className="hover:text-white">South Toms River</Link></li>
          </ul>
        </div>

        <div>
          <div className="text-sm font-semibold text-white">Contact</div>
          <ul className="mt-3 space-y-2 text-sm">
            <li><a href="tel:+16093845223" className="hover:text-white" onClick={() => window.gtag?.("event", "call_click", { event_category: "footer" })}>(609) 384-5223</a></li>
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
        <div className="container-tight relative flex items-center justify-between">
          <div>&copy; {new Date().getFullYear()} Ocean County Junk Removal. Serving Ocean County, NJ.</div>
          <div className="absolute left-[55%] -translate-x-1/2 text-slate-500">Powered by <a href="https://cjresults.com" target="_blank" rel="noopener noreferrer" className="text-[#4d9ef5] hover:text-[#74b4f8]">CJResults</a></div>
          <div>
            <Link href="/login" className="hover:text-slate-300">Staff Login</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

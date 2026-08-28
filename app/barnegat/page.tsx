import type { Metadata } from "next";
import Navbar from "@/components/site/Navbar";
import Contact from "@/components/site/Contact";
import Footer from "@/components/site/Footer";
import FadeIn from "@/components/FadeIn";
import {
  Sofa,
  Refrigerator,
  Home,
  HardHat,
  Trash2,
  TreePine,
  MapPin,
  Phone,
} from "lucide-react";

export const metadata: Metadata = {
  title: { absolute: "Junk Removal Barnegat NJ | Ocean County Junk Removal" },
  description:
    "Same-day junk removal in Barnegat, NJ. Furniture, appliances, garage and estate cleanouts hauled away by a local Ocean County crew. Upfront pricing, fully insured. Call (609) 384-5223.",
  openGraph: {
    title: "Junk Removal Barnegat NJ | Ocean County Junk Removal",
    description:
      "Same-day junk removal in Barnegat, NJ. Furniture, appliances, garage and estate cleanouts. Upfront pricing, fully insured.",
    url: "https://www.oceancountyjunkremoval.com/barnegat",
    siteName: "Ocean County Junk Removal",
    locale: "en_US",
    type: "website",
  },
};

const SERVICES = [
  {
    icon: Trash2,
    title: "Residential Junk Removal",
    desc: "Single items or a full truckload, hauled straight out of your Barnegat home. No hidden fees.",
  },
  {
    icon: Sofa,
    title: "Furniture Removal",
    desc: "Couches, sectionals, mattresses and dining sets removed from any room, upstairs or down.",
  },
  {
    icon: Refrigerator,
    title: "Appliance Removal",
    desc: "Refrigerators, washers, dryers and water heaters disconnected, hauled and disposed of responsibly.",
  },
  {
    icon: Home,
    title: "Estate & Home Cleanouts",
    desc: "Full house, garage, attic and basement cleanouts for estates, downsizing and pre-sale clearouts.",
  },
  {
    icon: HardHat,
    title: "Construction Debris Removal",
    desc: "Drywall, shingles, flooring and lumber cleared from Barnegat job sites on a contractor's schedule.",
  },
  {
    icon: TreePine,
    title: "Yard Waste & Storm Debris",
    desc: "Branches, brush and fencing cleaned up fast after every Jersey Shore nor'easter.",
  },
];

const JSON_LD = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://oceancountyjunkremoval.com/#business",
  name: "Ocean County Junk Removal",
  description:
    "Junk removal in Barnegat, NJ. Same-day furniture removal, appliance removal, estate cleanouts and construction debris hauling from a locally owned Ocean County crew.",
  url: "https://oceancountyjunkremoval.com/barnegat",
  telephone: "+1-609-384-5223",
  image: "https://oceancountyjunkremoval.com/og.jpg",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Manahawkin",
    addressRegion: "NJ",
    postalCode: "08050",
    addressCountry: "US",
  },
  areaServed: {
    "@type": "City",
    name: "Barnegat",
    addressRegion: "NJ",
    addressCountry: "US",
  },
};

export default function BarnegatPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
      />
      <Navbar />

      <section className="relative overflow-hidden bg-[#0f2580] text-white">
        <div
          aria-hidden
          className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_20%_20%,rgba(0,162,240,0.25),transparent_45%),radial-gradient(circle_at_85%_30%,rgba(255,122,26,0.18),transparent_50%)]"
        />
        <div className="container-tight relative py-20 lg:py-28 max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/15 px-3 py-1 text-xs font-medium mb-8">
            <MapPin className="h-3.5 w-3.5 text-brand-300" />
            Barnegat, NJ 08005
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-[1.1] drop-shadow-[2px_3px_6px_rgba(0,0,0,0.95)]">
            Junk Removal in{" "}
            <span className="text-[#f47820] drop-shadow-[3px_4px_6px_rgba(0,0,0,0.9)]">
              Barnegat, NJ
            </span>
          </h1>
          <p className="mt-6 text-lg text-white/80">
            We are a locally owned junk removal company working Barnegat every
            week, from the developments off West Bay Avenue to the older streets
            down by the bay. Because our trucks are already running Route 9 and
            Route 72 daily, most Barnegat pickups get scheduled same day or next
            morning. We handle the whole job ourselves &mdash; our crew carries
            everything out, sweeps up behind it, and you never lift a thing.
            Pricing is by volume and quoted upfront, so the number you hear on
            the phone is the number you pay.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-lg bg-[#d4600f] hover:bg-[#b54e0a] text-white font-semibold px-6 py-3.5 text-base shadow-lg transition-transform hover:scale-105"
            >
              Get a Free Quote
            </a>
            <a
              href="tel:+16093845223"
              className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/5 hover:bg-white/10 text-white font-semibold px-6 py-3.5 text-base"
            >
              <Phone className="h-4 w-4" />
              (609) 384-5223
            </a>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 lg:py-28 bg-slate-50">
        <div className="container-tight">
          <div className="max-w-3xl">
            <FadeIn>
              <div className="text-sm font-semibold text-brand-600 uppercase tracking-wide">
                What we haul in Barnegat
              </div>
            </FadeIn>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
              Every Job, One Crew
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              One call, one crew, one upfront price &mdash; anywhere in Barnegat
              and Barnegat Light.
            </p>
          </div>

          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {SERVICES.map((s) => {
              const Icon = s.icon;
              return (
                <article
                  key={s.title}
                  className="bg-white rounded-2xl border border-slate-200 p-6 hover:border-brand-300 hover:shadow-md transition-all"
                >
                  <div className="h-11 w-11 rounded-xl bg-brand-50 text-brand-600 grid place-items-center">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-slate-900">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                    {s.desc}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <Contact />
      <Footer />
    </>
  );
}

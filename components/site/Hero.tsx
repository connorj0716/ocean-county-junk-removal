"use client";

import { Phone, Star, ShieldCheck, Clock, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#1535b3] text-white">
      <div
        aria-hidden
        className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_20%_20%,rgba(0,162,240,0.25),transparent_45%),radial-gradient(circle_at_85%_30%,rgba(255,122,26,0.18),transparent_50%)]"
      />
      <div className="container-tight relative py-20 lg:py-28 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/15 px-3 py-1 text-xs font-medium mb-6">
            <MapPin className="h-3.5 w-3.5 text-brand-300" />
            Serving all of Ocean County, NJ
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.05]">
            Ocean County&apos;s <span className="text-[#f47820]">fastest</span> junk removal service.
          </h1>
          <p className="mt-6 text-lg text-slate-300 max-w-xl">
            Same day junk hauling across{" "}
            <strong className="text-white font-semibold">
              Toms River, Manahawkin, Brick, Lacey, Stafford, Barnegat, and LBI
            </strong>
            . Upfront pricing. Fully insured crews. No hidden fees. We load it, we haul it, we dispose of it. You relax.
          </p>

          <motion.div
            className="mt-8 flex flex-wrap items-center gap-3"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-lg bg-accent-500 hover:bg-accent-600 text-white font-semibold px-6 py-3.5 text-base shadow-lg shadow-accent-600/30 transition-transform hover:scale-105"
            >
              Get a Free Quote
            </a>
            <a
              href="tel:+16093845223"
              onClick={() => window.gtag?.("event", "call_click", { event_category: "hero" })}
              className="inline-flex items-center gap-2 rounded-lg bg-white/10 hover:bg-white/15 border border-white/15 text-white font-semibold px-6 py-3.5 text-base backdrop-blur transition-transform hover:scale-105"
            >
              <Phone className="h-4 w-4" />
              (609) 384-5223
            </a>
          </motion.div>

          <motion.dl
            className="mt-10 grid grid-cols-3 gap-5 max-w-lg"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <div>
              <dt className="flex items-center gap-1.5 text-xs text-slate-400">
                <Star className="h-3.5 w-3.5 text-amber-400" /> 5.0 Google
              </dt>
              <dd className="mt-1 text-sm font-semibold">200+ 5-star reviews</dd>
            </div>
            <div>
              <dt className="flex items-center gap-1.5 text-xs text-slate-400">
                <ShieldCheck className="h-3.5 w-3.5 text-brand-300" /> Licensed
              </dt>
              <dd className="mt-1 text-sm font-semibold">Fully insured NJ</dd>
            </div>
            <div>
              <dt className="flex items-center gap-1.5 text-xs text-slate-400">
                <Clock className="h-3.5 w-3.5 text-emerald-300" /> Same day
              </dt>
              <dd className="mt-1 text-sm font-semibold">Pickup available</dd>
            </div>
          </motion.dl>
        </motion.div>

        <motion.div
          className="relative"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <img
            src="/truck.jpg"
            alt="Ocean County Junk Removal truck"
            className="rounded-2xl shadow-2xl w-full object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}

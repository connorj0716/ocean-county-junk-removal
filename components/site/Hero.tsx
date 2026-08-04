"use client";

import { Phone, Star, ShieldCheck, Clock, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
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
            Ocean County's <span className="text-brand-400">fastest</span> junk removal service.
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
              href="tel:+16097032115"
              onClick={() => window.gtag?.("event", "call_click", { event_category: "hero" })}
            >
              <Phone className="h-4 w-4" />
              (609) 703-2115
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
          <div className="rounded-2xl bg-white/5 backdrop-blur border border-white/10 p-6 shadow-2xl">
            <div className="text-xs uppercase tracking-wide text-brand-300 font-semibold">
              This week
            </div>
            <div className="mt-1 text-2xl font-bold">$50 off any cleanout</div>
            <p className="mt-1 text-sm text-slate-300">
              Book by Sunday and mention the site for $50 off any whole house, garage, or basement cleanout in Ocean County.
            </p>
            <motion.div
              className="mt-5 grid grid-cols-2 gap-3"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.07, delayChildren: 0.4 } },
              }}
            >
              {[
                "Toms River, NJ",
                "Manahawkin, NJ",
                "Brick Twp, NJ",
                "Lacey Twp, NJ",
                "Stafford Twp, NJ",
                "Barnegat, NJ",
                "LBI / Beach Haven",
                "Point Pleasant",
              ].map((t) => (
                <motion.div
                  key={t}
                  variants={{
                    hidden: { opacity: 0, y: 12 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } },
                  }}
                  className="flex items-center gap-2 text-sm bg-white/5 rounded-lg border border-white/10 px-3 py-2"
                >
                  <MapPin className="h-3.5 w-3.5 text-brand-300" />
                  {t}
                </motion.div>
              ))}
            </motion.div>
            <div className="mt-5 text-xs text-slate-400">
              &amp; every town in Ocean County from Lakewood to Little Egg Harbor.
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

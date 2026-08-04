import { Phone, MessageCircle } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 lg:py-28 bg-gradient-to-b from-white to-slate-50">
      <div className="container-tight text-center max-w-2xl mx-auto">
        <div className="text-sm font-semibold text-brand-600 uppercase tracking-wide">
          Get a free quote
        </div>
        <h2 className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
          Ready to clear it out?
        </h2>
        <p className="mt-4 text-lg text-slate-600">
          Call us and we will get you a price in minutes. If you would rather text, send us a few photos of what needs to go and we will get right back to you. Most Ocean County jobs are booked within 24 hours.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          
            href="tel:+16097032115"
            onClick={() => window.gtag?.("event", "call_click", { event_category: "contact" })}
            className="inline-flex items-center justify-center gap-3 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-lg px-8 py-4 shadow-lg w-full sm:w-auto"
          >
            <Phone className="h-5 w-5" />
            Call (609) 703-2115
          </a>
          
            href="sms:+16097032115"
            onClick={() => window.gtag?.("event", "text_click", { event_category: "contact" })}
            className="inline-flex items-center justify-center gap-3 rounded-xl bg-white hover:bg-slate-50 border-2 border-slate-200 text-slate-900 font-bold text-lg px-8 py-4 shadow-sm w-full sm:w-auto"
          >
            <MessageCircle className="h-5 w-5" />
            Text Us a Photo
          </a>
        </div>
        <p className="mt-6 text-sm text-slate-500">
          Mon to Sat 7am to 7pm. Sunday by appointment. We serve all of Ocean County including Manahawkin, Toms River, Brick, LBI, and everywhere in between.
        </p>
      </div>
    </section>
  );
}

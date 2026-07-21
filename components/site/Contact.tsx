import { Phone, Mail, MapPin, Clock } from "lucide-react";
import ContactForm from "@/components/site/ContactForm";

export default function Contact() {
  return (
    <section id="contact" className="py-20 lg:py-28 bg-gradient-to-b from-white to-slate-50">
      <div className="container-tight grid lg:grid-cols-2 gap-12">
        <div>
          <div className="text-sm font-semibold text-brand-600 uppercase tracking-wide">
            Get in touch
          </div>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
            Free quotes across Ocean County, NJ
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Tell us what needs to go — a photo helps. Most quotes come back within the hour, and we can often schedule same-day pickup in Toms River, Manahawkin, Brick, Lacey, Stafford, Barnegat, and LBI.
          </p>

          <dl className="mt-8 space-y-5">
            <div className="flex items-start gap-4">
              <div className="h-10 w-10 rounded-lg bg-brand-50 text-brand-600 grid place-items-center shrink-0">
                <Phone className="h-5 w-5" />
              </div>
              <div>
                <dt className="text-sm text-slate-500">Call or text</dt>
                <dd className="text-lg font-semibold text-slate-900">
                  <a href="tel:+16097032115" className="hover:text-brand-600" onClick={() => window.gtag?.("event", "call_click", { event_category: "contact" })}>
                    (609) 703-2115
                  </a>
                </dd>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="h-10 w-10 rounded-lg bg-brand-50 text-brand-600 grid place-items-center shrink-0">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <dt className="text-sm text-slate-500">Email</dt>
                <dd className="text-lg font-semibold text-slate-900">
                  <a
                    href="mailto:info@oceancountyjunkremoval.com"
                    className="hover:text-brand-600"
                  >
                    info@oceancountyjunkremoval.com
                  </a>
                </dd>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="h-10 w-10 rounded-lg bg-brand-50 text-brand-600 grid place-items-center shrink-0">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <dt className="text-sm text-slate-500">Based in</dt>
                <dd className="text-lg font-semibold text-slate-900">
                  Manahawkin, Ocean County, NJ
                </dd>
                <dd className="text-sm text-slate-500">
                  Serving all of Ocean County — mainland &amp; LBI.
                </dd>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="h-10 w-10 rounded-lg bg-brand-50 text-brand-600 grid place-items-center shrink-0">
                <Clock className="h-5 w-5" />
              </div>
              <div>
                <dt className="text-sm text-slate-500">Hours</dt>
                <dd className="text-lg font-semibold text-slate-900">
                  Mon–Sat: 7am – 7pm
                </dd>
                <dd className="text-sm text-slate-500">
                  Sunday: By appointment
                </dd>
              </div>
            </div>
          </dl>
        </div>

        <div>
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8">
            <h3 className="text-xl font-semibold text-slate-900">
              Request a free quote
            </h3>
            <p className="mt-1 text-sm text-slate-500">
              We'll text you back within the hour during business hours.
            </p>
            <div className="mt-5">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

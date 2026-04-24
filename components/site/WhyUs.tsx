import { DollarSign, Clock, ShieldCheck, Leaf } from "lucide-react";

const POINTS = [
  {
    icon: DollarSign,
    title: "Upfront, honest pricing",
    desc: "Free on-site estimates in Ocean County. We price by volume, not the clock — no surprises when you get the bill.",
  },
  {
    icon: Clock,
    title: "Same-day & next-day pickup",
    desc: "Most Toms River, Brick and Manahawkin jobs are booked within 24 hours. Call before noon and we'll often come today.",
  },
  {
    icon: ShieldCheck,
    title: "Licensed & fully insured NJ",
    desc: "Local, insured crews that treat your home and your neighbors right. Condo-board and HOA approved across LBI.",
  },
  {
    icon: Leaf,
    title: "We donate & recycle first",
    desc: "Up to 60% of what we remove gets donated or recycled through Ocean County partners before anything hits a landfill.",
  },
];

export default function WhyUs() {
  return (
    <section id="why" className="py-20 lg:py-24">
      <div className="container-tight grid lg:grid-cols-5 gap-12 items-start">
        <div className="lg:col-span-2">
          <div className="text-sm font-semibold text-brand-600 uppercase tracking-wide">
            Why Ocean County chooses us
          </div>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
            Local pros. Real prices. Zero hassle.
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Ocean County Junk Removal is owner-operated and based right here on the Jersey Shore. We're not a franchise. When you call, you get a local team that knows the best back roads in Barnegat and the tightest alleyways in Beach Haven.
          </p>
        </div>

        <ul className="lg:col-span-3 grid sm:grid-cols-2 gap-5">
          {POINTS.map((p) => {
            const Icon = p.icon;
            return (
              <li
                key={p.title}
                className="bg-white rounded-xl border border-slate-200 p-5"
              >
                <div className="h-10 w-10 rounded-lg bg-brand-50 text-brand-600 grid place-items-center">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-3 font-semibold text-slate-900">{p.title}</h3>
                <p className="mt-1.5 text-sm text-slate-600">{p.desc}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

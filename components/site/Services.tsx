import FadeIn from "@/components/FadeIn";
import {
  Sofa,
  Refrigerator,
  Home,
  HardHat,
  Trash2,
  TreePine,
} from "lucide-react";

const SERVICES = [
  {
    icon: Trash2,
    title: "Residential Junk Removal",
    desc: "The fastest junk removal in Ocean County, NJ. From a single item to a truckload, our crews haul away unwanted items from homes in Toms River, Brick, Lacey, and every town on the Jersey Shore.",
  },
  {
    icon: Sofa,
    title: "Furniture Removal",
    desc: "Old couch, sectional, mattress, or dining set taking up space? We pick up and remove furniture across Ocean County including condos and high rises on LBI, Beach Haven and Surf City.",
  },
  {
    icon: Refrigerator,
    title: "Appliance Removal",
    desc: "Refrigerators, washers, dryers, dishwashers, freezers and water heaters. We disconnect, haul, and dispose of old appliances responsibly in Manahawkin, Stafford and Barnegat.",
  },
  {
    icon: Home,
    title: "Estate & Home Cleanouts",
    desc: "Full home, garage, attic and basement cleanouts in Ocean County. Ideal for estates, downsizing, rental turnovers and pre sale clearouts in Toms River, Jackson, and Point Pleasant.",
  },
  {
    icon: HardHat,
    title: "Construction Debris Removal",
    desc: "Roofing shingles, drywall, flooring, lumber and renovation debris. Contractor friendly pickups across Ocean County with flexible scheduling on job sites in LBI, Forked River and Waretown.",
  },
  {
    icon: TreePine,
    title: "Yard Waste & Storm Debris",
    desc: "Branches, brush, fencing and storm cleanup. After every Jersey Shore nor'easter we help homeowners in Lavallette, Seaside, and Ortley Beach clear their yards fast.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 lg:py-28 bg-slate-50">
      <div className="container-tight">
        <div className="max-w-3xl">
          <FadeIn>
          <div className="text-sm font-semibold text-brand-600 uppercase tracking-wide">
            What we haul
          </div>
          </FadeIn>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
            All Across Ocean County
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Whether you're clearing out a beach house on Long Beach Island or gutting a garage in Toms River, All Across Ocean County gives you one call, one crew, and one upfront price.
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
  );
}

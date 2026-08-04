import FadeIn from "@/components/FadeIn";
import { MapPin } from "lucide-react";

const TOWNS = [
  "Toms River",
  "Manahawkin",
  "Brick Township",
  "Lacey Township",
  "Stafford Township",
  "Barnegat",
  "Beach Haven",
  "Surf City",
  "Ship Bottom",
  "Long Beach Township (LBI)",
  "Harvey Cedars",
  "Barnegat Light",
  "Point Pleasant",
  "Point Pleasant Beach",
  "Jackson",
  "Lakewood",
  "Berkeley Township",
  "Forked River",
  "Waretown",
  "Tuckerton",
  "Little Egg Harbor",
  "Bay Head",
  "Mantoloking",
  "Lavallette",
  "Seaside Heights",
  "Seaside Park",
  "Ortley Beach",
  "Pine Beach",
  "South Toms River",
  "Beachwood",
  "Island Heights",
  "Ocean Gate",
];

export default function ServiceArea() {
  return (
    <section id="areas" className="py-20 lg:py-24 bg-slate-900 text-white">
      <div className="container-tight">
        <div className="max-w-3xl">
          <div className="text-sm font-semibold text-brand-300 uppercase tracking-wide">
            Service Area
          </div>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight">
            We haul junk from every town in Ocean County, NJ
          </h2>
          <p className="mt-4 text-lg text-slate-300">
            From the mainland to the barrier islands. If you're in Ocean County, we're on our way. Here are a few of the towns we serve most:
          </p>
        </div>

        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2.5">
          {TOWNS.map((t) => (
            <div
              key={t}
              className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2.5 text-sm"
            >
              <MapPin className="h-3.5 w-3.5 text-brand-300 shrink-0" />
              <span>{t}, NJ</span>
            </div>
          ))}
        </div>

        <p className="mt-8 text-sm text-slate-400 max-w-3xl">
          Don't see your town? We also serve Beachwood, Pine Beach, South Toms River, Island Heights, Ocean Gate and the entire Jersey Shore. If it's in Ocean County, call us and we will be there.
        </p>
      </div>
    </section>
  );
}

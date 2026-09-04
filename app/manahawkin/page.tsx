import type { Metadata } from "next";
import LocationPage, { localBusinessSchema } from "@/components/site/LocationPage";

const DESCRIPTION =
  "Junk removal in Manahawkin, NJ. Same-day furniture, appliance and estate cleanouts near Manahawkin Lake, Beach Haven West and the Route 72 corridor. Manahawkin's upfront-priced haulers. Call (609) 384-5223.";

export const metadata: Metadata = {
  title: {
    absolute:
      "Manahawkin Junk Removal | Fast, Affordable | Ocean County Junk Removal",
  },
  description: DESCRIPTION,
  openGraph: {
    title: "Manahawkin Junk Removal | Fast, Affordable",
    description: DESCRIPTION,
    url: "https://www.oceancountyjunkremoval.com/manahawkin",
    siteName: "Ocean County Junk Removal",
    locale: "en_US",
    type: "website",
  },
};

export default function ManahawkinPage() {
  return (
    <LocationPage
      town="Manahawkin"
      badge="Manahawkin, NJ 08050"
      intro="Manahawkin is home base for us, so junk removal here is usually a same-day conversation. We work the whole stretch of Route 72 from the Route 9 light down to the causeway, plus the lagoon streets of Beach Haven West where boat lifts, docks and waterlogged garage clutter come with the territory. The older homes around Manahawkin Lake and Bay Avenue give us plenty of tight basements and narrow side yards, and our crew is used to both. You get a firm price before anything moves, and we sweep up behind ourselves when the truck is loaded."
      servicesHeading="Every Job, One Crew"
      servicesLede="One call, one crew, one upfront price anywhere in Manahawkin and Beach Haven West."
      localNote="Because we stage our trucks in Manahawkin, we can add a stop the same afternoon when a closing gets moved up or a tenant leaves a unit full. We do steady work for the realtors around the Stafford Township municipal complex and for contractors framing new builds off Hilliard Boulevard. Waterfront homeowners on the Beach Haven West lagoons also call us after high-water events to clear soaked drywall, carpet and ruined appliances before mold sets in."
      jsonLd={localBusinessSchema({
        town: "Manahawkin",
        slug: "manahawkin",
        description:
          "Junk removal in Manahawkin, NJ. Same-day furniture removal, appliance removal, estate cleanouts and construction debris hauling near Manahawkin Lake, Beach Haven West and Route 72.",
      })}
    />
  );
}

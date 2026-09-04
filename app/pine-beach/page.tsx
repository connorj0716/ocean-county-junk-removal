import type { Metadata } from "next";
import LocationPage, { localBusinessSchema } from "@/components/site/LocationPage";

const DESCRIPTION =
  "Junk removal in Pine Beach, NJ. Same-day pickups along Riverside Drive and the streets near Admiral Farragut Academy. Pine Beach furniture, appliance and estate cleanouts, upfront pricing. Call (609) 384-5223.";

export const metadata: Metadata = {
  title: {
    absolute:
      "Pine Beach Junk Removal | Fast, Affordable | Ocean County Junk Removal",
  },
  description: DESCRIPTION,
  openGraph: {
    title: "Pine Beach Junk Removal | Fast, Affordable",
    description: DESCRIPTION,
    url: "https://www.oceancountyjunkremoval.com/pine-beach",
    siteName: "Ocean County Junk Removal",
    locale: "en_US",
    type: "website",
  },
};

export default function PineBeachPage() {
  return (
    <LocationPage
      town="Pine Beach"
      badge="Pine Beach, NJ 08741"
      intro="Pine Beach is one of the smallest boroughs we serve and one of the prettiest, and we handle junk removal on its shaded streets without tearing up a single lawn. We work the riverfront homes along Riverside Drive, the blocks surrounding Admiral Farragut Academy, and the quiet interior streets where mature trees make maneuvering a truck a skill of its own. Most Pine Beach homes are long-owned, so attic, basement and garage cleanouts are the norm here rather than quick single-item pulls. Everything is quoted upfront and carried out by our crew."
      servicesHeading="Every Job, One Crew"
      servicesLede="One call, one crew, one upfront price anywhere in Pine Beach."
      localNote="Estate work is our most common Pine Beach job. Families settling a longtime home on or near the river need the whole place emptied before a listing goes up, and we can do it in a day with usable furniture routed to donation. Waterfront owners also call us for old docks, dinghies and boat gear that has sat behind the garage since the last time it floated."
      jsonLd={localBusinessSchema({
        town: "Pine Beach",
        slug: "pine-beach",
        description:
          "Junk removal in Pine Beach, NJ. Same-day furniture removal, appliance removal, estate and attic cleanouts and dock debris hauling along Riverside Drive and near Admiral Farragut Academy.",
      })}
    />
  );
}

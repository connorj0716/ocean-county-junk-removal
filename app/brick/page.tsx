import type { Metadata } from "next";
import LocationPage, { localBusinessSchema } from "@/components/site/LocationPage";

const DESCRIPTION =
  "Junk removal in Brick, NJ. Same-day pickups on Brick Boulevard, in Herbertsville and along the Metedeconk River. Brick estate cleanouts, furniture and appliance hauling with upfront pricing. Call (609) 384-5223.";

export const metadata: Metadata = {
  title: {
    absolute:
      "Brick Junk Removal | Fast, Affordable | Ocean County Junk Removal",
  },
  description: DESCRIPTION,
  openGraph: {
    title: "Brick Junk Removal | Fast, Affordable",
    description: DESCRIPTION,
    url: "https://www.oceancountyjunkremoval.com/brick",
    siteName: "Ocean County Junk Removal",
    locale: "en_US",
    type: "website",
  },
};

export default function BrickPage() {
  return (
    <LocationPage
      town="Brick"
      badge="Brick Township, NJ 08723"
      intro="Brick is one of the largest townships in Ocean County and we cover all of it, from the Route 70 and Brick Boulevard business corridor to the quieter Herbertsville streets up near the Monmouth County line. Junk removal in Brick often means waterfront work &mdash; the lagoon neighborhoods off Princeton Avenue and the homes lining the Metedeconk River near Windward Beach Park keep us hauling dock lumber, soaked carpet and storm debris. We also clear plenty of second-floor bedrooms and finished basements in the developments off Cedar Bridge Avenue. Every job is quoted by volume before we start loading."
      servicesHeading="Every Job, One Crew"
      servicesLede="One call, one crew, one upfront price anywhere in Brick Township."
      localNote="Brick has a lot of homes that have been raised or rebuilt since Sandy, and those projects generate exactly the kind of debris we handle best: old decking, siding, drywall and displaced garage contents. We run scheduled pickups for contractors working those streets. On the residential side, we do steady estate and downsizing work in the Greenbriar and Laurel Harbor sections, and we donate anything still in usable shape."
      jsonLd={localBusinessSchema({
        town: "Brick",
        slug: "brick",
        description:
          "Junk removal in Brick, NJ. Same-day furniture removal, appliance removal, estate cleanouts and construction debris hauling on Brick Boulevard, in Herbertsville and along the Metedeconk River.",
      })}
    />
  );
}

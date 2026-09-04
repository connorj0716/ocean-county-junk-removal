import type { Metadata } from "next";
import LocationPage, { localBusinessSchema } from "@/components/site/LocationPage";

const DESCRIPTION =
  "Junk removal in Stafford Township, NJ. Same-day service in Ocean Acres, Manahawkin and Beach Haven West. Stafford Township estate cleanouts and debris hauling with upfront pricing. Call (609) 384-5223.";

export const metadata: Metadata = {
  title: {
    absolute:
      "Stafford Township Junk Removal | Fast, Affordable | Ocean County Junk Removal",
  },
  description: DESCRIPTION,
  openGraph: {
    title: "Stafford Township Junk Removal | Fast, Affordable",
    description: DESCRIPTION,
    url: "https://www.oceancountyjunkremoval.com/stafford-township",
    siteName: "Ocean County Junk Removal",
    locale: "en_US",
    type: "website",
  },
};

export default function StaffordTownshipPage() {
  return (
    <LocationPage
      town="Stafford Township"
      badge="Stafford Township, NJ 08050"
      intro="Stafford Township is the biggest piece of our service map, and we are inside its borders nearly every day. Junk removal here means everything from Ocean Acres split-levels off Nautilus Drive, to the lagoon homes in Beach Haven West, to the shops and offices along the Route 72 retail corridor near the Stafford Park center. We know which of these neighborhoods have basements, which are on slab, and which streets a 20-foot truck can actually turn around on. Pricing is by volume, quoted upfront, with no fuel charges or dump fees tacked on afterward."
      servicesHeading="Every Job, One Crew"
      servicesLede="One call, one crew, one upfront price anywhere in Stafford Township."
      localNote="Commercial work is a steady part of what we do in Stafford Township. We clear out retail fixtures, office furniture and store shelving along the Route 72 corridor, and we run scheduled debris pickups for builders working the new sections west of the Garden State Parkway. On the residential side, estate cleanouts near the Manahawkin Lake neighborhoods are our most requested job, and we donate anything usable rather than sending it to the transfer station."
      jsonLd={localBusinessSchema({
        town: "Stafford Township",
        slug: "stafford-township",
        description:
          "Junk removal in Stafford Township, NJ. Same-day furniture removal, appliance removal, estate cleanouts and construction debris hauling in Ocean Acres, Manahawkin and Beach Haven West.",
      })}
    />
  );
}

import type { Metadata } from "next";
import LocationPage, { localBusinessSchema } from "@/components/site/LocationPage";

const DESCRIPTION =
  "Junk removal in Point Pleasant, NJ. Same-day pickups off Bridge Avenue, near Arnold Avenue and the Manasquan Inlet. Point Pleasant rental cleanouts and furniture hauling with upfront pricing. Call (609) 384-5223.";

export const metadata: Metadata = {
  title: {
    absolute:
      "Point Pleasant Junk Removal | Fast, Affordable | Ocean County Junk Removal",
  },
  description: DESCRIPTION,
  openGraph: {
    title: "Point Pleasant Junk Removal | Fast, Affordable",
    description: DESCRIPTION,
    url: "https://www.oceancountyjunkremoval.com/point-pleasant",
    siteName: "Ocean County Junk Removal",
    locale: "en_US",
    type: "website",
  },
};

export default function PointPleasantPage() {
  return (
    <LocationPage
      town="Point Pleasant"
      badge="Point Pleasant, NJ 08742"
      intro="Point Pleasant and Point Pleasant Beach sit at the top of our coverage map, and we handle junk removal on both sides of the Route 88 bridge. That includes the year-round neighborhoods along Beaver Dam Creek and Bridge Avenue, the rental blocks a few streets off the boardwalk and Jenkinson's, and the shops and restaurants along Arnold Avenue that clear out fixtures at the end of a season. Streets down near the Manasquan Inlet are narrow and get crowded in summer, so we schedule those pickups early in the day. You get one price for the whole job, quoted before we touch anything."
      servicesHeading="Every Job, One Crew"
      servicesLede="One call, one crew, one upfront price anywhere in Point Pleasant and Point Pleasant Beach."
      localNote="Seasonal turnover drives most of our Point Pleasant calls. Rental owners near the boardwalk have us empty units in September once the summer leases end, hauling out beaten furniture, mattresses and grills in a single trip. We also work with the marinas and restaurants along Channel Drive on end-of-season cleanouts, and we clear storm debris and flooded basement contents for the homes closest to the inlet after a heavy nor'easter."
      jsonLd={localBusinessSchema({
        town: "Point Pleasant",
        slug: "point-pleasant",
        description:
          "Junk removal in Point Pleasant, NJ. Same-day furniture removal, appliance removal, seasonal rental cleanouts and storm debris hauling near Arnold Avenue, Bridge Avenue and the Manasquan Inlet.",
      })}
    />
  );
}

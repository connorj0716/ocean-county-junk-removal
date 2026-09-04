import type { Metadata } from "next";
import LocationPage, { localBusinessSchema } from "@/components/site/LocationPage";

const DESCRIPTION =
  "Junk removal in Seaside Heights, NJ. Same-day pickups off the Boulevard, near Casino Pier and Ocean Terrace. Seaside Heights rental and bar cleanouts with upfront pricing. Call (609) 384-5223.";

export const metadata: Metadata = {
  title: {
    absolute:
      "Seaside Heights Junk Removal | Fast, Affordable | Ocean County Junk Removal",
  },
  description: DESCRIPTION,
  openGraph: {
    title: "Seaside Heights Junk Removal | Fast, Affordable",
    description: DESCRIPTION,
    url: "https://www.oceancountyjunkremoval.com/seaside-heights",
    siteName: "Ocean County Junk Removal",
    locale: "en_US",
    type: "website",
  },
};

export default function SeasideHeightsPage() {
  return (
    <LocationPage
      town="Seaside Heights"
      badge="Seaside Heights, NJ 08751"
      intro="Junk removal in Seaside Heights is all about timing, and after years on the barrier island we know exactly when to come. We work the blocks between the Boulevard and Ocean Terrace, the summer rental houses packed in behind Casino Pier, and the bars and shops along the boardwalk that gut and rebuild every off-season. Parking is nearly impossible here in July, so we schedule island pickups early morning or push them to the shoulder season when the streets are clear. The price is quoted before we start and it covers the labor, the stairs and the disposal."
      servicesHeading="Every Job, One Crew"
      servicesLede="One call, one crew, one upfront price anywhere in Seaside Heights."
      localNote="Post-season rental cleanouts are our bread and butter in Seaside Heights. A summer share house takes a beating, and we clear the wrecked couches, sagging mattresses, mini fridges and patio furniture in one visit so the place is ready for October renovations. We also handle commercial cleanouts for the boardwalk businesses along Ocean Terrace, pulling old coolers, bar fixtures, arcade cabinets and shelving."
      jsonLd={localBusinessSchema({
        town: "Seaside Heights",
        slug: "seaside-heights",
        description:
          "Junk removal in Seaside Heights, NJ. Same-day furniture removal, appliance removal, seasonal rental cleanouts and commercial hauling off the Boulevard, Ocean Terrace and near Casino Pier.",
      })}
    />
  );
}

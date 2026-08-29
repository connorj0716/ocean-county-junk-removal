import type { Metadata } from "next";
import LocationPage, { localBusinessSchema } from "@/components/site/LocationPage";

const DESCRIPTION =
  "Junk removal in Toms River, NJ. Same-day pickups downtown, off Fischer Boulevard and near the Ocean County Mall. Upfront pricing, fully insured. Call (609) 384-5223.";

export const metadata: Metadata = {
  title: {
    absolute:
      "Toms River NJ Junk Removal | Fast, Affordable | Ocean County Junk Removal",
  },
  description: DESCRIPTION,
  openGraph: {
    title: "Toms River NJ Junk Removal | Fast, Affordable",
    description: DESCRIPTION,
    url: "https://www.oceancountyjunkremoval.com/toms-river",
    siteName: "Ocean County Junk Removal",
    locale: "en_US",
    type: "website",
  },
};

export default function TomsRiverPage() {
  return (
    <LocationPage
      town="Toms River"
      badge="Toms River, NJ 08753"
      intro="If you need junk removal in Toms River, odds are we are already working nearby. Toms River is the busiest town on our board, and we cover all of it &mdash; the older homes around downtown and Washington Street, the dense neighborhoods off Fischer Boulevard, and the developments ringing the Ocean County Mall on Hooper Avenue. We run this side of the county daily, so most Toms River calls booked before noon get picked up the same afternoon. Whether it is one recliner from a second-floor condo or a full basement cleared before a closing, the crew does the lifting and the price is set before we start."
      servicesHeading="Every Job, One Crew"
      servicesLede="One call, one crew, one upfront price anywhere in Toms River."
      localNote="As Toms River&rsquo;s go-to junk removal service, we also work the barrier island side of the township &mdash; Ortley Beach, Normandy Beach and the Route 35 rentals &mdash; where summer turnover and storm debris keep us busy through the season. Contractors renovating around Silverton and North Dover use us for scheduled debris pickups so dumpster permits never become a problem."
      jsonLd={localBusinessSchema({
        town: "Toms River",
        slug: "toms-river",
        description:
          "Junk removal in Toms River, NJ. Same-day furniture removal, appliance removal, estate cleanouts and construction debris hauling downtown, on Fischer Boulevard and near the Ocean County Mall.",
      })}
    />
  );
}

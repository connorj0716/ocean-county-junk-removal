import type { Metadata } from "next";
import LocationPage, { localBusinessSchema } from "@/components/site/LocationPage";

const DESCRIPTION =
  "Junk removal on Long Beach Island, NJ. Same-day pickups in Beach Haven, Ship Bottom, Surf City, Barnegat Light and Harvey Cedars. Long Beach Island rental cleanouts, upfront pricing, fully insured. Call (609) 384-5223.";

export const metadata: Metadata = {
  title: {
    absolute:
      "Long Beach Island Junk Removal | Fast, Affordable | Ocean County Junk Removal",
  },
  description: DESCRIPTION,
  openGraph: {
    title: "Long Beach Island Junk Removal | Fast, Affordable",
    description: DESCRIPTION,
    url: "https://www.oceancountyjunkremoval.com/long-beach-island",
    siteName: "Ocean County Junk Removal",
    locale: "en_US",
    type: "website",
  },
};

export default function LongBeachIslandPage() {
  return (
    <LocationPage
      town="Long Beach Island"
      badge="Long Beach Island, NJ 08008"
      intro="Junk removal on Long Beach Island means working around a single road and a lot of narrow driveways, and we have been doing it for years. We run the length of the Boulevard from Beach Haven and Bay Village north through Ship Bottom, Surf City and Harvey Cedars to Barnegat Light and the docks at Viking Village. Because our shop sits right at the Manahawkin end of the Route 72 causeway, we can be on the Island in minutes instead of hours, which matters in July when the bridge backs up. Every price is quoted before we start, and the crew handles the stairs on those elevated pilings so you never touch a piece of it."
      servicesHeading="Every Job, One Crew"
      servicesLede="One call, one crew, one upfront price anywhere from Beach Haven to Barnegat Light."
      localNote="Rental turnover is what keeps us busiest on Long Beach Island. Owners in Beach Haven Terrace, Brant Beach and North Beach call us between tenants to clear out worn sofas, ruined mattresses and the sand-blasted deck furniture that never survives a season. We also handle post-renovation debris for the tear-downs and rebuilds going up all over the Island, and we time bulky pickups around the summer beach-badge crowds so we are not blocking your street at noon."
      jsonLd={localBusinessSchema({
        town: "Long Beach Island",
        slug: "long-beach-island",
        description:
          "Junk removal on Long Beach Island, NJ. Same-day furniture removal, appliance removal, rental cleanouts and construction debris hauling in Beach Haven, Ship Bottom, Surf City, Harvey Cedars and Barnegat Light.",
      })}
    />
  );
}

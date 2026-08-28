import type { Metadata } from "next";
import LocationPage, { localBusinessSchema } from "@/components/site/LocationPage";

const DESCRIPTION =
  "Junk removal in Barnegat, NJ. Same-day furniture, appliance and estate cleanouts from Route 9 to Barnegat Lake. Upfront pricing, fully insured. Call (609) 384-5223.";

export const metadata: Metadata = {
  title: {
    absolute:
      "Junk Removal Barnegat NJ | Fast, Affordable | Ocean County Junk Removal",
  },
  description: DESCRIPTION,
  openGraph: {
    title: "Junk Removal Barnegat NJ | Fast, Affordable",
    description: DESCRIPTION,
    url: "https://www.oceancountyjunkremoval.com/barnegat",
    siteName: "Ocean County Junk Removal",
    locale: "en_US",
    type: "website",
  },
};

export default function BarnegatPage() {
  return (
    <LocationPage
      town="Barnegat"
      badge="Barnegat, NJ 08005"
      intro="We are in Barnegat most weeks, working both sides of Route 9 &mdash; the older streets near the downtown stretch by West Bay Avenue and the newer developments spreading west toward Barnegat Lake and the Parkway exit. Our trucks are already running Route 9 daily between Manahawkin and Waretown, so a Barnegat pickup rarely waits more than a day. We price by volume and quote it upfront, so the number you hear on the phone is the number you pay. Our crew does the carrying, including the basement stairs and the tight side yards these older lots are known for."
      servicesHeading="Every Job, One Crew"
      servicesLede="One call, one crew, one upfront price anywhere in Barnegat and Barnegat Light."
      localNote="Barnegat has a lot of long-held family homes changing hands right now, and estate cleanouts are the job we run most often here &mdash; a full house emptied in a day, with anything usable donated rather than dumped. We also cover the bayfront streets, the Barnegat Lake neighborhoods, and Barnegat Light across the bridge on LBI."
      jsonLd={localBusinessSchema({
        town: "Barnegat",
        slug: "barnegat",
        description:
          "Junk removal in Barnegat, NJ. Same-day furniture removal, appliance removal, estate cleanouts and construction debris hauling from Route 9 to Barnegat Lake.",
      })}
    />
  );
}

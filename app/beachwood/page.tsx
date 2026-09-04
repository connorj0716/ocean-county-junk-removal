import type { Metadata } from "next";
import LocationPage, { localBusinessSchema } from "@/components/site/LocationPage";

const DESCRIPTION =
  "Junk removal in Beachwood, NJ. Same-day pickups on Beachwood Boulevard, in Pinewald and near Beachwood Beach. Beachwood furniture, appliance and basement cleanouts, upfront pricing. Call (609) 384-5223.";

export const metadata: Metadata = {
  title: {
    absolute:
      "Beachwood Junk Removal | Fast, Affordable | Ocean County Junk Removal",
  },
  description: DESCRIPTION,
  openGraph: {
    title: "Beachwood Junk Removal | Fast, Affordable",
    description: DESCRIPTION,
    url: "https://www.oceancountyjunkremoval.com/beachwood",
    siteName: "Ocean County Junk Removal",
    locale: "en_US",
    type: "website",
  },
};

export default function BeachwoodPage() {
  return (
    <LocationPage
      town="Beachwood"
      badge="Beachwood, NJ 08722"
      intro="Beachwood is a compact borough of mostly year-round homes, and junk removal here is quick, close and easy for us to fit in. We cover the streets off Beachwood Boulevard, the older sections toward Pinewald, and the neighborhoods running down to Beachwood Beach on the Toms River. Many of these houses are modest capes and ranches with packed crawlspaces, detached garages and no easy way to get a large item out the front door &mdash; that is exactly the sort of job our crew is built for. You hear the price first, and it does not change once we start."
      servicesHeading="Every Job, One Crew"
      servicesLede="One call, one crew, one upfront price anywhere in Beachwood."
      localNote="Single-item and half-truck pickups make up most of what we do in Beachwood &mdash; one couch, a dead washer, a hot tub that has not run in years. Because we work neighboring Toms River daily, adding a Beachwood stop is usually same-day. We also clear yard debris and old fencing for the homes down near the river after storms push water up the bank."
      jsonLd={localBusinessSchema({
        town: "Beachwood",
        slug: "beachwood",
        description:
          "Junk removal in Beachwood, NJ. Same-day furniture removal, appliance removal, garage and basement cleanouts and yard debris hauling on Beachwood Boulevard, in Pinewald and near Beachwood Beach.",
      })}
    />
  );
}

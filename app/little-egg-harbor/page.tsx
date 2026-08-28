import type { Metadata } from "next";
import LocationPage, { localBusinessSchema } from "@/components/site/LocationPage";

const DESCRIPTION =
  "Junk removal in Little Egg Harbor, NJ. Same-day pickups in Mystic Island, Parkertown and the Radio Road area. Upfront pricing, fully insured. Call (609) 384-5223.";

export const metadata: Metadata = {
  title: {
    absolute:
      "Junk Removal Little Egg Harbor NJ | Fast, Affordable | Ocean County Junk Removal",
  },
  description: DESCRIPTION,
  openGraph: {
    title: "Junk Removal Little Egg Harbor NJ | Fast, Affordable",
    description: DESCRIPTION,
    url: "https://www.oceancountyjunkremoval.com/little-egg-harbor",
    siteName: "Ocean County Junk Removal",
    locale: "en_US",
    type: "website",
  },
};

export default function LittleEggHarborPage() {
  return (
    <LocationPage
      town="Little Egg Harbor"
      badge="Little Egg Harbor, NJ 08087"
      intro="Little Egg Harbor is the southern end of our route, and we know the lagoon neighborhoods well &mdash; the streets off Radio Road, the canal lots throughout Mystic Island, and the older properties around Parkertown. A lot of these homes have crawl spaces, raised foundations and narrow driveways that make hauling awkward, which is exactly the work our crew is set up for. We come down Route 9 through Tuckerton regularly, so a Little Egg Harbor job slots into the schedule without a long-distance surcharge. Everything is quoted upfront by volume before we load a thing."
      servicesHeading="Every Job, One Crew"
      servicesLede="One call, one crew, one upfront price across Mystic Island, Parkertown and all of Little Egg Harbor."
      localNote="Storm and flood cleanup is a standing job down here &mdash; waterlogged furniture, ruined drywall and soaked carpet out of ground-level rooms after a bad tide. We also handle boat-shed clear-outs, dock lumber and the seasonal turnover at rental properties along the lagoons."
      jsonLd={localBusinessSchema({
        town: "Little Egg Harbor",
        slug: "little-egg-harbor",
        description:
          "Junk removal in Little Egg Harbor, NJ. Same-day furniture removal, appliance removal, estate cleanouts and storm debris hauling in Mystic Island, Parkertown and the Radio Road area.",
      })}
    />
  );
}

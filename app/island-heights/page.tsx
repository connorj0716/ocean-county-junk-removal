import type { Metadata } from "next";
import LocationPage, { localBusinessSchema } from "@/components/site/LocationPage";

const DESCRIPTION =
  "Junk removal in Island Heights, NJ. Same-day pickups on Central Avenue and the Victorian streets above the river boardwalk. Island Heights estate cleanouts and furniture hauling, upfront pricing. Call (609) 384-5223.";

export const metadata: Metadata = {
  title: {
    absolute:
      "Island Heights Junk Removal | Fast, Affordable | Ocean County Junk Removal",
  },
  description: DESCRIPTION,
  openGraph: {
    title: "Island Heights Junk Removal | Fast, Affordable",
    description: DESCRIPTION,
    url: "https://www.oceancountyjunkremoval.com/island-heights",
    siteName: "Ocean County Junk Removal",
    locale: "en_US",
    type: "website",
  },
};

export default function IslandHeightsPage() {
  return (
    <LocationPage
      town="Island Heights"
      badge="Island Heights, NJ 08732"
      intro="Island Heights is a borough of steep streets, old Victorians and a boardwalk along the Toms River, and junk removal here takes a careful crew. We work the homes above the waterfront near the yacht club, the blocks around Central Avenue and the Ocean County Artists' Guild, and the hillside properties where a truck cannot always park at the door. These century-old houses have narrow staircases, tight landings and full attics, so we plan the carry-out route before we lift anything. The price is agreed to upfront and nothing gets added later."
      servicesHeading="Every Job, One Crew"
      servicesLede="One call, one crew, one upfront price anywhere in Island Heights."
      localNote="Island Heights sends us more full estate cleanouts per household than almost anywhere else we work, simply because so many of these Victorians have been in the same family for generations. We empty attics, wraparound porches and detached carriage houses, sorting antiques and usable furniture aside rather than throwing everything on the truck. We also handle renovation debris for owners restoring the older homes near the boardwalk."
      jsonLd={localBusinessSchema({
        town: "Island Heights",
        slug: "island-heights",
        description:
          "Junk removal in Island Heights, NJ. Same-day furniture removal, appliance removal, estate and attic cleanouts and renovation debris hauling on Central Avenue and near the river boardwalk.",
      })}
    />
  );
}
